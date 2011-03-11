/**
 * Copyright (c) 2010
 * Intalio, Inc
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
*/

if (!ORYX.Plugins) {
	ORYX.Plugins = {};
}  

if (!ORYX.Config) {
	ORYX.Config = {};
} 

// needed to change icons dynamically:
Ext.override(Ext.Button, {
	setIcon: function(url){
		if (this.rendered){
			var btnEl = this.getEl().child(this.buttonSelector);
			btnEl.setStyle('background-image', 'url(' +url+')');
		}
 	}
});

// needed to change tooltips dynamically
Ext.Button.override({
    setTooltip: function(qtipText) {
        var btnEl = this.getEl().child(this.buttonSelector)
        Ext.QuickTips.register({
            target: btnEl.id,
            text: qtipText
        });             
    }
});

ORYX.Plugins.UUIDRepositorySave = ORYX.Plugins.AbstractPlugin.extend({
	
    facade: undefined,
    // true to enable the "Autosave" button, disable while autosaving
    autosaveEnabled : true,
    // true to enable the "Autosave" button, disable while autosaving
    saveModal : undefined,
    // let CRM save determine whether inner canvas saving is finished
    isSaving : false,
	
    construct: function(facade){
		this.facade = facade;
		
		//capability to set autosave on or off
		if (ORYX.CONFIG.UUID_AUTOSAVE_DEFAULT === undefined) {
			ORYX.CONFIG.UUID_AUTOSAVE_DEFAULT = true;
		}
		autosaveicon = ORYX.PATH + "images/disk_multiple_disabled.png";
		autosavetip = ORYX.I18N.Save.autosaveDesc_off;

		if (ORYX.CONFIG.UUID_AUTOSAVE_DEFAULT) {
			autosaveicon = ORYX.PATH + "images/disk_multiple.png";
			autosavetip = ORYX.I18N.Save.autosaveDesc_on;
		}
					
		autosavecfg = {
			'name': ORYX.I18N.Save.autosave,
			'group': ORYX.I18N.Save.group,
			'functionality': function(context) {
			   this.setautosave(ORYX.CONFIG.UUID_AUTOSAVE_INTERVAL);
			   if (this.autosaving) {
				   context.setIcon(ORYX.PATH + "images/disk_multiple.png"); 
				   context.setTooltip(ORYX.I18N.Save.autosaveDesc_on);
			   } else {
				   context.setIcon(ORYX.PATH + "images/disk_multiple_disabled.png");
				   context.setTooltip(ORYX.I18N.Save.autosaveDesc_off);
			   }
			   context.hide();
			   context.show();
		    }.bind(this),
			'icon': autosaveicon,
			'description': autosavetip,
			'isEnabled': function(){ return this.autosaveEnabled }.bind(this),
			'index': 2,
			'minShape': 0,
			'maxShape': 0
		};
		this.facade.offer(autosavecfg);

		// ask before closing the window
		this.changeDifference = 0;		
		this.facade.registerOnEvent(ORYX.CONFIG.EVENT_UNDO_EXECUTE, function(){ this.changeDifference++; });
		this.facade.registerOnEvent(ORYX.CONFIG.EVENT_EXECUTE_COMMANDS, function(){this.changeDifference++; });
		this.facade.registerOnEvent(ORYX.CONFIG.EVENT_UNDO_ROLLBACK, function(){this.changeDifference--; });
		
		window.onbeforeunload = function(){
			if (this.changeDifference > 0){
				return ORYX.I18N.Save.unsavedData;
			}
		}.bind(this);
		
		// let's set autosave on.
		this.autosaveFunction = function() { if (/*savePlugin.changeDifference != 0*/true) { this._save(this, true); }}.bind(this, autosavecfg);
		this.setautosave(ORYX.CONFIG.UUID_AUTOSAVE_INTERVAL);
	},
	
	/**
	 * Switches autosave on or off.
	 * @param savePlugin the button.
	 */
	setautosave: function(interval) {
		if (this.autosaving === undefined) {
			this.autosaving = !ORYX.CONFIG.UUID_AUTOSAVE_DEFAULT;
		}
		
		value = !this.autosaving;
		if (value) {
			this.autosaveInternalId = self.setInterval(this.autosaveFunction, interval);
		} else {
			self.clearInterval(this.autosaveInternalId);
		}
		
		this.autosaving = value;
	},
	
	/**
	 * Saves the current model.
	 */
	save: function() {
		this._save(this, false);
	},
	
	/**
	 * Saves data by calling the backend.
	 * @param savePlugin
	 * @param asave determine whether the function is invoked by autosave
	 *              True: by autosave | False: by save
	 */
	_save: function(savePlugin, asave) {
		// show saving status, display a "loading" icon in "Autosave" button.
		this.showSaveStatus(asave);
		var svgDOM = DataManager.serialize(this.facade.getCanvas().getSVGRepresentation(true));
		var serializedDOM = Ext.encode(this.facade.getJSON());
		//var rdf = this.getRDFFromDOM();

		// Send the request to the server.
		new Ajax.Request(ORYX.CONFIG.UUID_URL(), {
                method: 'POST',
                asynchronous: true,
                contentType: "text/json; charset=UTF-8",
                postBody: Ext.encode({data: serializedDOM, svg : svgDOM, uuid: ORYX.UUID, //rdf: rdf, 
                    profile: ORYX.PROFILE, savetype: asave}),
				onSuccess : (function(transport) {
					// end saving, the "loading" icon return to normal
					this.hideSaveStatus(asave);
					// success msg flag, true to show success dialog
					var showSucessMsg = false;
					response = transport.responseText;
					if (response.length != 0) {
						try {
							var jsonObj = response.evalJSON();
							var errorMsgs = jsonObj.errorMsgs;
							if (errorMsgs != undefined) {
								// raise loading disable event.
								this.facade.raiseEvent({
									type : ORYX.CONFIG.EVENT_LOADING_DISABLE
								});
								this.showMessages(jsonObj);
							} else {
								showSucessMsg = true;
							}
						} catch (err) {
							ORYX.Log.error(err);
						}
					} else {
						// show saved status
						this.facade.raiseEvent({
							type : ORYX.CONFIG.EVENT_LOADING_STATUS,
							text : ORYX.I18N.Save.saved
						});
						showSucessMsg = true;
					}
					if (showSucessMsg && !asave) {
						// clear the dirty data flag after saving
						this.changeDifference = 0;
						Ext.example.msg(ORYX.I18N.Save.successTitle, ORYX.I18N.Save.successMsg);
					}
				}).bind(this),
			onFailure: (function(transport) {
				// end saving, the "loading" icon return to normal
				this.hideSaveStatus(asave);
				// raise loading disable event.
                this.facade.raiseEvent({
                    type: ORYX.CONFIG.EVENT_LOADING_DISABLE
                });
                // if it's autosaving, ignore errors
                if (asave) {
                    return;
                }
                // show the error message box while "save" erro not "autosave" error.
                // create a new Panel
                var panel = new Ext.Panel({
                    frame: true,
                    autoHeight: true,
                    html : '<table><tr><td class="x-table-layout-cell"><img src="/crm/img/alerts/error.png"/></td><td class="x-table-layout-cell">' + 
                           ORYX.I18N.Save.failedMsg + '</td></tr></table>',
                    buttons : [ {
                        text : ORYX.I18N.Save.failedOKBtn,
                        handler : function() {
                            faildWin.hide();
                        }
                        },
                        {
                        text : ORYX.I18N.Save.failedDetailsBtn,
                        handler : function() {
                            var errWin=window.open('about:blank','_blank','menubar=no,toolbar=no,location=no,scrollbars=yes,resizable=yes,top=0,left=0,width='+
                                       (screen.availWidth-10)+',height='+(screen.availHeight-100));
                            errWin.document.write('<h3>' + ORYX.I18N.Save.failedThereWas + '</h3>'+ transport.responseText);
                            errWin.document.close();				
                            faildWin.hide();
                        }
                        }
                    ]
                })
                // create save failed window
                var faildWin = new Ext.Window({
                    title : ORYX.I18N.Save.failedTitle,
                    layout : 'fit',
                    frame: true,
                    width : 334,
                    modal : true,
                    closeAction : 'close',
                    plain : false,
                    autoHeight: true,
                    items: [panel]
                });
                faildWin.show(this);
                ORYX.Log.warn("Saving failed: " + transport.responseText);
            }).bind(this),
			on403: (function(transport) {
				// end saving, the "loading" icon return to normal
				this.hideSaveStatus(asave);
				// raise loading disable event.
                this.facade.raiseEvent({
                    type: ORYX.CONFIG.EVENT_LOADING_DISABLE
                });

				Ext.Msg.alert(ORYX.I18N.Oryx.title, ORYX.I18N.Save.noRights);
				
				ORYX.log.warn("Saving failed (403): " + transport.responseText);
			}).bind(this)
		});
		return true;
	},
	
    /**
     * Shows the saving status
     * @param asave True: autosave | False: save
     */
    showSaveStatus: function(asave) {
        if (asave) {
            // disable the "Autoave" button.
            this.autosaveEnabled = false;
            //show an icon and a message in the toolbar
            autosavecfg.buttonInstance.setIcon(ORYX.PATH + "images/ajax-loader.gif");
            // raise event, make toolbar refresh.
            this.facade.raiseEvent({type : ORYX.CONFIG.EVENT_TOOLBAR_REFRESH});
        } else {
            this.saveModal = top.Ext.MessageBox.show({
                msg      : '<div style="color:#15428B"><br><b>' + ORYX.I18N.Save.savingMsg + '<b></div>',
                closable : false,
                width    : 275,
                icon     : 'ext-mb-saving'
            });
        }
        this.isSaving = true;
    },
	
	/**
	 * Shows the saving status
	 * @param asave True: autosave | False: save
	 */
    hideSaveStatus: function(asave) {
        if (asave) {
            if (this.autosaving) {
                // disable the "Autoave" button.
                this.autosaveEnabled = true;
                // show an icon and a message in the toolbar
                autosavecfg.buttonInstance.setIcon(ORYX.PATH 
                    + "images/disk_multiple.png");
            } else {
                // disable the "Autoave" button.
                this.autosaveEnabled = true;
                // show an icon and a message in the toolbar
                autosavecfg.buttonInstance.setIcon(ORYX.PATH 
                    + "images/disk_multiple_disabled.png");
            }
            // raise event, make toolbar refresh.
            this.facade.raiseEvent({
                type : ORYX.CONFIG.EVENT_TOOLBAR_REFRESH
            });
        } else {
            // remove the saving mask
            if (this.saveModal) {
                this.saveModal.hide();
            }
        }
        this.isSaving = false;
    },

	/**
	 * Shows the check error messages.
	 * 
	 * @param msg
	 *            Check error messages array.
	 */
	showMessages : function(jsonObj) {

		// load JSON data
		var reader = new Ext.data.JsonReader({
			root : "errorMsgs",
			id : "index"
		}, [ {
			name : 'index'
		}, {
			name : 'nodename'
		}, {
			name : 'msg'
		} ]);
		var store = new Ext.data.Store({
			proxy : new Ext.data.MemoryProxy(jsonObj),
			reader : reader
		});
		store.load();

		// create the window on the first click and reuse on subsequent clicks
		var win = new Ext.Window({
			title : 'Validation Error',
			layout : 'fit',
			width : 600,
			modal : true,
			closeAction : 'close',
			plain : false,

			items : new Ext.grid.GridPanel({
				store : store,
				height : 300,
				columns : [ {
					header : "<b>Index</b>",
					sortable : true,
					width : 50,
					dataIndex : 'index'
				}, {
					header : "<b>Node Name</b>",
					sortable : true,
					width : 220,
					dataIndex : 'nodename'
				}, {
					header : "<b>Error Message</b>",
					sortable : true,
					width : 300,
					dataIndex : 'msg'
				} ]
			}),

			buttons : [ {
				text : 'Close',
				handler : function() {
					win.hide();
				}
			} ]
		});
		win.show(this);
	}
});

/**
 * Method to load model or create new one
 * (moved from editor handler)
 */
window.onOryxResourcesLoaded = function() {
	var stencilset = ORYX.Utils.getParamFromUrl('stencilset') || ORYX.CONFIG.SSET;
	var editor_parameters = {
		id: ORYX.UUID,
		stencilset: {
			url: stencilset
		}
	};
	if(!(ORYX.UUID === undefined)) {
		editor_parameters.contentLoadedCallback = function(editorCallback) {
	 		//load the model from the repository from its uuid
			new Ajax.Request(ORYX.CONFIG.UUID_URL() + "&time=" +(new Date()).getTime(), {
				asynchronous: true,
				method: 'get',
				onSuccess: function(transport) {
					response = transport.responseText;

					var model = null;
					if (response.length != 0) {
						try {
							model = response.evalJSON();
							editor_parameters.model = model;
						} catch(err) {
							ORYX.Log.error(err);
						}
					}
					editorCallback(model);
				},
				onFailure: function(transport) {
					ORYX.Log.error("Could not load the model for uuid " + ORYX.UUID);
					editorCallback(null);
				}
	        });
		};
	}
	// finally open the editor:
	new ORYX.Editor(editor_parameters);
};

/***
 * a popup dialog which fades out 1 second later after shows.
 */
Ext.example = function(){
    var msgDiv;

    function createBox(t, s){
        var innerhtm;
        if (t == undefined || t == '') {
            innerhtm = ['<div class="x-box-ml"><div class="x-box-mr"><div class="x-box-mc">',
            s, '</div></div></div>'].join('');
        } else if (s == undefined || s == '') {
            innerhtm = ['<div class="x-box-ml"><div class="x-box-mr"><div class="x-box-mc"><h3>',
            t, '</h3></div></div></div>'].join('');
        } else {
            innerhtm = ['<div class="x-box-ml"><div class="x-box-mr"><div class="x-box-mc"><h3>',
            t, '</h3>', s, '</div></div></div>'].join('');
        }
        return ['<div class="msg" style="position: relative">',
            '<div class="x-box-tl"><div class="x-box-tr"><div class="x-box-tc"></div></div></div>',
            innerhtm,
            '<div class="x-box-bl"><div class="x-box-br"><div class="x-box-bc"></div></div></div>',
            '</div>'].join('');
    }
    return {
        msg : function(title, message){
            // status msg showing DIV, 
            msgDiv = Ext.get('msg_div');
            // calc the position of Msg Div.
            var scrollNode = msgDiv.parent().parent().parent().first();
            var canvasScrollLeft = scrollNode.getScroll().left;
            var canvasScrollTop = scrollNode.getScroll().top;
            var canvasWidth = scrollNode.getWidth();
            var msgPositionLeft = canvasWidth / 2 + canvasScrollLeft - 125;
            var msgPostionTop = canvasScrollTop;

            msgDiv.setStyle('top', msgPostionTop + 'px');
            msgDiv.setStyle('left', msgPositionLeft + 'px');

            var divHtml = createBox(title, message);
            var m = Ext.DomHelper.append(msgDiv, {html: divHtml}, true);
            m.slideIn('t').pause(1).ghost("t", {remove:true});
        },
        init : function(){
            var lb = Ext.get('lib-bar');
            if(lb){
                lb.show();
            }
        }
    };
}();