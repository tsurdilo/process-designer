if (!ORYX.Plugins) 
    ORYX.Plugins = new Object();


   
ORYX.Plugins.ExternalKmrVocabularyType = Clazz.extend({
    facade: undefined,
    
    construct: function(facade){
        this.facade = facade;
        ORYX.FieldEditors["externalkmrsinglevocabulary"] = new ORYX.Plugins.ExternalKmrVocabularyType.EditorFactory();
    }

});

ORYX.Plugins.ExternalKmrVocabularyType.EditorFactory = Clazz.extend({
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
        
        var factType = pair._jsonProp.lookupType;

        var cf = new Ext.form.ExternalKMRVocabularyEditor(factType, function(_value){
                this.editDirectly(key, _value);
            }.bind(this));
        
        return new Ext.Editor(cf);
    }
});


Ext.form.ExternalKMRVocabularyEditor = function(_factType, _onSave){
    
    var onSave = _onSave;
    var factType = _factType;
    var internalValue;
    
    Ext.form.ExternalKMRVocabularyEditor.superclass.constructor.call(this,{
        /**
        * If the trigger was clicked a dialog has to be opened
        * to enter the values for the complex property.
        */
        onTriggerClick : function(){
            
            var _width = 220;
            var _height = 300;
            
            var _windowWidth = _width + 25;
            var _windowHeight = _height + 45;
            
            var _url= ORYX.EXTERNAL_PROTOCOL+"://"+ORYX.EXTERNAL_HOST+"/Workbench/oidForm.jsp";

            //prepare popup submition parameters
            var _popupParameters = [];
            
            //fact type
            _popupParameters.push({
                name:"factType", 
                value: factType
            });
            
            //value and id
            var _valueParts = this.getValueParts();
            if (_valueParts){
                _popupParameters.push({
                    name:"cf_id", 
                    value: _valueParts[0]
                });
                
                _popupParameters.push({
                    name:"cf_value", 
                    value: _valueParts[1]
                });
            }
        
            var w=new Ext.Window({
                id          : 'externalVocabularyEditorWindow',
                layout      : 'fit',
                width       : _windowWidth,
                height      : _windowHeight,
                closeAction :'close',
                plain       : true,
                modal       : true,
                title       : 'Vocabulary Search',
                autoScroll  : true,
                resizable   : false,
                html: '<iframe id="externalVocabularyEditorFrame" name="externalVocabularyEditorFrame" width="'+_width+'" height="'+_height+'" src=""></iframe>',
                bbar: [
                    {
                        text: 'Ok',
                        handler: this.getValueFromPopup.bind(this)
                    },
                    {
                        text: 'Cancel',
                        handler: this.closePopup.bind(this)
                    },
                ]
            });
        
            w.show();
            
            var _form = document.createElement("form");
            _form.setAttribute("method", "POST");
            _form.setAttribute("action", _url);
            _form.setAttribute("target", "externalVocabularyEditorFrame");

            _popupParameters.each(function(param){
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", param.name);
                hiddenField.setAttribute("value", param.value);

                _form.appendChild(hiddenField);
            });

            _form.submit();
            
        },
        
        getValue : function(){
            return internalValue;
        },
        
        setValue : function(value){
            internalValue = value;
        },
        
        /**
         * Separates the parts of the value. The value format is "id->value",
         * this method return an array with [id, value]
         */
        getValueParts : function (){
            if (!this.getValue()){
                return undefined;
            }
            
            if (this.getValue().indexOf('->') > 0){
                return this.getValue().split("->");
            }
            
            return undefined;
        },
        
        /**
         * Gets the selected value from the popup and set the internalValue
         * of this component. After this, the window is closed.
         */
        getValueFromPopup : function(){
            //get value and id from popup
            var id = this.getPopupDocumentElement('cf_id').value;
            var value = this.getPopupDocumentElement('cf_value').value;
            
            //concatenate the 2 values
            this.setValue(id+"->"+value);
            
            //close the window
            this.closePopup();
            
            //call any callback function
            if (onSave){
                onSave(this.getValue());
            }
        },
        
        /**
         * Close the window
         */
        closePopup : function(){
            Ext.getCmp("externalVocabularyEditorWindow").close();
        },
        
        getPopupDocumentElement : function(elementName){
            return window.frames['externalVocabularyEditorFrame'].document.getElementById(elementName);
        }
    });
}

Ext.extend(Ext.form.ExternalKMRVocabularyEditor,Ext.form.TriggerField,{});