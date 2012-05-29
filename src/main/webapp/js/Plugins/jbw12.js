if (!ORYX.Plugins) 
    ORYX.Plugins = {};

if (!ORYX.Config)
	ORYX.Config = {};

ORYX.Plugins.JBW12 = Clazz.extend({
	construct: function(facade){
		this.facade = facade;
		// TODO SWITCH THIS TO AUTO-START!
		//this.facade.registerOnEvent(ORYX.CONFIG.EVENT_LOADED, this.startPlay.bind(this));
		this.facade.offer({
			'name': 'Monitor',
			'functionality': this.startPlay.bind(this),
			'group': 'jbw',
			'icon': ORYX.PATH + "images/control_play.png",
			'description': 'Start Monitoring',
			'index': 1,
			'minShape': 0,
			'maxShape': 0,
			'isEnabled': function(){
				profileParamName = "profile";
				profileParamName = profileParamName.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
				regexSa = "[\\?&]"+profileParamName+"=([^&#]*)";
		        regexa = new RegExp( regexSa );
		        profileParams = regexa.exec( window.location.href );
		        profileParamValue = profileParams[1]; 
				return profileParamValue == "jbpm";
			}.bind(this)
		});
	},
	startPlay: function() {
		this.doInitialOverlay();
		setInterval(this.updateCounts.bind(this), 4000);
	},
	updateCounts: function() {
		//  /statistics/process 
		Ext.Ajax.request({
            url: ORYX.PATH + 'jbw',
            method: 'POST',
            success: function(request) {
    	   		try {
    	   			var resp = (request&&request.responseText?request.responseText:"{}").evalJSON();
    	   			this.updateOverlay(resp);
    	   			//if(response.responseText && response.responseText.length > 0) {
    	   				//var alldata = response.responseText.evalJSON();
    	   				//var processdata = alldata["data"];
    	   				//this.updateOverlay(processdata);
    	   			//}
    	   		} catch(e) {
    	   			Ext.Msg.minWidth = 600;
    	   			Ext.Msg.alert('Error retrieving runtime info:\n' + e);
    	   		}
            }.bind(this),
            failure: function(){
            	Ext.Msg.minWidth = 600;
            	Ext.Msg.alert('Error retrieving runtime info.');
            },
            params: {
            	profile: ORYX.PROFILE
            }
        });
		//var url = window.location.protocol + '//' + window.location.host + '/jbossworld/statistics/process';
	},
	updateOverlay: function(data) {
		ORYX.EDITOR._canvas.getChildren().each((function(child) {
			this.updateOverlayForChild(child, data);
		}).bind(this));
	},
	doInitialOverlay: function() {
		ORYX.EDITOR._canvas.getChildren().each((function(child) {
			this.showInitialOverlayForChild(child);
		}).bind(this));
	},
	showInitialOverlayForChild: function(child) {
		if(child && (child instanceof ORYX.Core.Node || child instanceof ORYX.Core.Edge)) {
			if(((child.getStencil().groups()[0] == "Activities") && (child.properties["oryx-tasktype"] && child.properties["oryx-tasktype"] == "User")) || (child.getStencil().groups()[0] == "End Events") || (child.getStencil().groups()[0] == "Start Events")) {
				var count = "0";
				this.showOverlayOnChild(child, count);
		        var rotating = ORYX.Editor.graft("http://www.w3.org/2000/svg", null,
							 	['image', {
							 		"id": "obj-" + child.resourceId,
						            "height": "20",
						            "width": "20"
						        }]
						);
		        rotating.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', ORYX.PATH + "images/loaddata.gif");
				this.facade.raiseEvent({
		            type: ORYX.CONFIG.EVENT_OVERLAY_SHOW,
		            id: "jbwanim." + child.resourceId,
		            shapes: [child],
		            node: rotating,
		            nodePosition: "JBW2"
		        });
				//initsvgrotation(ORYX.EDITOR.getCanvas().getRootNode().ownerDocument, "obj-"+ child.resourceId);
			} else {
				child.setProperty("oryx-bordercolor", "#888888");
				child.setProperty("oryx-bgcolor", "#CCEEFF");
				child.setProperty("oryx-isselectable", "false");
				child.refresh();
			}
		}
		if(child && child.getChildren().size() > 0) {
			for (var i = 0; i < child.getChildren().size(); i++) {
				this.showInitialOverlayForChild(child.getChildren()[i]);
			}
		}
	},
	startRotation: function(child) {
		initsvgrotation(ORYX.EDITOR.getCanvas().getRootNode().ownerDocument, "obj-"+ child.resourceId);
	},
	updateOverlayForChild: function(child, data) {
		if(child && (child instanceof ORYX.Core.Node || child instanceof ORYX.Core.Edge)) {
			if(((child.getStencil().groups()[0] == "Activities") && (child.properties["oryx-tasktype"] && child.properties["oryx-tasktype"] == "User")) || (child.getStencil().groups()[0] == "End Events") || (child.getStencil().groups()[0] == "Start Events")) {
				// start nodes -> processesStarted
				// end nodes -> processesCompleted
				// else -> id
				if(child.getStencil().groups()[0] == "Start Events") {
					if(data["processesStarted"]) {
						this.showCountOverlay(child, data["processesStarted"]);
					}
				}
				
				if(child.getStencil().groups()[0] == "End Events") {
					if(data["processesCompleted"]) {
						this.showCountOverlay(child, data["processesCompleted"]);
					}
				}
				
				if(child.getStencil().groups()[0] == "Activities") {
					if(data[child.resourceId]) {
						this.showCountOverlay(child, data[child.resourceId]);
					}
				}
			} 
		}
		if(child && child.getChildren().size() > 0) {
			for (var i = 0; i < child.getChildren().size(); i++) {
				this.updateOverlayForChild(child.getChildren()[i], data);
			}
		}
	},
	showCountOverlay: function(child, count) {
		if (!(child instanceof ORYX.Core.Shape)) {
            return;
		}
		this.hideOverlayOnChild(child);
		this.showOverlayOnChild(child, count);
	},
	hideOverlayOnChild: function(child){
        this.facade.raiseEvent({
            type: ORYX.CONFIG.EVENT_OVERLAY_HIDE,
            id: "jbw." + child.resourceId
        });
    },
    showOverlayOnChild: function(child, count) {
    	var text = ORYX.Editor.graft("http://www.w3.org/2000/svg", null, ['text', {
            "style": "font-size: 18px; font-weight: bold; fill: black"
        }, count]);
        
        this.facade.raiseEvent({
            type: ORYX.CONFIG.EVENT_OVERLAY_SHOW,
            id: "jbw." + child.resourceId,
            shapes: [child],
            node: text,
            nodePosition: "JBW"
        });
    }
});