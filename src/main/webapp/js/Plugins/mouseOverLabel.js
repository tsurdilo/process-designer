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
 **/

if(!ORYX.Plugins) {
	ORYX.Plugins = new Object();
}

ORYX.Plugins.MouseOverLabelPlugin = {

    construct: function(facade) {
            this.facade = facade;
            this.facade.registerOnEvent(ORYX.CONFIG.EVENT_MOUSEOVER, this.handleMouseOver.bind(this));
            this.facade.registerOnEvent(ORYX.CONFIG.EVENT_MOUSEOUT, this.handleMouseOut.bind(this));
    },

    handleMouseOver: function(event, uiObj) {
        if (uiObj && uiObj instanceof ORYX.Core.Shape){
            //TODO: is there a better way to get "mouseOverText" attribute?
            var mouseOverText = uiObj._stencil._jsonStencil.mouseOverText;
            if (mouseOverText){
                var text = this._getLabelText(mouseOverText, uiObj);
                if (text && text.replace(/^\s+/, '').replace(/\s+$/, '')){
                    this._showLabel(uiObj, text);
                }
            }

            var showLabelsOnOutgoingConnections = uiObj._stencil._jsonStencil.showLabelsOnOutgoingConnections;
            if (showLabelsOnOutgoingConnections){
                if (uiObj.outgoing.length > 0){
                    uiObj.outgoing.each(function(el){
				// Checks if the node is a Shape
				if(el instanceof ORYX.Core.Shape){
                                    this.handleMouseOver(null, el);
                                }
			}.bind(this));
                }
            }

        }
    },
    
    handleMouseOut: function(event, uiObj) {
        this._hideLabel(uiObj);
    },
    
    _getLabelText: function(value, uiObj){
        //We need to show plain text? Or to evaluate the value as an
        //expression?
        if (typeof(value) == "function") {
            return value(uiObj);
        } else if(value.charAt(0) == '@'){
            //we need to show an attribute of the shape
            var propertyId = value.substr(1);
            return uiObj.properties["oryx-"+propertyId];
        } else{
            //Just plain text
            return value;
        }
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
        tip.showBy(element.id, 't-b');
    },
    
    _hideLabel: function(element){
        var tip = Ext.getCmp("mouseOverLabelTip-"+element.id);
        if (tip){
            tip.hide();
            tip.destroy();
        }
    }
	
}

ORYX.Plugins.MouseOverLabelPlugin = ORYX.Plugins.AbstractPlugin.extend(ORYX.Plugins.MouseOverLabelPlugin);

