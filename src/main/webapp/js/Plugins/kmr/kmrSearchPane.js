if (!ORYX.Plugins) 
    ORYX.Plugins = new Object();

ORYX.Plugins.KmrSearchPane = Clazz.extend({
    facade: undefined,
    
    construct: function(facade){
        this.facade = facade;
        execSearch  = this.execSearch; 
        this.facade.offer({
            'name': "Search in KMR",
            'functionality': this._onSearch.bind(this),
            //'group': ORYX.I18N.Save.group,
            'icon': ORYX.PATH + "images/magnifier_zoom_in",
            'description': 'Please I18N me',
            'index': 1,
            'minShape': 0,
            'maxShape': 0
        });
        
    },

    /**
     * FUNCTION:  _onSearch()
     */
    _onSearch : function() { 
        
        //-------------------
        // simple array stores
        //-------------------
        var data_kmtype = [
             [1,'VALIDATION']
            ,[2,'WORKFLOW']
            ,[3,'GUIDELINE']
        ];
        var data_orglevel = [
             [1,'PERSONAL']
            ,[2,'ENTERPRISE']
        ];
        var data_kmstatus = [
             [1,'DRAFT']
            ,[2,'UNDER-REVIEW']
            ,[3,'APPROVED']
            ,[4,'QA-PASSED']
            ,[5,'PRODUCTION']
        ];
        var data_specialtyscheme = [
             [1,'AMA123']
            ,[2,'AMA456']
            ,[3,'NHSN']
        ];
        var data_specialtycode = [
             [1,'207Q00000X','Family Medicine']
            ,[1,'207QA0401X','Addiction Medicine']
            ,[1,'207QA0505X','Adult Medicine']
            ,[2,'307Q00009X','Family Medicine 2']
            ,[3,'NHSN-1234','NHSN - Tester Specialty Code']
        ];
        var data_facttype = [
             [1,'LAB']
            ,[2,'ALLERGIES']
            ,[3,'DIAGNOSTICS']
            ,[4,'MEDICATION']
        ];
        var data_factscheme = [
             [100,'LOINC']
            ,[200,'ICD-9']
        ];
        var data_factcode = [
             [100,'26453-1' ,'Erythrocytes']
            ,[100,'20570-8' ,'Hematocrit']
            ,[100,'26453-1' ,'Erythrocytes']
            ,[100,'26464-8' ,'Leukocytes']
            ,[100,'718-7'   ,'Hemoglobin']
            ,[100,'26464-10','Allergies']
            ,[200,'94513'   ,'1st deg burn ankle']
            ,[200,'0050'    ,'Staph food poisoning']
        ];
        var data_tasktype = [
             [1,'ALERT']
            ,[2,'TELECOM']
        ];
        var data_demographicscheme = [
             [100,'HL7']
            ,[200,'ICD-9']
            ,[300,'UDS']
			,[400,'CDC']
        ];
        var data_demographiccode = [
		   // id  code       codevalue               codetips
		   // --  --------   ---------               --------
             [100,'F'       ,'Female'               ,'HL7 - Gender']
			,[100,'M'       ,'Male'                 ,'HL7 - Gender']
            ,[100,'UN'      ,'Undifferentiated'     ,'HL7 - Gender']
            ,[200,'2900-1'  ,'2900-1 Diabetes'      ,'ICD9 - Diabetes']
            ,[300,'Age Min' ,'Age Min'                     ,'UDS - Age Minimum']
            ,[300,'Age Max' ,'Age Max'                     ,'UDS - Age Maximum']
            ,[400,'2155-0'  ,'2155-0 Central American'     ,'CDC - Ethinicity - Central American']
            ,[400,'2148-5'  ,'2148-5 Mexican'              ,'CDC - Ethinicity - Mexican']			
        ];
		

        //---------------
        //creating a form  
        //---------------
        this.form= new Ext.form.FormPanel({  
             border:false // <-- removing the border of the form  
            ,defaults:{xtype: 'textfield'}   //component by default of the form 
            
            ,labelWidth:130
            ,bodyStyle: 'padding:15px'            
            ,frame:false
            
            ,items: [
                    //-------- KM METADATA -------------
                    {
                         xtype      : 'textfield'
                        ,fieldLabel : 'Name'
                        ,anchor     : '100%'
                    }
                    ,{                            
                         xtype         : 'combo'
                        ,fieldLabel    : 'Type'
                        ,anchor        : '100%'
                        //-------- store --------
                        ,displayField  : 'kmtype'
                        ,valueField    : 'id'
                        ,triggerAction : 'all'
                        ,mode          : 'local'    
                        ,store         : new Ext.data.SimpleStore({
                                                     fields : ['id', 'kmtype']
                                                    ,data   : data_kmtype})				        
                    }
                    ,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Org Level'
                        ,anchor     : '100%'
                        //-------- store --------
                        ,displayField  : 'orglevel'
                        ,valueField    : 'id'
                        ,triggerAction : 'all'
                        ,mode          : 'local'    
                        ,store         : new Ext.data.SimpleStore({
                                                     fields : ['id', 'orglevel']
                                                    ,data   : data_orglevel})                     
                    }
                    ,{
                         xtype      : 'textfield'
                        ,fieldLabel : 'Institution'
                        ,anchor     : '100%'
                    }
                    ,{
                         xtype      : 'textarea'
                        ,fieldLabel : 'Description'
                        ,anchor     : '100%'
                        ,autoscroll : true
                    }
                    ,{
                         xtype      : 'numberfield'
                        ,fieldLabel : 'Author Id'
                        ,anchor     : '100%'						
                    }
                    ,{
                         xtype      : 'datefield'
                        ,fieldLabel : 'Date Created'                            
                        ,anchor     : '100%'
                        ,maxValue   : new Date()
                        ,maxText    : 'nothing in the future'
                    }   
                    ,{
                        xtype       : 'datefield'
                        ,fieldLabel : 'Date Last Modified'
                        ,anchor     : '100%'
                        ,maxValue   : new Date()
                        ,maxText    : 'nothing in the future'
                     }
                    ,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Validation Status'
                        ,anchor     : '100%'
                        //-------- store --------
                        ,displayField  : 'status'
                        ,valueField    : 'id'
                        ,triggerAction : 'all'
                        ,mode          : 'local'    
                        ,store         : new Ext.data.SimpleStore({
                                                     fields : ['id', 'status']
                                                    ,data   : data_kmstatus})                     
                    }
                    //-------- SPECIALTIES -----------
					,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Specialty Scheme'
                        ,anchor     : '100%'
                        //-------- store --------
                        ,displayField  : 'specialtyscheme'
                        ,valueField    : 'specialtyid'
                        ,triggerAction : 'all'
                        ,mode          : 'local'    
                        ,store         :new Ext.data.SimpleStore({
                                                     fields : ['specialtyid', 'specialtyscheme']
                                                    ,data   : data_specialtyscheme})                     
	                    ,listeners:{select:{fn:function(combo, value) {
	                        var comboSpecialty = Ext.getCmp('specialty-codes');        
	                        comboSpecialty.clearValue();
	                        comboSpecialty.store.filter('specialtyid', combo.getValue());
	                        }}
	                    }						
                    }
                    ,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Specialty Code'
                        ,anchor     : '100%'
                        //-------- store --------
                        ,displayField  : 'specialtycode'
                        ,valueField    : 'specialtyid'
						,id            : 'specialty-codes'
                        ,triggerAction : 'all'
                        ,mode          : 'local'    
                        ,store         :new Ext.data.SimpleStore({
                                                     fields : ['specialtyid', 'specialtycode','specialtydesc']
                                                    ,data   : data_specialtycode})                     
						,lastQuery     : ''
                        ,tpl: '<tpl for="."><div ext:qtip="{specialtycode}. {specialtydesc}" class="x-combo-list-item">{specialtycode}</div></tpl>'
                        ,typeAhead: true
                        ,selectOnFocus:true
                    }                
                    //-------- FACTS ----------------
                    ,{                            
                         xtype         : 'combo'
                        ,fieldLabel    : 'Fact Type'
                        ,anchor        : '100%'
                        //-------- store --------
                        ,displayField  : 'facttype'
                        ,valueField    : 'id'
                        ,triggerAction : 'all'
                        ,mode          : 'local'    
                        ,store         : new Ext.data.SimpleStore({
                                                     fields : ['id', 'facttype']
                                                    ,data   : data_facttype})                     
                    }
					,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Fact Scheme'
                        ,anchor     : '100%'
                        //-------- store --------
                        ,displayField  : 'factscheme'
                        ,valueField    : 'factschemeid'
                        ,triggerAction : 'all'
                        ,mode          : 'local'    
                        ,store         :new Ext.data.SimpleStore({
                                                     fields : ['factschemeid', 'factscheme']
                                                    ,data   : data_factscheme})                     
                        ,listeners:{select:{fn:function(combo, value) {
                            var comboFact = Ext.getCmp('fact-codes');        
                            comboFact.clearValue();
                            comboFact.store.filter('factschemeid', combo.getValue());
                            }}
                        }                       
                    }
                    ,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Fact Code'
                        ,anchor     : '100%'
                        //-------- store --------
                        ,displayField  : 'factcode'
                        ,valueField    : 'factschemeid'
                        ,id            : 'fact-codes'
                        ,triggerAction : 'all'
                        ,mode          : 'local'    
                        ,store         :new Ext.data.SimpleStore({
                                                     fields : ['factschemeid', 'factcode','codename']
                                                    ,data   : data_factcode})                     
                        ,lastQuery     : ''
						,tpl: '<tpl for="."><div ext:qtip="{factcode}. {codename}" class="x-combo-list-item">{factcode}</div></tpl>'
						,typeAhead: true
						,selectOnFocus:true												
                    }             				
					//-------- POPULATION ------------       
                    ,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Demographic Status'
                        ,anchor     : '100%'
                        //-------- store --------
                        ,displayField  : 'status'
                        ,valueField    : 'id'
                        ,triggerAction : 'all'
                        ,mode          : 'local'    
                        ,store         :new Ext.data.SimpleStore({
                                                     fields : ['id', 'status']
                                                    ,data   : data_kmstatus})                     
                    }
                    ,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Demographic Scope'
                        ,anchor     : '100%'
                        //-------- store --------
                        ,displayField  : 'orglevel'
                        ,valueField    : 'id'
                        ,triggerAction : 'all'
                        ,mode          : 'local'    
                        ,store         :new Ext.data.SimpleStore({
                                                     fields : ['id', 'orglevel']
                                                    ,data   : data_orglevel})                     
                    }
                    /*TODO Demographic Name - LEAVING OUT because search on this field doesn't make sense.
                    ,{
                         xtype      : 'textfield'
                        ,fieldLabel : 'Demographic Name'
                        ,anchor     : '100%'
                    }
                    */
                    ,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Demographic Scheme'
                        ,anchor     : '100%'
                        //-------- store --------
                        ,displayField  : 'demogscheme'
                        ,valueField    : 'demogchemeid'
                        ,triggerAction : 'all'
                        ,mode          : 'local'    
                        ,store         :new Ext.data.SimpleStore({
                                                     fields : ['demogchemeid', 'demogscheme']
                                                    ,data   : data_demographicscheme})                     
                        ,listeners:{select:{fn:function(combo, value) {
                            var comboFact = Ext.getCmp('demographic-codes');        
                            comboFact.clearValue();
                            comboFact.store.filter('demogchemeid', combo.getValue());
                            }}
                        }                       
                    }
                    ,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Demographic Code'
                        ,anchor     : '100%'
                        //-------- store --------
                        ,displayField  : 'codevalue'
                        ,valueField    : 'demogchemeid'
                        ,id            : 'demographic-codes'
                        ,triggerAction : 'all'
                        ,mode          : 'local'    
                        ,store         :new Ext.data.SimpleStore({
                                                     fields : ['demogchemeid', 'demogcode','codevalue','codetips']
                                                    ,data   : data_demographiccode})                     
                        ,lastQuery     : ''
                        ,tpl: '<tpl for="."><div ext:qtip="{demogcode}. {codetips}" class="x-combo-list-item">{codevalue}</div></tpl>'
                        ,typeAhead: true
                        ,selectOnFocus:true
                    }                
                    ,{
                         xtype      : 'textfield'
                        ,fieldLabel: 'Demographic Value'
                        ,anchor     : '100%'
                    }
					/*
                    //TODO -------- INFERERENCE -------------
                    ,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Fact Scheme'
                        ,anchor     : '100%'
                    }
                    ,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Fact Code'
                        ,anchor     : '100%'
                    } 
                    */            
                    //-------- TASKS ----------------
                    ,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Task Type'
                        ,anchor     : '100%'
                        //-------- store --------
                        ,displayField  : 'tasktype'
                        ,valueField    : 'id'
                        ,triggerAction : 'all'
                        ,mode          : 'local'    
                        ,store         : new Ext.data.SimpleStore({
                                                     fields : ['id', 'tasktype']
                                                    ,data   : data_tasktype})                     
                    }
                    /*TODO Task Scheme/Code - LEAVING OUT because not sure of content of these fields.
                    ,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Task Scheme'
                        ,anchor     : '100%'
                    }
                    ,{
                         xtype      : 'combo'
                        ,fieldLabel : 'Task Code'
                        ,anchor     : '100%'
                    }
                    */
                    ]
        }); 

    
        //creating the window that will contain the form  
        var win = new Ext.Window({  
             title      : 'KnoledgeModule Search'    
            ,layout     : 'form'
            ,width      : 400
            ,height     : 500
            ,closable   : true
            ,border     : true            
            ,autoScroll : true        
            ,buttonAlign: 'right' //buttons aligned to the right  
            ,buttons    : [{text: 'Search', handler: execSearch}
			              ,{text: 'Cancel', handler: function(){win.hide();}}] 
            ,closeAction: 'hide'
            ,items      : this.form //assigning the form 
        });   

        win.show();

    }, //end-_onSelectionChange

    
    /**
     * execSearch()
     * THis function's job is to initiate the KMRSearch api, to get back a list of KM_IDs.
     */
    execSearch : function() {
        Ext.Msg.alert('Boo', 'Here I am again.');

    }//end-execSearch

});