/**
 * @author Garret.Bi
 * 
 * Contains all strings for the Janpanese language.
 * Version 1 - 02/09/11
 */
if(!ORYX) var ORYX = {};

if(!ORYX.I18N) ORYX.I18N = {};

ORYX.I18N.Language = "ja"; //Pattern <ISO language code>_<ISO country code> in lower case!

if(!ORYX.I18N.Oryx) ORYX.I18N.Oryx = {};

ORYX.I18N.Oryx.title		= ORYX.TITLE;
ORYX.I18N.Oryx.noBackendDefined	= "JP:Caution! \nNo Backend defined.\n The requested model cannot be loaded. Try to load a configuration with a save plugin.";
ORYX.I18N.Oryx.pleaseWait 	= "JP:Please wait while loading...";
ORYX.I18N.Oryx.notLoggedOn = "JP:Not logged on";
ORYX.I18N.Oryx.editorOpenTimeout = "JP:The editor does not seem to be started yet. Please check, whether you have a popup blocker enabled and disable it or allow popups for this site. We will never display any commercials on this site.";

if(!ORYX.I18N.AddDocker) ORYX.I18N.AddDocker = {};

ORYX.I18N.AddDocker.group = "Docker";
ORYX.I18N.AddDocker.add = "JP:Add Docker";
ORYX.I18N.AddDocker.addDesc = "JP:Add a Docker to an edge, by clicking on it";
ORYX.I18N.AddDocker.del = "JP:Delete Docker";
ORYX.I18N.AddDocker.delDesc = "JP:Delete a Docker";

if(!ORYX.I18N.ShapeConnector) ORYX.I18N.ShapeConnector = {};

ORYX.I18N.ShapeConnector.group = "Connector";
ORYX.I18N.ShapeConnector.add = "JP:Connect Shapes";
ORYX.I18N.ShapeConnector.addDesc = "JP:Connect several nodes by marking them in the desired order";

if(!ORYX.I18N.SSExtensionLoader) ORYX.I18N.SSExtensionLoader = {};

ORYX.I18N.SSExtensionLoader.group = "Stencil Set";
ORYX.I18N.SSExtensionLoader.add = "JP:Add Stencil Set Extension";
ORYX.I18N.SSExtensionLoader.addDesc = "JP:Add a stencil set extension";
ORYX.I18N.SSExtensionLoader.loading = "JP:Loading Stencil Set Extension";
ORYX.I18N.SSExtensionLoader.noExt = "JP:There are no extensions available or all available extensions are already loaded.";
ORYX.I18N.SSExtensionLoader.failed1 = "JP:Loading stencil set extensions configuration failed. The response is not a valid configuration file.";
ORYX.I18N.SSExtensionLoader.failed2 = "JP:Loading stencil set extension configuration file failed. The request returned an error.";
ORYX.I18N.SSExtensionLoader.panelTitle = "JP:Stencil Set Extensions";
ORYX.I18N.SSExtensionLoader.panelText = "JP:Select the stencil set extensions you want to load.";

if(!ORYX.I18N.AdHocCC) ORYX.I18N.AdHocCC = {};

ORYX.I18N.AdHocCC.group = "Ad Hoc";
ORYX.I18N.AdHocCC.compl = "JP:Edit Completion Condition";
ORYX.I18N.AdHocCC.complDesc = "JP:Edit an Ad Hoc Activity's Completion Condition";
ORYX.I18N.AdHocCC.notOne = "JP:Not exactly one element selected!";
ORYX.I18N.AdHocCC.nodAdHocCC = "JP:Selected element has no ad hoc completion condition!";
ORYX.I18N.AdHocCC.selectTask = "JP:Select a task...";
ORYX.I18N.AdHocCC.selectState = "JP:Select a state...";
ORYX.I18N.AdHocCC.addExp = "JP:Add Expression";
ORYX.I18N.AdHocCC.selectDataField = "JP:Select a data field...";
ORYX.I18N.AdHocCC.enterEqual = "JP:Enter a value that must equal...";
ORYX.I18N.AdHocCC.and = "JP:and";
ORYX.I18N.AdHocCC.or = "JP:or";
ORYX.I18N.AdHocCC.not = "JP:not";
ORYX.I18N.AdHocCC.clearCC = "JP:Clear Completion Condition";
ORYX.I18N.AdHocCC.editCC = "JP:Edit Ad-Hoc Completion Condtions";
ORYX.I18N.AdHocCC.addExecState = "JP:Add Execution State Expression: ";
ORYX.I18N.AdHocCC.addDataExp = "JP:Add Data Expression: ";
ORYX.I18N.AdHocCC.addLogOp = "JP:Add Logical Operators: ";
ORYX.I18N.AdHocCC.curCond = "JP:Current Completion Condition: ";

if(!ORYX.I18N.AMLSupport) ORYX.I18N.AMLSupport = {};

ORYX.I18N.AMLSupport.group = "EPC";
ORYX.I18N.AMLSupport.imp = "JP:Import AML file";
ORYX.I18N.AMLSupport.impDesc = "JP:Import an Aris 7 AML file";
ORYX.I18N.AMLSupport.failed = "JP:Importing AML file failed. Please check, if the selected file is a valid AML file. Error message: ";
ORYX.I18N.AMLSupport.failed2 = "JP:Importing AML file failed: ";
ORYX.I18N.AMLSupport.noRights = "JP:You have no rights to import multiple EPC-Diagrams (Login required).";
ORYX.I18N.AMLSupport.panelText = "JP:Select an AML (.xml) file to import.";
ORYX.I18N.AMLSupport.file = "JP:File";
ORYX.I18N.AMLSupport.importBtn = "JP:Import AML-File";
ORYX.I18N.AMLSupport.get = "JP:Get diagrams...";
ORYX.I18N.AMLSupport.close = "JP:Close";
ORYX.I18N.AMLSupport.title = "JP:Title";
ORYX.I18N.AMLSupport.selectDiagrams = "JP:Select the diagram(s) you want to import. <br/> If one model is selected, it will be imported in the current editor, if more than one is selected, those models will directly be stored in the repository.";
ORYX.I18N.AMLSupport.impText = "JP:Import";
ORYX.I18N.AMLSupport.impProgress = "JP:Importing...";
ORYX.I18N.AMLSupport.cancel = "JP:Cancel";
ORYX.I18N.AMLSupport.name = "JP:Name";
ORYX.I18N.AMLSupport.allImported = "JP:All imported diagrams.";
ORYX.I18N.AMLSupport.ok = "JP:OK";

if(!ORYX.I18N.Arrangement) ORYX.I18N.Arrangement = {};

ORYX.I18N.Arrangement.groupZ = "Z-Order";
ORYX.I18N.Arrangement.btf = "JP:Bring To Front";
ORYX.I18N.Arrangement.btfDesc = "JP:Bring to Front";
ORYX.I18N.Arrangement.btb = "JP:Bring To Back";
ORYX.I18N.Arrangement.btbDesc = "JP:Bring To Back";
ORYX.I18N.Arrangement.bf = "JP:Bring Forward";
ORYX.I18N.Arrangement.bfDesc = "JP:Bring Forward";
ORYX.I18N.Arrangement.bb = "JP:Bring Backward";
ORYX.I18N.Arrangement.bbDesc = "JP:Bring Backward";
ORYX.I18N.Arrangement.groupA = "Alignment";
ORYX.I18N.Arrangement.ab = "JP:Alignment Bottom";
ORYX.I18N.Arrangement.abDesc = "JP:Bottom";
ORYX.I18N.Arrangement.am = "JP:Alignment Middle";
ORYX.I18N.Arrangement.amDesc = "JP:Middle";
ORYX.I18N.Arrangement.at = "JP:Alignment Top";
ORYX.I18N.Arrangement.atDesc = "JP:Top";
ORYX.I18N.Arrangement.al = "JP:Alignment Left";
ORYX.I18N.Arrangement.alDesc = "JP:Left";
ORYX.I18N.Arrangement.ac = "JP:Alignment Center";
ORYX.I18N.Arrangement.acDesc = "JP:Center";
ORYX.I18N.Arrangement.ar = "JP:Alignment Right";
ORYX.I18N.Arrangement.arDesc = "JP:Right";
ORYX.I18N.Arrangement.as = "JP:Alignment Same Size";
ORYX.I18N.Arrangement.asDesc = "JP:Same Size";

if(!ORYX.I18N.BPELSupport) ORYX.I18N.BPELSupport = {};

ORYX.I18N.BPELSupport.group = "BPEL";
ORYX.I18N.BPELSupport.exp = "JP:Export BPEL";
ORYX.I18N.BPELSupport.expDesc = "JP:Export diagram to BPEL";
ORYX.I18N.BPELSupport.imp = "JP:Import BPEL";
ORYX.I18N.BPELSupport.impDesc = "JP:Import a BPEL file";
ORYX.I18N.BPELSupport.selectFile = "JP:Select a BPEL file to import";
ORYX.I18N.BPELSupport.file = "JP:file";
ORYX.I18N.BPELSupport.impPanel = "JP:Import BPEL file";
ORYX.I18N.BPELSupport.impBtn = "JP:Import";
ORYX.I18N.BPELSupport.content = "JP:content";
ORYX.I18N.BPELSupport.close = "JP:Close";
ORYX.I18N.BPELSupport.error = "JP:Error";
ORYX.I18N.BPELSupport.progressImp = "JP:Import...";
ORYX.I18N.BPELSupport.progressExp = "JP:Export...";
ORYX.I18N.BPELSupport.impFailed = "JP:An error while importing occurs! <br/>Please check error message: <br/><br/>";

if(!ORYX.I18N.BPELLayout) ORYX.I18N.BPELLayout = {};

ORYX.I18N.BPELLayout.group = "BPELLayout";
ORYX.I18N.BPELLayout.disable = "JP:disable layout";
ORYX.I18N.BPELLayout.disDesc = "JP:disable auto layout plug-in";
ORYX.I18N.BPELLayout.enable = "JP:enable layout";
ORYX.I18N.BPELLayout.enDesc = "JP:enable auto layout plug-in";

if(!ORYX.I18N.BPEL4Chor2BPELSupport) ORYX.I18N.BPEL4Chor2BPELSupport = {};

ORYX.I18N.BPEL4Chor2BPELSupport.group = "BPEL4Chor";
ORYX.I18N.BPEL4Chor2BPELSupport.exp = "JP:Export to BPEL";
ORYX.I18N.BPEL4Chor2BPELSupport.expDesc = "JP:Export diagram to BPEL";

if(!ORYX.I18N.BPEL4ChorSupport) ORYX.I18N.BPEL4ChorSupport = {};

ORYX.I18N.BPEL4ChorSupport.group = "BPEL4Chor";
ORYX.I18N.BPEL4ChorSupport.exp = "JP:Export BPEL4Chor";
ORYX.I18N.BPEL4ChorSupport.expDesc = "JP:Export diagram to BPEL4Chor";
ORYX.I18N.BPEL4ChorSupport.imp = "JP:Import BPEL4Chor";
ORYX.I18N.BPEL4ChorSupport.impDesc = "JP:Import a BPEL4Chor file";
ORYX.I18N.BPEL4ChorSupport.gen = "JP:BPEL4Chor generator";
ORYX.I18N.BPEL4ChorSupport.genDesc = "JP:generate values of some BPEL4Chor properties if they are already known(e.g. sender of messageLink)";
ORYX.I18N.BPEL4ChorSupport.selectFile = "JP:Select a BPEL4Chor file to import";
ORYX.I18N.BPEL4ChorSupport.file = "JP:file";
ORYX.I18N.BPEL4ChorSupport.impPanel = "JP:Import BPEL4Chor file";
ORYX.I18N.BPEL4ChorSupport.impBtn = "JP:Import";
ORYX.I18N.BPEL4ChorSupport.content = "JP:content";
ORYX.I18N.BPEL4ChorSupport.close = "JP:Close";
ORYX.I18N.BPEL4ChorSupport.error = "JP:Error";
ORYX.I18N.BPEL4ChorSupport.progressImp = "JP:Import...";
ORYX.I18N.BPEL4ChorSupport.progressExp = "JP:Export...";
ORYX.I18N.BPEL4ChorSupport.impFailed = "JP:An error while importing occurs! <br/>Please check error message: <br/><br/>";

if(!ORYX.I18N.Bpel4ChorTransformation) ORYX.I18N.Bpel4ChorTransformation = {};

ORYX.I18N.Bpel4ChorTransformation.group = "Export";
ORYX.I18N.Bpel4ChorTransformation.exportBPEL = "JP:Export BPEL4Chor";
ORYX.I18N.Bpel4ChorTransformation.exportBPELDesc = "JP:Export diagram to BPEL4Chor";
ORYX.I18N.Bpel4ChorTransformation.exportXPDL = "JP:Export XPDL4Chor";
ORYX.I18N.Bpel4ChorTransformation.exportXPDLDesc = "JP:Export diagram to XPDL4Chor";
ORYX.I18N.Bpel4ChorTransformation.warning = "JP:Warning";
ORYX.I18N.Bpel4ChorTransformation.wrongValue = 'JP:The changed name must have the value "1" to avoid errors during the transformation to BPEL4Chor';
ORYX.I18N.Bpel4ChorTransformation.loopNone = 'JP:The loop type of the receive task must be "None" to be transformable to BPEL4Chor';
ORYX.I18N.Bpel4ChorTransformation.error = "JP:Error";
ORYX.I18N.Bpel4ChorTransformation.noSource = "JP:1 with id 2 has no source object.";
ORYX.I18N.Bpel4ChorTransformation.noTarget = "JP:1 with id 2 has no target object.";
ORYX.I18N.Bpel4ChorTransformation.transCall = "JP:An error occured during the transformation call. 1:2";
ORYX.I18N.Bpel4ChorTransformation.loadingXPDL4ChorExport = "JP:Export to XPDL4Chor";
ORYX.I18N.Bpel4ChorTransformation.loadingBPEL4ChorExport = "JP:Export to BPEL4Chor";
ORYX.I18N.Bpel4ChorTransformation.noGen = "JP:The transformation input could not be generated: 1\n2\n";

ORYX.I18N.BPMN2PNConverter = {
  name: "Convert to Petri net",
  desc: "Converts BPMN diagrams to Petri nets",
  group: "Export",
  error: "Error",
  errors: {
    server: "Couldn't import BPNM diagram.",
    noRights: "Don't you have read permissions on given model?",
    notSaved: "Model must be saved and reopened for using Petri net exporter!"
  },
  progress: {
      status: "Status",
      importingModel: "Importing BPMN Model",
      fetchingModel: "Fetching",
      convertingModel: "Converting",
      renderingModel: "Rendering"
  }
}

if(!ORYX.I18N.TransformationDownloadDialog) ORYX.I18N.TransformationDownloadDialog = {};

ORYX.I18N.TransformationDownloadDialog.error = "JP:Error";
ORYX.I18N.TransformationDownloadDialog.noResult = "JP:The transformation service did not return a result.";
ORYX.I18N.TransformationDownloadDialog.errorParsing = "JP:Error During the Parsing of the Diagram.";
ORYX.I18N.TransformationDownloadDialog.transResult = "JP:Transformation Results";
ORYX.I18N.TransformationDownloadDialog.showFile = "JP:Show the result file";
ORYX.I18N.TransformationDownloadDialog.downloadFile = "JP:Download the result file";
ORYX.I18N.TransformationDownloadDialog.downloadAll = "JP:Download all result files";

if(!ORYX.I18N.DesynchronizabilityOverlay) ORYX.I18N.DesynchronizabilityOverlay = {};
//TODO desynchronizability is not a correct term
ORYX.I18N.DesynchronizabilityOverlay.group = "Overlay";
ORYX.I18N.DesynchronizabilityOverlay.name = "JP:Desynchronizability Checker";
ORYX.I18N.DesynchronizabilityOverlay.desc = "JP:Desynchronizability Checker";
ORYX.I18N.DesynchronizabilityOverlay.sync = "JP:The net is desynchronizable.";
ORYX.I18N.DesynchronizabilityOverlay.error = "JP:The net has 1 syntax errors.";
ORYX.I18N.DesynchronizabilityOverlay.invalid = "JP:Invalid answer from server.";

if(!ORYX.I18N.Edit) ORYX.I18N.Edit = {};

ORYX.I18N.Edit.group = "Edit";
ORYX.I18N.Edit.cut = "JP:Cut";
ORYX.I18N.Edit.cutDesc = "JP:Cuts the selection into the clipboard";
ORYX.I18N.Edit.copy = "JP:Copy";
ORYX.I18N.Edit.copyDesc = "JP:Copies the selection into the clipboard";
ORYX.I18N.Edit.paste = "JP:Paste";
ORYX.I18N.Edit.pasteDesc = "JP:Pastes the clipboard to the canvas";
ORYX.I18N.Edit.del = "JP:Delete";
ORYX.I18N.Edit.delDesc = "JP:Deletes all selected shapes";

if(!ORYX.I18N.EPCSupport) ORYX.I18N.EPCSupport = {};

ORYX.I18N.EPCSupport.group = "EPC";
ORYX.I18N.EPCSupport.exp = "JP:Export EPC";
ORYX.I18N.EPCSupport.expDesc = "JP:Export diagram to EPML";
ORYX.I18N.EPCSupport.imp = "JP:Import EPC";
ORYX.I18N.EPCSupport.impDesc = "JP:Import an EPML file";
ORYX.I18N.EPCSupport.progressExp = "JP:Exporting model";
ORYX.I18N.EPCSupport.selectFile = "JP:Select an EPML (.empl) file to import.";
ORYX.I18N.EPCSupport.file = "JP:File";
ORYX.I18N.EPCSupport.impPanel = "JP:Import EPML File";
ORYX.I18N.EPCSupport.impBtn = "JP:Import";
ORYX.I18N.EPCSupport.close = "JP:Close";
ORYX.I18N.EPCSupport.error = "JP:Error";
ORYX.I18N.EPCSupport.progressImp = "JP:Import...";

if(!ORYX.I18N.ERDFSupport) ORYX.I18N.ERDFSupport = {};

ORYX.I18N.ERDFSupport.exp = "JP:Export to ERDF";
ORYX.I18N.ERDFSupport.expDesc = "JP:Export to ERDF";
ORYX.I18N.ERDFSupport.imp = "JP:Import from ERDF";
ORYX.I18N.ERDFSupport.impDesc = "JP:Import from ERDF";
ORYX.I18N.ERDFSupport.impFailed = "JP:Request for import of ERDF failed.";
ORYX.I18N.ERDFSupport.impFailed2 = "JP:An error while importing occurs! <br/>Please check error message: <br/><br/>";
ORYX.I18N.ERDFSupport.error = "JP:Error";
ORYX.I18N.ERDFSupport.noCanvas = "JP:The xml document has no Oryx canvas node included!";
ORYX.I18N.ERDFSupport.noSS = "JP:The Oryx canvas node has no stencil set definition included!";
ORYX.I18N.ERDFSupport.wrongSS = "JP:The given stencil set does not fit to the current editor!";
ORYX.I18N.ERDFSupport.selectFile = "JP:Select an ERDF (.xml) file or type in the ERDF to import it!";
ORYX.I18N.ERDFSupport.file = "JP:File";
ORYX.I18N.ERDFSupport.impERDF = "JP:Import ERDF";
ORYX.I18N.ERDFSupport.impBtn = "JP:Import";
ORYX.I18N.ERDFSupport.impProgress = "JP:Importing...";
ORYX.I18N.ERDFSupport.close = "JP:Close";
ORYX.I18N.ERDFSupport.deprTitle = "JP:Really export to eRDF?";
ORYX.I18N.ERDFSupport.deprText = "JP:Exporting to eRDF is not recommended anymore because the support will be stopped in future versions of the Oryx editor. If possible, export the model to JSON. Do you want to export anyway?";

if(!ORYX.I18N.jPDLSupport) ORYX.I18N.jPDLSupport = {};

ORYX.I18N.jPDLSupport.group = "Export";
ORYX.I18N.jPDLSupport.exp = "JP:Export to jPDL";
ORYX.I18N.jPDLSupport.expDesc = "JP:Export to jPDL";
ORYX.I18N.jPDLSupport.imp = "JP:Import from jPDL";
ORYX.I18N.jPDLSupport.impDesc = "JP:Import jPDL File";
ORYX.I18N.jPDLSupport.impFailedReq = "JP:Request for import of jPDL failed.";
//ORYX.I18N.jPDLSupport.impFailedJson = "JP:Transformation of jPDL failed.";
ORYX.I18N.jPDLSupport.impFailedJsonAbort = "JP:Import aborted.";
ORYX.I18N.jPDLSupport.loadSseQuestionTitle = "JP:jBPM stencil set extension needs to be loaded"; 
ORYX.I18N.jPDLSupport.loadSseQuestionBody = "JP:In order to import jPDL, the stencil set extension has to be loaded. Do you want to proceed?";
ORYX.I18N.jPDLSupport.expFailedReq = "JP:Request for export of model failed.";
ORYX.I18N.jPDLSupport.expFailedXml = "JP:Export to jPDL failed. Exporter reported: ";
ORYX.I18N.jPDLSupport.error = "JP:Error";
ORYX.I18N.jPDLSupport.selectFile = "JP:Select an jPDL (.xml) file or type in the jPDL to import it!";
ORYX.I18N.jPDLSupport.file = "JP:File";
ORYX.I18N.jPDLSupport.impJPDL = "JP:Import jPDL";
ORYX.I18N.jPDLSupport.impBtn = "JP:Import";
ORYX.I18N.jPDLSupport.impProgress = "JP:Importing...";
ORYX.I18N.jPDLSupport.close = "JP:Close";

if(!ORYX.I18N.Bpmn2Bpel) ORYX.I18N.Bpmn2Bpel = {};

ORYX.I18N.Bpmn2Bpel.group = "ExecBPMN";
ORYX.I18N.Bpmn2Bpel.show = "JP:Show transformed BPEL";
ORYX.I18N.Bpmn2Bpel.download = "JP:Download transformed BPEL";
ORYX.I18N.Bpmn2Bpel.deploy = "JP:Deploy transformed BPEL";
ORYX.I18N.Bpmn2Bpel.showDesc = "JP:Transforms BPMN to BPEL and shows the result in a new window.";
ORYX.I18N.Bpmn2Bpel.downloadDesc = "JP:Transforms BPMN to BPEL and offers to download the result.";
ORYX.I18N.Bpmn2Bpel.deployDesc = "JP:Transforms BPMN to BPEL and deploys the business process on the BPEL-Engine Apache ODE";
ORYX.I18N.Bpmn2Bpel.transfFailed = "JP:Request for transformation to BPEL failed.";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputTitle = "JP:Apache ODE URL";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputLabelDeploy = "JP:Deploy Process";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputLabelCancel = "JP:Cancel";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputPanelText = "JP:Please type-in the URL to the Apache ODE BPEL-Engine. E.g.: http://myserver:8080/ode";


if(!ORYX.I18N.Save) ORYX.I18N.Save = {};

ORYX.I18N.Save.group = "File";
ORYX.I18N.Save.save = "JP:Save";
ORYX.I18N.Save.autosave = "JP:Autosave";
ORYX.I18N.Save.saveDesc = "JP:Save";
ORYX.I18N.Save.autosaveDesc = "JP:Autosave";
ORYX.I18N.Save.autosaveDesc_on = "JP:Autosave (on)";
ORYX.I18N.Save.autosaveDesc_off = "JP:Autosave (off)";
ORYX.I18N.Save.saveAs = "JP:Save As...";
ORYX.I18N.Save.saveAsDesc = "JP:Save As...";
ORYX.I18N.Save.unsavedData = "JP:There are unsaved data, please save before you leave, otherwise your changes get lost!";
ORYX.I18N.Save.newProcess = "JP:New Process";
ORYX.I18N.Save.saveAsTitle = "JP:Save as...";
ORYX.I18N.Save.saveBtn = "JP:Save";
ORYX.I18N.Save.close = "JP:Close";
ORYX.I18N.Save.savedAs = "JP:Saved As";
ORYX.I18N.Save.saved = "JP:Saved!";
ORYX.I18N.Save.failed = "JP:Saving failed.";
ORYX.I18N.Save.noRights = "JP:You have no rights to save changes.";
ORYX.I18N.Save.saving = "JP:Saving";
ORYX.I18N.Save.saveAsHint = "JP:The process diagram is stored under:";

if(!ORYX.I18N.File) ORYX.I18N.File = {};

ORYX.I18N.File.group = "File";
ORYX.I18N.File.print = "JP:Print";
ORYX.I18N.File.printDesc = "JP:Print current model";
ORYX.I18N.File.pdf = "JP:Export as PDF";
ORYX.I18N.File.pdfDesc = "JP:Export as PDF";
ORYX.I18N.File.info = "JP:Info";
ORYX.I18N.File.infoDesc = "JP:Info";
ORYX.I18N.File.genPDF = "JP:Generating PDF";
ORYX.I18N.File.genPDFFailed = "JP:Generating PDF failed.";
ORYX.I18N.File.printTitle = "JP:Print";
ORYX.I18N.File.printMsg = "JP:We are currently experiencing problems with the printing function. We recommend using the PDF Export to print the diagram. Do you really want to continue printing?";

if(!ORYX.I18N.Grouping) ORYX.I18N.Grouping = {};

ORYX.I18N.Grouping.grouping = "Grouping";
ORYX.I18N.Grouping.group = "Group";
ORYX.I18N.Grouping.groupDesc = "JP:Groups all selected shapes";
ORYX.I18N.Grouping.ungroup = "Ungroup";
ORYX.I18N.Grouping.ungroupDesc = "JP:Deletes the group of all selected Shapes";

if(!ORYX.I18N.IBPMN2BPMN) ORYX.I18N.IBPMN2BPMN = {};

ORYX.I18N.IBPMN2BPMN.group = "Export";
ORYX.I18N.IBPMN2BPMN.name = "JP:IBPMN 2 BPMN Mapping";
ORYX.I18N.IBPMN2BPMN.desc = "JP:Convert IBPMN to BPMN";

if(!ORYX.I18N.Loading) ORYX.I18N.Loading = {};

ORYX.I18N.Loading.waiting = "JP:Please wait...";

if(!ORYX.I18N.Pnmlexport) ORYX.I18N.Pnmlexport = {};

ORYX.I18N.Pnmlexport.group = "Export";
ORYX.I18N.Pnmlexport.name = "JP:BPMN to PNML";
ORYX.I18N.Pnmlexport.desc = "JP:Export as executable PNML and deploy";

if(!ORYX.I18N.PropertyWindow) ORYX.I18N.PropertyWindow = {};

ORYX.I18N.PropertyWindow.name = "JP:Name";
ORYX.I18N.PropertyWindow.value = "JP:Value";
ORYX.I18N.PropertyWindow.selected = "JP:selected";
ORYX.I18N.PropertyWindow.clickIcon = "JP:Click Icon";
ORYX.I18N.PropertyWindow.add = "JP:Add";
ORYX.I18N.PropertyWindow.rem = "JP:Remove";
ORYX.I18N.PropertyWindow.complex = "JP:Editor for a Complex Type";
ORYX.I18N.PropertyWindow.text = "JP:Editor for a Text Type";
ORYX.I18N.PropertyWindow.ok = "JP:OK";
ORYX.I18N.PropertyWindow.cancel = "JP:Cancel";
ORYX.I18N.PropertyWindow.dateFormat = "JP:m/d/y";
ORYX.I18N.PropertyWindow.mappingeditor = "JP:Mapping Editor";
ORYX.I18N.PropertyWindow.expression = "JP:Editor for an Expression Type";
ORYX.I18N.PropertyWindow.xpathTextarea = "JP:Insert xpath expression";

if(!ORYX.I18N.ShapeMenuPlugin) ORYX.I18N.ShapeMenuPlugin = {};

ORYX.I18N.ShapeMenuPlugin.drag = "JP:Drag";
ORYX.I18N.ShapeMenuPlugin.clickDrag = "JP:Click or drag";
ORYX.I18N.ShapeMenuPlugin.morphMsg = "JP:Morph shape";

if(!ORYX.I18N.SimplePnmlexport) ORYX.I18N.SimplePnmlexport = {};

ORYX.I18N.SimplePnmlexport.group = "Export";
ORYX.I18N.SimplePnmlexport.name = "JP:Export to PNML";
ORYX.I18N.SimplePnmlexport.desc = "JP:Export to PNML";

if(!ORYX.I18N.StepThroughPlugin) ORYX.I18N.StepThroughPlugin = {};

ORYX.I18N.StepThroughPlugin.group = "Step Through";
ORYX.I18N.StepThroughPlugin.stepThrough = "JP:Step Through";
ORYX.I18N.StepThroughPlugin.stepThroughDesc = "JP:Step through your model";
ORYX.I18N.StepThroughPlugin.undo = "JP:Undo";
ORYX.I18N.StepThroughPlugin.undoDesc = "JP:Undo one Step";
ORYX.I18N.StepThroughPlugin.error = "JP:Can't step through this diagram.";
ORYX.I18N.StepThroughPlugin.executing = "JP:Executing";

if(!ORYX.I18N.SyntaxChecker) ORYX.I18N.SyntaxChecker = {};

ORYX.I18N.SyntaxChecker.group = "Verification";
ORYX.I18N.SyntaxChecker.name = "JP:Syntax Checker";
ORYX.I18N.SyntaxChecker.desc = "JP:Check Syntax";
ORYX.I18N.SyntaxChecker.noErrors = "JP:There are no syntax errors.";
ORYX.I18N.SyntaxChecker.invalid = "JP:Invalid answer from server.";
ORYX.I18N.SyntaxChecker.checkingMessage = "JP:Checking ...";

if(!ORYX.I18N.Undo) ORYX.I18N.Undo = {};

ORYX.I18N.Undo.group = "Undo";
ORYX.I18N.Undo.undo = "JP:Undo";
ORYX.I18N.Undo.undoDesc = "JP:Undo the last action";
ORYX.I18N.Undo.redo = "JP:Redo";
ORYX.I18N.Undo.redoDesc = "JP:Redo the last undone action";

if(!ORYX.I18N.Validator) ORYX.I18N.Validator = {};
ORYX.I18N.Validator.checking = "JP:Checking";

if(!ORYX.I18N.View) ORYX.I18N.View = {};

ORYX.I18N.View.group = "Zoom";
ORYX.I18N.View.zoomIn = "JP:Zoom In";
ORYX.I18N.View.zoomInDesc = "JP:Zoom into the model";
ORYX.I18N.View.zoomOut = "JP:Zoom Out";
ORYX.I18N.View.zoomOutDesc = "JP:Zoom out of the model";
ORYX.I18N.View.zoomStandard = "JP:Zoom Standard";
ORYX.I18N.View.zoomStandardDesc = "JP:Zoom to the standard level";
ORYX.I18N.View.zoomFitToModel = "JP:Zoom fit to model";
ORYX.I18N.View.zoomFitToModelDesc = "JP:Zoom to fit the model size";

if(!ORYX.I18N.XFormsSerialization) ORYX.I18N.XFormsSerialization = {};

ORYX.I18N.XFormsSerialization.group = "XForms Serialization";
ORYX.I18N.XFormsSerialization.exportXForms = "JP:XForms Export";
ORYX.I18N.XFormsSerialization.exportXFormsDesc = "JP:Export XForms+XHTML markup";
ORYX.I18N.XFormsSerialization.importXForms = "JP:XForms Import";
ORYX.I18N.XFormsSerialization.importXFormsDesc = "JP:Import XForms+XHTML markup";
ORYX.I18N.XFormsSerialization.noClientXFormsSupport = "JP:No XForms support";
ORYX.I18N.XFormsSerialization.noClientXFormsSupportDesc = "JP:<h2>Your browser does not support XForms. Please install the <a href=\"https://addons.mozilla.org/firefox/addon/824\" target=\"_blank\">Mozilla XForms Add-on</a> for Firefox.</h2>";
ORYX.I18N.XFormsSerialization.ok = "JP:OK";
ORYX.I18N.XFormsSerialization.selectFile = "JP:Select a XHTML (.xhtml) file or type in the XForms+XHTML markup to import it!";
ORYX.I18N.XFormsSerialization.selectCss = "JP:Please insert url of css file";
ORYX.I18N.XFormsSerialization.file = "JP:File";
ORYX.I18N.XFormsSerialization.impFailed = "JP:Request for import of document failed.";
ORYX.I18N.XFormsSerialization.impTitle = "JP:Import XForms+XHTML document";
ORYX.I18N.XFormsSerialization.expTitle = "JP:Export XForms+XHTML document";
ORYX.I18N.XFormsSerialization.impButton = "JP:Import";
ORYX.I18N.XFormsSerialization.impProgress = "JP:Importing...";
ORYX.I18N.XFormsSerialization.close = "JP:Close";


if(!ORYX.I18N.TreeGraphSupport) ORYX.I18N.TreeGraphSupport = {};

ORYX.I18N.TreeGraphSupport.syntaxCheckName = "JP:Syntax Check";
ORYX.I18N.TreeGraphSupport.group = "Tree Graph Support";
ORYX.I18N.TreeGraphSupport.syntaxCheckDesc = "JP:Check the syntax of an tree graph structure";

if(!ORYX.I18N.QueryEvaluator) ORYX.I18N.QueryEvaluator = {};

ORYX.I18N.QueryEvaluator.name = "JP:Query Evaluator";
ORYX.I18N.QueryEvaluator.group = "Verification";
ORYX.I18N.QueryEvaluator.desc = "JP:Evaluate query";
ORYX.I18N.QueryEvaluator.noResult = "JP:Query resulted in no match.";
ORYX.I18N.QueryEvaluator.invalidResponse = "JP:Invalid answer from server.";

// if(!ORYX.I18N.QueryResultHighlighter) ORYX.I18N.QueryResultHighlighter = {};
// 
// ORYX.I18N.QueryResultHighlighter.name = "JP:Query Result Highlighter";

/** New Language Properties: 08.12.2008 */

ORYX.I18N.PropertyWindow.title = "JP:Properties";

if(!ORYX.I18N.ShapeRepository) ORYX.I18N.ShapeRepository = {};
ORYX.I18N.ShapeRepository.title = "JP:Shape Repository";

ORYX.I18N.Save.dialogDesciption = "JP:Please enter a name, a description and a comment.";
ORYX.I18N.Save.dialogLabelTitle = "JP:Title";
ORYX.I18N.Save.dialogLabelDesc = "JP:Description";
ORYX.I18N.Save.dialogLabelType = "JP:Type";
ORYX.I18N.Save.dialogLabelComment = "JP:Revision comment";

ORYX.I18N.Validator.name = "JP:BPMN Validator";
ORYX.I18N.Validator.description = "JP:Validation for BPMN";

ORYX.I18N.SSExtensionLoader.labelImport = "JP:Import";
ORYX.I18N.SSExtensionLoader.labelCancel = "JP:Cancel";

Ext.MessageBox.buttonText.yes = "JP:Yes";
Ext.MessageBox.buttonText.no = "JP:No";
Ext.MessageBox.buttonText.cancel = "JP:Cancel";
Ext.MessageBox.buttonText.ok = "JP:OK";


/** New Language Properties: 28.01.2009 */
if(!ORYX.I18N.BPMN2XPDL) ORYX.I18N.BPMN2XPDL = {};
ORYX.I18N.BPMN2XPDL.group = "Export";
ORYX.I18N.BPMN2XPDL.xpdlExport = "JP:Export to XPDL";
ORYX.I18N.BPMN2XPDL.xpdlImport = "JP:Import from XPDL";
ORYX.I18N.BPMN2XPDL.importGroup = "JP:Import";
ORYX.I18N.BPMN2XPDL.selectFile = "JP:Select a XPDL (.xml) file or type in the XPDL to import it!";
ORYX.I18N.BPMN2XPDL.file = "JP:File";
ORYX.I18N.BPMN2XPDL.impXPDL = "JP:Import XPDL";
ORYX.I18N.BPMN2XPDL.impBtn = "JP:Import";
ORYX.I18N.BPMN2XPDL.impProgress = "JP:Importing...";
ORYX.I18N.BPMN2XPDL.close = "JP:Close";

/** Resource Perspective Additions: 24 March 2009 */
if(!ORYX.I18N.ResourcesSoDAdd) ORYX.I18N.ResourcesSoDAdd = {};

ORYX.I18N.ResourcesSoDAdd.name = "JP:Define Separation of Duties Contraint";
ORYX.I18N.ResourcesSoDAdd.group = "Resource Perspective";
ORYX.I18N.ResourcesSoDAdd.desc = "JP:Define a Separation of Duties constraint for the selected tasks";

if(!ORYX.I18N.ResourcesSoDShow) ORYX.I18N.ResourcesSoDShow = {};

ORYX.I18N.ResourcesSoDShow.name = "JP:Show Separation of Duties Constraints";
ORYX.I18N.ResourcesSoDShow.group = "Resource Perspective";
ORYX.I18N.ResourcesSoDShow.desc = "JP:Show Separation of Duties constraints of the selected task";

if(!ORYX.I18N.ResourcesBoDAdd) ORYX.I18N.ResourcesBoDAdd = {};

ORYX.I18N.ResourcesBoDAdd.name = "JP:Define Binding of Duties Constraint";
ORYX.I18N.ResourcesBoDAdd.group = "Resource Perspective";
ORYX.I18N.ResourcesBoDAdd.desc = "JP:Define a Binding of Duties Constraint for the selected tasks";

if(!ORYX.I18N.ResourcesBoDShow) ORYX.I18N.ResourcesBoDShow = {};

ORYX.I18N.ResourcesBoDShow.name = "JP:Show Binding of Duties Constraints";
ORYX.I18N.ResourcesBoDShow.group = "Resource Perspective";
ORYX.I18N.ResourcesBoDShow.desc = "JP:Show Binding of Duties constraints of the selected task";

if(!ORYX.I18N.ResourceAssignment) ORYX.I18N.ResourceAssignment = {};

ORYX.I18N.ResourceAssignment.name = "JP:Resource Assignment";
ORYX.I18N.ResourceAssignment.group = "Resource Perspective";
ORYX.I18N.ResourceAssignment.desc = "JP:Assign resources to the selected task(s)";

if(!ORYX.I18N.ClearSodBodHighlights) ORYX.I18N.ClearSodBodHighlights = {};

ORYX.I18N.ClearSodBodHighlights.name = "JP:Clear Highlights and Overlays";
ORYX.I18N.ClearSodBodHighlights.group = "Resource Perspective";
ORYX.I18N.ClearSodBodHighlights.desc = "JP:Remove all Separation and Binding of Duties Highlights/ Overlays";


if(!ORYX.I18N.Perspective) ORYX.I18N.Perspective = {};
ORYX.I18N.Perspective.no = "JP:No Perspective"
ORYX.I18N.Perspective.noTip = "JP:Unload the current perspective"


/** New Language Properties: 21.04.2009 */
ORYX.I18N.JSONSupport = {
    imp: {
        name: "Import from JSON",
        desc: "Imports a model from JSON",
        group: "Export",
        selectFile: "Select an JSON (.json) file or type in JSON to import it!",
        file: "File",
        btnImp: "Import",
        btnClose: "Close",
        progress: "Importing ...",
        syntaxError: "Syntax error"
    },
    exp: {
        name: "Export to JSON",
        desc: "Exports current model to JSON",
        group: "Export"
    }
};

ORYX.I18N.TBPMSupport = {
		imp: {
        name: "Import from PNG/JPEG",
        desc: "Imports a model from a TPBM photo",
        group: "Export",
        selectFile: "Select an image (.png/.jpeg) file!",
        file: "File",
        btnImp: "Import",
        btnClose: "Close",
        progress: "Importing ...",
        syntaxError: "Syntax error",
        impFailed: "Request for import of document failed.",
        confirm: "Confirm import of highlighted shapes!"
    }
};

/** New Language Properties: 08.05.2009 */
if(!ORYX.I18N.BPMN2XHTML) ORYX.I18N.BPMN2XHTML = {};
ORYX.I18N.BPMN2XHTML.group = "Export";
ORYX.I18N.BPMN2XHTML.XHTMLExport = "JP:Export XHTML Documentation";

/** New Language Properties: 09.05.2009 */
if(!ORYX.I18N.JSONImport) ORYX.I18N.JSONImport = {};

ORYX.I18N.JSONImport.title = "JP:JSON Import";
ORYX.I18N.JSONImport.wrongSS = "JP:The stencil set of the imported file ({0}) does not match to the loaded stencil set ({1}).";
ORYX.I18N.JSONImport.invalidJSON = "JP:The JSON to import is invalid.";

if(!ORYX.I18N.Feedback) ORYX.I18N.Feedback = {};

ORYX.I18N.Feedback.name = "JP:Feedback";
ORYX.I18N.Feedback.desc = "JP:Contact us for any kind of feedback!";
ORYX.I18N.Feedback.pTitle = "JP:Contact us for any kind of feedback!";
ORYX.I18N.Feedback.pName = "JP:Name";
ORYX.I18N.Feedback.pEmail = "JP:E-Mail";
ORYX.I18N.Feedback.pSubject = "JP:Subject";
ORYX.I18N.Feedback.pMsg = "JP:Description/Message";
ORYX.I18N.Feedback.pEmpty = "JP:* Please provide as detailed information as possible so that we can understand your request.\n* For bug reports, please list the steps how to reproduce the problem and describe the output you expected.";
ORYX.I18N.Feedback.pAttach = "JP:Attach current model";
ORYX.I18N.Feedback.pAttachDesc = "JP:This information can be helpful for debugging purposes. If your model contains some sensitive data, remove it before or uncheck this behavior.";
ORYX.I18N.Feedback.pBrowser = "JP:Information about your browser and environment";
ORYX.I18N.Feedback.pBrowserDesc = "JP:This information has been auto-detected from your browser. It can be helpful if you encountered a bug associated with browser-specific behavior.";
ORYX.I18N.Feedback.submit = "JP:Send Message";
ORYX.I18N.Feedback.sending = "JP:Sending message ...";
ORYX.I18N.Feedback.success = "JP:Success";
ORYX.I18N.Feedback.successMsg = "JP:Thank you for your feedback!";
ORYX.I18N.Feedback.failure = "JP:Failure";
ORYX.I18N.Feedback.failureMsg = "JP:Unfortunately, the message could not be sent. This is our fault! Please try again or contact someone at http://code.google.com/p/oryx-editor/";


ORYX.I18N.Feedback.name = "JP:Feedback";
ORYX.I18N.Feedback.failure = "JP:Failure";
ORYX.I18N.Feedback.failureMsg = "JP:Unfortunately, the message could not be sent. This is our fault! Please try again or contact someone at http://code.google.com/p/oryx-editor/";
ORYX.I18N.Feedback.submit = "JP:Send Message";

ORYX.I18N.Feedback.emailDesc = "JP:Your e-mail address?";
ORYX.I18N.Feedback.titleDesc = "JP:Summarize your message with a short title";
ORYX.I18N.Feedback.descriptionDesc = "JP:Describe your idea, question, or problem."
ORYX.I18N.Feedback.info = '<p>Oryx is a research platform intended to support scientists in the field of business process management and beyond with a flexible, extensible tool to validate research theses and conduct experiments.</p><p>We are happy to provide you with the <a href="http://bpt.hpi.uni-potsdam.de/Oryx/ReleaseNotes" target="_blank"> latest technology and advancements</a> of our platform. <a href="http://bpt.hpi.uni-potsdam.de/Oryx/DeveloperNetwork" target="_blank">We</a> work hard to provide you with a reliable system, even though you may experience small hiccups from time to time.</p><p>If you have ideas how to improve Oryx, have a question related to the platform, or want to report a problem: <strong>Please, let us know. Here.</strong></p>'; // general info will be shown, if no subject specific info is given
// list subjects in reverse order of appearance!
ORYX.I18N.Feedback.subjects = [
    {
    	id: "question",   // ansi-compatible name
    	name: "Question", // natural name
    	description: "Ask your question here! \nPlease give us as much information as possible, so we don't have to bother you with more questions, before we can give an answer.", // default text for the description text input field
    	info: "" // optional field to give more info
    },
    {
    	id: "problem",   // ansi-compatible name
    	name: "Problem", // natural name
    	description: "We're sorry for the inconvenience. Give us feedback on the problem, and we'll try to solve it for you. Describe it as detailed as possible, please.", // default text for the description text input field
    	info: "" // optional field to give more info
    },
    {
    	id: "idea",   // ansi-compatible name
    	name: "Idea", // natural name
    	description: "Share your ideas and thoughts here!", // default text for the description text input field
    	info: "" // optional field to give more info
    }
];

/** New Language Properties: 11.05.2009 */
if(!ORYX.I18N.BPMN2DTRPXMI) ORYX.I18N.BPMN2DTRPXMI = {};
ORYX.I18N.BPMN2DTRPXMI.group = "JP:Export";
ORYX.I18N.BPMN2DTRPXMI.DTRPXMIExport = "JP:Export to XMI (Design Thinking)";
ORYX.I18N.BPMN2DTRPXMI.DTRPXMIExportDescription = "JP:Exports current model to XMI (requires stencil set extension 'BPMN Subset for Design Thinking')";

/** New Language Properties: 14.05.2009 */
if(!ORYX.I18N.RDFExport) ORYX.I18N.RDFExport = {};
ORYX.I18N.RDFExport.group = "Export";
ORYX.I18N.RDFExport.rdfExport = "JP:Export to RDF";
ORYX.I18N.RDFExport.rdfExportDescription = "JP:Exports current model to the XML serialization defined for the Resource Description Framework (RDF)";

/** New Language Properties: 15.05.2009*/
if(!ORYX.I18N.SyntaxChecker.BPMN) ORYX.I18N.SyntaxChecker.BPMN={};
ORYX.I18N.SyntaxChecker.BPMN_NO_SOURCE = "JP:An edge must have a source.";
ORYX.I18N.SyntaxChecker.BPMN_NO_TARGET = "JP:An edge must have a target.";
ORYX.I18N.SyntaxChecker.BPMN_DIFFERENT_PROCESS = "JP:Source and target node must be contained in the same process.";
ORYX.I18N.SyntaxChecker.BPMN_SAME_PROCESS = "JP:Source and target node must be contained in different pools.";
ORYX.I18N.SyntaxChecker.BPMN_FLOWOBJECT_NOT_CONTAINED_IN_PROCESS = "JP:A flow object must be contained in a process.";
ORYX.I18N.SyntaxChecker.BPMN_ENDEVENT_WITHOUT_INCOMING_CONTROL_FLOW = "JP:An end event must have an incoming sequence flow.";
ORYX.I18N.SyntaxChecker.BPMN_STARTEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "JP:A start event must have an outgoing sequence flow.";
ORYX.I18N.SyntaxChecker.BPMN_STARTEVENT_WITH_INCOMING_CONTROL_FLOW = "JP:Start events must not have incoming sequence flows.";
ORYX.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITH_INCOMING_CONTROL_FLOW = "JP:Attached intermediate events must not have incoming sequence flows.";
ORYX.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "JP:Attached intermediate events must have exactly one outgoing sequence flow.";
ORYX.I18N.SyntaxChecker.BPMN_ENDEVENT_WITH_OUTGOING_CONTROL_FLOW = "JP:End events must not have outgoing sequence flows.";
ORYX.I18N.SyntaxChecker.BPMN_EVENTBASEDGATEWAY_BADCONTINUATION = "JP:Event-based gateways must not be followed by gateways or subprocesses.";
ORYX.I18N.SyntaxChecker.BPMN_NODE_NOT_ALLOWED = "JP:Node type is not allowed.";

if(!ORYX.I18N.SyntaxChecker.IBPMN) ORYX.I18N.SyntaxChecker.IBPMN={};
ORYX.I18N.SyntaxChecker.IBPMN_NO_ROLE_SET = "JP:Interactions must have a sender and a receiver role set";
ORYX.I18N.SyntaxChecker.IBPMN_NO_INCOMING_SEQFLOW = "JP:This node must have incoming sequence flow.";
ORYX.I18N.SyntaxChecker.IBPMN_NO_OUTGOING_SEQFLOW = "JP:This node must have outgoing sequence flow.";

if(!ORYX.I18N.SyntaxChecker.InteractionNet) ORYX.I18N.SyntaxChecker.InteractionNet={};
ORYX.I18N.SyntaxChecker.InteractionNet_SENDER_NOT_SET = "JP:Sender not set";
ORYX.I18N.SyntaxChecker.InteractionNet_RECEIVER_NOT_SET = "JP:Receiver not set";
ORYX.I18N.SyntaxChecker.InteractionNet_MESSAGETYPE_NOT_SET = "JP:Message type not set";
ORYX.I18N.SyntaxChecker.InteractionNet_ROLE_NOT_SET = "JP:Role not set";

if(!ORYX.I18N.SyntaxChecker.EPC) ORYX.I18N.SyntaxChecker.EPC={};
ORYX.I18N.SyntaxChecker.EPC_NO_SOURCE = "JP:Each edge must have a source.";
ORYX.I18N.SyntaxChecker.EPC_NO_TARGET = "JP:Each edge must have a target.";
ORYX.I18N.SyntaxChecker.EPC_NOT_CONNECTED = "JP:Node must be connected with edges.";
ORYX.I18N.SyntaxChecker.EPC_NOT_CONNECTED_2 = "JP:Node must be connected with more edges.";
ORYX.I18N.SyntaxChecker.EPC_TOO_MANY_EDGES = "JP:Node has too many connected edges.";
ORYX.I18N.SyntaxChecker.EPC_NO_CORRECT_CONNECTOR = "JP:Node is no correct connector.";
ORYX.I18N.SyntaxChecker.EPC_MANY_STARTS = "JP:There must be only one start event.";
ORYX.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_OR = "JP:There must be no functions after a splitting OR/XOR.";
ORYX.I18N.SyntaxChecker.EPC_PI_AFTER_OR = "JP:There must be no process interface after a splitting OR/XOR.";
ORYX.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_FUNCTION = "JP:There must be no function after a function.";
ORYX.I18N.SyntaxChecker.EPC_EVENT_AFTER_EVENT = "JP:There must be no event after an event.";
ORYX.I18N.SyntaxChecker.EPC_PI_AFTER_FUNCTION = "JP:There must be no process interface after a function.";
ORYX.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_PI = "JP:There must be no function after a process interface.";

if(!ORYX.I18N.SyntaxChecker.PetriNet) ORYX.I18N.SyntaxChecker.PetriNet={};
ORYX.I18N.SyntaxChecker.PetriNet_NOT_BIPARTITE = "JP:The graph is not bipartite";
ORYX.I18N.SyntaxChecker.PetriNet_NO_LABEL = "JP:Label not set for a labeled transition";
ORYX.I18N.SyntaxChecker.PetriNet_NO_ID = "JP:There is a node without id";
ORYX.I18N.SyntaxChecker.PetriNet_SAME_SOURCE_AND_TARGET = "JP:Two flow relationships have the same source and target";
ORYX.I18N.SyntaxChecker.PetriNet_NODE_NOT_SET = "JP:A node is not set for a flowrelationship";

/** New Language Properties: 02.06.2009*/
ORYX.I18N.Edge = "JP:Edge";
ORYX.I18N.Node = "JP:Node";

/** New Language Properties: 03.06.2009*/
ORYX.I18N.SyntaxChecker.notice = "JP:Move the mouse over a red cross icon to see the error message.";

ORYX.I18N.Validator.result = "JP:Validation Result";
ORYX.I18N.Validator.noErrors = "JP:No validation errors found.";
ORYX.I18N.Validator.bpmnDeadlockTitle = "JP:Deadlock";
ORYX.I18N.Validator.bpmnDeadlock = "JP:This node results in a deadlock. There are situations where not all incoming branches are activated.";
ORYX.I18N.Validator.bpmnUnsafeTitle = "JP:Lack of synchronization";
ORYX.I18N.Validator.bpmnUnsafe = "JP:This model suffers from lack of synchronization. The marked element is activated from multiple incoming branches.";
ORYX.I18N.Validator.bpmnLeadsToNoEndTitle = "JP:Validation Result";
ORYX.I18N.Validator.bpmnLeadsToNoEnd = "JP:The process will never reach a final state.";

ORYX.I18N.Validator.syntaxErrorsTitle = "JP:Syntax Error";
ORYX.I18N.Validator.syntaxErrorsMsg = "JP:The process cannot be validated because it contains syntax errors.";
	
ORYX.I18N.Validator.error = "JP:Validation failed";
ORYX.I18N.Validator.errorDesc = 'JP:We are sorry, but the validation of your process failed. It would help us identifying the problem, if you sent us your process model via the "Send Feedback" function.';

ORYX.I18N.Validator.epcIsSound = "JP:<p><b>The EPC is sound, no problems found!</b></p>";
ORYX.I18N.Validator.epcNotSound = "JP:<p><b>The EPC is <i>NOT</i> sound!</b></p>";

/** New Language Properties: 05.06.2009*/
if(!ORYX.I18N.RESIZE) ORYX.I18N.RESIZE = {};
ORYX.I18N.RESIZE.tipGrow = "JP:Increase canvas size:";
ORYX.I18N.RESIZE.tipShrink = "JP:Decrease canvas size:";
ORYX.I18N.RESIZE.N = "JP:Top";
ORYX.I18N.RESIZE.W = "JP:Left";
ORYX.I18N.RESIZE.S = "JP:Down";
ORYX.I18N.RESIZE.E = "JP:Right";
/** New Language Properties: 14.08.2009*/
if(!ORYX.I18N.PluginLoad) ORYX.I18N.PluginLoad = {};
ORYX.I18N.PluginLoad.AddPluginButtonName = "JP:Add Plugins";
ORYX.I18N.PluginLoad.AddPluginButtonDesc = "JP:Add additional Plugins dynamically";
ORYX.I18N.PluginLoad.loadErrorTitle = "JP:Loading Error";
ORYX.I18N.PluginLoad.loadErrorDesc = "JP:Unable to load Plugin. \n Error:\n";
ORYX.I18N.PluginLoad.WindowTitle = "JP:Add additional Plugins";

ORYX.I18N.PluginLoad.NOTUSEINSTENCILSET = "JP:Not allowed in this Stencilset!";
ORYX.I18N.PluginLoad.REQUIRESTENCILSET = "JP:Require another Stencilset!";
ORYX.I18N.PluginLoad.NOTFOUND = "JP:Pluginname not found!"
ORYX.I18N.PluginLoad.YETACTIVATED = "JP:Plugin is yet activated!"

/** New Language Properties: 15.07.2009*/
if(!ORYX.I18N.Layouting) ORYX.I18N.Layouting ={};
ORYX.I18N.Layouting.doing = "JP:Layouting...";

/** New Language Properties: 18.08.2009*/
ORYX.I18N.SyntaxChecker.MULT_ERRORS = "JP:Multiple Errors";

/** New Language Properties: 08.09.2009*/
if(!ORYX.I18N.PropertyWindow) ORYX.I18N.PropertyWindow = {};
ORYX.I18N.PropertyWindow.oftenUsed = "JP:Often Used";
ORYX.I18N.PropertyWindow.moreProps = "JP:More Properties";

/** New Language Properties: 17.09.2009*/
if(!ORYX.I18N.Bpmn2_0Serialization) ORYX.I18N.Bpmn2_0Serialization = {};
ORYX.I18N.Bpmn2_0Serialization.show = "JP:Show BPMN 2.0 DI XML";
ORYX.I18N.Bpmn2_0Serialization.showDesc = "JP:Show BPMN 2.0 DI XML of the current BPMN 2.0 model";
ORYX.I18N.Bpmn2_0Serialization.download = "JP:Download BPMN 2.0 DI XML";
ORYX.I18N.Bpmn2_0Serialization.downloadDesc = "JP:Download BPMN 2.0 DI XML of the current BPMN 2.0 model";
ORYX.I18N.Bpmn2_0Serialization.serialFailed = "JP:An error occurred while generating the BPMN 2.0 DI XML Serialization.";
ORYX.I18N.Bpmn2_0Serialization.group = "BPMN 2.0";

/** New Language Properties 01.10.2009 */
if(!ORYX.I18N.SyntaxChecker.BPMN2) ORYX.I18N.SyntaxChecker.BPMN2 = {};

ORYX.I18N.SyntaxChecker.BPMN2_DATA_INPUT_WITH_INCOMING_DATA_ASSOCIATION = "JP:A Data Input must not have any incoming Data Associations.";
ORYX.I18N.SyntaxChecker.BPMN2_DATA_OUTPUT_WITH_OUTGOING_DATA_ASSOCIATION = "JP:A Data Output must not have any outgoing Data Associations.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_TARGET_WITH_TOO_MANY_INCOMING_SEQUENCE_FLOWS = "JP:Targets of Event-based Gateways may only have one incoming Sequence Flow.";

/** New Language Properties 02.10.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_OUTGOING_SEQUENCE_FLOWS = "JP:An Event-based Gateway must have two or more outgoing Sequence Flows.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_EVENT_TARGET_CONTRADICTION = "JP:If Message Intermediate Events are used in the configuration, then Receive Tasks must not be used and vice versa.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_TRIGGER = "JP:Only the following Intermediate Event triggers are valid: Message, Signal, Timer, Conditional and Multiple.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_CONDITION_EXPRESSION = "JP:The outgoing Sequence Flows of the Event Gateway must not have a condition expression.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_NOT_INSTANTIATING = "JP:The Gateway does not meet the conditions to instantiate the process. Please use a start event or an instantiating attribute for the gateway.";

/** New Language Properties 05.10.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_MIXED_FAILURE = "JP:The Gateway must have both multiple incoming and outgoing Sequence Flows.";
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_CONVERGING_FAILURE = "JP:The Gateway must have multiple incoming but most NOT have multiple outgoing Sequence Flows.";
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_DIVERGING_FAILURE = "JP:The Gateway must NOT have multiple incoming but must have multiple outgoing Sequence Flows.";
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAY_WITH_NO_OUTGOING_SEQUENCE_FLOW = "JP:A Gateway must have a minimum of one outgoing Sequence Flow.";
ORYX.I18N.SyntaxChecker.BPMN2_RECEIVE_TASK_WITH_ATTACHED_EVENT = "JP:Receive Tasks used in Event Gateway configurations must not have any attached Intermediate Events.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_SUBPROCESS_BAD_CONNECTION = "JP:An Event Subprocess must not have any incoming or outgoing Sequence Flow.";

/** New Language Properties 13.10.2009 */
ORYX.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_CONNECTED = "JP:At least one side of the Message Flow has to be connected.";

/** New Language Properties 19.10.2009 */
ORYX.I18N.Bpmn2_0Serialization['import'] = "JP:Import from BPMN 2.0 DI XML";
ORYX.I18N.Bpmn2_0Serialization.importDesc = "JP:Import a BPMN 2.0 model from a file or XML String";
ORYX.I18N.Bpmn2_0Serialization.selectFile = "JP:Select a (*.bpmn) file or type in BPMN 2.0 DI XML to import it!";
ORYX.I18N.Bpmn2_0Serialization.file = "JP:File:";
ORYX.I18N.Bpmn2_0Serialization.name = "JP:Import from BPMN 2.0 DI XML";
ORYX.I18N.Bpmn2_0Serialization.btnImp = "JP:Import";
ORYX.I18N.Bpmn2_0Serialization.progress = "JP:Importing BPMN 2.0 DI XML ...";
ORYX.I18N.Bpmn2_0Serialization.btnClose = "JP:Close";
ORYX.I18N.Bpmn2_0Serialization.error = "JP:An error occurred while importing BPMN 2.0 DI XML";

/** New Language Properties 24.11.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_MESSAGES = "JP:A Choreography Activity may only have one initiating message.";
ORYX.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_ALLOWED = "JP:A Message Flow is not allowed here.";

/** New Language Properties 27.11.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_INCOMING_SEQUENCE_FLOWS = "JP:An Event-based Gateway that is not instantiating must have a minimum of one incoming Sequence Flow.";
ORYX.I18N.SyntaxChecker.BPMN2_TOO_FEW_INITIATING_PARTICIPANTS = "JP:A Choreography Activity must have one initiating Participant (white).";
ORYX.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_PARTICIPANTS = "JP:A Choreography Acitivity must not have more than one initiating Participant (white)."

ORYX.I18N.SyntaxChecker.COMMUNICATION_AT_LEAST_TWO_PARTICIPANTS = "JP:The communication must be connected to at least two participants.";
ORYX.I18N.SyntaxChecker.MESSAGEFLOW_START_MUST_BE_PARTICIPANT = "JP:The message flow's source must be a participant.";
ORYX.I18N.SyntaxChecker.MESSAGEFLOW_END_MUST_BE_PARTICIPANT = "JP:The message flow's target must be a participant.";
ORYX.I18N.SyntaxChecker.CONV_LINK_CANNOT_CONNECT_CONV_NODES = "JP:The conversation link must connect a communication or sub conversation node with a participant.";

/** New Language Properties 30.12.2009 */
ORYX.I18N.Bpmn2_0Serialization.xpdlShow = "JP:Show XPDL 2.2";
ORYX.I18N.Bpmn2_0Serialization.xpdlShowDesc = "JP:Shows the XPDL 2.2 based on BPMN 2.0 XML (by XSLT)";
ORYX.I18N.Bpmn2_0Serialization.xpdlDownload = "JP:Download as XPDL 2.2";
ORYX.I18N.Bpmn2_0Serialization.xpdlDownloadDesc = "JP:Download the XPDL 2.2 based on BPMN 2.0 XML (by XSLT)";


if(!ORYX.I18N.cpntoolsSupport) ORYX.I18N.cpntoolsSupport = {};

ORYX.I18N.cpntoolsSupport.serverConnectionFailed = "JP:Connection to server failed.";
ORYX.I18N.cpntoolsSupport.importTask = "JP:Select an CPN file (.cpn) or type in the CPN XML structure in order to import it!";
ORYX.I18N.cpntoolsSupport.File = "JP:File:";
ORYX.I18N.cpntoolsSupport.cpn = "JP:CPN";
ORYX.I18N.cpntoolsSupport.title = "JP:CPN Oryx";
ORYX.I18N.cpntoolsSupport.importLable = "JP:Import";
ORYX.I18N.cpntoolsSupport.close = "JP:Close";
ORYX.I18N.cpntoolsSupport.wrongCPNFile = "JP:Not chosen correct CPN - File.";
ORYX.I18N.cpntoolsSupport.noPageSelection = "JP:No page has been selected.";
ORYX.I18N.cpntoolsSupport.group = "Export";
ORYX.I18N.cpntoolsSupport.importProgress = "JP:Importing ...";
ORYX.I18N.cpntoolsSupport.exportProgress = "JP:Exporting ...";
ORYX.I18N.cpntoolsSupport.exportDescription = "JP:Export to CPN Tools";
ORYX.I18N.cpntoolsSupport.importDescription = "JP:Import from CPN Tools";

if(!ORYX.I18N.BPMN2YAWLMapper) ORYX.I18N.BPMN2YAWLMapper = {};

ORYX.I18N.BPMN2YAWLMapper.group = "Export";
ORYX.I18N.BPMN2YAWLMapper.name = 'JP:YAWL Export';
ORYX.I18N.BPMN2YAWLMapper.desc = 'JP:Map this diagram to YAWL and export it, please ensure "BPMN Subset for mapping to YAWL" is loaded';
