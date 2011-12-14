{
	"title":"KMR",
	"namespace":"http://b3mn.org/stencilset/kmr-1.0#",
	"description":"This is the KMR stencil set specification.",
 	"propertyPackages": [
 		{
 			"name":"baseAttributes",
 			"properties": [
				{
					"id":"name",
					"type":"String",
					"title":"Name",
					"value":"",
					"description":"The descriptive name of the BPMN element.",
					"description_de":"Bezeichnung des BPMN-Elementes.",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines" : false,
					"refToView":"text_name"	
				},
				{
					"id":"documentation",
					"type":"Text",
					"title":"Documentation",
					"title_de":"Dokumentation",
					"value":"",
					"description":"This attribute is used to annotate the BPMN element, such as descriptions and other documentation.",
					"description_de":"Der Modellierer kann weiteren Text zur Dokumentation des BPMN-Elementes einfügen.",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines":true,
					"popular" : true
				}
 			]
 		},
		{
			"name" : "bgColor",
			"properties" : [
				{
					"id":"bgcolor",
					"type":"Color",
					"title":"BackgroundColor",
					"title_de":"Hintergrundfarbe",
					"value":"#ffffff",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView": "fill_el",
					"fill":true,
					"stroke":false
				}
			]
		},
		{
			"name" : "condition",
			"properties" : [
				{
					"id":"condition",
					"type":"String",
					"title":"Condition",
					"title_de":"Bedingung",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"popular":true
				}
			]
		},
		{
			"name":"boundaryevent",
			"properties":[
				{
					"id":"boundarycancelactivity",
					"type":"Boolean",
					"title":"CancelActivity",
					"title_de":"Aktivität abbrechen",
					"value":"",
					"description":"Denotes whether the activity should be cancelled or not, i.e., whether the boundary catch event acts as an error or an escalation. If the activity is not cancelled, multiple instances of that handler can run concurrently.",
					"description_de":"Kennzeichnet ob eine Aktivität abgebrochen werden soll.",
					"readonly":false,
					"optional":true
				}
			]
		},
 		{
 			"name":"catchEventAttributes",
 			"properties":[
 				{
					"id":"eventdefinitionref",
					"type":"String",
					"title":"EventDefinitionRef",
					"title_de":"Ereignis-Definitions Referenz",
					"value":"",
					"description":"EventDefinitionRefs (EventDefinition) is an attribute that defines the type of reusable triggers expected for a catch Event.",
					"description_de":"Das Attribut EreignisDefinitionsRef (EreignisDefinition) definiert einen wiederverwendbaren Auslösertyp für ein eintretendes Ereignis.",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines":true
				},
				{
					"id":"eventdefinitions",
					"type":"String",
					"title":"EventDefinitions",
					"title_de":"EreignisDefinitionen",
					"value":"",
					"description":"EventDefinitions (EventDefinition) is an attribute that defines the type of contained triggers expected for a catch Event.",
					"description_de":"Das Attribut EreignisDefinitions (EreignisDefinition) definiert die beinhaltenten Auslöser für ein eintretendes Ereignis.",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines":true
				},
				{
					"id":"dataoutputassociations",
					"type":"Text",
					"title":"DataOutputAssociations",
					"title_de":"Daten Ausgangs-Assoziation",
					"value":"",
					"description":"The Data Associations of the catch Event.",
					"description_de":"Die Daten-Assoziation für ein eintretendes Ereignis.",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines":true
				},
				{
					"id":"dataoutput",
					"type":"Text",
					"title":"DataOutput",
					"title_de":"Daten-Ausgang",
					"value":"",
					"description":"The Data Associations of the catch Event.",
					"description_de":"Die Daten-Assoziation für ein eintretendes Ereignis.",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines":true
				},
				{
					"id":"outputset",
					"type":"Text",
					"title":"OutputSet",
					"title_de":"Ausgabe-Menge",
					"value":"",
					"description":"The OutputSet for the catch Event.",
					"description_de":"Die Ausgabe-Sätze für ein eintretendes Ereignis.",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines":true
				}
 			]
 		},
 		{
 			"name":"throwEventAttributes",
 			"properties":[
 				{
					"id":"eventdefinitionref",
					"type":"String",
					"title":"EventDefinitionRef",
					"title_de":"Ereignis Definitions-Referenz",
					"value":"",
					"description":"EventDefinitionRefs (EventDefinition) is an attribute that defines the type of reusable triggers expected for a catch Event.",
					"description_de":"Das Attribut EreignisDefinitionsRef (EreignisDefinition) definiert einen wiederverwendbaren Auslösertyp für ein eintretendes Ereignis.",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines":true
				},
				{
					"id":"eventdefinitions",
					"type":"String",
					"title":"EventDefinitions",
					"title_de":"EreignisDefinitionen",
					"value":"",
					"description":"EventDefinitions (EventDefinition) is an attribute that defines the type of contained triggers expected for a catch Event.",
					"description_de":"Das Attribut EreignisDefinitions (EreignisDefinition) definiert die beinhaltenten Auslöser für ein eintretendes Ereignis.",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines":true
				},
				{
					"id":"datainputassociations",
					"type":"String",
					"title":"DataInputAssociations",
					"title_de":"Daten Ausgangs-Assoziationen",
					"value":"",
					"description":"The Data Associations of the throw Event.",
					"description_de":"Die Daten-Assoziationen für ein auslösendes Ereignis.",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines":true
				},
				{
					"id":"datainput",
					"type":"String",
					"title":"Data Input",
					"title_de":"Daten-Eingang",
					"value":"",
					"description":"The Data Associations of the throw Event.",
					"description_de":"Die Daten-Assoziation für ein auslösendes Ereignis.",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines":true
				},
				{
					"id":"inputset",
					"type":"String",
					"title":"InputSet",
					"title_de":"Ausgabe-Menge",
					"value":"",
					"description":"The InputSet for the throw Event.",
					"description_de":"Die Ausgabe-Sätze für ein auslösendes Ereignis.",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines":true
				}
 			]
 		},
 		{
 			"name" : "compensationThrowing",
 			"properties" : [
 				{
 					"id":"waitforcompletion",
					"type":"Boolean",
					"title":"Wait for completion",
					"title_de":"Auf Fertigstellung warten",
					"value":true,
					"popular":true,
					"description":"Determine whether a throw compensation is performed synchronously or asynchronously.",
					"description_de":"Gibt an, ob die erzeugt Kompensierung synchron oder asynchron aufgerufen wird.",
					"readonly":false,
					"optional":true
 				}
 			]
 		},
 		{
 			"name" : "compensation",
 			"properties" : [
 				{
 					"id":"activityref",
					"type":"String",
					"title":"Activity reference",
					"title_de":"Aktivitätsreferenz",
					"value":"",
					"popular":true,
					"description":"The activity related to the compensation event",
					"description_de":"Die Kompensierung betreffende Aktivität",
					"readonly":false,
					"optional":true
 				}
 			]
 		},
 		{
 			"name":"interrupting",
 			"properties":[
 				{
					"id":"isinterrupting",
					"type":"Boolean",
					"title":"Is Interrupting",
					"title_de":"ist unterbrechend",
					"value":true,
					"description":"This attribute denotes whether the Sub-Process encompassing the Event Sub-Process should be cancelled or not.",
					"description_de":"Dieses Attribut gibt an, ob der umfassende Subprozess abgebrochen werden soll.",
					"inverseBoolean":false,
					"readonly":false,
					"optional":true,
					"refToView": [
						"frame",
						"frame2"
					]
				}
 			]
 		},
		{
			"name" : "diagram",
			"properties" : [
				{
					"id":"executable",
					"type":"Boolean",
					"title":"executable",
					"title_de":"executable",
					"value":true,
					"description":"executable",
					"description_de":"executable",
					"readonly":false,
					"optional":true
				},
				{
					"id":"package",
					"type":"String",
					"title":"package",
					"title_de":"package",
					"value":"",
					"description":"package",
					"description_de":"package",
					"readonly":false,
					"optional":true
				},
				{
					"id":"vardefs",
					"type":"Text",
					"title":"Variable Definitions",
					"title_de":"Variable Definitions",
					"value":"",
					"description":"Comma-separated variable definitions",
					"description_de":"Durch Komma getrennte Variablendeklarationen",
					"readonly":false,
					"optional":true
				},
				{
					"id":"lanes",
					"type":"Text",
					"title":"Lanes",
					"title_de":"Lanes",
					"value":"",
					"description":"Comma-separated lane names",
					"description_de":"Durch Komma getrennte Lanes",
					"readonly":false,
					"optional":true
				},
				{
					"id":"imports",
					"type":"Text",
					"title":"Imports",
					"title_de":"Imports",
					"value":"",
					"description":"Comma-separated imports",
					"readonly":false,
					"optional":true
				},
				{
					"id":"globals",
					"type":"Text",
					"title":"Globals",
					"title_de":"Globals",
					"value":"",
					"description":"Comma-separated globals",
					"readonly":false,
					"optional":true
				},
				{
					"id":"id",
					"type":"String",
					"title":"id",
					"title_de":"id",
					"value":"",
					"description":"id",
					"description_de":"id",
					"readonly":false,
					"optional":true
				},
				{
					"id":"version",
					"type":"String",
					"title":"Version",
					"value":"",
					"description":"This defines the Version number of the Diagram.",
					"description_de":"Setzt die Versionsnummer des Diagramms.",
					"readonly":false,
					"optional":true,
					"length":"50"
				},
				{
					"id":"author",
					"type":"String",
					"title":"Author",
					"title_de":"Autor",
					"value":"",
					"description":"This holds the name of the author of the Diagram.",
					"description_de": "Name des Autors des Diagramms.",
					"readonly":false,
					"optional":true,
					"length":"50"
				},
				{
					"id":"language",
					"type":"String",
					"title":"Language",
					"title_de":"Sprache",
					"value":"English",
					"value_de":"Deutsch",
					"description":"This holds the name of the language in which text is written.",
					"description_de":"Sprache, in welcher der Text geschrieben ist.",
					"readonly":false,
					"optional":true,
					"length":"50"
				},
				{	
					"id":"namespaces",
					"type":"Complex",
					"title":"Namespaces",
					"value":"",
					"description":"Additional namespaces and theire prefixes used in the diagram., ",
					"description_de":"Optionale Namespaces, die im Diagramm genutzt werden.",
					"readonly":false,
					"optional":true,
					"complexItems": [
						{
							"id":"prefix",
							"name":"Prefix",
							"type":"String",
							"value":"",
							"width":100,
							"optional":false 
						},
						{
							"id":"url",
							"name":"URL",
							"type":"String",
							"value":"",
							"width":200,
							"optional":false 
						}
					]
				},
				{
					"id":"targetnamespace",
					"type":"String",
					"title":"Target Namespace",
					"title_de":"Ziel-Namensraum",
					"value":"http://www.omg.org/bpmn20",
					"description":"Defines the XML namespace of the elements inside the document.",
					"description_de":"Definiert den XML-Namensraum, der für die Elemente im Dokument verwendet wird.",
					"readonly":false,
					"optional":true,
					"length":"50"
				},
				{
					"id":"expressionlanguage",
					"type":"String",
					"title":"ExpressionLanguage",
					"title_de":"Ausdruckssprache",
					"value":"http://www.w3.org/1999/XPath",
					"description":"A Language may be provided so that the syntax of expressions used in the Diagram can be understood.",
					"description_de":"Sprache, mit welcher im Diagramm verwendete Ausdrücke beschrieben sind.",
					"readonly":false,
					"optional":true,
					"length":"50"
				},
				{
					"id":"typelanguage",
					"type":"String",
					"title":"TypeLanguage",
					"title_de":"Typsprache",
					"value":"http://www.w3.org/2001/XMLSchema",
					"description":"This attribute identifies the type system used by the elements of this Definition.",
					"description_de":"Definiert das Typsystem der Elemente dieses Diagramms.",
					"readonly":false,
					"optional":true,
					"length":"50"
				},
				{
					"id":"creationdate",
					"type":"Date",
					"title":"CreationDate",
					"title_de":"Erstellt am",
					"value":"",
					"description":"This defines the date on which the Diagram was created.",
					"description_de":"Datum an dem das Diagramm erstellt wurde.",
					"readonly":false,
					"optional":true,
					"dateFormat":"j/m/y"
				},
				{
					"id":"modificationdate",
					"type":"Date",
					"title":"ModificationDate",
					"title_de":"Geändert am",
					"value":"",
					"description":"This defines the date on which the Diagram was last modified.",
					"description_de":"Datum der letzten Änderung.",
					"readonly":false,
					"optional":true,
					"dateFormat":"j/m/y"
				}
			]
		},
		{
			"name": "flowElement",
			"properties" : [
				{
					"id":"categories",
					"type":"String",
					"title":"Categories",
					"title_de":"Kategorien",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":"50",
					"wrapLines":true
				}
			]
		},
		{
			"name" : "itemAwareElement",
			"properties" : [
				{
					"id" : "itemsubjectref",
					"type" : "String",
					"title" : "ItemSubjectRef",
					"title_de" : "ItemSubjectRef",
					"description" : "Specification of the items that are stored or conveyed by the ItemAwareElement",
					"description_de" : "",
					"readonly" : false,
					"optional" : true,
					"length" : 50,
					"wrapLines" : true
				},
				{
					"id" : "datastate",
					"type" : "String",
					"title" : "DataState",
					"title_de" : "Daten-Zustand",
					"description" : "A reference to the DataState, which defines certain states for the data contained in the item.",
					"description_de" : "",
					"readonly" : false,
					"optional" : true,
					"length" : 50,
					"wrapLines" : true
				}
			]
		},
		{
			"name":"properties",
			"properties": [
				{
					"id":"properties",
					"type":"Complex",
					"title":"Properties",
					"title_de":"Eigenschaften",
					"value":"",
					"description":"Modeler-defined properties MAY be added to an Activity. These properties are local to the Activity. (e.g., Add Customer.Customer Name).",
					"description_de":"Lokale Eigenschaften können der Aktivität hinzugefügt werden. Diese werden ausschließlich während der Abarbeitung der Aktivität angewendet.",
					"readonly": 	false,
					"optional": 	false,
					"complexItems": [
						{
							"id":"name",
							"name":"Name",
							"type":"String",
							"value":"",
							"width":100,
							"optional":false 
						},
						{
							"id":"datastate",
							"name":"DataState",
							"name_de":"DatenStatus",
							"type":"String",
							"value":"",
							"width":80,
							"optional":true
						},
						{
							"id":"itemkind",
							"name":"ItemKind",
							"name_de":"Elementart",
							"type":"Choice",
							"value":"Information",
							"items" : [
					           {
					        	   "id":"information",
					        	   "title":"Information",
					        	   "value":"Information"
					           },
					           {
					        	   "id":"physical",
					        	   "title":"Physical",
					        	   "value":"Physical"
					           }
							           
							],
							"width":80,
							"optional":true
						},
						{
							"id":"structure",
							"name":"Structure",
							"name_de":"Struktur",
							"type":"String",
							"value":"",
							"width":100,
							"optional":true
						},
						{
							"id":"iscollection",
							"name":"isCollection",
							"name_de":"isKollektion",
							"type":"Boolean",
							"value":false,
							"width":50,
							"optional":true
						}
					]
				}
			]
		},
		{
			"name" : "iospecification",
			"properties" : [
				{
					"id":"datainputset",
					"type":"Text",
					"title":"DataInputSet",
					"title_de":"Dateneingabesatz",
					"value":"",
					"description":"An InputSet is a collection of DataInput elements that together define a valid set of data inputs.",
					"description_de":"Ein Eingabesatz ist eine Zusammenstellung von Eingabe-Datenobjekten, die zusammen einen gültigen Satz von Dataeingaben definieren.",
					"readonly":false,
					"optional":true,
					/** "complexItems": [
						{
							"id":"name",
							"name":"Name",
							"type":"String",
							"value":"",
							"width":100,
							"optional":false 
						},
						{
							"id":"optional",
							"name":"Optional",
							"type":"Boolean",
							"value":false,
							"width":50,
							"optional":true
						},
						{
							"id":"whileexecuting",
							"name":"WhileExecuting",
							"name_de":"Während der Ausführung",
							"type":"Boolean",
							"value":false,
							"width":80,
							"optional":true
						}
					] **/
				},            
				{
					"id":"dataoutputset",
					"type":"Text",
					"title":"DataOutputSet",
					"title_de":"Datenausgabesatz",
					"value":"",
					"description":"An OutputSet is a collection of DataOutputs elements that together may be produced as output from an Activity or Event.",
					"description_de":"Ein Ausgabesatz ist eine Zusammenstellung von Ausgabe-Datenobjekten, die zusammen als Ausgabe einer Aktivität oder eines Ereignisses produziert werden.",
					"readonly":false,
					"optional":true,
					/** "complexItems": [
						{
							"id":"name",
							"name":"Name",
							"type":"String",
							"value":"",
							"width":100,
							"optional":false 
						},
						{
							"id":"optional",
							"name":"Optional",
							"type":"Boolean",
							"value":false,
							"width":50,
							"optional":true
						},
						{
							"id":"whileexecuting",
							"name":"WhileExecuting",
							"name_de":"Während der Ausführung",
							"type":"Boolean",
							"value":false,
							"width":80,
							"optional":true
						}
					] **/
				}
			]
		},
		{
			"name" : "activity",
			"properties": [
				{
					"id":"startquantity",
					"type":"Integer",
					"title":"StartQuantity",
					"title_de":"Startanzahl",
					"value":1,
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"",
					"min":"1"
				},
				{
					"id":"completionquantity",
					"type":"Integer",
					"title":"CompletionQuantity",
					"title_de":"Fertigstellungsanzahl",
					"value":1,
					"description":"Defines the number of tokens that must be generated from the activity",
					"description_de":"Legt die Anzahl der Token fest, die von der Aktivität generiert werden müssen.",
					"readonly":false,
					"optional":false,
					"refToView":"",
					"min":"1"
				},
				{
					"id":"isforcompensation",
					"type":"Boolean",
					"title":"Is for Compensation",
					"title_de":"ist für Kompensation",
					"value":false,
					"description":"A flag that identifies whether this activity is intended for the purposes of compensation.",
					"description_de":"Ein Flag, das angibt ob diese Aktivität für Kompensierungszwecke vorgesehen ist.",
					"readonly":false,
					"optional":true,
					"refToView":"compensation"
				},
				{
					"id":"assignments",
					"type":"Text",
					"title":"Assignments",
					"title_de":"Zuweisungen",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					/** "complexItems": [
						{
							"id":"to",
							"name":"To",
							"name_de":"Auf",
							"type":"String",
							"value":"",
							"width":100,
							"optional":false 
						},
						{
							"id":"from",
							"name":"From",
							"name_de":"Aus",
							"type":"String",
							"value":"",
							"width":100,
							"optional":false
						},
						{
							"id":"assigntime",
							"name":"AssignTime",
							"name_de":"Zuweisungszeit",
							"type":"Choice",
							"value":"Start",
							"width":100,
							"optional":true,
							"items": [
								{
									"id":"c1",
									"title":"Start",
									"value":"Start",
									"refToView":""
								},
								{
									"id":"c2",
									"title":"End",
									"title_de":"Ende",
									"value":"End",
									"refToView":""
								}
							]
						}
					] **/
				},
				{
					"id":"callacitivity",
					"type":"Boolean",
					"title":"is a Call Activity",
					"title_de":"ist eine Call Activity",
					"value":false,
					"description":"a Call Activity is a wrapper for a globally defined Sub-Process that is reused in the current process.",
					"readonly":false,
					"optional":"true",
					"refToView":"callActivity"
				}
			]
		},
		// start custom activity properties
		{
			"name" : "customactivity",
			"properties": [
				{
					"id":"isforcompensation",
					"type":"Boolean",
					"title":"Is for Compensation",
					"title_de":"ist für Kompensation",
					"value":false,
					"description":"A flag that identifies whether this activity is intended for the purposes of compensation.",
					"description_de":"Ein Flag, das angibt ob diese Aktivität für Kompensierungszwecke vorgesehen ist.",
					"readonly":true,
					"optional":true,
					"refToView":"compensation"
				},
				{
					"id":"callacitivity",
					"type":"Boolean",
					"title":"is a Call Activity",
					"title_de":"ist eine Call Activity",
					"value":false,
					"description":"a Call Activity is a wrapper for a globally defined Sub-Process that is reused in the current process.",
					"readonly":true,
					"optional":"true",
					"refToView":"callActivity"
				}
			]
		},
		// end custom activity properties
		{
			"name":"operation",
			"properties": [
				{
					"id":"operationname",
					"type":"String",
					"title":"OperationName",
					"title_de":"Operationsname",
					"value":"",
					"description":"The descriptive name for the operation element.",
					"description_de":"Bezeichnung der Operation", 
					"readonly":false,
					"optional":"true"
				},
				{
					"id":"inmessagename",
					"type":"String",
					"title":"InMessageName",
					"title_de":"Eingangs-Nachricht-Name",
					"value":"",
					"description":"The descriptive name for the InMessage element",
					"description_de":"Bezeichnung der Eingangs-Nachricht", 
					"readonly":false,
					"optional":"true"
				},
				{
					"id":"inmsgitemkind",
					"type":"Choice",
					"title":"InMessageItemKind",
					"title_de":"Eingangs-Nachricht-Typ",
					"value":"Information",
					"description":"This defines the nature of the Item. Possible values are Physical or Information. The default value is Information.",
					"description_de":"Beim Typ der Nachricht kann zwischen Physisch und Information unterschieden werden.",
					"readonly":false,
					"optional":true,
					"items": [
						{
							"id":"c1",
							"title":"Physical",
							"value":"Physical"
						},
						{
							"id":"c2",
							"title":"Information",
							"value":"Information"
						}
					]
				},
				{
					"id":"inmsgstructure",
					"type":"String",
					"title":"InMessageStructure",
					"title_de":"Eingangs-Nachricht-Struktur",
					"value":"",
					"description":"This defines the nature of the Item. Possible values are Physical or Information. The default value is Information.",
					"description_de":"Beim Typ der Nachricht kann zwischen Physisch und Information unterschieden werden.",
					"readonly":false,
					"optional":true
				},
				{
					"id":"inmsgimport",
					"type":"Complex",
					"title":"InMessageImport",
					"title_de":"Eingangs-Nachricht-Import",
					"value":"",
					"description":"Identifies the location of the data structure and its format. If the importType attribute is left unspecified, the typeLanguage specified in the Definitions is assumed.",
					"description_de":"Definiert den Ort der Datenstruktur und ihr Format.",
					"readonly":false,
					"optional":true,
					"complexItems": [
						{
				        	"id":"c1",
				        	"type":"String",
				        	"width":200,
				        	"value":"",
				        	"name":"ImportType",
				        	"name_de":"Importtyp"
				        },
						{
				        	"id":"c2",
				        	"type":"String",
				        	"width":100,
				        	"value":"",
				        	"name":"Location"
				        },
						{
				        	"id":"c3",
				        	"type":"String",
				        	"width":200,
				        	"value":"",
				        	"name":"Namespace",
				        	"name_de":"Namensraum"
				        }
					]
				},
				{
					"id":"inmsgiscollection",
					"type":"Boolean",
					"title":"InMessageIsCollection",
					"title_de":"Eingangs-Nachricht-Ist-Liste",
					"value":false,
					"description":"Setting this flag to true indicates that the actual data type is a collection.",
					"description_de":"Ture signalisiert, dass der Datentyp eine Liste ist.",
					"readonly":false,
					"optional":true
				},
				{
					"id":"outmessagename",
					"type":"String",
					"title":"OutMessageName",
					"title_de":"Ausgangs-Nachricht-Name",
					"value":"",
					"description":"The descriptive name for the OutMessage element",
					"description_de":"Bezeichnung der Ausgangs-Nachricht", 
					"readonly":false,
					"optional":"true"
				},
				{
					"id":"outmsgitemkind",
					"type":"Choice",
					"title":"OutMessageItemKind",
					"title_de":"Ausgangs-Nachricht-Typ",
					"value":"Information",
					"description":"This defines the nature of the Item. Possible values are Physical or Information. The default value is Information.",
					"description_de":"Beim Typ der Nachricht kann zwischen Physisch und Information unterschieden werden.",
					"readonly":false,
					"optional":true,
					"items": [
						{
							"id":"c1",
							"title":"Physical",
							"value":"Physical"
						},
						{
							"id":"c2",
							"title":"Information",
							"value":"Information"
						}
					]
				},
				{
					"id":"outmsgstructure",
					"type":"String",
					"title":"OutMessageStructure",
					"title_de":"Ausgangs-Nachricht-Struktur",
					"value":"",
					"description":"This defines the nature of the Item. Possible values are Physical or Information. The default value is Information.",
					"description_de":"Beim Typ der Nachricht kann zwischen Physisch und Information unterschieden werden.",
					"readonly":false,
					"optional":true
				},
				{
					"id":"outmsgimport",
					"type":"Complex",
					"title":"OutMessageImport",
					"title_de":"Ausgangs-Nachricht-Import",
					"value":"",
					"description":"Identifies the location of the data structure and its format. If the importType attribute is left unspecified, the typeLanguage specified in the Definitions is assumed.",
					"description_de":"Definiert den Ort der Datenstruktur und ihr Format.",
					"readonly":false,
					"optional":true,
					"complexItems": [
						{
				        	"id":"c1",
				        	"type":"String",
				        	"width":200,
				        	"value":"",
				        	"name":"ImportType",
				        	"name_de":"Importtyp"
				        },
						{
				        	"id":"c2",
				        	"type":"String",
				        	"width":100,
				        	"value":"",
				        	"name":"Location"
				        },
						{
				        	"id":"c3",
				        	"type":"String",
				        	"width":200,
				        	"value":"",
				        	"name":"Namespace",
				        	"name_de":"Namensraum"
				        }
					]
				},
				{
					"id":"outmsgiscollection",
					"type":"Boolean",
					"title":"OutMessageIsCollection",
					"title_de":"Ausgangs-Nachricht-Ist-Liste",
					"value":false,
					"description":"Setting this flag to true indicates that the actual data type is a collection.",
					"description_de":"Ture signalisiert, dass der Datentyp eine Liste ist.",
					"readonly":false,
					"optional":true
				}
			]
		},
		{
			"name" : "loopcharacteristics",
			"properties" : [
				{
					"id":"looptype",
					"type":"Choice",
					"title":"LoopType",
					"title_de":"Schleifentyp",
					"value":"None",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"",
					"items": [
						{
							"id":"c1",
							"title":"None",
							"title_de":"Keine Schleife",
							"value":"None",
							"refToView":"none"
						},
						{
							"id":"c2",
							"title":"Standard",
							"title_de":"Standard",
							"value":"Standard",
							"icon" : "activity/list/looptype.standard.png",
							"refToView":"loop"
						},
						{
							"id":"c3",
							"title":"MI Parallel",
							"title_de":"MI parallel",
							"value":"Parallel",
							"icon" : "activity/list/mi.parallel.png",
							"refToView":"parallel"
						},
						{
							"id":"c4",
							"title":"MI Sequential",
							"title_de":"MI sequentialisiert",
							"value":"Sequential",
							"icon" : "activity/list/mi.sequential.png",
							"refToView":"sequential"
						}	
					]
				},
				{
					"id":"testbefore",
					"type":"Boolean",
					"title":"TestBefore",
					"title_de":"",
					"value":false,
					"description":"Flag that controls whether the loop condition is evaluated at the beginning (testBefore = true) or at the end (testBefore = false)of the loop iteration.",
					"description_de":"Gibt an ob die Schleifen-Bedingung vor (true) oder nach (false) dem Schleifendurchlauf überprüft wird."
				},
				{
					"id":"loopcondition",
					"type":"String",
					"title":"LoopCondition",
					"title_de":"Schleifenbedingung",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false
				},
				{
					"id":"loopmaximum",
					"type":"Integer",
					"title":"LoopMaximum",
					"title_de":"Schleifenmaximum",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"min":"0"
				},
				{
					"id":"loopcardinality",
					"type":"String",
					"title":"LoopCardinality",
					"title_de":"Anzahl Schleifen",
					"value":"",
					"description":"A numeric Expression that controls the number of Activity instances that will be created. This Expression MUST evaluate to an integer.",
					"readonly":false,
					"optional":true
				},
				{
					"id":"loopdatainput",
					"type":"String",
					"title":"LoopDataInput",
					"title_de":"Schleifen-Datan-Eingabe",
					"value":"",
					"description":"A reference to a DataInput which is part of the Activity’s InputOutputSpecification. This DataInput is used to determine the number of Activity instances, one Activity instance per item in the collection of data stored in that DataInput element.",
					"readonly":false,
					"optional":true
				},
				{
					"id":"loopdataoutput",
					"type":"String",
					"title":"LoopDataInput",
					"title_de":"Schleifen-Datan-Ausgabe",
					"value":"",
					"description":"A reference to a DataOutput which is part of the Activity’s InputOutputSpecification.",
					"readonly":false,
					"optional":true
				},
				{
					"id":"inputdataitem",
					"type":"String",
					"title":"InputDataItem",
					"title_de":"Eingabe-Daten-Element",
					"value":"",
					"description":"A Property, representing for every Activity instance the single item of the collection stored in the loopDataInput.",
					"readonly":false,
					"optional":true
				},
				{
					"id":"outputdataitem",
					"type":"String",
					"title":"OutputDataItem",
					"title_de":"Ausgabe-Daten-Element",
					"value":"",
					"description":"A Property, representing for every Activity instance the single item of the collection stored in the loopDataOutput.",
					"readonly":false,
					"optional":true
				},
				{
					"id":"behavior",
					"type":"Choice",
					"title":"Behavior",
					"title_de":"Schleifen-Verhalten",
					"description":"The attribute behavior acts as a shortcut for specifying when events shall be thrown from an Activity instance that is about to complete. It can assume values of none, one, all, and complex.",
					"description_de":"Das Schleifen-Verhalten definiert das Auslöseverhalten von Ereignissen, wenn die Instanz einer Aktivität beendet wird. Mögliche Werte sind none, one, all und complex.",
					"value":"all",
					"items": [
				        {
				        	"id":"cnone",
				        	"value":"None",
				        	"title":"None"
				        },
				        {
				        	"id":"cone",
				        	"value":"One",
				        	"title":"One"
				        },
				        {
				        	"id":"call",
				        	"value":"All",
				        	"title":"All"
				        },
				        {
				        	"id":"ccomplex",
				        	"value":"Complex",
				        	"title":"Complex"
				        }
					]
				},
				{
					"id":"complexbehaviordefinition",
					"type":"Complex",
					"title":"ComplexBehaviorDefinition:",
					"title_de":"Komplexe Verhaltensdefinition",
					"description":"Controls when and which Events are thrown in case behavior is set to complex.",
					"description_de":"Kontrolliert wann und welche Ereignisse ausgelöst werden, wenn das Verhalten complex ausgewählt ist.",
					"value":"",
					"optional":true,
					"readonly":false,
					"complexItems": [
				        {
				        	"id":"cexpression",
				        	"type":"String",
				        	"width":200,
				        	"value":"",
				        	"name":"Condition",
				        	"name_de":"Bedingung"
				        },
				        {
				        	"id":"ceventdefinition",
				        	"type":"Choice",
				        	"value":"signal",
				        	"width":100,
				        	"name":"EventDefinition",
				        	"name_de":"Ereignis-Definition",
				        	"items":[
			        	        {
			        	        	"id":"cnone",
			        	        	"value":"None",
			        	        	"title":"None"
			        	        },
			        	        {
			        	        	"id":"cmessage",
			        	        	"value":"Message",
			        	        	"title":"Message"
			        	        },
			        	        {
			        	        	"id":"cescalation",
			        	        	"value":"Escalation",
			        	        	"title":"Escalation"
			        	        },
			        	        {
			        	        	"id":"cerror",
			        	        	"value":"Error",
			        	        	"title":"Error"
			        	        },
			        	        {
			        	        	"id":"ccancel",
			        	        	"value":"Cancel",
			        	        	"title":"Cancel"
			        	        },
			        	        {
			        	        	"id":"ccompensation",
			        	        	"value":"Compensation",
			        	        	"title":"Compensation"
			        	        },
			        	        {
			        	        	"id":"csignal",
			        	        	"value":"Signal",
			        	        	"title":"Signal"
			        	        },
			        	        {
			        	        	"id":"cterminate",
			        	        	"value":"Terminate",
			        	        	"title":"Terminate"
			        	        }
				        	]
				        }
					]
				},
				{
					"id":"completioncondition",
					"type":"String",
					"title":"CompletionCondition:",
					"title_de":"Beendigungsbedingung",
					"description":"This attribute defines a Boolean Expression that when evaluated to true, cancels the remaining Activity instances and produces a token.",
					"description_de":"Alle verbleibenden Aktivitätsinstanzen werden abgebrochen, falls die hier definierte Bedingung wahr wird.",
					"value":""
				},
				{
		        	"id":"onebehavioreventref",
		        	"type":"Choice",
		        	"value":"signal",
		        	"title":"OneBehaviorEventRef",
		        	"title_de":"Einzel-Verhalten-Ereignis",
		        	"description":"The EventDefinition which is thrown when behavior is set to one and the first internal Activity instance has completed.",
		        	"items":[
	        	        {
	        	        	"id":"cnone",
	        	        	"value":"None",
	        	        	"title":"None"
	        	        },
	        	        {
	        	        	"id":"cmessage",
	        	        	"value":"Message",
	        	        	"title":"Message"
	        	        },
	        	        {
	        	        	"id":"cescalation",
	        	        	"value":"Escalation",
	        	        	"title":"Escalation"
	        	        },
	        	        {
	        	        	"id":"cerror",
	        	        	"value":"Error",
	        	        	"title":"Error"
	        	        },
	        	        {
	        	        	"id":"ccancel",
	        	        	"value":"Cancel",
	        	        	"title":"Cancel"
	        	        },
	        	        {
	        	        	"id":"ccompensation",
	        	        	"value":"Compensation",
	        	        	"title":"Compensation"
	        	        },
	        	        {
	        	        	"id":"csignal",
	        	        	"value":"Signal",
	        	        	"title":"Signal"
	        	        },
	        	        {
	        	        	"id":"cterminate",
	        	        	"value":"Terminate",
	        	        	"title":"Terminate"
	        	        }
		        	]
		        },
		        {
		        	"id":"nonebehavioreventref",
		        	"type":"Choice",
		        	"value":"signal",
		        	"title":"NoneBehaviorEventRef",
		        	"title_de":"Ohne-Verhalten-Ereignis",
		        	"items":[
	        	        {
	        	        	"id":"cnone",
	        	        	"value":"None",
	        	        	"title":"None"
	        	        },
	        	        {
	        	        	"id":"cmessage",
	        	        	"value":"Message",
	        	        	"title":"Message"
	        	        },
	        	        {
	        	        	"id":"cescalation",
	        	        	"value":"Escalation",
	        	        	"title":"Escalation"
	        	        },
	        	        {
	        	        	"id":"cerror",
	        	        	"value":"Error",
	        	        	"title":"Error"
	        	        },
	        	        {
	        	        	"id":"ccancel",
	        	        	"value":"Cancel",
	        	        	"title":"Cancel"
	        	        },
	        	        {
	        	        	"id":"ccompensation",
	        	        	"value":"Compensation",
	        	        	"title":"Compensation"
	        	        },
	        	        {
	        	        	"id":"csignal",
	        	        	"value":"Signal",
	        	        	"title":"Signal"
	        	        },
	        	        {
	        	        	"id":"cterminate",
	        	        	"value":"Terminate",
	        	        	"title":"Terminate"
	        	        }
		        	]
		        }
			]
		},
		// start custom loop characteristics
		{
			"name" : "customloopcharacteristics",
			"properties" : [
				{
					"id":"looptype",
					"type":"Choice",
					"title":"LoopType",
					"title_de":"Schleifentyp",
					"value":"None",
					"description":"",
					"readonly":true,
					"optional":false,
					"refToView":"",
					"items": [
						{
							"id":"c1",
							"title":"None",
							"title_de":"Keine Schleife",
							"value":"None",
							"refToView":"none"
						},
						{
							"id":"c2",
							"title":"Standard",
							"title_de":"Standard",
							"value":"Standard",
							"icon" : "activity/list/looptype.standard.png",
							"refToView":"loop"
						},
						{
							"id":"c3",
							"title":"MI Parallel",
							"title_de":"MI parallel",
							"value":"Parallel",
							"icon" : "activity/list/mi.parallel.png",
							"refToView":"parallel"
						},
						{
							"id":"c4",
							"title":"MI Sequential",
							"title_de":"MI sequentialisiert",
							"value":"Sequential",
							"icon" : "activity/list/mi.sequential.png",
							"refToView":"sequential"
						}	
					]
				},
				{
					"id":"completioncondition",
					"type":"String",
					"title":"CompletionCondition:",
					"title_de":"Beendigungsbedingung",
					"description":"This attribute defines a Boolean Expression that when evaluated to true, cancels the remaining Activity instances and produces a token.",
					"description_de":"Alle verbleibenden Aktivitätsinstanzen werden abgebrochen, falls die hier definierte Bedingung wahr wird.",
					"value":""
				}
			]
		},
		// end custom loop characteristics
		{
			"name" : "task",
			"properties" : [
				{
					"id":"tasktype",
					"type":"Choice",
					"title":"TaskType",
					"title_de":"Tasktyp",
					"value":"None",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"",
					"items":[
						{
							"id":"c1",
							"title":"None",
							"title_de":"Kein Typ",
							"value":"None",
							"refToView":"none"
						},
						{
							"id":"c2",
							"title":"Send",
							"title_de":"Sendend",
							"value":"Send",
							"icon" : "activity/list/type.send.png",
							"refToView":"sendTask"
						},
						{
							"id":"c3",
							"title":"Receive",
							"title_de":"Empfangend",
							"value":"Receive",
							"icon" : "activity/list/type.receive.png",
							"refToView":"receiveTask"
						},
						{
							"id":"c4",
							"title":"User",
							"title_de":"Benutzer",
							"value":"User",
							"icon" : "activity/list/type.user.png",
							"refToView":"userTask"
						},
						{
							"id":"c5",
							"title":"Manual",
							"title_de":"Manuell",
							"value":"Manual",
							"icon" : "activity/list/type.manual.png",
							"refToView":"manualTask"	
						},
						{
							"id":"c6",
							"title":"Service",
							"title_de":"Service",
							"value":"Service",
							"icon" : "activity/list/type.service.png",
							"refToView":"serviceTask"
						},
						{
							"id":"c7",
							"title":"Business Rule",
							"title_de":"Geschäftsregel",
							"value":"Business Rule",
							"icon" : "activity/list/type.business.rule.png",
							"refToView":"businessRuleTask"
						},
						{
							"id":"c8",
							"title":"Script",
							"title_de":"Skript",
							"value":"Script",
							"icon" : "activity/list/type.script.png",
							"refToView":"scriptTask"
						}
					]
				},
				{
					"id":"implementation",
					"type":"Choice",
					"title":"Implementation",
					"title_de":"Implementierung",
					"value":"webService",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"",
					"items": [
						{
							"id":"c1",
							"title":"HumanTaskWebService",
							"value":"humanTaskWebService",
							"refToView":""
						},
						{
							"id":"c2",
							"title":"BuisnessRuleWebService",
							"value":"BuisnessRuleWebService",
							"refToView":""
						},
						{
							"id":"c1",
							"title":"WebService",
							"value":"webService",
							"refToView":""
						},
						{
							"id":"c2",
							"title":"Other",
							"value":"other",
							"refToView":""
						},
						{
							"id":"c2",
							"title":"Unspecified",
							"value":"unspecified",
							"refToView":""
						}
					]
				},
				{
					"id":"resources",
					"type":"Complex",
					"title":"Resources",
					"title_de":"Ressourcen",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"complexItems": [
						{
							"id":"resource_type",
							"name":"Type",
							"name_de":"Typ",
							"type":"Choice",
							"value":"",
							"width":100,
							"optional":false,
							"items": [
								{
									"id":"c1",
									"title":"Performer",
									"title_de":"Performer",
									"value":"Performer",
									"refToView":""
								},
								{
									"id":"c2",
									"title":"HumanPerformer",
									"title_de":"HumanPerformer",
									"value":"HumanPerformer",
									"refToView":""
								},
								{
									"id":"c3",
									"title":"PotentialOwner",
									"title_de":"PotentialOwner",
									"value":"PotentialOwner",
									"refToView":""
								}
							]
						},
						{
							"id":"resource",
							"name":"Resource",
							"name_de":"Ressource",
							"type":"String",
							"value":"",
							"width":200,
							"optional":true
						},
						{
							"id":"resourceassignmentexpr",
							"name":"ResourceAssignmentExpression",
							"type":"String",
							"value":"",
							"width":200,
							"optional":true
						},
						{
							"id":"language",
							"name":"Language",
							"type":"String",
							"value":"",
							"width":100,
							"optional":true
						},
						{
							"id":"evaluatestotype",
							"name":"EvaluatesToType",
							"type":"String",
							"value":"",
							"width":200,
							"optional":true
						}
					]
				},
				{
					"id":"messageref",
					"type":"String",
					"title":"MessageRef",
					"title_de":"Nachrichten-Referenz",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"",
					"length":"50"
				},
				{
					"id":"operationref",
					"type":"String",
					"title":"OperationRef",
					"title_de":"Operations-Referenz",
					"value":"",
					"description":"ID-Reference to an operation definition.",
					"description_de":"ID-Referenz zur Definition einer Operation.",
					"readonly":false,
					"optional":true
				},
				{
					"id":"instantiate",
					"type":"Boolean",
					"title":"Instantiate",
					"title_de":"Instanziieren",
					"value":false,
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":""
				},
				{
					"id":"script",
					"type":"Text",
					"title":"Script",
					"title_de":"Skript",
					"value":"",
					"description":"Script that can be run when the Task is performed. Related to the Script TaskType, if a script is not included, then the Task will act equivalent to a TaskType of None.",
					"readonly":false,
					"optional":true
				},
				{
					"id":"script_language",
					"type":"String",
					"title":"ScriptLanguage",
					"title_de":"Skript Sprache",
					"value":"",
					"description":"Defines the script language. The script language MUST be provided if a script is provided.",
					"readonly":false,
					"optional":true
				},
				{
					"id":"inmessagetype",
					"type":"String",
					"title":"In Message",
					"title_de":"In Message",
					"value":"",
					"description":"Type of input message",
					"description_de":"Type of input message",
					"readonly":false,
					"optional":true
				},
				{
					"id":"outmessagetype",
					"type":"String",
					"title":"Out Message",
					"title_de":"Out Message",
					"value":"",
					"description":"Type of output message",
					"description_de":"Type of output message",
					"readonly":false,
					"optional":true
				},
				{
					"id":"servicename",
					"type":"String",
					"title":"servicename",
					"title_de":"servicename",
					"value":"",
					"description":"name of service",
					"description_de":"name of service",
					"readonly":false,
					"optional":true
				},
				{
					"id":"namespace",
					"type":"String",
					"title":"Namespace",
					"title_de":"Namensraum",
					"value":"",
					"description":"Defines the XML namespace of the elements inside the document.",
					"description_de":"Definiert den XML-Namensraum, der für die Elemente im Dokument verwendet wird.",
					"readonly":false,
					"optional":true,
					"length":"50"
				},
				{
					"id":"operation",
					"type":"String",
					"title":"operation",
					"title_de":"operation",
					"value":"",
					"description":"operation",
					"description_de":"operation",
					"readonly":false,
					"optional":true
				},
				{
					"id":"porttype",
					"type":"String",
					"title":"porttype",
					"title_de":"porttype",
					"value":"",
					"description":"porttype",
					"description_de":"porttype",
					"readonly":false,
					"optional":true
				},
				{
					"id":"wsdlUrl",
					"type":"String",
					"title":"wsdlUrl",
					"title_de":"wsdlUrl",
					"value":"",
					"description":"wsdlUrl",
					"description_de":"wsdlUrl",
					"readonly":false,
					"optional":true
				},
				{
					"id":"bgcolor",
					"type":"Color",
					"title":"BackgroundColor",
					"title_de":"Hintergrundfarbe",
					"value":"#b1c2d6",
					"gradient":true,
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"fill_el",
					"fill":true,
					"stroke":false
				}		
			]
		},
		// start custom task properties
		{
			"name" : "customtask",
			"properties" : [
				{
					"id":"implementation",
					"type":"Choice",
					"title":"Implementation",
					"title_de":"Implementierung",
					"value":"other",
					"description":"",
					"readonly":true,
					"optional":false,
					"refToView":"",
					"items": [
						{
							"id":"c1",
							"title":"HumanTaskWebService",
							"value":"humanTaskWebService",
							"refToView":""
						},
						{
							"id":"c2",
							"title":"BuisnessRuleWebService",
							"value":"BuisnessRuleWebService",
							"refToView":""
						},
						{
							"id":"c1",
							"title":"WebService",
							"value":"webService",
							"refToView":""
						},
						{
							"id":"c2",
							"title":"Other",
							"value":"other",
							"refToView":""
						},
						{
							"id":"c2",
							"title":"Unspecified",
							"value":"unspecified",
							"refToView":""
						}
					]
				},
				{
					"id":"bgcolor",
					"type":"Color",
					"title":"BackgroundColor",
					"title_de":"Hintergrundfarbe",
					"value":"#b1c2d6",
					"gradient":true,
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"fill_el",
					"fill":true,
					"stroke":false
				}		
			]
		},		
		// end custom task properties
		{
			"name" : "subprocess",
			"properties" : [
				{
					"id": "subprocesstype",
					"type": "Choice",
					"title": "subProcessType",
					"title_de":"Subprozesstyp",
					"value": "Embedded",
					"description": "SubProcessType is an attribute that defines whether the Sub-Process details are embedded within the higher level Process or refers to another, re-usable Process. The default is Embedded.",
					"description_de":"Der Subprozesstyp gibt an, ob die Subprozessdetails in einen übergeordneten Prozess eingebettet sind oder auf einen anderen wiederverwendbaren Prozess verweisen.",
					"optional": false,
					"refToView": "",
					"items": [
						{
							"id": "choice1",
							"title":"Embedded",
							"value":"Embedded"
						},
						{
							"id": "choice2",
							"title": "Independent",
							"value": "Independent"
						},
						{
							"id": "choice3",
							"title": "Reference",
							"value": "Reference"
						}
					]
				},
				{
					"id":"isatransaction",
					"type":"Boolean",
					"title":"is a Transaction",
					"title_de":"ist eine Transaktion",
					"value":false,
					"description":"A Transaction is a set of activities that logically belongs together; it might follow a specified transaction protocol.",
					"readonly":false,
					"optional":false,
					"refToView":"border"
				},
				{
					"id":"transaction",
					"type":"String",
					"title":"TransactionRef",
					"title_de":"Transaktions-Referenz",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":"50"
				},
				{
					"id":"transactionmethod",
					"type":"Choice",
					"title":"TransactionMethod",
					"title_de":"Transaktions-Methode",
					"value":"compensate",
					"description":"The technique that will be used to undo a transaction that has been cancelled.",
					"readonly":false,
					"optional":true,
					"items": [
						{
							"id":"c1",
							"title":"Compensate",
							"value":"compensate"
						},
						{
							"id":"c2",
							"title":"Store",
							"value":"store"
						},
						{
							"id":"c3",
							"title":"Image",
							"value":"image"
						}
					]
				},
				{
					"id":"isadhoc",
					"type":"Boolean",
					"title":"isAdHoc",
					"title_de":"ist Ad-hoc",
					"value":false,
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"adhoc"
				},
				{
					"id":"adhocordering",
					"type":"Choice",
					"title":"AdHocOrdering",
					"title_de":"Ad-hoc Anordnung",
					"value":"Sequential",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"",
					"items": [
						{
							"id":"c1",
							"title":"Sequential",
							"title_de":"sequentiell",
							"value":"sequential"
						},
						{
							"id":"c2",
							"title":"Parallel",
							"title_de":"parallel",
							"value":"parallel"
						}
					]
				},
				{
					"id":"adhoccompletioncondition",
					"type":"String",
					"title":"AdHocCompletionCondition",
					"title_de":"Ad-hoc Fertigstellungsbedingung",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":""
				},
				{
					"id":"adhoccancelremaininginstances",
					"type":"Boolean",
					"title":"AdhocCancelRemainingInstances",
					"title_de":"Ad-hoc Abbruch laufender Instanzen",
					"value":true,
					"description":"This attribute is used only if ordering is parallel. It determines whether running instances are cancelled when the completionCondition becomes true.",
					"readonly":false,
					"optional":true
				},
				{
					"id":"entry",
					"type":"DiagramLink",
					"title":"SubProcessRef",
					"title_de":"Subprozess-Referenz",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"u"
				},
				{
					"id":"diagramref",
					"type":"String",
					"title":"DiagramRef",
					"title_de":"Diagramm-Referenz",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":""
				},
				{
					"id":"processref",
					"type":"String",
					"title":"ProcessRef",
					"title_de":"Prozess-Referenz",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":""
				},
				{
					"id":"inputmaps",
					"type":"String",
					"title":"InputMaps",
					"title_de":"Eingabe-Mengen",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":""
				},
				{
					"id":"outputmaps",
					"type":"String",
					"title":"OutputMaps",
					"title_de":"Ausgabe-Mengen",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":""
				}
			]
		},
		{
			"name" : "adhocsubprocess",
			"properties" : [
				{
					"id": "subprocesstype",
					"type": "Choice",
					"title": "subProcessType",
					"title_de":"Subprozesstyp",
					"value": "AdHoc",
					"description": "SubProcessType is an attribute that defines whether the Sub-Process details are embedded within the higher level Process or refers to another, re-usable Process. The default is Embedded.",
					"description_de":"Der Subprozesstyp gibt an, ob die Subprozessdetails in einen übergeordneten Prozess eingebettet sind oder auf einen anderen wiederverwendbaren Prozess verweisen.",
					"optional": false,
					"refToView": "",
					"items": [
						{
							"id": "choice1",
							"title":"Embedded",
							"value":"Embedded"
						},
						{
							"id": "choice2",
							"title": "Independent",
							"value": "Independent"
						},
						{
							"id": "choice3",
							"title": "Reference",
							"value": "Reference"
						}
					]
				},
				{
					"id":"isatransaction",
					"type":"Boolean",
					"title":"is a Transaction",
					"title_de":"ist eine Transaktion",
					"value":false,
					"description":"A Transaction is a set of activities that logically belongs together; it might follow a specified transaction protocol.",
					"readonly":false,
					"optional":false,
					"refToView":"border"
				},
				{
					"id":"transaction",
					"type":"String",
					"title":"TransactionRef",
					"title_de":"Transaktions-Referenz",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":"50"
				},
				{
					"id":"transactionmethod",
					"type":"Choice",
					"title":"TransactionMethod",
					"title_de":"Transaktions-Methode",
					"value":"compensate",
					"description":"The technique that will be used to undo a transaction that has been cancelled.",
					"readonly":false,
					"optional":true,
					"items": [
						{
							"id":"c1",
							"title":"Compensate",
							"value":"compensate"
						},
						{
							"id":"c2",
							"title":"Store",
							"value":"store"
						},
						{
							"id":"c3",
							"title":"Image",
							"value":"image"
						}
					]
				},
				{
					"id":"isadhoc",
					"type":"Boolean",
					"title":"isAdHoc",
					"title_de":"ist Ad-hoc",
					"value":true,
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"adhoc"
				},
				{
					"id":"adhocordering",
					"type":"Choice",
					"title":"AdHocOrdering",
					"title_de":"Ad-hoc Anordnung",
					"value":"Sequential",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"",
					"items": [
						{
							"id":"c1",
							"title":"Sequential",
							"title_de":"sequentiell",
							"value":"sequential"
						},
						{
							"id":"c2",
							"title":"Parallel",
							"title_de":"parallel",
							"value":"parallel"
						}
					]
				},
				{
					"id":"adhoccompletioncondition",
					"type":"String",
					"title":"AdHocCompletionCondition",
					"title_de":"Ad-hoc Fertigstellungsbedingung",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":""
				},
				{
					"id":"adhoccancelremaininginstances",
					"type":"Boolean",
					"title":"AdhocCancelRemainingInstances",
					"title_de":"Ad-hoc Abbruch laufender Instanzen",
					"value":true,
					"description":"This attribute is used only if ordering is parallel. It determines whether running instances are cancelled when the completionCondition becomes true.",
					"readonly":false,
					"optional":true
				},
				{
					"id":"entry",
					"type":"DiagramLink",
					"title":"SubProcessRef",
					"title_de":"Subprozess-Referenz",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"u"
				},
				{
					"id":"diagramref",
					"type":"String",
					"title":"DiagramRef",
					"title_de":"Diagramm-Referenz",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":""
				},
				{
					"id":"processref",
					"type":"String",
					"title":"ProcessRef",
					"title_de":"Prozess-Referenz",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":""
				},
				{
					"id":"inputmaps",
					"type":"String",
					"title":"InputMaps",
					"title_de":"Eingabe-Mengen",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":""
				},
				{
					"id":"outputmaps",
					"type":"String",
					"title":"OutputMaps",
					"title_de":"Ausgabe-Mengen",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":""
				}
			]
		},
		{
			"name" : "gateway",
			"properties" : [
				{
					"id":"assignments",
					"type":"Complex",
					"title":"Assignments",
					"title_de":"Zuweisungen",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"complexItems": [
						{
							"id":"to",
							"name":"To",
							"name_de":"Auf",
							"type":"String",
							"value":"",
							"width":100,
							"optional":false 
						},
						{
							"id":"from",
							"name":"From",
							"name_de":"Aus",
							"type":"String",
							"value":"",
							"width":100,
							"optional":false
						},
						{
							"id":"assigntime",
							"name":"AssignTime",
							"name_de":"Zuweisungszeit",
							"type":"Choice",
							"value":"Start",
							"width":100,
							"optional":true,
							"items": [
								{
									"id":"c1",
									"title":"Start",
									"title_de":"Start",
									"value":"Start",
									"refToView":""
								},
								{
									"id":"c2",
									"title":"End",
									"title_de":"Ende",
									"value":"End",
									"refToView":""
								}
							]
						}
					]
				},
				{
					"id":"pool",
					"type":"String",
					"title":"Pool",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"length":""
				},
				{
					"id":"lanes",
					"type":"String",
					"title":"Lanes",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"length":""
				},
				{
					"id":"gates",
					"type":"String",
					"title":"Gates",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":"50",
					"wrapLines":true
				},
				{
					"id":"gates_outgoingsequenceflow",
					"type":"String",
					"title":"[Gates] OutgoingSequenceFlow",
					"title_de":"[Gates] Ausgehender Steuerfluss",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":"50",
					"wrapLines":true
				},
				{
					"id":"gates_assignments",
					"type":"String",
					"title":"[Gates] Assignments",
					"title_de":"[Gates] Zuweisungen",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":"50",
					"wrapLines":true
				}
			]
		},
		{
			"name" : "artifact",
			"properties" : [
				{
					"id":"pool",
					"type":"String",
					"title":"Pool",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"length":""
				},
				{
					"id":"lanes",
					"type":"String",
					"title":"Lanes",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"length":""
				}
			]
		},
		{
			"name":"process",
			"properties":[
				{
					"id":"processtype",
					"type":"Choice",
					"title":"ProcessType",
					"title_de":"Prozesstyp",
					"value":"None",
					"description":"The processType attribute Provides additional information about the level of abstraction modeled by this Process.",
					"description_de":"Beschreibt den Abstraktionsgrad des beinhaltenden Prozesses.",
					"readonly":false,
					"optional":false,
					"popular" : true,
					"items": [
						{
							"id":"c1",
							"title":"None",
							"value":"None"
						},
						{
							"id":"c2",
							"title":"Executable",
							"value":"Executable"
						},
						{
							"id":"c3",
							"title":"Non-Executable",
							"value":"Non-Executable"
						},
						{
							"id":"c4",
							"title":"Public",
							"value":"Public"
						}
					]
				},
				{
					"id":"isclosed",
					"type":"Boolean",
					"title":"isClosed",
					"title_de":"IstGeschlossen",
					"value":false,
					"description":"A Boolean value specifying whether interactions, such as sending and receiving Messages and Events, not modeled in the Process can occur when the Process is executed or performed. If the value is true, they MAY NOT occur. If the value is false, they MAY occur.",
					"readonly":false,
					"optional":false
				}
			]
		},
		{
			"name" : "pool",
			"properties" : [
				{
					"id" : "multiinstance",
					"type" : "Boolean",
					"title" : "is Multi Instance Participant",
					"title_de" : "ist Mehrfach-Beteiligung",
					"value" : false,
					"description" : "",
					"description_de" : "Legt fest, ob der Teilnehmer mehrfach beteiligt ist (Multi Instance).",
					"readonly" : false,
					"optional" : true,
					"refToView" : "multiInstance"
				},
				{
					"id":"boundaryvisible",
					"type":"Boolean",
					"title":"BoundaryVisible",
					"title_de":"Umrandung sichtbar",
					"value":true,
					"description":"Defines if the rectangular boundary for the Pool is visible.",
					"description_de":"Gibt an, ob die rechteckige Umrandung des Pools sichtbar ist.",
					"readonly":false,
					"optional":false,
					"refToView": ["border", "c", "caption", "captionDisableAntialiasing"],
					"visible":false
				},
				{
					"id":"processname",
					"type":"String",
					"title":"ProcessName",
					"title_de":"Prozessname",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"",
					"length":"30"
				},
				{
					"id":"status",
					"type":"Choice",
					"title":"Status",
					"value":"None",
					"description":"",
					"readonly":false,
					"optional":false,
					"popular" : true,
					"items": [
						{
							"id":"c1",
							"title":"None",
							"value":"None"
						},
						{
							"id":"c2",
							"title":"Ready",
							"value":"Ready"
						},
						{
							"id":"c3",
							"title":"Active",
							"value":"Active"
						},
						{
							"id":"c4",
							"title":"Cancelled",
							"value":"Cancelled"
						},
						{
							"id":"c5",
							"title":"Aborting",
							"value":"Aborting"
						},
						{
							"id":"c6",
							"title":"Aborted",
							"value":"Aborted"
						},
						{
							"id":"c7",
							"title":"Completing",
							"value":"Completing"
						},
						{
							"id":"c8",
							"title":"Completed",
							"value":"Completed"
						}
					]
				},
				{
					"id":"adhoc",
					"type":"Boolean",
					"title":"AdHoc",
					"value":false,
					"description":"",
					"readonly":false,
					"optional":false
				},
				{
					"id":"adhocordering",
					"type":"Choice",
					"title":"AdHocOrdering",
					"title_de":"Ad-Hoc Anordnung",
					"value":"Parallel",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"items": [
						{
							"id":"c1",
							"title":"Sequential",
							"value":"Sequential",
							"refToView":""
						},
						{
							"id":"c2",
							"title":"Parallel",
							"value":"Parallel",
							"refToView":""
						}
					]
				},
				{
					"id":"adhoccompletioncondition",
					"type":"String",
					"title":"AdHocCompletionCondition",
					"title_de":"Ad-hoc Fertigstellungsbedingung",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":"50"
				},
				{
					"id":"suppressjoinfailure",
					"type":"Boolean",
					"title":"SuppressJoinFailure",
					"value":false,
					"description":"",
					"readonly":false,
					"optional":false
				},
				{
					"id":"enableinstancecompensation",
					"type":"Boolean",
					"title":"EnableBooleanCompensation",
					"value":false,
					"description":"",
					"readonly":false,
					"optional":false
				},
				{
					"id":"processcategories",
					"type":"String",
					"title":"ProcessCategories",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":"50",
					"wrapLines":true
				},
				{
					"id":"processdocumentation",
					"type":"String",
					"title":"Process Documentation",
					"title_de":"Prozess-Dokumentation",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":"",
					"wrapLines":true
				}
			]
		},
		{
			"name" : "dataAssociation",
			"properties" : [
			    {
					"id":"assignments",
					"type":"Complex",
					"title":"Assignments",
					"title_de":"Zuweisungen",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"popular":true,
					"complexItems": [
						{
							"id":"to",
							"name":"To",
							"name_de":"Auf",
							"type":"String",
							"value":"",
							"width":100,
							"optional":false 
						},
						{
							"id":"from",
							"name":"From",
							"name_de":"Aus",
							"type":"String",
							"value":"",
							"width":100,
							"optional":false
						},
						{
							"id":"language",
							"name":"Language",
							"name_de":"Sprache",
							"type":"String",
							"value":"",
							"width":100,
							"optional":true
						}
					]
			    },
			    {
					"id":"transformation",
					"title":"Transformation",
					"type":"String",
					"value":"",
					"optional":true,
					"popular":true
				}
			]
		},
                {
                    "name" : "modelEntity",
                    "properties" : [
    			    {
                                "id":"modelEntity",
                                "type":"Choice",
                                "title":"Entity",
                                "value":"None",
                                "description":"",
                                "readonly": false,
                                "optional": false,
                                "popular" : true,
                                "refToView":"",
                                "items": [
                                        $workingSetsClassNames:{cn| 
                                            \{
                                                "id":"$cn$",
                                                "title":"$cn$",
                                                "value":"$cn$",
                                                "refToView":"$cn$"
                                            \},
                                        }$
                                        {
                                                "id":"None",
                                                "title":"None",
                                                "value":"None",
                                                "refToView":"None"
                                        }
                                ]
                        }
                    ] 
                }
	],
	"stencils" : [
 		{
			"type":				"node",
			"id":				"BPMNDiagram",
			"title":			"BPMN-Diagram",
			"title_de":			"BPMN-Diagramm",
			"groups":			["Diagram"],
			"description":		"A BPMN 2.0 Diagram.",
			"description_de":	"Ein BPMN 2.0 Diagramm",
			"view":				"diagram.svg",
			"icon":				"diagram.png",
			"mayBeRoot":		true,
			"hide":				true,
			"propertyPackages" : ["baseAttributes","diagram"],
			"roles":			["canContainArtifacts"]
		},
		
                //Model
                /*
                {
                    "type" : 		"node",
                    "id":               "ModelEntity",
                    "title" : 		"Model Entity",
                    "groups" : 		["Model"],
                    "description" :     "A Model Entity",
                    "view" :		"model/model.svg",
                    "icon" :		"model/model.png",
                    "propertyPackages" : [
				"baseAttributes",
				"flowElement",
				"artifact",
                                "modelEntity"
			],
			"properties" : 		[
				{
					"id":"text",
					"type":"String",
					"title":"Text",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"text",
					"length":"",
					"wrapLines":true
				},
				{
					"id":"artifacttype",
					"type":"String",
					"title":"ArtifactType",
					"title_de":"Artefakttyp",
					"value":"Annotation",
					"description":"",
					"readonly":true,
					"optional":false,
					"length":""
				}
			],
			"roles": [
				"all",
				//"from_artifact",
				//"to_artifact",
                                //"TextAnnotationMorph"
			]
                    
                },
                */
		// start custom workitems
		$workitemDefs.keys:{k| 
		\{
			"type" : 			"node",
			"id": 				"$workitemDefs.(k).name$",
			"title" : 			"$workitemDefs.(k).displayName$",
			"title_de" : 		"$workitemDefs.(k).displayName$",
			"groups" : 			["Service Tasks"],
			"groups_de" :		["Service Tasks"],
			"description" : 	"$workitemDefs.(k).explanationText$",
			"description_de" : 	"$workitemDefs.(k).explanationText$.",
			"view" : 			"activity/workitems/$workitemDefs.(k).name$.svg",
			"icon" : 			"$workitemDefs.(k).icon$",
			"propertyPackages" :[
				"customtask",
				"customactivity",
                "customloopcharacteristics"
			],
			"roles" : 			[
				"all",
				"sequence_start",
				"sequence_end",
				"from_task_event",
				"to_task_event",
				"FromEventbasedGateway",
				"messageflow_start",
				"messageflow_end",
				"fromtoall",
				"ActivitiesMorph"
			],
			"properties": [
			 \{
					"id":"tasktype",
					"type":"Choice",
					"title":"TaskType",
					"title_de":"Tasktyp",
					"value":"$workitemDefs.(k).name$",
					"description":"",
					"readonly":true,
					"optional":false,
					"refToView":"",
					"items":[
						\{
							"id":"c1",
							"title":"None",
							"title_de":"Kein Typ",
							"value":"None",
							"refToView":"none"
						\},
						\{
							"id":"c2",
							"title":"Send",
							"title_de":"Sendend",
							"value":"Send",
							"icon" : "activity/list/type.send.png",
							"refToView":"sendTask"
						\},
						\{
							"id":"c3",
							"title":"Receive",
							"title_de":"Empfangend",
							"value":"Receive",
							"icon" : "activity/list/type.receive.png",
							"refToView":"receiveTask"
						\},
						\{
							"id":"c4",
							"title":"User",
							"title_de":"Benutzer",
							"value":"User",
							"icon" : "activity/list/type.user.png",
							"refToView":"userTask"
						\},
						\{
							"id":"c5",
							"title":"Manual",
							"title_de":"Manuell",
							"value":"Manual",
							"icon" : "activity/list/type.manual.png",
							"refToView":"manualTask"	
						\},
						\{
							"id":"c6",
							"title":"Service",
							"title_de":"Service",
							"value":"Service",
							"icon" : "activity/list/type.service.png",
							"refToView":"serviceTask"
						\},
						\{
							"id":"c7",
							"title":"Business Rule",
							"title_de":"Geschäftsregel",
							"value":"Business Rule",
							"icon" : "activity/list/type.business.rule.png",
							"refToView":"businessRuleTask"
						\},
						\{
							"id":"c8",
							"title":"Script",
							"title_de":"Skript",
							"value":"Script",
							"icon" : "activity/list/type.script.png",
							"refToView":"scriptTask"
						\}
					]
				\},
				\{
					"id":"name",
					"type":"String",
					"title":"Name",
					"value":"$workitemDefs.(k).displayName$",
					"description":"The descriptive name of the BPMN element.",
					"description_de":"Bezeichnung des BPMN-Elementes.",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines" : true,
					"refToView":"text_name"	
				\},
				\{
					"id":"documentation",
					"type":"Text",
					"title":"Documentation",
					"title_de":"Dokumentation",
					"value":"$workitemDefs.(k).explanationText$", 
					"description":"This attribute is used to annotate the BPMN element, such as descriptions and other documentation.",
					"description_de":"Der Modellierer kann weiteren Text zur Dokumentation des BPMN-Elementes einfügen.",
					"readonly":true,
					"optional":true,
					"length":"",
					"wrapLines":true,
					"popular" : true
				\},
				\{
					"id":"taskName",
					"type":"String",
					"title":"Task Name",
					"title_de":"Task Name",
					"value":"$workitemDefs.(k).name$",
					"description":"Task Name",
					"readonly":true,
					"optional":true
				\},
				\{
					"id":"lanes",
					"type":"String",
					"title":"Lanes",
					"title_de":"Lanes",
					"value":"",
					"description":"Comma-separated lane names",
					"readonly":false,
					"optional":true
				\},
				\{
					"id":"datainputset",
					"type":"Text",
					"title":"DataInputSet",
					"title_de":"Dateneingabesatz",
					"value":"$workitemDefs.(k).parameters:{k1| $k1.name$}; separator=","$",
					"description":"An InputSet is a collection of DataInput elements that together define a valid set of data inputs.",
					"description_de":"Ein Eingabesatz ist eine Zusammenstellung von Eingabe-Datenobjekten, die zusammen einen gültigen Satz von Dataeingaben definieren.",
					"readonly":false,
					"optional":true,
				\},  
				\{
					"id":"dataoutputset",
					"type":"Text",
					"title":"DataOutputSet",
					"title_de":"Datenausgabesatz",
					"value":"",
					"description":"An OutputSet is a collection of DataOutputs elements that together may be produced as output from an Activity or Event.",
					"description_de":"Ein Ausgabesatz ist eine Zusammenstellung von Ausgabe-Datenobjekten, die zusammen als Ausgabe einer Aktivität oder eines Ereignisses produziert werden.",
					"readonly":false,
					"optional":true,
				\},
				\{
					"id":"assignments",
					"type":"Text",
					"title":"Assignments",
					"title_de":"Zuweisungen",
					"value":"$workitemDefs.(k).parameters:{k1| $k1.name$}; separator="=,"$=",
					"description":"",
					"readonly":false,
					"optional":true,
				\}
			]
		\},
		}$
		// end custom workitems 
		
                //Model Classes
                $workingSetsClassNames:{cn| 
                    \{
                        "type" : 		"node",
			"id" :			"Model_$cn$",
			"title" :		"$cn$",
			"groups" :		["Model"],
			"view" :		"model/dynamic/$cn$.svg",
			"icon" :		"model/fact.type.png",
                        "description" :         "$cn$ Model Element",
			"defaultAlign" :	"southeast",
			"propertyPackages":	[
                            "baseAttributes",
				"flowElement",
				"artifact"
			],
                        "properties" :		[
                            \{
                                "id":"modelentity",
                                "type":"String",
                                "title":"Entity",
                                "value":"$cn$",
                                "readonly":true,
                                "optional":false
                            \},
                            \{
                                "id":"fieldConstraint",
                                "type":"String",
                                "title":"Field Constraint",
                                "value":"code",
                                "readonly":true,
                                "optional":false,
                                "visible":false,
                                "hidden":true
                            \},
                            \{
                                "id":"code",
                                "type":"kmrSingleVocabulary",
                                "title":"Code",
                                "value":"",
                                "description":"",
                                "readonly":     false,
                                "optional":     false,
                                "lookupType":"$cn; format="upper"$"
                            \}
                        ],
			"roles" : [
				"all"
			]
                    \},
                }$
                // end Model Classes
                
		// Gateways
		
		{
			"type" : 			"node",
			"id" :				"Exclusive_Databased_Gateway",
			"title" :			"Data-based Exclusive (XOR) Gateway",
			"title_de" : 		"Daten-basiertes exklusives Gateway",
			"description" :		"When splitting, it routes the sequence flow to exactly one of the outgoing branches based on conditions. When merging, it awaits one incoming branch to complete before triggering the outgoing flow.",
			"description_de" :	"Bei einer Verzweigung wird der Sequenzfluss abhängig von Verzweigungsbedingungen zu genau einer ausgehenden Kante geleitet. Bei einer Zusammenführung wird auf eine der eingehenden Kante gewartet, um den ausgehenden Sequenzfluss zu aktivieren.",
			"groups" : 			["Gateways"],
			"view" : 			"gateway/exclusive.databased.svg",
			"icon" : 			"gateway/exclusive.databased.png",
                        "mouseOverLabelConfig" : {
                            "showOutgoingConnectionsLabel" : true
                        },
			"propertyPackages" :[
				"baseAttributes",
				"flowElement",
				"gateway",
				"bgColor"
			],
			"properties" :		[
				{
					"id":"gatewaytype",
					"type":"String",
					"title":"Gateway type",
					"title":"Gateway-Typ",
					"value":"XOR",
					"description":"",
					"readonly":true,
					"optional":false,
					"length":""
				},
				{
					"id":"xortype",
					"type":"String",
					"title":"XOR type",
					"title_de":"XOR-Typ",
					"value":"Data",
					"description":"",
					"readonly":true,
					"optional":false,
					"length":""
				},
				{
					"id":"markervisible",
					"type":"Boolean",
					"title":"X-Marker visible",
					"title_de":"X-Marker sichtbar",
					"value":"true",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"cross"
				},		
				{
					"id":"defaultgate",
					"type":"String",
					"title":"Default gate",
					"title_de":"Standardgate",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":"50",
					"wrapLines":true
				},
				{
					"id":"gate_outgoingsequenceflow",
					"type":"contextawaremulticonstraintexpressioneditor",
					"title":"[Gate] OutgoingSequenceFlow",
					"title_de":"[Gate] Ausgehender Steuerfluss",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":"50"
				},
				{
					"id":"gate_assignments",
					"type":"String",
					"title":"[Gate] Assignments",
					"title_de":"[Gates] Zuweisungen",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":"50",
					"wrapLines":true
				}	
			],
			"roles": 			[
				"all",
				"sequence_start",
				"sequence_end",
				"choreography_sequence_start",
				"choreography_sequence_end",
				"fromtoall",
				"GatewaysMorph"
			]
		},
		{
			"type" : 			"node",
			"id" :				"ParallelGateway",
			"title" :			"Parallel Gateway",
			"title_de" :		"Paralleles Gateway",
			"groups" :			["Gateways"],
			"description" :		"When used to split the sequence flow, all outgoing branches are activated simultaneously. When merging parallel branches it waits for all incoming branches to complete before triggering the outgoing flow.",
			"description_de" :	"Wenn der Sequenzfluss verzweigt wird, werden alle ausgehenden Kanten simultan aktiviert. Bei der Zusammenführung wird auf alle eingehenden Kanten gewartet, bevor der ausgehende Sequenzfluss aktiviert wird.",
			"view" :			"gateway/parallel.svg",
			"icon" :			"gateway/parallel.png",
			"propertyPackages" :[
				"baseAttributes",
				"flowElement",
				"gateway",
				"bgColor"
			],
			"properties" : [
				{
					"id":"gatewaytype",
					"type":"String",
					"title":"GatewayType",
					"title_de":"Gatewaytyp",
					"value":"AND",
					"description":"",
					"readonly":true,
					"optional":false,
					"length":""
				}
			],
			"roles": 			[
				"all",
				"sequence_start",
				"sequence_end",
				"choreography_sequence_start",
				"choreography_sequence_end",
				"fromtoall",
				"GatewaysMorph"
			]
		},
		
		// Swimlanes
		
		{
			"type" : 			"node",
			"id" :				"Pool",
			"title" :			"Pool",
			"groups" :			["Swimlanes"],
			"groups_de" :		["Rollen"],
			"description" :		"Pools and Lanes represent responsibilities for activities in a process. A pool or a lane can be an organization, a role, or a system.",
			"description_de" :	"Pools repräsentieren Organisationseinheiten und können durch Lanes weiter aufgefächert bzw. unterstrukturiert werden.",
			"view" :			"swimlane/pool.svg",
			"icon" :			"swimlane/pool.png",
			"propertyPackages": [
				"baseAttributes",
				"pool",
				"process",
				"bgColor"
			],
			"roles" : 			[
				"all",
				"messageflow_start",
				"messageflow_end",
				"fromtoall",
				"canContainArtifacts"				
			],
			"layout" : [{"type" : "layout.bpmn2_0.pool"}]
		},
		{
			"type" : 			"node",
			"id" :				"CollapsedPool",
			"title" :			"Collapsed Pool",
			"title_de" :		"Zugeklappter Pool",
			"groups" :			["Swimlanes"],
			"groups_de" :		["Rollen"],
			"description" :		"Collapsed Pools hide all internals of the contained processes.",
			"description_de" :	"Ein zugeklappter Pool (anonym) kommt zum Einsatz, wenn der innere Ablauf eines Kommunikationspartners keine unmittelbare Rolle spielt.",
			"view" :			"swimlane/collapsed.pool.svg",
			"icon" :			"swimlane/lane.png",
			"propertyPackages": [
				"baseAttributes",
				"pool",
				"process",
				"bgColor"
			],
			"properties" : 		[
				{
					"id":"bgcolor",
					"type":"Color",
					"title":"BackgroundColor",
					"title_de":"Hintergrundfarbe",
					"value":"#ffffff",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"fill_el",
					"fill":true,
					"stroke":false
				}
			],
			"roles" :		 	[
				"all",
				"messageflow_start",
				"messageflow_end",
				"fromtoall"				
			]
		},
		{
			"type" : 			"node",
			"id" :				"Lane",
			"title" :			"Lane",
			"groups" :			["Swimlanes"],
			"groups_de" :		["Rollen"],
			"description" :		"Pools and Lanes represent responsibilities for activities in a process. A pool or a lane can be an organization, a role, or a system. Lanes sub-divide pools or other lanes hierarchically.",
			"description_de" :	"Pools und Lanes repräsentieren Rollen. Lanes repräsentieren Verantwortlichkeiten, wie etwa Organisationseinheiten, Stellen oder IT-Systeme. Lanes können hierarchisch in weitere Unter-Lanes untergliedert sein.",
			"view" :			"swimlane/lane.svg",
			"icon" :			"swimlane/lane.png",
			"propertyPackages": [
				"baseAttributes"
			],
			"properties" : 		[
				{
					"id":"parentpool",
					"type":"String",
					"title":"ParentPool",
					"title_de":"Elternpool",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":false,
					"refToView":"",
					"length":"30"
				},
				{
					"id":"parentlane",
					"type":"String",
					"title":"ParentLane",
					"title_de":"Elternlane",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":"30"
				},
				{
					"id":"showcaption",
					"type":"Boolean",
					"title":"ShowCaption",
					"title_de":"Zeige Beschriftung",
					"value":"true",
					"description":"",
					"readonly":true,
					"optional":false,
					"refToView": ["caption", "captionDisableAntialiasing"],
					"fill":true,
					"visible":false,
					"stroke":false,
					"hidden":true
				}
			],
			"roles": 			[
				"PoolChild",
				"fromtoall",
				"canContainArtifacts"				
			],
			"layout" : [
						{"type" : "layout.bpmn11.lane"},
						{
							"type" : "layout.container.minBounds",
							"options" : {
								"ignoreChildsWithId" : [
									"http://b3mn.org/stencilset/bpmn2.0#Lane"
								]
							}
						}
			]
		},
		
		// Artifacts
		{
			"type" : 			"node",
			"id" : 				"Group",
			"title" :			"Group",
			"title_de" :		"Gruppe",
			"groups" :			["Artifacts"],
			"groups_de" :		["Artefakte"],
			"description" :		"An arbitrary set of objects can be defined as a Group to show that they logically belong together.",
			"description_de" :	"Mehrere Objekte, die logisch in Verbindung stehen, können in einer Gruppe zusammengefasst werden.",
			"view" :			"artifact/group.svg",
			"icon":				"artifact/group.png",
			"propertyPackages" : [
				"baseAttributes",
				"flowElement",
				"artifact"
			],
			"properties" : [
				{
					"id":"artifacttype",
					"type":"String",
					"title":"ArtifactType",
					"title_de":"Artefakttyp",
					"value":"Group",
					"description":"",
					"readonly":true,
					"optional":false,
					"length":""
				}
			],
			"roles": [
				"all",
				"fromtoall",
				"canContainArtifacts"
			]
		},
		{
			"type" : 			"node",
			"id" : 				"TextAnnotation",
			"title" :			"Text Annotation",
			"title_de" :		"Text-Anmerkung",
			"groups" :			["Artifacts"],
			"groups_de" :		["Artefakte"],
			"description" :		"Any object can be associated with a Text Annotation to provide additional documentation.",
			"description_de" :	"Jedes Objekt kann durch eine Text-Anmerkung kommentiert werden.",
			"view" :			"artifact/text.annotation.svg",
			"icon" :			"artifact/text.annotation.png",
			"defaultAlign" :	"northeast",
			"propertyPackages": [
				"baseAttributes",
				"flowElement",
				"artifact"
			],
			"properties" : 		[
				{
					"id":"text",
					"type":"String",
					"title":"Text",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"text",
					"length":"",
					"wrapLines":true
				},
				{
					"id":"artifacttype",
					"type":"String",
					"title":"ArtifactType",
					"title_de":"Artefakttyp",
					"value":"Annotation",
					"description":"",
					"readonly":true,
					"optional":false,
					"length":""
				}
			],
			"roles": [
				"all",
				"from_artifact",
				"to_artifact",
				"TextAnnotationMorph"
			]
		},
		
		// Start Events
		
		{
			"type" : 			"node",
			"id": 				"StartNoneEvent",
			"title": 			"Start Event",
			"title_de" : 		"Start-Ereignis",
			"groups" : 			["Start Events"],
			"groups_de" : 		["Start-Ereignisse"],
			"description" : 	"Untyped start event.",
			"description_de" : 	"Ein nicht weiter typisiertes Start-Ereignis.",
			"view" : 			"startevent/none.svg",
			"icon" : 			"startevent/none.png",
			"propertyPackages":	[
				"baseAttributes",
				"catchEventAttributes",
				"bgColor"
			],
			"roles" : [
				"all",
				"Startevents_all",
				"sequence_start",
				"choreography_sequence_start",
				"to_task_event",
				"from_task_event",
				"fromtoall",
				"StartEventsMorph"
			],
			"properties": [
				{
					"id":"trigger",
					"type":"String",
					"title":"Trigger",
					"title_de":"Auslöser",
					"value":"None",
					"description":"",
					"readonly":true,
					"optional":false
				}
			]
                },
                {
			"type" : 			"node",
			"id" :				"StartConditionalEvent",
			"title" :			"Start Conditional Event",
			"title_de" :		"Bedingungs-Startereignis",
			"groups" :			["Start Events"],
			"groups_de" :		["Start-Ereignisse"],
			"description" :		"A process instance is started based on changed business conditions or matching business rules.",
			"description_de" :	"Eine Prozess-Instanz wird als Reaktion auf veränderte Bedingungen oder Geschäftsregeln gestartet.",
			"view" :			"startevent/conditional.svg",
			"icon" 	:			"startevent/conditional.png",
			"propertyPackages": [
				"baseAttributes",
				"catchEventAttributes",
				"interrupting",
				"condition",
				"bgColor"
			],
			"roles" : 			[
				"all",
				"sequence_start",
				"to_task_event",
				"from_task_event",
				"fromtoall",
				"Startevents_all",
				"choreography_sequence_start",
				"StartEventsMorph"
			],
			"properties": [
				{
					"id":"trigger",
					"type":"String",
					"title":"Trigger",
					"title_de":"Auslöser",
					"value":"Conditional",
					"description":"",
					"readonly":true,
					"optional":false
				},
				{
					"id":"conditionlanguage",
					"type":"Choice",
					"title":"Language",
					"title_de":"Sprache",
					"value":"http://www.jboss.org/drools/rule",
					"description":"",
					"readonly":false,
					"optional":false,
                                        "items": [
						{
							"id":"rule",
							"title":"Rule",
							"value":"http://www.jboss.org/drools/rule"
						},
						{
							"id":"java",
							"title":"Java",
							"value":"http://www.java.com/java"
						},
						{
							"id":"xpath",
							"title":"XPath",
							"value":"http://www.w3.org/1999/XPath"
						}
					]
				},
				{
					"id":"conditionexpression",
					"type":"ContextAwareConstraintExpressionEditor",
					"title":"Expression",
					"title_de":"Expression",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
                                        "directlyEditable":true
				}
			]
		},
                
		// Intermediate Events Catching
		
		{
			"type": "node",
			"id":"IntermediateMessageEventCatching",
			"title":"Message Intermediate Event",
			"title_de":"Nachrichten-Zwischenereignis",
			"groups":["Catching Intermediate Events"],
			"groups_de":["Zwischen-Ereignisse (eintretend)"],
			"description":"This event reacts on the arrival of a message.",
			"description_de":"Das Nachrichten-Zwischenereignis wartet bis auf den Empfang einer Nachricht und setzt daraufhin die Prozessausführung fort.",
			"view":"intermediateevent/message.catching.svg",
			"icon":"catching/message.png",
			"propertyPackages":[
				"baseAttributes",
				"interrupting",
				"boundaryevent",
				"bgColor"
			],
			"roles":[
				"all",
				"messageflow_end",
				"sequence_start",
				"sequence_end",
				"to_task_event",
				"from_task_event",
				"fromtoall",
				"FromEventbasedGateway",
				"IntermediateEventOnSubprocessBoundary",
				"IntermediateEventOnActivityBoundary",
				"EventOnChoreographyActivityBoundary",
				"IntermediateEventsMorph"
			],
			"properties": [
				{
					"id":"trigger",
					"type":"String",
					"title":"Trigger",
					"title_de":"Auslöser",
					"value":"Message",
					"description":"",
					"readonly":true,
					"optional":false,
					"refToView":"",
					"length":""
				},
				{
					"id":"messageref",
					"type":"String",
					"title":"MessageRef",
					"title_de":"MessageRef",
					"value":"",
					"description":"Message Ref",
					"readonly":false,
					"optional":true
				}
			]
		},
		{
			"type": "node",
			"id":"IntermediateTimerEvent",
			"title":"Timer Intermediate Event",
			"title_de":"Zeit-Zwischenereignis",
			"groups":["Catching Intermediate Events"],
			"groups_de":["Zwischen-Ereignisse (eintretend)"],
			"description":"Process execution is delayed until a certain point in time is reached or a particular duration is over.",
			"description_de":"Im Laufe der Prozessausführung muss für eine bestimmte zeitlich festgelegte Dauer bzw. auf das Eintreten eines Zeitpunktes gewartet werden bis die Ausführung fortgesetzt wird.",
			"view":"intermediateevent/timer.svg",
			"icon":"catching/timer.png",
			"propertyPackages":[
				"baseAttributes",
				"interrupting",
				"boundaryevent",
				"bgColor"
			],
			"roles":[
				"all",
				"sequence_start",
				"sequence_end",
				"to_task_event",
				"from_task_event",
				"fromtoall",
				"choreography_sequence_start",
				"choreography_sequence_end",
				"FromEventbasedGateway",
				"IntermediateEventOnSubprocessBoundary",
				"IntermediateEventOnActivityBoundary",
				"EventOnChoreographyActivityBoundary",
				"IntermediateEventsMorph"
			],
			"properties": [
				{
					"id":"trigger",
					"type":"String",
					"title":"Trigger",
					"title_de":"Auslöser",
					"value":"Timer",
					"description":"",
					"readonly":true,
					"optional":false,
					"refToView":"",
					"length":""
				},
				{
					"id":"timedate",
					"type":"String",
					"title":"Time Date",
					"title_de":"Time Date",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":""
				},
				{
					"id":"timeduration",
					"type":"Text",
					"title":"Time Duration",
					"title_de":"Time Duration",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":""
				},
				{
					"id":"timecycle",
					"type":"Text",
					"title":"Time Cycle",
					"title_de":"Time Cycle",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"refToView":"",
					"length":""
				}
			]
		},
		
		
		// End Events
		
		{
			"type" : "node",
			"id": "EndNoneEvent",
			"title": "End Event",
			"title_de" : "End-Ereignis",
			"groups" : ["End Events"],
			"groups_de" : ["End-Ereignisse"],
			"description" : "The untyped end event typically marks the standard end of a process.",
			"description_de" : "Untypisiertes End-Ereignis, welches ein normales Ende eines Prozesses markiert.",
			"view" : "endevent/none.svg",
			"icon" : "endevent/none.png",
			"propertyPackages":[
				"baseAttributes",
				"throwEventAttributes",
				"bgColor"
			],
			"roles" : [
				"all",
				"sequence_end",
				"to_task_event",
				"from_task_event",
				"fromtoall",
				"choreography_sequence_end",
				"Endevents_all",
				"EndEventsMorph"
			],
			"properties": [
				{
					"id":"trigger",
					"type":"String",
					"title":"Trigger",
					"title_de":"Auslöser",
					"value":"None",
					"description":"",
					"readonly":true,
					"optional":false
				}
			]
		},
		{
			"type": "node",
			"id":"EndTerminateEvent",
			"title":"Terminate End Event",
			"title_de":"Terminierungs-Endereignis",
			"groups":["End Events"],
			"groups_de":["End-Ereignisse"],
			"description":"Triggering the immediate termination of a process instance. All steps still in execution in parallel branches are terminated.",
			"description_de":"Löst die sofortige Beendigung einer Prozess-Instanz und aller seiner noch in Ausführung befindlichen (parallelen) Arbeitsschritte.",
			"view":"endevent/terminate.svg",
			"icon":"endevent/terminate.png",
			"propertyPackages":[
				"baseAttributes",
				"throwEventAttributes",
				"bgColor"
			],
			"roles": [
				"all",
				"sequence_end",
				"to_task_event",
				"from_task_event",
				"fromtoall",
				"choreography_sequence_end",
				"EndEventsMorph"
			],
			"properties": [
				{
					"id":"trigger",
					"type":"String",
					"title":"Trigger",
					"title_de":"Auslöser",
					"value":"Terminate",
					"description":"",
					"readonly":true,
					"optional":false
				}
			]
		},
		
		// Edges
		
		{
			"type": "edge",
			"id":"SequenceFlow",
			"title":"Sequence Flow",
			"title_de":"Sequenzfluss",
			"description":"Sequence Flow defines the execution order of activities.",
			"description_de":"Ein Sequenzfluss definiert die Reihenfolge der Ausführung von Aktivitäten.",
			"groups":["Connecting Objects"],
			"groups_de":["Konnektoren"],
			"view":"connector/sequenceflow.svg",
			"icon":"connector/sequenceflow.png",
			"propertyPackages":[
				"baseAttributes"
			],
			"roles": [
				"all",
				"ConnectingObjectsMorph"
			],
                        "mouseOverLabelConfig" : {
                            "showOutgoingConnectionsLabel" : false, //default
                            //"text" : "hi"             //Fixed string 
                            //"text" : "@conditionexpressionlanguage"   //Property binding                            
                            "text"    : function(uiObject){ 
                                var text = uiObject.properties["oryx-conditionexpression"]; 
                                var editor = new Ext.form.GuvnorPopupEditor(null, new GuvnorPopupEditorSingleRuleHelper(null));
                                editor.setValue(text);
                                return editor.getDRLValue().replace(/(\r\n|[\r\n])/g, "<br />");
                            }
                        },
			"properties":[
				{
					"id":"ConditionType",
					"type":"Choice",
					"title":"ConditionType",
					"title_de":"Bedingungstyp",
					"value":"None",
					"description":"Determine the type of the flow object.",
					"description_de":"Legt den Typ des Flussobjekts fest.",
					"readonly":false,
					"optional":false,
					"items": [
						{
							"id":"none",
							"title":"Standard",
							"title_de":"Standard",
							"value":"None"
						},
						{
							"id":"expression",
							"title":"Conditional Flow",
							"title_de":"Bedingter Fluss",
							"value":"Expression",
							"icon" : "connector/list/type.expression.png",
							"refToView":""
						},
						{
							"id":"default",
							"title":"Default Flow",
							"title_de":"Standardfluss",
							"value":"Default",
							"icon" : "connector/list/type.default.png",
							"refToView":"default"
						}
					]
				},
				{
					"id":"conditionexpression",
					"type":"ContextAwareConstraintExpressionEditor",
					"title":"Condition Expression",
					"title_de":"Bedingungsausdruck",
					"value":"",
					"description":"",
					"readonly":false,
					"optional":true,
					"length":"",
					"wrapLines":true
				},
				{
					"id":"conditionexpressionlanguage",
					"type":"Choice",
					"title":"Condition Expression Language",
					"title_de":"Bedingungsausdruck Sprache",
					"value":"http://www.jboss.org/drools/rule",
					"description":"",
					"readonly":false,
					"optional":true,                                        
                                        "items": [
						{
							"id":"rule",
							"title":"Rule",
							"value":"http://www.jboss.org/drools/rule"
						},
						{
							"id":"java",
							"title":"Java",
							"value":"http://www.java.com/java"
						},
						{
							"id":"xpath",
							"title":"XPath",
							"value":"http://www.w3.org/1999/XPath"
						}
					]
				},
				{
					"id":"priority",
					"type":"Integer",
					"title":"Priority",
					"title_de":"Priority",
					"value":"",
					"description":"priority",
					"readonly":false,
					"optional":true,
					"min":"1"
				},
				{
					"id":"isimmediate",
					"type":"Boolean",
					"title":"isImmediate",
					"title_de":"Sofortige Ausführung",
					"value":"",
					"description":"An optional Boolean value specifying whether Activities or Choreography Activities not in the model containing the Sequence Flow can occur between the elements connected by the Sequence Flow. If the value is true, they MAY NOT occur. If the value is false, they MAY occur. Also see the isClosed attribute on Process, Choreography, and Collaboration.",
					"readonly":false,
					"optional":false
				},
				{
					"id":"showdiamondmarker",
					"type":"Boolean",
					"title":"is conditional flow",
					"title_de":"ist bedingter Fluss",
					"value":false,
					"description":"System intern variable to set the Diamond invisible, if sourceShape is a gateway and ConditionType is set to Expression",
					"readonly":true,
					"optional":false,
					"visible":false,
					"refToView":"conditional"
				}
			]
		},
		{
			"type": "edge",
			"id":"Association_Undirected",
			"title":"Association (undirected)",
			"title_de":"Ungerichtete Assoziation",
			"description":"Attaching a data object with an Undirected Association to a sequence flow indicates hand-over of information between the activities involved.",
			"description_de":"Die Zuordnung eines Datenobjekts zu einem Sequenzfluss über eine ungerichtete Assoziation weist auf eine Informationsübergabe zwischen den Aktivitäten hin.",
			"groups":["Connecting Objects"],
			"groups_de":["Konnektoren"],
			"view":"connector/association.undirected.svg",
			"icon":"connector/association.undirected.png",
			"roles": [
				"all",
				"ConnectingObjectsMorph"
			],			
			"propertyPackages" : [
			    "dataAssociation"
			],
			"properties" : [
				{
					"id":"type",
					"type":"Choice",
					"title":"Responsibilities",
					"title_de":"Verantwortlichkeiten",
					"value":"none",
					"description":"Describes the type of the responsibility according to RACI.",
					"description_de":"Beschreibt die Verantwortlichkeiten nach dem RACI-Modell.",
					"readonly":false,
					"optional":true,
					"refToView":"name",
					"items": [
						{
							"id":"c1",
							"title":"",
							"title_de":"",
							"value":"none"
						},
						{
							"id":"c2",
							"title":"responsible",
							"title_de":"führt durch",
							"value":"performs"
						},
						{
							"id":"c3",
							"title":"accountable",
							"title_de":"erteilt Freigabe",
							"value":"approves"
						},
						{
							"id":"c4",
							"title":"consulted",
							"title_de":"wird konsultiert",
							"value":"consulted"
						},
						{
							"id":"c5",
							"title":"informed",
							"title_de":"wird informiert",
							"value":"isNotified"
						}
					]
				}
           ]
		},
		{
			"type": "edge",
			"id":"Association_Unidirectional",
			"title":"Association (unidirectional)",
			"title_de":"Gerichtete Assoziation",
			"description":"A Directed Association indicates information flow. A data object can be read at the start of an activity or written upon completion.",
			"description_de":"Eine gerichtete Assoziation zeigt den Informationsfluss. Ausgehende Kanten zeigen Schreiben, eingehende zeigen Lesen an.",
			"groups":["Connecting Objects"],
			"groups_de":["Konnektoren"],
			"view":"connector/association.unidirectional.svg",
			"icon":"connector/association.unidirectional.png",
			"roles": [
				"all",
				"ConnectingObjectsMorph",
				"Directed_Association"
			],
			"propertyPackages" : [
			    "dataAssociation"
			],
			"properties" : [
                {
                    "id":"text",
                    "type":"String",
                    "title":"Name",
                    "title_de":"Name",
                    "value":"",
                    "description":"",
                    "readonly":false,
                    "optional":true,
                    "length":"",
                    "refToView":"name",
                    "wrapLines":true,
					"popular":true
                }
           ]
		}/*,
                
           //Pre-defined Service Tasks
           {
                "type" : 			"node",
                "id": 				"_CustomTask_SendEmailService",
                "title" : 			"Send Email",
                "groups" : 			["Service Tasks"],
                "description" : 	"Sends a Email",
                "view" : "service/sendEmail.svg",
                "icon" : "service/task.png",
                "propertyPackages" :[
                    "customtask",
                    "customactivity",
                    "customloopcharacteristics"
                ],
                "roles" : [
                    "all",
                    "sequence_start",
                    "sequence_end",
                    "from_task_event",
                    "to_task_event",
                    "FromEventbasedGateway",
                    "messageflow_start",
                    "messageflow_end",
                    "fromtoall",
                    "ActivitiesMorph"
                ],
                "properties": [
                    {
                        "id":"tasktype",
                        "type":"String",
                        "title":"TaskType",
                        "value":"_CustomTask_SendEmailService",
                        "description":"",
                        "readonly":true,
                        "optional":false
                    },
                    {
                        "id":"name",
                        "type":"String",
                        "title":"Name",
                        "value":"Send Email",
                        "description":"The descriptive name of the BPMN element.",
                        "readonly":false,
                        "optional":true,
                        "length":"",
                        "wrapLines" : true,
                        "refToView":"text_name"	
                    },
                    {
                        "id":"documentation",
                        "type":"Text",
                        "title":"Documentation",
                        "value":"", 
                        "description":"This attribute is used to annotate the BPMN element, such as descriptions and other documentation.",
                        "readonly":true,
                        "optional":true,
                        "length":"",
                        "wrapLines":true,
                        "popular" : true
                    },
                    {
                        "id":"taskName",
                        "type":"String",
                        "title":"Task Name",
                        "title_de":"Task Name",
                        "value":"Send Email",
                        "description":"Task Name",
                        "readonly":true,
                        "optional":true
                    },
                    {
                            "id":"datainputset",
                            "type":"Text",
                            "title":"DataInputSet",
                            "title_de":"Dateneingabesatz",
                            "value":"to,cc,bcc,subject,body",
                            "description":"An InputSet is a collection of DataInput elements that together define a valid set of data inputs.",
                            "description_de":"Ein Eingabesatz ist eine Zusammenstellung von Eingabe-Datenobjekten, die zusammen einen gültigen Satz von Dataeingaben definieren.",
                            "readonly":false,
                            "optional":true
                    },  
                    {
                            "id":"dataoutputset",
                            "type":"Text",
                            "title":"DataOutputSet",
                            "title_de":"Datenausgabesatz",
                            "value":"",
                            "description":"An OutputSet is a collection of DataOutputs elements that together may be produced as output from an Activity or Event.",
                            "description_de":"Ein Ausgabesatz ist eine Zusammenstellung von Ausgabe-Datenobjekten, die zusammen als Ausgabe einer Aktivität oder eines Ereignisses produziert werden.",
                            "readonly":false,
                            "optional":true
                    },
                    {
                            "id":"assignments",
                            "type":"Text",
                            "title":"Assignments",
                            "title_de":"Zuweisungen",
                            "value":"to=,cc=,bcc=,subject=,body=",
                            "description":"",
                            "readonly":false,
                            "optional":true
                    }
                ]
            },
            {
                "type" : 			"node",
                "id": 				"_CustomTask_SendSMSService",
                "title" : 			"Send SMS",
                "groups" : 			["Service Tasks"],
                "description" : 	"Sends a SMS",
                "view" : "service/sendSMS.svg",
                "icon" : "service/task.png",
                "propertyPackages" :[
                    "customtask",
                    "customactivity",
                    "customloopcharacteristics"
                ],
                "roles" : [
                    "all",
                    "sequence_start",
                    "sequence_end",
                    "from_task_event",
                    "to_task_event",
                    "FromEventbasedGateway",
                    "messageflow_start",
                    "messageflow_end",
                    "fromtoall",
                    "ActivitiesMorph"
                ],
                "properties": [
                    {
                        "id":"tasktype",
                        "type":"String",
                        "title":"TaskType",
                        "value":"_CustomTask_SendSMSService",
                        "description":"",
                        "readonly":true,
                        "optional":false
                    },
                    {
                        "id":"name",
                        "type":"String",
                        "title":"Name",
                        "value":"Send SMS",
                        "description":"The descriptive name of the BPMN element.",
                        "readonly":false,
                        "optional":true,
                        "length":"",
                        "wrapLines" : true,
                        "refToView":"text_name"	
                    },
                    {
                        "id":"documentation",
                        "type":"Text",
                        "title":"Documentation",
                        "value":"", 
                        "description":"This attribute is used to annotate the BPMN element, such as descriptions and other documentation.",
                        "readonly":true,
                        "optional":true,
                        "length":"",
                        "wrapLines":true,
                        "popular" : true
                    },
                    {
                        "id":"taskName",
                        "type":"String",
                        "title":"Task Name",
                        "title_de":"Task Name",
                        "value":"Send SMS",
                        "description":"Task Name",
                        "readonly":true,
                        "optional":true
                    },
                    {
                            "id":"datainputset",
                            "type":"Text",
                            "title":"DataInputSet",
                            "title_de":"Dateneingabesatz",
                            "value":"to,body",
                            "description":"An InputSet is a collection of DataInput elements that together define a valid set of data inputs.",
                            "description_de":"Ein Eingabesatz ist eine Zusammenstellung von Eingabe-Datenobjekten, die zusammen einen gültigen Satz von Dataeingaben definieren.",
                            "readonly":false,
                            "optional":true
                    },  
                    {
                            "id":"dataoutputset",
                            "type":"Text",
                            "title":"DataOutputSet",
                            "title_de":"Datenausgabesatz",
                            "value":"",
                            "description":"An OutputSet is a collection of DataOutputs elements that together may be produced as output from an Activity or Event.",
                            "description_de":"Ein Ausgabesatz ist eine Zusammenstellung von Ausgabe-Datenobjekten, die zusammen als Ausgabe einer Aktivität oder eines Ereignisses produziert werden.",
                            "readonly":false,
                            "optional":true
                    },
                    {
                            "id":"assignments",
                            "type":"Text",
                            "title":"Assignments",
                            "title_de":"Zuweisungen",
                            "value":"to=,body=",
                            "description":"",
                            "readonly":false,
                            "optional":true
                    }
                ]
            },
            {
                "type" : 			"node",
                "id": 				"_CustomTask_NotifyExternalSystemService",
                "title" : 			"Notify External System",
                "groups" : 			["Service Tasks"],
                "description" : 	"Notify External System",
                "view" : "service/notifySystem.svg",
                "icon" : "service/task.png",
                "propertyPackages" :[
                    "customtask",
                    "customactivity",
                    "customloopcharacteristics"
                ],
                "roles" : [
                    "all",
                    "sequence_start",
                    "sequence_end",
                    "from_task_event",
                    "to_task_event",
                    "FromEventbasedGateway",
                    "messageflow_start",
                    "messageflow_end",
                    "fromtoall",
                    "ActivitiesMorph"
                ],
                "properties": [
                    {
                        "id":"tasktype",
                        "type":"String",
                        "title":"TaskType",
                        "value":"_CustomTask_NotifyExternalSystemService",
                        "description":"",
                        "readonly":true,
                        "optional":false
                    },
                    {
                        "id":"name",
                        "type":"String",
                        "title":"Name",
                        "value":"Notify External System",
                        "description":"The descriptive name of the BPMN element.",
                        "readonly":false,
                        "optional":true,
                        "length":"",
                        "wrapLines" : true,
                        "refToView":"text_name"	
                    },
                    {
                        "id":"documentation",
                        "type":"Text",
                        "title":"Documentation",
                        "value":"", 
                        "description":"This attribute is used to annotate the BPMN element, such as descriptions and other documentation.",
                        "readonly":true,
                        "optional":true,
                        "length":"",
                        "wrapLines":true,
                        "popular" : true
                    },
                    {
                        "id":"taskName",
                        "type":"String",
                        "title":"Task Name",
                        "title_de":"Task Name",
                        "value":"Notify External System",
                        "description":"Task Name",
                        "readonly":true,
                        "optional":true
                    },
                    {
                            "id":"datainputset",
                            "type":"Text",
                            "title":"DataInputSet",
                            "title_de":"Dateneingabesatz",
                            "value":"",
                            "description":"An InputSet is a collection of DataInput elements that together define a valid set of data inputs.",
                            "description_de":"Ein Eingabesatz ist eine Zusammenstellung von Eingabe-Datenobjekten, die zusammen einen gültigen Satz von Dataeingaben definieren.",
                            "readonly":false,
                            "optional":true
                    },  
                    {
                            "id":"dataoutputset",
                            "type":"Text",
                            "title":"DataOutputSet",
                            "title_de":"Datenausgabesatz",
                            "value":"",
                            "description":"An OutputSet is a collection of DataOutputs elements that together may be produced as output from an Activity or Event.",
                            "description_de":"Ein Ausgabesatz ist eine Zusammenstellung von Ausgabe-Datenobjekten, die zusammen als Ausgabe einer Aktivität oder eines Ereignisses produziert werden.",
                            "readonly":false,
                            "optional":true
                    },
                    {
                            "id":"assignments",
                            "type":"Text",
                            "title":"Assignments",
                            "title_de":"Zuweisungen",
                            "value":"",
                            "description":"",
                            "readonly":false,
                            "optional":true
                    }
                ]
            }*/
           
	],
	
	"rules" : {
		"cardinalityRules": [
			{
				"role":"Startevents_all",
				"incomingEdges": [
					{
						"role":"SequenceFlow",
						"maximum":0
						
					}
				]
			},
			{
				"role":"Endevents_all",
				"outgoingEdges": [
					{
						"role":"SequenceFlow",
						"maximum":0
						
					}
				]
			}
		],
		"connectionRules": [
			{
				"role":"SequenceFlow",
				"connects": [
					{
						"from":"sequence_start",
						"to":["sequence_end"]
					},
					{
						"from":"choreography_sequence_start",
						"to":["choreography_sequence_end"]
					},
					{
						"from":"Exclusive_Eventbased_Gateway",
						"to":["FromEventbasedGateway"]
					},{
						"from" : "EventbasedGateway",
						"to" : ["FromEventbasedGateway"]
					}
				]
			},
			{
				"role":"MessageFlow",
				"connects": [
					{
						"from":"messageflow_start",
						"to":["messageflow_end"]
					}
				]
			},
			{
				"role":"ChoreographyMessageFlowStart",
				"connects": [
					{
						"from":"messageflow_start",
						"to":["choreography_messageflow_end"]
					}
				]
			},
			{
				"role":"ChoreographyMessageFlowEnd",
				"connects": [
					{
						"from":"choreography_messageflow_start",
						"to":["messageflow_end"]
					}
				]
			},
			{
				"role":"IntermediateEventOnActivityBoundary",
				"connects": [
					{
						"from":"Task",
						"to":["IntermediateEventOnActivityBoundary"]
					}
				]
			},
			{
				"role":"IntermediateEventOnSubprocessBoundary",
				"connects": [
					{
						"from":"CollapsedSubprocess",
						"to":["IntermediateEventOnSubprocessBoundary"]
					},
					{
						"from":"Subprocess",
						"to":["IntermediateEventOnSubprocessBoundary"]
					}
				]
			},
			{
				"role":"EventOnChoreographyActivityBoundary",
				"connects": [
					{
						"from":"ChoreographyMorph",
						"to":["EventOnChoreographyActivityBoundary"]
					}
				]
			},
			{
				"role" : "Directed_Association",
				"connects" : [
					{
						"from" : "from_task_event",
						"to" : ["DataObject"]
					},
					{
						"from" : "from_task_event",
						"to" : ["DataStore"]
					},
					{
						"from" : "from_task_event",
						"to" : ["ITSystem"]
					},
					{
						"from" : "DataObject",
						"to" : ["to_task_event"]
					},
					{
						"from" : "DataStore",
						"to" : ["to_task_event"]
					},
					{
						"from" : "ITSystem",
						"to" : ["to_task_event"]
					},
					{
						"from" : "IntermediateCompensationEventCatching",
						"to" : ["to_task_event"]
					}
				]
			},
			{
				"role" : "Association_Undirected",
				"connects" : [
					{
						"from" : "SequenceFlow",
						"to" : ["DataObject"]
					},
					{
						"from" : "DataObject",
						"to" : ["SequenceFlow"]
					},
					{
						"from" : "DataObject",
						"to" : ["MessageFlow"]
					},
					{
						"from" : "MessageFlow",
						"to" : ["DataObject"]
					},
					{
						"from" : "ITSystem",
						"to" : ["to_task_event"]
					},
					{
						"from" : "from_task_event",
						"to" : ["ITSystem"]
					},
					{
						"from" : "DataStore",
						"to" : ["to_task_event"]
					},
					{
						"from" : "from_task_event",
						"to" : ["DataStore"]
					},
					{
						"from" : "fromtoall",
						"to" : ["TextAnnotation"]
					},
					{
						"from" : "TextAnnotation",
						"to" : "fromtoall"
					},
                                        {
						"from" : "fromtoall",
						"to" : ["ModelEntity"]
					},
					{
						"from" : "ModelEntity",
						"to" : ["fromtoall"]
					},
                                        $workingSetsClassNames:{cn|
                                          \{
                                                "from" : "fromtoall",
						"to" : ["Model_$cn$"]
                                          \}, 
                                          \{
                                                "from" : "Model_$cn$",
						"to" : ["fromtoall"]
                                          \}, 
                                        }$
					{
						"from" : "Message",
						"to" : ["MessageFlow"]
					},
					{
						"from" : "MessageFlow",
						"to" : ["Message"]
					},
					{
						"from" : "Message",
						"to" : ["ChoreographyElement"]
					},
					{
						"from" : "ChoreographyElement",
						"to" : ["Message"]
					},
					{
						"from" : "ChoreographyElement",
						"to" : ["TextAnnotation"]
					},
					{
						"from" : "TextAnnotation",
						"to" : "ChoreographyElement"
					},
					{
					   "from" : "ActivitiesMorph",
					   "to" : ["to_participant"]
					},
					{
					   "from" : "to_participant",
					   "to" : ["ActivitiesMorph"]
					}
				]
			}
		],
		"containmentRules" : [
			{
				"role" : "BPMNDiagram",
				"contains" : ["all"]
			},
			{
				"role" : "EventSubprocess",
				"contains" : [
					"eventSubprocessElement",
					"sequence_start",
					"sequence_end"
				]
			},
			{
				"role" : "Pool",
				"contains" : [
					"Lane"
				]
			},
			{
				"role" : "Lane",
				"contains" : [
					"Lane",
					"sequence_start",
					"sequence_end",
					"DataObjectMorph",
					"TextAnnotationMorph",
					"from_participant"
				]
			},
			{
				"role" : "Subprocess",
				"contains" : [
					"sequence_start",
					"sequence_end",
					"from_task_event",
					"to_task_event",
					"EventSubprocess",
					"CollapsedEventSubprocess",
					"TextAnnotation",
					"from_participant"
				]
			},
			{
				"role" : "AdHocSubprocess",
				"contains" : [
					"sequence_start",
					"sequence_end",
					"from_task_event",
					"to_task_event",
					"EventSubprocess",
					"CollapsedEventSubprocess",
					"TextAnnotation",
					"from_participant"
				]
			},
			{
				"role" : "MessageContainer",
				"contains" : ["Message"]
			},
			{
				"role" : "ChoreographyElement",
				"contains" : ["ChoreographyParticipant"]
			},
			{
				"role" : "ChoreographySubprocessExpanded",
				"contains":	[
								"ChoreographyElement",
								"choreography_sequence_start",
								"choreography_sequence_end",
								"Message",
								"TextAnnotation"
																
							]
			}
		],
		"morphingRules": [
			{
				"role": "ActivitiesMorph",
				"baseMorphs": ["Task"],
				"preserveBounds" : true
			},
			{
				"role": "EventActivitiesMorph",
				"baseMorphs": ["CollapsedEventSubprocess"]
			},
			{
				"role": "GatewaysMorph",
				"baseMorphs": ["Exclusive_Databased_Gateway"]
			},
			{
				"role": "StartEventsMorph",
				"baseMorphs": ["StartNoneEvent"],
				"showInShapeMenu":false
			},
			{
				"role": "IntermediateEventsMorph",
				"baseMorphs": ["IntermediateEvent"]
			},
			{
				"role": "EndEventsMorph",
				"baseMorphs": ["EndNoneEvent"]
			},
			{
				"role": "TextAnnotationMorph",
				"baseMorphs": ["TextAnnotation"]
			},
			{
				"role": "DataObjectMorph",
				"baseMorphs": ["DataObject"]
			},
			{
				"role": "ConnectingObjectsMorph",
				"baseMorphs": ["SequenceFlow"]
			},
			{
				"role": "ChoreographyMorph",
				"baseMorphs": ["ChoreographyTask"]
			},
			{
				"role": "AssociationMorph",
				"baseMorphs": [""]
			}
		],
		"layoutRules" : [
			{
				"role": "ActivitiesMorph",
				"outs":[{"edgeRole":"MessageFlow","t":2, "r":1, "b":2, "l":1},
						{"t":1,"r":2,"b":1,"l":2}],
				"ins": [{"edgeRole":"MessageFlow","t":2, "r":1, "b":2, "l":1},
						{"t":1, "r":2, "b":1, "l":2}]
			},
			{
				"role": "EventActivitiesMorph",
				"outs":[{"edgeRole":"MessageFlow","t":2, "r":1, "b":2, "l":1},
						{"t":1,"r":2,"b":1,"l":2}],
				"ins": [{"edgeRole":"MessageFlow","t":2, "r":1, "b":2, "l":1},
						{"t":1, "r":2, "b":1, "l":2}]
			},
			{
				"role": "ChoreographyMorph",
				"outs":[{"edgeRole":"MessageFlow","t":2, "r":1, "b":2, "l":1},
						{"t":1,"r":2,"b":1,"l":2}],
				"ins": [{"edgeRole":"MessageFlow","t":2, "r":1, "b":2, "l":1},
						{"t":1, "r":2, "b":1, "l":2}]
			},
			{
				"role": "GatewaysMorph",
				"outs": [{"t":2, "r":1, "b":2, "l":1}]
			},
			{
				"role": "StartEventsMorph",
				"outs":[{"edgeRole":"MessageFlow","t":2, "r":1, "b":2, "l":1},
						{"t":1,"r":2,"b":1,"l":2}],
				"ins": [{"edgeRole":"MessageFlow","t":2, "r":1, "b":2, "l":1},
						{"t":1, "r":2, "b":1, "l":2}]
			},
			{
				"role": "IntermediateEventsMorph",
				"outs":[{"edgeRole":"MessageFlow","t":2, "r":1, "b":2, "l":1},
						{"t":1,"r":2,"b":1,"l":2}],
				"ins": [{"edgeRole":"MessageFlow","t":2, "r":1, "b":2, "l":1},
						{"t":1, "r":2, "b":1, "l":2}]
			},
			{
				"role": "EndEventsMorph",
				"outs":[{"edgeRole":"MessageFlow","t":2, "r":1, "b":2, "l":1},
						{"t":1,"r":2,"b":1,"l":2}],
				"ins": [{"edgeRole":"MessageFlow","t":2, "r":1, "b":2, "l":1},
						{"t":1, "r":2, "b":1, "l":2}]
			}
		]
	}
}
