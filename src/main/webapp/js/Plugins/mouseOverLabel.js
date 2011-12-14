/**
 * Copyright (c) 2011
 * Esteban Aliverti
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
 * 
 * 
 * This plugin displays a label when the mouse enters a stencil element 
 * in the edition canvas. The label is hidden when the mouse moves out the
 * element.  
 * The text for the label can be defined as a hardoced text, can be bound to  
 * a property of the element or you can provide a function to get it.
 * 
 * HOW to USE the MouseOverLabel PLUGIN:
 * 
 * This plugin is configured using a new "mouseOverLabelConfig" attribute in
 * stencil's definition:
 * 
 * i.e:
 *  {
 *      "type"  :               "node",
 *	"id"    :		"Exclusive_Databased_Gateway",
 *	"title" :		"Data-based Exclusive (XOR) Gateway",
 *	"title_de" : 		"Daten-basiertes exklusives Gateway",
 *	"description" :		"...",
 *	"description_de" :	"...",
 *	"groups" : 		["Gateways"],
 *	"view" : 		"gateway/exclusive.databased.svg",
 *	"icon" : 		"gateway/exclusive.databased.png",
 *      
 *      "mouseOverLabelConfig" : {
 *          "showOutgoingConnectionsLabel" : true,
 *          //"text"    : "Gateway Node"        //Fixed string 
 *          //"text"    : "@ConditionType"      //Property binding                            
 *          "text"      : function(uiObject){ 
 *              return "Some Text";
 *          }
 *       },
 *       
 *      "properties" :	[  
 *          {
 *              "id":"ConditionType",
 *		"type":"Choice",
 *		"title":"ConditionType",
 *		"title_de":"Bedingungstyp",
 *		"value":"None",
 *		...
 *          }
 *      ]
 *  } 
 *  
 *  The "mouseOverLabelConfig" configuration object have these attributes:
 *  
 *  Key                             Mandatory   Default     Description
 *  ===========================================================================
 *  showOutgoingConnectionsLabel    false       false       If true, show the labels
 *                                                          of its outgoing connection
 *                                                          elements.
 *  text                            false       undefined   Defines the text shown
 *                                                          in the label. If this
 *                                                          attribute is not 
 *                                                          defined, or its value
 *                                                          is an empty string, 
 *                                                          no label is shown.
 *                                                          The value of this 
 *                                                          attribute can be
 *                                                          a hardoced string,
 *                                                          a string starting
 *                                                          with '@' (property
 *                                                          binding) or a 
 *                                                          function.
 *                                                                                                           
 * 
 **/

if(!ORYX.Plugins) {
	ORYX.Plugins = new Object();
}

ORYX.Plugins.MouseOverLabelPlugin = {

    construct: function(facade) {
            this.facade = facade;
            this.facade.registerOnEvent(ORYX.CONFIG.EVENT_MOUSEOVER, this.handleMouseOver.bind(this));
            this.facade.registerOnEvent(ORYX.CONFIG.EVENT_MOUSEOUT, this.handleMouseOut.bind(this));
            this.facade.registerOnEvent(ORYX.CONFIG.EVENT_SHAPE_DELETED, this.handleShapeDeted.bind(this));
    },

    handleMouseOver: function(event, uiObj) {
        if (uiObj && uiObj instanceof ORYX.Core.Shape){
            
            //mouseOverText attribute
            this._processMouseOverTextAttribute(uiObj);

            //showLabelsOnOutgoingConnections
            this._processShowLabelsOnOutgoingConnections(uiObj, true);

        }
    },
    
    handleMouseOut: function(event, uiObj) {
        this._hideLabel(uiObj);
    },
    
    handleShapeDeted: function(event) {
        //check if is there any visible tooltip for the deleted shape and
        //destroy it
        this._hideLabel(event.value);
    },
    
    _processMouseOverTextAttribute: function(uiObj){
        var text = this._getLabelText(uiObj);
        if (text){
            this._showLabel(uiObj, text);
        }
    },
    
    _processShowLabelsOnOutgoingConnections: function(uiObj, show){
        if (!uiObj._stencil || !uiObj._stencil._jsonStencil || !uiObj._stencil._jsonStencil.mouseOverLabelConfig){
            return;
        }
        var showOutgoingConnectionsLabel = uiObj._stencil._jsonStencil.mouseOverLabelConfig.showOutgoingConnectionsLabel;
        if (showOutgoingConnectionsLabel){
            if (uiObj.outgoing.length > 0){
                //show/hide the label of each of the outgoing connections
                uiObj.outgoing.each(function(el){
                    // Checks if the node is a Shape
                    if(el instanceof ORYX.Core.Shape){
                        if (show){
                            this._processMouseOverTextAttribute(el);
                        } else{
                            this._hideLabel(el);
                        }
                    }
                }.bind(this));
            }
        }
    },
    
    _getLabelText: function(uiObj){
        if (!uiObj._stencil || !uiObj._stencil._jsonStencil || !uiObj._stencil._jsonStencil.mouseOverLabelConfig){
            return;
        }
        //TODO: is there a better way to get "mouseOverText" attribute?
        var mouseOverText = uiObj._stencil._jsonStencil.mouseOverLabelConfig.text;
        
        if (!mouseOverText){
            return undefined;
        }
        
        var text = undefined;
        
        //We need to show plain text? Or to evaluate the value as an
        //expression?
        if (typeof(mouseOverText) == "function") {
            text = mouseOverText(uiObj);
        } else if(mouseOverText.charAt(0) == '@'){
            //we need to show an attribute of the shape
            var propertyId = mouseOverText.substr(1);
            text = uiObj.properties["oryx-"+propertyId];
        } else{
            //Just plain text
            text = mouseOverText;
        }
        
        
        if (!text || text.stripTags().strip() == ""){
            return undefined;
        }
        return text;
    },
    
    _showLabel: function(element, text){
        this._hideLabel(element);
        var tip = new Ext.Tip({
            id: "mouseOverLabelTip-"+element.id,
            maxWidth: 500,
            items: [{
                xtype: 'box', 
                autoEl: {tag: 'div', html: text, autoWidth: true, autoHeight: true} 
            }] 
        });
        tip.showBy(element.id, 'c');
    },
    
    _hideLabel: function(element){
        //hide labels of outgoing connections (if needed)
        this._processShowLabelsOnOutgoingConnections(element,false);
        
        //hide its own label
        var tip = Ext.getCmp("mouseOverLabelTip-"+element.id);
        if (tip){
            tip.hide();
            tip.destroy();
        }
    }
	
}

ORYX.Plugins.MouseOverLabelPlugin = ORYX.Plugins.AbstractPlugin.extend(ORYX.Plugins.MouseOverLabelPlugin);

