if (!ORYX.Plugins) 
    ORYX.Plugins = {};

if (!ORYX.Config)
	ORYX.Config = {};

ORYX.Plugins.JBW12 = Clazz.extend({
	construct: function(facade){
		this.facade = facade;
		this.totalStartText;
		this.totalEndText;
		
		if(ORYX.PLAYMODE == "true") {
			this.facade.registerOnEvent(ORYX.CONFIG.EVENT_LOADED, this.startPlay.bind(this));
		} else {
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
		}
	},
	startPlay: function() {
		this.doInitialOverlay();
		setInterval(this.updateCounts.bind(this), 3000);
	},
	updateCounts: function() {
		Ext.Ajax.request({
            url: ORYX.PATH + 'jbw',
            method: 'POST',
            success: function(request) {
    	   		try {
    	   			var resp = (request&&request.responseText?request.responseText:"{}").evalJSON();
    	   			this.updateOverlay(resp);
    	   		} catch(e) {
    	   			//Ext.Msg.minWidth = 600;
    	   			//Ext.Msg.alert('Error retrieving runtime info:\n' + e);
    	   			// edit - do not show the error message 
    	   		}
            }.bind(this),
            failure: function(){
            	//Ext.Msg.minWidth = 600;
            	//Ext.Msg.alert('Error retrieving runtime info.');
            	// edit - do not show the error message
            },
            params: {
            	profile: ORYX.PROFILE
            }
        });
	},
	updateOverlay: function(data) {
		this.updateOverlayForTotals(data);
		ORYX.EDITOR._canvas.getChildren().each((function(child) {
			this.updateOverlayForChild(child, data);
		}).bind(this));
	},
	doInitialOverlay: function() {
		this.showInitialTotalsOverlay();
		ORYX.EDITOR._canvas.getChildren().each((function(child) {
			this.showInitialOverlayForChild(child);
		}).bind(this));
	},
	updateOverlayForTotals: function(data) {
		if(data["processesStarted"]) {
			this.facade.raiseEvent({
	            type: ORYX.CONFIG.EVENT_OVERLAY_HIDE,
	            id: "jbw2starttotal"
	        });
			this.totalStartText.textContent = "Total Started: " + data["processesStarted"];
			this.facade.raiseEvent({
	            type: ORYX.CONFIG.EVENT_OVERLAY_SHOW,
	            id: "jbw2starttotal",
	            shapes: [this.facade.getCanvas()],
	            node: this.totalStartText,
	            nodePosition: "JBWTITLE"
	        });
		} 
		if(data["processesCompleted"]) {
			this.facade.raiseEvent({
	            type: ORYX.CONFIG.EVENT_OVERLAY_HIDE,
	            id: "jbw2endtotal"
	        });
			this.totalEndText.textContent = "Total Completed: " + data["processesCompleted"];
			this.facade.raiseEvent({
	            type: ORYX.CONFIG.EVENT_OVERLAY_SHOW,
	            id: "jbw2endtotal",
	            shapes: [this.facade.getCanvas()],
	            node: this.totalEndText,
	            nodePosition: "JBWTITLE2"
	        });
		}
	},
	showInitialTotalsOverlay: function() {
		this.totalStartText = ORYX.Editor.graft("http://www.w3.org/2000/svg", null,
                ['text', {"id" : "totalstarted", 
                	       "style": "stroke-width:1;fill:black;font-family:arial;font-weight:bold", 
                	       "font-size": 18}]
        );
		this.totalStartText.textContent = "Total Started: 0";
		
		this.totalEndText = ORYX.Editor.graft("http://www.w3.org/2000/svg", null,
                ['text', {"id" : "totalended", 
                	       "style": "stroke-width:1;fill:black;font-family:arial;font-weight:bold", 
                	       "font-size": 18}]
        );
		this.totalEndText.textContent = "Total Completed: 0";
		
		this.facade.raiseEvent({
            type: ORYX.CONFIG.EVENT_OVERLAY_SHOW,
            id: "jbw2starttotal",
            shapes: [this.facade.getCanvas()],
            node: this.totalStartText,
            nodePosition: "JBWTITLE"
        });
		
		this.facade.raiseEvent({
            type: ORYX.CONFIG.EVENT_OVERLAY_SHOW,
            id: "jbw2endtotal",
            shapes: [this.facade.getCanvas()],
            node: this.totalEndText,
            nodePosition: "JBWTITLE2"
        });
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
				if(data[child.resourceId]) {
					this.showCountOverlay(child, data[child.resourceId]);
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