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
		setInterval(this.updateCounts.bind(this), 3000);
	},
	updateCounts: function() {
		Ext.Ajax.request({
            url: ORYX.PATH + 'jbw',
            method: 'POST',
            success: function(response) {
    	   		try {
    	   			if(response.responseText && response.responseText.length > 0) {
    	   				var alldata = response.responseText.evalJSON();
    	   				var processdata = alldata["data"];
    	   				this.updateOverlay(processdata);
    	   			}
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
				this.showCountOverlay(child, count);
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
	updateOverlayForChild: function(child, data) {
		if(child && (child instanceof ORYX.Core.Node || child instanceof ORYX.Core.Edge)) {
			if(((child.getStencil().groups()[0] == "Activities") && (child.properties["oryx-tasktype"] && child.properties["oryx-tasktype"] == "User")) || (child.getStencil().groups()[0] == "End Events") || (child.getStencil().groups()[0] == "Start Events")) {
				if(data[child.properties["oryx-name"]]) {
					this.hideOverlayOnChild(child);
					this.showCountOverlay(child, data[child.properties["oryx-name"]]);
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
		count = "Count: " + count;
		if (!(child instanceof ORYX.Core.Shape)) {
            return;
		}
		this.facade.raiseEvent({
            type: ORYX.CONFIG.EVENT_OVERLAY_HIDE,
            id: "jbw." + child.resourceId
        });
		
		var attr = {
				fill: "mediumslateblue"
        };
		
		var text = ORYX.Editor.graft("http://www.w3.org/2000/svg", null, ['text', {
            "style": "font-size: 14px; font-weight: bold; fill: #FF0000"
        }, count]);
        
        this.facade.raiseEvent({
            type: ORYX.CONFIG.EVENT_OVERLAY_SHOW,
            id: "jbw." + child.resourceId,
            shapes: [child],
            //attributes: attr,
            node: text,
            nodePosition: "JBW"
        });
        this.facade.raiseEvent({
            type: ORYX.CONFIG.EVENT_OVERLAY_SHOW,
            id: "jbwanim." + child.resourceId,
            shapes: [child],
            attributes: attr
            //node: text,
            //nodePosition: "JBW"
        });
        setInterval(this.hideAnim.bind(this), 500);
	},
	hideOverlayOnChild: function(child){
        this.facade.raiseEvent({
            type: ORYX.CONFIG.EVENT_OVERLAY_HIDE,
            id: "jbw." + child.resourceId
        });
    },
    hideAnim: function() {
    	ORYX.EDITOR._canvas.getChildren().each((function(child) {
    		if(child && (child instanceof ORYX.Core.Node)) {
    			if(((child.getStencil().groups()[0] == "Activities") && (child.properties["oryx-tasktype"] && child.properties["oryx-tasktype"] == "User")) || (child.getStencil().groups()[0] == "End Events") || (child.getStencil().groups()[0] == "Start Events")) {
    				this.facade.raiseEvent({
    		            type: ORYX.CONFIG.EVENT_OVERLAY_HIDE,
    		            id: "jbwanim." + child.resourceId
    		        });
    			}
    		}
		}).bind(this));
    }
});