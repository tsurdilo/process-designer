
if (!ORYX.Plugins) 
    ORYX.Plugins = new Object();

var guvnorPopupEditor;

/**
 * Plugin that provides a way to edit constraints in DRL format (or as plain text too).
 * This plugin uses Guvnor Standalone Editor to open a popup with an editor that 
 * you can use to author your rules. 
 * 
 * Example of a field using Regex Text Editor:
 *      {
            "id":"conditionexpression",
            "type":"simpleConstraintExpressionEditor",
            "title":"Expression",
            "title_de":"Expression",
            "value":"",
            "description":"",
            "readonly":false,
            "optional":true,
            "showConstraintEditorWhen": {
                "property": "conditionlanguage",
                "value": "Rule",
             }
        }
 * 
 * This plugin defines 2 new types: simpleConstraintExpressionEditor 
 * and contextAwareConstraintExpressionEditor.
 * 
 * The only difference between them is that contextAwareConstraintExpressionEditor
 * makes use of Working-Sets to constraint the available Fact Classes when
 * authoring rules to only those classes used in the process. This is an experimental
 * feature that is not available yet.
 * 
 * The attribute used to configure this
 * editor is:
 *    1.- showConstraintEditorWhen: this object has 2 attributes:
 *      1.- property: the id of another property of this element. 
 *      2.- value: Only show the popup editor if the property indicated by 
 *      the previous attribute has this value. Otherwise open a plain text editor.
 *      
 * This plugin is also configurable throug config.js using all the ORYX.CONFIG.GUVNOR_*
 * elements     
 */
ORYX.Plugins.ConstraintExpressionEditor = Clazz.extend({
    
    construct: function(facade, ownPluginData){
        this.facade = facade;

        //Set default configuration
        /*
         * If true, the rules are going to be edited under ORYX.CONFIG.GUVNOR_FIXED_PACKAGE package
         * If false, the package is taken from process' package attribute
         */
        ORYX.CONFIG.GUVNOR_USE_FIXED_PACKAGE    =   false;  
        ORYX.CONFIG.GUVNOR_FIXED_PACKAGE        =   "mortgages";
        ORYX.CONFIG.GUVNOR_CATEGORY             =   "Home Mortgage";
        ORYX.CONFIG.GUVNOR_HIDE_RHS             =   true;
        ORYX.CONFIG.GUVNOR_HIDE_ATTRIBUTES      =   true;
        ORYX.CONFIG.GUVNOR_WIDTH                =   undefined;
        ORYX.CONFIG.GUVNOR_HEIGHT                =   undefined;
        
        //Read properties
        if (ownPluginData.properties) {
            ownPluginData.properties.each( function(property) {			
                if (property.useFixedPackage) {
                    ORYX.CONFIG.GUVNOR_USE_FIXED_PACKAGE = (property.useFixedPackage == "true");
                }		
                if (property.fixedPackage) {
                    ORYX.CONFIG.GUVNOR_FIXED_PACKAGE = property.fixedPackage;
                }
                if (property.category) {
                    ORYX.CONFIG.GUVNOR_CATEGORY = property.category;
                }
                if (property.width) {
                    ORYX.CONFIG.GUVNOR_WIDTH = property.width;
                }
                if (property.height) {
                    ORYX.CONFIG.GUVNOR_HEIGHT = property.height;
                }
            }.bind(this));
        }
        
        //Define editors for custom types
        ORYX.FieldEditors["simpleconstraintexpressioneditor"] = new ORYX.Plugins.ConstraintExpressionEditor.SimpleConstraintExpressionEditorFactory();
        ORYX.FieldEditors["simplemulticonstraintexpressioneditor"] = new ORYX.Plugins.ConstraintExpressionEditor.SimpleMultiConstraintExpressionEditorFactory();
        ORYX.FieldEditors["contextawareconstraintexpressioneditor"] = new ORYX.Plugins.ConstraintExpressionEditor.ContextAwareConstraintExpressionEditorFactory();
        ORYX.FieldEditors["contextawaremulticonstraintexpressioneditor"] = new ORYX.Plugins.ConstraintExpressionEditor.ContextAwareMultiConstraintExpressionEditorFactory();
        
        this.facade.registerOnEvent(ORYX.CONFIG.EVENT_DBLCLICK, this.actOnDBLClick.bind(this));
    },
    
    actOnDBLClick: function actOnDBLClick(evt, shape){
        if( !(shape instanceof ORYX.Core.Shape) ){
            return
        }
		
        var helper = undefined;
        var prop = shape.getStencil().properties().find(function(item){ 
            if ((item.type() == 'simpleconstraintexpressioneditor' || item.type() == 'contextawareconstraintexpressioneditor')
                && item.directlyEditable()){
                helper = new GuvnorPopupEditorSingleRuleHelper(shape);
                return true;
            } else if ((item.type() == 'simplemulticonstraintexpressioneditor' || item.type() == 'contextawaremulticonstraintexpressioneditor')
                && item.directlyEditable()){
                helper = new GuvnorPopupEditorMultiRuleHelper(shape);
                return true;
            }
            return false;
        });        
                
        //no property found -> exit
        if (!prop){
            return;
        }
        
        if (!helper.shouldPopupBeShown()){
            return;
        }
                
        var key = prop.id();        
        var editor = new Ext.form.GuvnorPopupEditor(shape, helper, function(_value){
            this.editDirectly(shape, key, _value);
        });
        
        editor.setValue(shape.properties["oryx-"+key]);
        
        editor.onTriggerClick();
        
    },
    
    editDirectly:function(shape, key, value){
		
        if(!shape.getStencil().property(key).readonly()) {
            shape.setProperty(key, value);
        }
		
        /* Propagate changed properties */
        var selectedElements = [shape];
		
        this.facade.raiseEvent({
            type 		: ORYX.CONFIG.EVENT_PROPWINDOW_PROP_CHANGED, 
            elements	: selectedElements,
            key			: key,
            value		: value
        });

        this.facade.getCanvas().update();
		
    }
}); 


ORYX.Plugins.ConstraintExpressionEditor.SimpleConstraintExpressionEditorFactory = Clazz.extend({
    construct: function(){

    },          
    /**
     * This function gets executed by propertyWindow in its own context,
     * so this = propertyWindow
     */
    init: function(){
        //arguments: key, pair, icons, index
        var key = arguments[0];
        var pair = arguments[1];
        var index = arguments[3];
        
        return new ORYX.Plugins.ConstraintExpressionEditor.BaseConstraintExpressionEditorFactory().createEditor.bind(this)(false, false, key, pair, index);
        
    }        
});

ORYX.Plugins.ConstraintExpressionEditor.SimpleMultiConstraintExpressionEditorFactory = Clazz.extend({
    construct: function(){

    },          
    /**
     * This function gets executed by propertyWindow in its own context,
     * so this = propertyWindow
     */
    init: function(){
        //arguments: key, pair, icons, index
        var key = arguments[0];
        var pair = arguments[1];
        var index = arguments[3];
        
        return new ORYX.Plugins.ConstraintExpressionEditor.BaseConstraintExpressionEditorFactory().createEditor.bind(this)(true, false, key, pair, index);
        
    }        
});

ORYX.Plugins.ConstraintExpressionEditor.ContextAwareConstraintExpressionEditorFactory = Clazz.extend({
    
    construct: function(){
        
    },          
    /**
     * This function gets executed by propertyWindow in its own context,
     * so this = propertyWindow
     */
    init: function(){
        //arguments: key, pair, icons, index
        var key = arguments[0];
        var pair = arguments[1];
        var index = arguments[3];
        
        return new ORYX.Plugins.ConstraintExpressionEditor.BaseConstraintExpressionEditorFactory().createEditor.bind(this)(false, true, key, pair, index);
        
    }        
});

ORYX.Plugins.ConstraintExpressionEditor.ContextAwareMultiConstraintExpressionEditorFactory = Clazz.extend({
    
    construct: function(){
        
    },          
    /**
     * This function gets executed by propertyWindow in its own context,
     * so this = propertyWindow
     */
    init: function(){
        //arguments: key, pair, icons, index
        var key = arguments[0];
        var pair = arguments[1];
        var index = arguments[3];
        
        return new ORYX.Plugins.ConstraintExpressionEditor.BaseConstraintExpressionEditorFactory().createEditor.bind(this)(true, true, key, pair, index);
        
    }        
});

ORYX.Plugins.ConstraintExpressionEditor.BaseConstraintExpressionEditorFactory = Clazz.extend({
    construct: function(){
        
    },
    /**
     * This function gets (indirectly) executed by propertyWindow in its own context,
     * so this = propertyWindow
     */
    createEditor: function(multiRule, contextAware, key, pair, index){

        var helper = undefined;
        
        if (multiRule){
            helper = new GuvnorPopupEditorMultiRuleHelper(this.shapeSelection.shapes[0]);
        } else{
            helper = new GuvnorPopupEditorSingleRuleHelper(this.shapeSelection.shapes[0]);
        }
        helper.setFacade(this.facade);
        
        var showPopup = true;
        try{
            showPopup = helper.shouldPopupBeShown();
        } catch (e){
            console.log(e);
            alert (e.message);
            return null;
        }
        
        var editor; 
        
        if (showPopup){
            var initialShape = contextAware?this.shapeSelection.shapes[0]:undefined;
            editor = new Ext.form.GuvnorPopupEditor(initialShape, helper, function(_value){
                this.editDirectly(key, _value);
            }.bind(this));
            
            //Guvnor's iframe needs a global object to stablish communication with.
            guvnorPopupEditor = editor;
        }else{
            editor = new Ext.form.ComplexTextField({
                allowBlank: pair.optional(),
                dataSource:this.dataSource,
                grid:this.grid,
                row:index,
                facade:this.facade
            });
            editor.on('dialogClosed', this.dialogClosed, {
                scope:this, 
                row:index, 
                col:1,
                field:editor
            });							
        }

        return new Ext.Editor(editor);
        
    }
});

Ext.form.GuvnorPopupEditor = function(_srcShape, _helper, _onSave){

    var onSave = _onSave;
    
    var srcShape = _srcShape;
    
    var helper = _helper;

    Ext.form.GuvnorPopupEditor.superclass.constructor.call(this,{
        defaultAutoCreate : {
            tag: "textarea", 
            rows:1, 
            style:"height:16px;overflow:hidden;"
        },

        /**
     * If the trigger was clicked a dialog has to be opened
     * to enter the values for the complex property.
     */
        onTriggerClick : function(){
		
            if(this.disabled){
                return;
            }	
 
            //default values for width and height
            var _width = document.body.clientWidth - 20;
            var _height = document.body.clientHeight - 20;

            //if there are custom values defined for width and/or height, apply them
            if (ORYX.CONFIG.GUVNOR_WIDTH){
                _width = ORYX.CONFIG.GUVNOR_WIDTH;
            }
            if (ORYX.CONFIG.GUVNOR_HEIGHT){
                _height = ORYX.CONFIG.GUVNOR_HEIGHT;
            }

            //Guvnor url
            var _guvnorURL= ORYX.EXTERNAL_PROTOCOL+"://"+ORYX.EXTERNAL_HOST+"/"+ORYX.EXTERNAL_SUBDOMAIN+"/org.drools.guvnor.GuvnorDrools/standaloneEditorServlet";
        
            //Guvnor editor parameters
            var _guvnorParameters = [];
            _guvnorParameters.push({
                name:"client", 
                value: ''
            });
            
            var _pkg = ORYX.CONFIG.GUVNOR_FIXED_PACKAGE;
            
            if (!ORYX.CONFIG.GUVNOR_USE_FIXED_PACKAGE){
                var _json = ORYX.EDITOR.getJSON();
                if (_json.properties['package'] && _json.properties['package'] != ""){
                    
                }else{
                    alert ("Please configure Process' 'package' attribute first");
                    return;
                }
                _pkg = _json.properties['package'];
            }
            
            _guvnorParameters.push({
                name:"packageName", 
                value: _pkg
            });
            
            _guvnorParameters.push({
                name:"categoryName", 
                value: ORYX.CONFIG.GUVNOR_CATEGORY
            });
            _guvnorParameters.push({
                name:"hideRuleRHS", 
                value: ''+ORYX.CONFIG.GUVNOR_HIDE_RHS
            });
            _guvnorParameters.push({
                name:"hideRuleAttributes", 
                value: ''+ORYX.CONFIG.GUVNOR_HIDE_ATTRIBUTES
            });
        
            //BRL
            //"<RULE_SEPARATOR_TAG/>"
            var _brl = helper.getBRLValue();
            _brl = _brl.split("<RULE_SEPARATOR_TAG/>");
            
            _brl.each(function(_singleBRL){
                    _guvnorParameters.push({
                    name:"brlSource", 
                    value: _singleBRL
                } );
            });
            
        
            //get the available Classes from the node's path
            if (srcShape){
               
                var _modelEntitiesInPath = collectNodesInPath(srcShape, new RegExp("ModelEntity"));
                _modelEntitiesInPath = _modelEntitiesInPath.concat(collectNodesInPath(srcShape, new RegExp("Model_")));
               
                if (!_modelEntitiesInPath || _modelEntitiesInPath.length == 0){
                    alert ("You must define at least 1 Model Entity in your process!");
                    return;
                }

                var errors = [];

                //convert each Model Entity into Working Set config data
                //and add it to the request parameter
                var _workingSetConfigData = [];
                _modelEntitiesInPath.each(function(_modelEntity){
                    var _validFact = _modelEntity.properties['oryx-modelentity'];
                    var _factField = _modelEntity.properties['oryx-fieldconstraint'];
                    var _matchesString = _modelEntity.properties['oryx-'+_factField];
                   
                    if (!_validFact){
                        errors.push("Fact Name is mandatory!");
                        return;
                    }
                    if (!_factField){
                        errors.push("You must specify a field for '"+_validFact+"' Model Entity");
                        return;
                    }
                    if (!_matchesString){
                        errors.push("You must specify a value for '"+_validFact+"."+_factField+"' Model Entity");
                        return;
                    }
                   
                    _workingSetConfigData.push("{"+_validFact+"--@--"+_factField+"--@--"+_matchesString+"}");
                    
                });

                if (errors.length > 0){
                    this.showErrors(errors);
                    return;
                }

                //get working-set definition for the model entities found in path
                var workingSetXML = "";
               
                new Ajax.Request("/designer/workingSet", {
                    asynchronous: false,
                    method: 'POST',
                    parameters: {
                        "action": "createWorkingSetWithMandatoryConstraint",
                        "config": _workingSetConfigData
                    },
                    onSuccess: function(transport){
                        workingSetXML = transport.responseText;
                    }.bind(this),
                    onFailure: (function(transport){
                        errors.push("Error getting Working Set Definition: "+transport.responseText);
                    }).bind(this)
                });

                if (errors.length > 0){
                    this.showErrors(errors);
                    return;
                }
                
                //alert (workingSetXML);
                
                //add Working Set XML to request
                _guvnorParameters.push({
                    name: "workingSetXMLDefinitions", 
                    value: workingSetXML
                });

            }
           
            if (_guvnorParameters.length > 0){
                var i = 0;
                var separator = "";
                _guvnorURL += "?";
                for (i = 0; i < _guvnorParameters.length; i++){
                    var p = _guvnorParameters[i];
                    var uriComponent= separator + p.name+"="+encodeURIComponent(p.value);
                    if (separator == ""){
                        separator = "&amp;"; // %26
                    }
                
                    _guvnorURL += uriComponent;
                }
            }
            
            var _windowWidth = _width/1+ 25;
            var _windowHeight = _height/1 + 45;
            var _windowYPad = 80;
            
            var w=new Ext.Window({
                id          : 'guvnorWindow',
                layout      : 'fit',
                width       : _windowWidth,
                height      : _windowHeight,
                closeAction :'close',
                plain       : true,
                modal       : true,
                title       : 'Condition',
                autoScroll  : true,
                resizable   : false,
                y           : _windowYPad,          
                html: '<iframe id="guvnorFrame" name="guvnorFrame" width="'+_width+'" height="'+_height+'"  onload="attachCallbacksToGuvnor();" src="'+_guvnorURL+'"></iframe>'
            });
        
            w.show();
        },
        
        showErrors : function (errors){
            var msg = "Errors:";
            
            errors.each(function(error){
                msg += "\n\t"+error;
            });
            
            alert(msg);
        },
    
        
        getValue : function(){
            return helper.getValue();
        },
        
        closeGuvnorWindow : function (){
            Ext.getCmp('guvnorWindow').close();
        },

        guvnorSaveAndCloseButtonCallback : function (){
            getGuvnorFrame(top).guvnorEditorObject.getBRL(function(brl){
                this.setBRLValue(brl);

                getGuvnorFrame(top).guvnorEditorObject.getDRL(function(drl){
                    this.setDRLValue(drl);

                    this.closeGuvnorWindow();
                    
                    if (onSave){
                        onSave(this.getValue());
                    }
                }.bind(this));

            }.bind(this));
        },

        guvnorCancelButtonCallback : function(){
            this.closeGuvnorWindow();
        },
    
        setValue : function(value){
            helper.setValue(value);
        },       
    
        getDRLValue : function(){
            return helper.getDRLValue();
        },
    
        setDRLValue : function(drl){
            helper.setDRLValue(drl);
        },       
    
        setBRLValue : function(brl){
            helper.setBRLValue(brl);
        }
    });
}

Ext.extend(Ext.form.GuvnorPopupEditor,Ext.form.TriggerField,{});

function attachCallbacksToGuvnor(){
    if (!getGuvnorFrame(top).guvnorEditorObject){
        setTimeout('this.attachCallbacksToGuvnor()', 1000);
        return;
    }
    getGuvnorFrame(top).guvnorEditorObject.registerAfterSaveAndCloseButtonCallbackFunction(guvnorPopupEditor.guvnorSaveAndCloseButtonCallback.bind(guvnorPopupEditor));
    getGuvnorFrame(top).guvnorEditorObject.registerAfterCancelButtonCallbackFunction(guvnorPopupEditor.guvnorCancelButtonCallback.bind(guvnorPopupEditor));
}

function getGuvnorFrame(context){
    if (context.frames["guvnorFrame"]){
        return context.frames["guvnorFrame"];
    }
    
    for (var i=0; i < context.frames.length; i++){
        var frm = getGuvnorFrame(context.frames[i]);
        if (frm){
            return frm;
        }
    }
    
    return null;
}

function collectNodesInPath(srcNode, nodeStencilId){
    
    if (!srcNode.incoming || srcNode.incoming.length == 0){
        return [];
    }
    
    var foundNodes = [];
    srcNode.incoming.each(function(incomingNode){
        if (incomingNode._stencil._jsonStencil.id.match(nodeStencilId)){
            foundNodes.push(incomingNode);
        }
        
        //inspect children 
        foundNodes = foundNodes.concat(collectNodesInPath(incomingNode, nodeStencilId));
        
    });
    
    return foundNodes;
}

GuvnorPopupEditorHelper = Clazz.extend({
    brlCommentString: "#-#",
    drlValue: "",
    brlValue: "",
    shape: "",
    facade: undefined,
    
    setValue: function(){},
    getValue: function(){},
    getBRLValue : function(){},
    
    getDRLValue : function(){
      return this.drlValue;  
    },
    
    setDRLValue : function(drl){
        this.drlValue = drl;
    },

    setBRLValue : function(brl){
        this.brlValue = brl;
    },
    
    setFacade: function(f){
        this.facade = f;
    },
    
    encodeBRL : function(brlValueToEncode){
        var _value = "";
            
        //process the brl part
        if (brlValueToEncode){
            //split the brl into single lines
            var brlLines = brlValueToEncode.split("\n");
            for (var i=0; i < brlLines.length; i++) {
                var brlLine = brlLines[i];

                //encode its content to avoid forbidden xml elements
                brlLine = encodeURIComponent(brlLine);
                    
                //comment the line: jbpm will ignore this brl.
                brlLine = this.brlCommentString + brlLine;
                    
                //append the line to the final value
                _value += brlLine + "\n";
            }
        }
            
        return _value;
    },
        
    trimDRL : function(drlValueToEncode){
        var _value = ""
            
        //we only need the RHS of the rule
        if (drlValueToEncode){
            var validLine = false;
            var drlLines = drlValueToEncode.split("\n");
            for (var i=0; i < drlLines.length; i++) {
                var drlLine = drlLines[i];
                    
                //trim
                drlLine = drlLine.replace(/^\s+/, '').replace(/\s+$/, '');
                    
                if (drlLine == "then"){
                    //stop the loop
                    break;
                }
                    
                if (validLine){
                    _value += drlLine + "\n";
                }
                    
                if (drlLine == "when"){
                    validLine = true
                }
                    
            }
        }
            
        return _value;
    }
        
    
    
});

GuvnorPopupEditorSingleRuleHelper = GuvnorPopupEditorHelper.extend({
    construct: function(shape){
        this.shape = shape;
    },
    
    /**
     * Determines whether the popup must be shown depending on the properties
     * of shape. 
     * if shape.showConstraintEditorWhen property is present, it is evaluated,
     * otherwise this method always return true.
     */
    shouldPopupBeShown: function(){
        var showPopup = true;
        //only show Guvnor Editor if 'showConstraintEditorWhen' is met
        if (this.shape._stencil._jsonStencil.showConstraintEditorWhen){
            var prop = this.shape._stencil._jsonStencil.showConstraintEditorWhen.property;
            if (!prop){
                throw { 
                    name:        "Error", 
                    message:     "Error reading definition of showConstraintEditorWhen: 'property' is missing!"
                };
            }
            var value = this.shape._stencil._jsonStencil.showConstraintEditorWhen.value;
            if (!value){
                throw { 
                    name:        "Error", 
                    message:     "Error reading definition of showConstraintEditorWhen: 'value' is missing!"
                };
            }
            showPopup = this.shape.properties["oryx-" + prop] == value;
        }
        return showPopup;
    },
    
    setValue : function(value){
        this.drlValue = "";
        this.brlValue = "";

        var brlCommentPattern = new RegExp("^"+this.brlCommentString+".*");
        var lines = value.split("\n");
        for (var i=0; i < lines.length; i++) {
            var line = lines[i];

            if (line.match(brlCommentPattern)){
                this.brlValue += decodeURIComponent(line.substring(this.brlCommentString.length))+"\n"; 
            }else{
                this.drlValue += line + "\n";
            }
        }

    },
    
    getValue : function(){
        var value = "";
        
        //process the brl part
        value += this.encodeBRL(this.brlValue);

        value += "\n";

        //process the drl part
        value += this.trimDRL(this.drlValue);

        //alert (value);
        return value;
    },
    
    updateBRLRuleName: function(){
      if (!this.shape){
          return;
      }  
      
      var name = this.shape.properties['oryx-name'];
      if (name.strip() == ""){
          return;
      }
      
      this.brlValue = this.brlValue.replace(/<name>.+<\/name>/i, "<name>"+name+"</name>");
      
    },
    
    getBRLValue : function(){
        if (this.brlValue == ""){
            return this.getInitialBRL();
        }
        //update rule's name according to shape's name
        this.updateBRLRuleName();
        
        return this.brlValue;
    },
    
    getInitialBRL: function(){
        return '<rule><name>Condition Constraint</name><modelVersion>1.0</modelVersion><attributes></attributes><metadataList/><lhs></lhs><rhs></rhs></rule>';
    }
    
});

GuvnorPopupEditorMultiRuleHelper = GuvnorPopupEditorHelper.extend({
    //a hashmap of 'name' -> node
    outgoingNodes: new Hash(),
    //a hashmap of node -> property of 'constraint' type
    outgoingNodesConstraintProperty: new Hash(),
    construct: function(shape){
        this.shape = shape;
    },
    
    /**
     * Determines whether the popup must be shown depending on the properties
     * of the shapes directly connected to 'shape'. 
     * Each connected shape is evaluated to check if its properties contain 
     * showConstraintEditorWhen property. If this property present, it is evaluated.
     * If at least one connection evaluates to true, this method returns true.
     *
     */
    shouldPopupBeShown: function(){
        var showPopup = false;
        
        this.outgoingNodes = new Hash();
        
        var i = 1;
        if (this.shape.outgoing.length > 0){
            showPopup = true;
            this.shape.outgoing.each(function(outgoingNode){
                
                //get the name of the outgoing node, or set a temporal one
                var nodeName = outgoingNode.properties["oryx-name"];
                if (nodeName == ""){
                    nodeName = "Condition "+i;
                    i++;
                }
                
                if (outgoingNode._stencil._jsonStencil.showConstraintEditorWhen){
                    var prop = outgoingNode._stencil._jsonStencil.showConstraintEditorWhen.property;
                    if (!prop){
                        throw { 
                            name:        "Error", 
                            message:     "Error reading definition of showConstraintEditorWhen: 'property' is missing!"
                        };
                    }
                    var value = outgoingNode._stencil._jsonStencil.showConstraintEditorWhen.value;
                    if (!value){
                        throw { 
                            name:        "Error", 
                            message:     "Error reading definition of showConstraintEditorWhen: 'value' is missing!"
                        };
                    }
                    
                    if (outgoingNode.properties["oryx-" + prop] == value){
                        //store the node for later use
                        if (this.outgoingNodes[nodeName]){
                            throw { 
                                name:        "Error", 
                                message:     "More than one node with name '"+nodeName+"' exists!"
                            };
                        }
                        this.outgoingNodes[nodeName] = outgoingNode;
                    }
                }else{
                    //store the node for later use
                    if (this.outgoingNodes[nodeName]){
                        throw { 
                            name:        "Error", 
                            message:     "More than one node with name '"+nodeName+"' exists!"
                        };
                    }
                    this.outgoingNodes[nodeName] = outgoingNode;
                }
                
            }.bind(this));
            showPopup = this.outgoingNodes.keys().length != 0;
        }
        
        
        return showPopup;
    },
    
    getConstraintProperty: function(node){
        if (!this.outgoingNodesConstraintProperty[node]){
            node._stencil._jsonStencil.properties.each(function(property){
                if (property.type == 'simpleconstraintexpressioneditor' || property.type == "contextawareconstraintexpressioneditor"){
                    this.outgoingNodesConstraintProperty[node] = property;
                }
            }.bind(this));
        }
        
        return this.outgoingNodesConstraintProperty[node];
    },
    
    getBRLValue : function(){
        //If we don't have any outgoing node, we never should get here in the
        //first place!
        if (this.outgoingNodes.keys().length == 0){
            throw { 
                name:        "Error", 
                message:     "No outgoing nodes!"
            };
        }
        
        var brlValue = "";
        var separator = "";
        
        //get the value of each outgoing node
        //values must be sorted so we always respect the same order
        var keys = this.outgoingNodes.keys().clone();
        keys.sort();
        keys.each(function(outgoingNodeKey){
            var property = this.getConstraintProperty(this.outgoingNodes[outgoingNodeKey]);
            var individualBRLValue = this.outgoingNodes[outgoingNodeKey].properties["oryx-"+property.id];
            if (individualBRLValue == ""){
                //empty value? add an empty rule
                individualBRLValue = this.getInitialBRL(outgoingNodeKey);
            }else{
                //the value is encoded -> decode it
                //We are going to use a instance of GuvnorPopupEditorSingleRuleHelper
                //to do the decoding;
                var h = new GuvnorPopupEditorSingleRuleHelper(this.outgoingNodes[outgoingNodeKey]);
                h.setValue(individualBRLValue);
                individualBRLValue = h.getBRLValue();
                //TODO: update rule name because outgoing node's name could be change
            }
            brlValue += separator+individualBRLValue;
            if (separator == ""){
                separator = "<RULE_SEPARATOR_TAG/>";
            }
        }.bind(this));
        
        return brlValue;
    },
    
    getInitialBRL: function(ruleName){
        return '<rule><name>'+ruleName+'</name><modelVersion>1.0</modelVersion><attributes></attributes><metadataList/><lhs></lhs><rhs></rhs></rule>';
    },
    
    setValue : function(value){

    },
    
    getValue : function(){
        
        if (!this.brlValue || this.brlValue == ""){
            return "";
        }
        
        //separate each brl
        var brls = this.splitBRLs();
        
        //separate each drl
        var drls = this.splitDRLs();
        
        //hashmap containing all the final values that must be set to each
        //outgoing node
        var values = new Hash();
        
        //concatenate the encoded brl and drl for each outgoing node
        brls.keys().each(function(ruleName){
            var value = this.encodeBRL(brls[ruleName]);
            value += "\n";
            value += this.trimDRL(drls[ruleName]);
            
            values[ruleName]=value;
        }.bind(this));
        
        //set the value of each outgoing node
        brls.keys().each(function(ruleName){
            var property = this.getConstraintProperty(this.outgoingNodes[ruleName]);
            if (property){
                this.editDirectly(this.outgoingNodes[ruleName], property.id, values[ruleName]);
            }
        }.bind(this));
        
        return "";
    },
    
    splitBRLs: function(){
        if (this.brlValue){
            //split the brl into single lines
            var brlLines = this.brlValue.split("\n");
            
            var singleBRL = "";
            var singleBRLName;
            var brls = new Hash();
            for (var i=0; i < brlLines.length; i++) {
                var brlLine = brlLines[i];

                if (brlLine.strip().toUpperCase() == "</RULE>"){
                    if (!singleBRLName){
                        throw { 
                            name:        "Error", 
                            message:     "Rule without name!"
                        };
                    }
                    brls[singleBRLName] = singleBRL+"\n"+brlLine;
                    singleBRL = "";
                    singleBRLName = undefined;
                    continue;
                }else if(brlLine.strip().toUpperCase().startsWith("<NAME>")){
                    singleBRLName = brlLine.strip().slice("<NAME>".length, brlLine.strip().length-("</NAME>".length)).strip();
                }
                
                singleBRL +=brlLine+"\n";
            }
            
            return brls;
        }
        return undefined;
    },
    
    splitDRLs: function(){
        if (this.drlValue){
            //split the drl into single lines
            var drlLines = this.drlValue.split("\n");
            
            var ruleHeaderRegex = /rule\s+\".+\"/i;
            
            var singleDRL = "";
            var singleDRLName;
            var drls = new Hash();
            for (var i=0; i < drlLines.length; i++) {
                var drlLine = drlLines[i];
                var strippedLine = drlLine.strip();
                if (strippedLine.toUpperCase() == "END"){
                    if (!singleDRLName){
                        throw { 
                            name:        "Error", 
                            message:     "Rule without name!"
                        };
                    }
                    drls[singleDRLName] = singleDRL+"\n"+drlLine;
                    singleDRL = "";
                    singleDRLName = undefined;
                    continue;
                }else if(strippedLine.match(ruleHeaderRegex)){
                    singleDRLName = strippedLine.slice(strippedLine.indexOf("\"")+1, strippedLine.lastIndexOf("\"")).strip();
                }
                
                singleDRL +=drlLine+"\n";
            }
            
            return drls;
        }
        return undefined;
    },
    
    editDirectly:function(shape, key, value){
		
        if(!shape.getStencil().property("oryx-"+key).readonly()) {
            shape.setProperty("oryx-"+key, value);
        }
		
        /* Propagate changed properties */
        var selectedElements = [shape];
		
        this.facade.raiseEvent({
            type 		: ORYX.CONFIG.EVENT_PROPWINDOW_PROP_CHANGED, 
            elements	: selectedElements,
            key			: key,
            value		: value
        });

        this.facade.getCanvas().update();
		
    }
    
});
