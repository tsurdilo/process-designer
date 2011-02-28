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

ORYX.I18N.Oryx.title        = ORYX.TITLE;
ORYX.I18N.Oryx.noBackendDefined = "注意! \nバックエンド未定義。\n 要求されたモデルはロードできませんでした。保存プラグインを利用し設定をロードしてください。";
ORYX.I18N.Oryx.pleaseWait   = "ロード中はお待ちください...";
ORYX.I18N.Oryx.notLoggedOn = "ログ無効化";
ORYX.I18N.Oryx.editorOpenTimeout = "エディターが起動していません。このサイトで利用するポップアップの設定を有効化しているかどうか確認してください。";

if(!ORYX.I18N.AddDocker) ORYX.I18N.AddDocker = {};

ORYX.I18N.AddDocker.group = "ドック";
ORYX.I18N.AddDocker.add = "ドックの追加";
ORYX.I18N.AddDocker.addDesc = "クリックし、ドックを端に追加します";
ORYX.I18N.AddDocker.del = "ドックの削除";
ORYX.I18N.AddDocker.delDesc = "ドックを削除します";

if(!ORYX.I18N.ShapeConnector) ORYX.I18N.ShapeConnector = {};

ORYX.I18N.ShapeConnector.group = "コネクター";
ORYX.I18N.ShapeConnector.add = "シェープの接続";
ORYX.I18N.ShapeConnector.addDesc = "順序を付け複数のノードを接続します";

if(!ORYX.I18N.SSExtensionLoader) ORYX.I18N.SSExtensionLoader = {};

ORYX.I18N.SSExtensionLoader.group = "ステンシルセット";
ORYX.I18N.SSExtensionLoader.add = "ステンシルセット拡張の追加";
ORYX.I18N.SSExtensionLoader.addDesc = "ステンシルセット拡張を追加します";
ORYX.I18N.SSExtensionLoader.loading = "ステンシルセット拡張のロード";
ORYX.I18N.SSExtensionLoader.noExt = "拡張がないか、すでにすべての拡張がロードされています。";
ORYX.I18N.SSExtensionLoader.failed1 = "ステンシルセット拡張のロードに失敗しました。応答は有効な構成ファイルではありません。";
ORYX.I18N.SSExtensionLoader.failed2 = "ステンシルセット拡張のロードに失敗しました。要求はエラーを返しました。";
ORYX.I18N.SSExtensionLoader.panelTitle = "ステンシルセット拡張";
ORYX.I18N.SSExtensionLoader.panelText = "ロードしたいステンシルセット拡張を選択してください。";

if(!ORYX.I18N.AdHocCC) ORYX.I18N.AdHocCC = {};

ORYX.I18N.AdHocCC.group = "アドホック";
ORYX.I18N.AdHocCC.compl = "完了条件の編集";
ORYX.I18N.AdHocCC.complDesc = "アドホックアクティビティーの完了条件の編集";
ORYX.I18N.AdHocCC.notOne = "１つの要素が正しく選択されていません!";
ORYX.I18N.AdHocCC.nodAdHocCC = "選択された要素はアドホック完了条件を含んでいません!";
ORYX.I18N.AdHocCC.selectTask = "タスクの選択...";
ORYX.I18N.AdHocCC.selectState = "状態の選択...";
ORYX.I18N.AdHocCC.addExp = "式の追加";
ORYX.I18N.AdHocCC.selectDataField = "データフィールドの選択...";
ORYX.I18N.AdHocCC.enterEqual = "等しい値を入力してください...";
ORYX.I18N.AdHocCC.and = "and";
ORYX.I18N.AdHocCC.or = "or";
ORYX.I18N.AdHocCC.not = "not";
ORYX.I18N.AdHocCC.clearCC = "完了条件のクリアー";
ORYX.I18N.AdHocCC.editCC = "アドホック完了条件の編集";
ORYX.I18N.AdHocCC.addExecState = "実行状態式の追加: ";
ORYX.I18N.AdHocCC.addDataExp = "データ式の追加: ";
ORYX.I18N.AdHocCC.addLogOp = "論理演算の追加: ";
ORYX.I18N.AdHocCC.curCond = "現在の完了条件: ";

if(!ORYX.I18N.AMLSupport) ORYX.I18N.AMLSupport = {};

ORYX.I18N.AMLSupport.group = "EPC";
ORYX.I18N.AMLSupport.imp = "AML ファイルのインポート";
ORYX.I18N.AMLSupport.impDesc = "Aris 7 AML ファイルのインポート";
ORYX.I18N.AMLSupport.failed = "AML ファイルのインポートに失敗しました。選択されたファイルが有効な AML ファイルかどうか確認してください。エラーメッセージ: ";
ORYX.I18N.AMLSupport.failed2 = "AML ファイルのインポートに失敗: ";
ORYX.I18N.AMLSupport.noRights = "複数の EPC ダイアグラムをインポートする権限がありません(ログインが必要です)。";
ORYX.I18N.AMLSupport.panelText = "インポートする AML (.xml) を選択してください。";
ORYX.I18N.AMLSupport.file = "ファイル";
ORYX.I18N.AMLSupport.importBtn = "AML ファイルのインポート";
ORYX.I18N.AMLSupport.get = "ダイアグラムの取得...";
ORYX.I18N.AMLSupport.close = "閉じる";
ORYX.I18N.AMLSupport.title = "タイトル";
ORYX.I18N.AMLSupport.selectDiagrams = "インポートしたいダイアグラムを選択してください。 <br/> １つのモデルが選択された場合、現在のエディターにインポートされます。複数のモデルが選択された場合、リポジトリ―に保存されます。";
ORYX.I18N.AMLSupport.impText = "インポート";
ORYX.I18N.AMLSupport.impProgress = "インポート中...";
ORYX.I18N.AMLSupport.cancel = "キャンセル";
ORYX.I18N.AMLSupport.name = "名前";
ORYX.I18N.AMLSupport.allImported = "インポートされたすべてのダイアグラム";
ORYX.I18N.AMLSupport.ok = "OK";

if(!ORYX.I18N.Arrangement) ORYX.I18N.Arrangement = {};

ORYX.I18N.Arrangement.groupZ = "順序";
ORYX.I18N.Arrangement.btf = "最前面へ移動";
ORYX.I18N.Arrangement.btfDesc = "最前面へ移動";
ORYX.I18N.Arrangement.btb = "最背面へ移動";
ORYX.I18N.Arrangement.btbDesc = "最背面へ移動";
ORYX.I18N.Arrangement.bf = "前面へ移動";
ORYX.I18N.Arrangement.bfDesc = "前面へ移動";
ORYX.I18N.Arrangement.bb = "背面へ移動";
ORYX.I18N.Arrangement.bbDesc = "背面へ移動";
ORYX.I18N.Arrangement.groupA = "配置";
ORYX.I18N.Arrangement.ab = "下揃え";
ORYX.I18N.Arrangement.abDesc = "下";
ORYX.I18N.Arrangement.am = "上下中央揃え";
ORYX.I18N.Arrangement.amDesc = "上下中央";
ORYX.I18N.Arrangement.at = "上揃え";
ORYX.I18N.Arrangement.atDesc = "上";
ORYX.I18N.Arrangement.al = "左揃え";
ORYX.I18N.Arrangement.alDesc = "左";
ORYX.I18N.Arrangement.ac = "左右中央揃え";
ORYX.I18N.Arrangement.acDesc = "左右中央";
ORYX.I18N.Arrangement.ar = "右揃え";
ORYX.I18N.Arrangement.arDesc = "右";
ORYX.I18N.Arrangement.as = "サイズ揃え";
ORYX.I18N.Arrangement.asDesc = "同サイズ";

if(!ORYX.I18N.BPELSupport) ORYX.I18N.BPELSupport = {};

ORYX.I18N.BPELSupport.group = "BPEL";
ORYX.I18N.BPELSupport.exp = "BPEL のエキスポート";
ORYX.I18N.BPELSupport.expDesc = "ダイアグラムの BPEL へのエキスポート";
ORYX.I18N.BPELSupport.imp = "BPEL のインポート";
ORYX.I18N.BPELSupport.impDesc = "BPEL ファイルのインポート;
ORYX.I18N.BPELSupport.selectFile = "インポートする BPEL ファイルの選択";
ORYX.I18N.BPELSupport.file = "ファイル";
ORYX.I18N.BPELSupport.impPanel = "BPEL ファイルのインポートfile";
ORYX.I18N.BPELSupport.impBtn = "インポート";
ORYX.I18N.BPELSupport.content = "コンテント";
ORYX.I18N.BPELSupport.close = "閉じる";
ORYX.I18N.BPELSupport.error = "エラー";
ORYX.I18N.BPELSupport.progressImp = "インポート中...";
ORYX.I18N.BPELSupport.progressExp = "エキスポート中...";
ORYX.I18N.BPELSupport.impFailed = "インポート中にエラーが発生しました! <br/>エラーメッセージを確認してください: <br/><br/>";

if(!ORYX.I18N.BPELLayout) ORYX.I18N.BPELLayout = {};

ORYX.I18N.BPELLayout.group = "BPELレイアウト";
ORYX.I18N.BPELLayout.disable = "レイアウトの無効";
ORYX.I18N.BPELLayout.disDesc = "自動レイアウトプラグインの無効化";
ORYX.I18N.BPELLayout.enable = "レイアウトの有効";
ORYX.I18N.BPELLayout.enDesc = "自動レイアウトプラグインの有効化";

if(!ORYX.I18N.BPEL4Chor2BPELSupport) ORYX.I18N.BPEL4Chor2BPELSupport = {};

ORYX.I18N.BPEL4Chor2BPELSupport.group = "BPEL4Chor";
ORYX.I18N.BPEL4Chor2BPELSupport.exp = "BPEL　へエクスポート";
ORYX.I18N.BPEL4Chor2BPELSupport.expDesc = "ダイアグラムを BPEL へエクスポート";

if(!ORYX.I18N.BPEL4ChorSupport) ORYX.I18N.BPEL4ChorSupport = {};

ORYX.I18N.BPEL4ChorSupport.group = "BPEL4Chor";
ORYX.I18N.BPEL4ChorSupport.exp = "BPEL4Chor へエクスポート";
ORYX.I18N.BPEL4ChorSupport.expDesc = "ダイアグラムを BPEL4Chor へエクスポート";
ORYX.I18N.BPEL4ChorSupport.imp = "BPEL4Chor のインポート";
ORYX.I18N.BPEL4ChorSupport.impDesc = "BPEL4Chor ファイルのインポート";
ORYX.I18N.BPEL4ChorSupport.gen = "BPEL4Chor ジェネレーター";
ORYX.I18N.BPEL4ChorSupport.genDesc = "既知の BPEL4Chor プロパティ―の値を生成します(例 messageLink の送信者)";
ORYX.I18N.BPEL4ChorSupport.selectFile = "インポートする BPEL4Chor ファイルの選択";
ORYX.I18N.BPEL4ChorSupport.file = "ファイル";
ORYX.I18N.BPEL4ChorSupport.impPanel = "BPEL4Chor ファイルのインポート";
ORYX.I18N.BPEL4ChorSupport.impBtn = "インポート";
ORYX.I18N.BPEL4ChorSupport.content = "コンテント";
ORYX.I18N.BPEL4ChorSupport.close = "閉じる";
ORYX.I18N.BPEL4ChorSupport.error = "エラー";
ORYX.I18N.BPEL4ChorSupport.progressImp = "インポート中...";
ORYX.I18N.BPEL4ChorSupport.progressExp = "エクスポート中...";
ORYX.I18N.BPEL4ChorSupport.impFailed = "インポート中にエラーが発生しました! <br/>エラーメッセージを確認してください: <br/><br/>";

if(!ORYX.I18N.Bpel4ChorTransformation) ORYX.I18N.Bpel4ChorTransformation = {};

ORYX.I18N.Bpel4ChorTransformation.group = "エクスポート";
ORYX.I18N.Bpel4ChorTransformation.exportBPEL = "BPEL4Chor のエクスポート";
ORYX.I18N.Bpel4ChorTransformation.exportBPELDesc = "ダイアグラムの BPEL4Chor へのエクスポート";
ORYX.I18N.Bpel4ChorTransformation.exportXPDL = "XPDL4Chor のエクスポート";
ORYX.I18N.Bpel4ChorTransformation.exportXPDLDesc = "ダイアグラムの XPDL4Chor へのエクスポート";
ORYX.I18N.Bpel4ChorTransformation.warning = "警告";
ORYX.I18N.Bpel4ChorTransformation.wrongValue = 'BPEL4Chor への変換中のエラーを回避するために、変更された名前は値 "1" を含まなければなりません。';
ORYX.I18N.Bpel4ChorTransformation.loopNone = 'BPEL4Chor へ変換するするために、受信タスクのループタイプは "None" でなければなりません。';
ORYX.I18N.Bpel4ChorTransformation.error = "エラー";
ORYX.I18N.Bpel4ChorTransformation.noSource = "ID 2 の 1 はソースオブジェクトを持っていません。";
ORYX.I18N.Bpel4ChorTransformation.noTarget = "ID 2 の 1 はターゲットオブジェクトを持っていません。";
ORYX.I18N.Bpel4ChorTransformation.transCall = "変換中にエラーが発生しました。 1:2";
ORYX.I18N.Bpel4ChorTransformation.loadingXPDL4ChorExport = "XPDL4Chor へエクスポート";
ORYX.I18N.Bpel4ChorTransformation.loadingBPEL4ChorExport = "BPEL4Chor へエクスポート";
ORYX.I18N.Bpel4ChorTransformation.noGen = "変換入力は生成されませんでした: 1\n2\n";

ORYX.I18N.BPMN2PNConverter = {
  name: "ペトリネットへ変換",
  desc: "BPMN ダイアグラムのペトリネットへの変換",
  group: "エキスポート",
  error: "エラー",
  errors: {
    server: "BPNM ダイアグラムをインポートできません。",
    noRights: "与えられたモデルに読込権限がありますか?",
    notSaved: "ペトリネットエクスポートを利用するためには、モデルを保存し、もう一度開いてください!"
  },
  progress: {
      status: "状態",
      importingModel: "BPMN モデルのインポート",
      fetchingModel: "取り込み中",
      convertingModel: "変換中",
      renderingModel: "レンダリング中"
  }
}

if(!ORYX.I18N.TransformationDownloadDialog) ORYX.I18N.TransformationDownloadDialog = {};

ORYX.I18N.TransformationDownloadDialog.error = "エラー";
ORYX.I18N.TransformationDownloadDialog.noResult = "変換サービスが結果を返信していません。";
ORYX.I18N.TransformationDownloadDialog.errorParsing = "ダイアグラムのパース中にエラーが発せしました。";
ORYX.I18N.TransformationDownloadDialog.transResult = "変換結果";
ORYX.I18N.TransformationDownloadDialog.showFile = "結果ファイルの表示";
ORYX.I18N.TransformationDownloadDialog.downloadFile = "結果ファイルのダウンロード";
ORYX.I18N.TransformationDownloadDialog.downloadAll = "すべての結果ファイルのダウンロード";

if(!ORYX.I18N.DesynchronizabilityOverlay) ORYX.I18N.DesynchronizabilityOverlay = {};
//TODO desynchronizability is not a correct term
ORYX.I18N.DesynchronizabilityOverlay.group = "オーバーレイ";
ORYX.I18N.DesynchronizabilityOverlay.name = "非同期化の確認";
ORYX.I18N.DesynchronizabilityOverlay.desc = "非同期化の確認";
ORYX.I18N.DesynchronizabilityOverlay.sync = "ネットは非同期にできます。";
ORYX.I18N.DesynchronizabilityOverlay.error = "ネットに１つのシンタックスエラーがあります。";
ORYX.I18N.DesynchronizabilityOverlay.invalid = "サーバーからの無効な回答です。";

if(!ORYX.I18N.Edit) ORYX.I18N.Edit = {};

ORYX.I18N.Edit.group = "編集";
ORYX.I18N.Edit.cut = "カット";
ORYX.I18N.Edit.cutDesc = "選択したものをクリップボードへカット";
ORYX.I18N.Edit.copy = "コピー";
ORYX.I18N.Edit.copyDesc = "選択したものをクリップボードへコピー";
ORYX.I18N.Edit.paste = "ペースト";
ORYX.I18N.Edit.pasteDesc = "クリップボードからキャンバスにペースト";
ORYX.I18N.Edit.del = "削除";
ORYX.I18N.Edit.delDesc = "選択したすべてのシェープを削除";

if(!ORYX.I18N.EPCSupport) ORYX.I18N.EPCSupport = {};

ORYX.I18N.EPCSupport.group = "EPC";
ORYX.I18N.EPCSupport.exp = "EPC のエキスポート";
ORYX.I18N.EPCSupport.expDesc = "ダイアグラムの EPML へのエキスポート";
ORYX.I18N.EPCSupport.imp = "EPC のインポート";
ORYX.I18N.EPCSupport.impDesc = "EPML ファイルのインポート";
ORYX.I18N.EPCSupport.progressExp = "モデルのエクスポート";
ORYX.I18N.EPCSupport.selectFile = "インポートする EPML (.empl) ファイルの選択。";
ORYX.I18N.EPCSupport.file = "ファイル";
ORYX.I18N.EPCSupport.impPanel = "EPML ファイルのインポート";
ORYX.I18N.EPCSupport.impBtn = "インポート";
ORYX.I18N.EPCSupport.close = "閉じる";
ORYX.I18N.EPCSupport.error = "エラー";
ORYX.I18N.EPCSupport.progressImp = "インポート中...";

if(!ORYX.I18N.ERDFSupport) ORYX.I18N.ERDFSupport = {};

ORYX.I18N.ERDFSupport.exp = "ERDF のエキスポート";
ORYX.I18N.ERDFSupport.expDesc = "ERDF のエキスポート";
ORYX.I18N.ERDFSupport.imp = "ERDF のインポート";
ORYX.I18N.ERDFSupport.impDesc = "ERDF のインポート";
ORYX.I18N.ERDFSupport.impFailed = "ERDF のインポートへの要求が失敗しました。";
ORYX.I18N.ERDFSupport.impFailed2 = "インポート中にエラーが発生しました! <br/>エラーメッセージを確認してください: <br/><br/>";
ORYX.I18N.ERDFSupport.error = "エラー";
ORYX.I18N.ERDFSupport.noCanvas = "xml ファイルに Oryx キャンバスノードが含まれていません!";
ORYX.I18N.ERDFSupport.noSS = "Oryx キャンバスノードにステンシルセット定義が含まれていません!";
ORYX.I18N.ERDFSupport.wrongSS = "与えられたステンシルセットは現在のエディターに対応していません!";
ORYX.I18N.ERDFSupport.selectFile = "インポートスr ERDF (.xml) ファイルまたは ERDF のタイプを選択してください!";
ORYX.I18N.ERDFSupport.file = "ファイル";
ORYX.I18N.ERDFSupport.impERDF = "ERDF のインポート";
ORYX.I18N.ERDFSupport.impBtn = "インポート";
ORYX.I18N.ERDFSupport.impProgress = "インポート中...";
ORYX.I18N.ERDFSupport.close = "閉じる";
ORYX.I18N.ERDFSupport.deprTitle = "eRDF をエキスポートしますか?";
ORYX.I18N.ERDFSupport.deprText = "eRDF へのエキスポートは推奨されません。将来の Oryx エディターのバージョンではサポートされません。モデルの JSON へのエクスポートを推奨します。エキスポートを続けますか?";

if(!ORYX.I18N.jPDLSupport) ORYX.I18N.jPDLSupport = {};

ORYX.I18N.jPDLSupport.group = "エキスポート";
ORYX.I18N.jPDLSupport.exp = "jPDL へのエキスポート";
ORYX.I18N.jPDLSupport.expDesc = "jPDL へのエキスポート";
ORYX.I18N.jPDLSupport.imp = "jPDL のインポート";
ORYX.I18N.jPDLSupport.impDesc = "jPDL ファイルのインポート";
ORYX.I18N.jPDLSupport.impFailedReq = "jPDL のインポートへの要求が失敗しました。";
//ORYX.I18N.jPDLSupport.impFailedJson = "JA:Transformation of jPDL failed.";
ORYX.I18N.jPDLSupport.impFailedJsonAbort = "インポートが中断しました。";
ORYX.I18N.jPDLSupport.loadSseQuestionTitle = "jBPM ステンシルセット拡張がロードされなければなりません"; 
ORYX.I18N.jPDLSupport.loadSseQuestionBody = "jPDL をインポートするためには、ステンシルセット拡張がロードされなけれbあなりません。実行しますか?";
ORYX.I18N.jPDLSupport.expFailedReq = "モデルのエキスポート要求が失敗しました。";
ORYX.I18N.jPDLSupport.expFailedXml = "jPDL へのエキスポートが失敗しました。 エキスポートの報告: ";
ORYX.I18N.jPDLSupport.error = "エラー";
ORYX.I18N.jPDLSupport.selectFile = "インポートする jPDL (.xml) ファイルまたは jPDL のタイプを選択してください!";
ORYX.I18N.jPDLSupport.file = "ファイル";
ORYX.I18N.jPDLSupport.impJPDL = "jPDL のインポート";
ORYX.I18N.jPDLSupport.impBtn = "インポート";
ORYX.I18N.jPDLSupport.impProgress = "インポート中...";
ORYX.I18N.jPDLSupport.close = "閉じる";

if(!ORYX.I18N.Bpmn2Bpel) ORYX.I18N.Bpmn2Bpel = {};

ORYX.I18N.Bpmn2Bpel.group = "ExecBPMN";
ORYX.I18N.Bpmn2Bpel.show = "変換済み BPEL の表示";
ORYX.I18N.Bpmn2Bpel.download = "変換済み BPEL のダウンロード";
ORYX.I18N.Bpmn2Bpel.deploy = "変換済み BPEL のデプロイ";
ORYX.I18N.Bpmn2Bpel.showDesc = "BPMN を BPEL へ変換し、新規のウィンドウに結果を表示する。";
ORYX.I18N.Bpmn2Bpel.downloadDesc = "BPMN を BPEL へ変換し、結果をダウンロードします。";
ORYX.I18N.Bpmn2Bpel.deployDesc = "BPMN を BPEL へ変換し、BPEL-エンジン Apache ODE にビジネスプロセスをデプロイします。";
ORYX.I18N.Bpmn2Bpel.transfFailed = "BPEL への変換要求が失敗しました。";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputTitle = "Apache ODE URL";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputLabelDeploy = "プロセスのデプロイ";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputLabelCancel = "キャンセル";
ORYX.I18N.Bpmn2Bpel.ApacheOdeUrlInputPanelText = "Apache ODE BPEL-エンジンのURLを入力してください。 例: http://myserver:8080/ode";


if(!ORYX.I18N.Save) ORYX.I18N.Save = {};

ORYX.I18N.Save.group = "ファイル";
ORYX.I18N.Save.save = "保存";
ORYX.I18N.Save.autosave = "自動保存";
ORYX.I18N.Save.saveDesc = "保存";
ORYX.I18N.Save.autosaveDesc = "自動保存";
ORYX.I18N.Save.autosaveDesc_on = "自動保存 (オン)";
ORYX.I18N.Save.autosaveDesc_off = "自動保存 (オフ)";
ORYX.I18N.Save.saveAs = "名前を付けて保存...";
ORYX.I18N.Save.saveAsDesc = "名前を付けて保存...";
ORYX.I18N.Save.unsavedData = "保存されていないデータがあります。変更されませんので、保存してください!";
ORYX.I18N.Save.newProcess = "新規プロセス";
ORYX.I18N.Save.saveAsTitle = "名前を付けて保存...";
ORYX.I18N.Save.saveBtn = "保存";
ORYX.I18N.Save.close = "閉じる";
ORYX.I18N.Save.savedAs = "名前を付けて保存";
ORYX.I18N.Save.saved = "保存されました!";
ORYX.I18N.Save.failed = "保存されませんでした。";
ORYX.I18N.Save.failedTitle = "内部エラー";
ORYX.I18N.Save.failedMsg = "保存中にエラーが発生しました。";
ORYX.I18N.Save.failedOKBtn = "OK";
ORYX.I18N.Save.failedDetailsBtn = "詳細";
ORYX.I18N.Save.failedThereWas = "要求を実行中に問題が発せしました:";
ORYX.I18N.Save.noRights = "変更を保存する権限がありません。";
ORYX.I18N.Save.saving = "保存中";
ORYX.I18N.Save.saveAsHint = "プロセスダイアグラムが次に保存されています:";

if(!ORYX.I18N.File) ORYX.I18N.File = {};

ORYX.I18N.File.group = "ファイル";
ORYX.I18N.File.print = "印刷";
ORYX.I18N.File.printDesc = "現在のモデルの印刷";
ORYX.I18N.File.pdf = "PDF としてエキスポート";
ORYX.I18N.File.pdfDesc = "PDF としてエキスポート";
ORYX.I18N.File.info = "情報";
ORYX.I18N.File.infoDesc = "情報";
ORYX.I18N.File.genPDF = "PDF の生成";
ORYX.I18N.File.genPDFFailed = "PDF の生成に失敗しました。";
ORYX.I18N.File.printTitle = "印刷";
ORYX.I18N.File.printMsg = "現在、印刷機能に問題があります。ダイアグラムを印刷するよりPDFにエキスポートすることをお勧めします。印刷を継続しますか?";

if(!ORYX.I18N.Grouping) ORYX.I18N.Grouping = {};

ORYX.I18N.Grouping.grouping = "グルーピング";
ORYX.I18N.Grouping.group = "グループ";
ORYX.I18N.Grouping.groupDesc = "選択したすべてのシェープをグループ化";
ORYX.I18N.Grouping.ungroup = "グループ解除";
ORYX.I18N.Grouping.ungroupDesc = "選択したすべてのシェープのグループを削除";

if(!ORYX.I18N.IBPMN2BPMN) ORYX.I18N.IBPMN2BPMN = {};

ORYX.I18N.IBPMN2BPMN.group = "エキスポート";
ORYX.I18N.IBPMN2BPMN.name = "IBPMN から BPMN へマッピング";
ORYX.I18N.IBPMN2BPMN.desc = "IBPMN から BPMN へ変換";

if(!ORYX.I18N.Loading) ORYX.I18N.Loading = {};

ORYX.I18N.Loading.waiting = "しばらくお待ちください...";

if(!ORYX.I18N.Pnmlexport) ORYX.I18N.Pnmlexport = {};

ORYX.I18N.Pnmlexport.group = "エキスポート";
ORYX.I18N.Pnmlexport.name = "BPMN から PNML へ";
ORYX.I18N.Pnmlexport.desc = "実行可能 PNML へエキスポートしデプロイ";

if(!ORYX.I18N.PropertyWindow) ORYX.I18N.PropertyWindow = {};

ORYX.I18N.PropertyWindow.name = "名前";
ORYX.I18N.PropertyWindow.value = "値";
ORYX.I18N.PropertyWindow.selected = "選択済み";
ORYX.I18N.PropertyWindow.clickIcon = "クリックアイコン";
ORYX.I18N.PropertyWindow.add = "追加";
ORYX.I18N.PropertyWindow.rem = "削除";
ORYX.I18N.PropertyWindow.complex = "コンプレックスタイプエディター";
ORYX.I18N.PropertyWindow.text = "テキストタイプエディター";
ORYX.I18N.PropertyWindow.ok = "OK";
ORYX.I18N.PropertyWindow.cancel = "キャンセル";
ORYX.I18N.PropertyWindow.dateFormat = "m/d/y";
ORYX.I18N.PropertyWindow.mappingeditor = "マッピングエディター";
ORYX.I18N.PropertyWindow.expression = "式エディター";
ORYX.I18N.PropertyWindow.xpathTextarea = "xpath 式の挿入";

if(!ORYX.I18N.ShapeMenuPlugin) ORYX.I18N.ShapeMenuPlugin = {};

ORYX.I18N.ShapeMenuPlugin.drag = "ドラッグ";
ORYX.I18N.ShapeMenuPlugin.clickDrag = "クリックまたはドラッグ";
ORYX.I18N.ShapeMenuPlugin.morphMsg = "モーフ形状";

if(!ORYX.I18N.SimplePnmlexport) ORYX.I18N.SimplePnmlexport = {};

ORYX.I18N.SimplePnmlexport.group = "エキスポート";
ORYX.I18N.SimplePnmlexport.name = "PNML へエキスポート";
ORYX.I18N.SimplePnmlexport.desc = "PNML へエキスポート";

if(!ORYX.I18N.StepThroughPlugin) ORYX.I18N.StepThroughPlugin = {};

ORYX.I18N.StepThroughPlugin.group = "ステップスルー";
ORYX.I18N.StepThroughPlugin.stepThrough = "ステップスルー";
ORYX.I18N.StepThroughPlugin.stepThroughDesc = "モデルのステップスルー";
ORYX.I18N.StepThroughPlugin.undo = "取り消し";
ORYX.I18N.StepThroughPlugin.undoDesc = "ステップの取り消し";
ORYX.I18N.StepThroughPlugin.error = "このダイアグラムをステップスルーできません。";
ORYX.I18N.StepThroughPlugin.executing = "実行中";

if(!ORYX.I18N.SyntaxChecker) ORYX.I18N.SyntaxChecker = {};

ORYX.I18N.SyntaxChecker.group = "検証";
ORYX.I18N.SyntaxChecker.name = "シンタックスチェック";
ORYX.I18N.SyntaxChecker.desc = "シンタックスチェック";
ORYX.I18N.SyntaxChecker.noErrors = "シンタックスエラーはありません。";
ORYX.I18N.SyntaxChecker.invalid = "サーバーから無効な回答です。";
ORYX.I18N.SyntaxChecker.checkingMessage = "チェック中...";

if(!ORYX.I18N.Undo) ORYX.I18N.Undo = {};

ORYX.I18N.Undo.group = "取り消し";
ORYX.I18N.Undo.undo = "取り消し";
ORYX.I18N.Undo.undoDesc = "最後のアクションの取り消し";
ORYX.I18N.Undo.redo = "やり直し";
ORYX.I18N.Undo.redoDesc = "最後のアクションのやり直し";

if(!ORYX.I18N.Validator) ORYX.I18N.Validator = {};
ORYX.I18N.Validator.checking = "チェック中";

if(!ORYX.I18N.View) ORYX.I18N.View = {};

ORYX.I18N.View.group = "ズーム";
ORYX.I18N.View.zoomIn = "拡大";
ORYX.I18N.View.zoomInDesc = "モデルを拡大";
ORYX.I18N.View.zoomOut = "縮小";
ORYX.I18N.View.zoomOutDesc = "モデルの縮小";
ORYX.I18N.View.zoomStandard = "標準へズーム";
ORYX.I18N.View.zoomStandardDesc = "標準レベルにズーム";
ORYX.I18N.View.zoomFitToModel = "モデルへズーム";
ORYX.I18N.View.zoomFitToModelDesc = "モデルサイズにズーム";

if(!ORYX.I18N.XFormsSerialization) ORYX.I18N.XFormsSerialization = {};

ORYX.I18N.XFormsSerialization.group = "XForms のシリアリぜーション";
ORYX.I18N.XFormsSerialization.exportXForms = "XForms のエキスポート";
ORYX.I18N.XFormsSerialization.exportXFormsDesc = "XForms+XHTML アークアップのエキスポート";
ORYX.I18N.XFormsSerialization.importXForms = "XForms のインポート";
ORYX.I18N.XFormsSerialization.importXFormsDesc = "XForms+XHTML マークアップのインポート";
ORYX.I18N.XFormsSerialization.noClientXFormsSupport = "XForms はサポートされていません";
ORYX.I18N.XFormsSerialization.noClientXFormsSupportDesc = "<h2>このブラウザーはXFormsをサポートしていません。<a href=\"https://addons.mozilla.org/firefox/addon/824\" target=\"_blank\">Mozilla XForms Add-on</a> を Firefoxにインポートしてください。</h2>";
ORYX.I18N.XFormsSerialization.ok = "OK";
ORYX.I18N.XFormsSerialization.selectFile = "インポートする XHTML (.xhtml) ファイルまたは XForms+XHTML のタイプを選択してください!";
ORYX.I18N.XFormsSerialization.selectCss = "css ファイルのURLを入力してください";
ORYX.I18N.XFormsSerialization.file = "ファイル";
ORYX.I18N.XFormsSerialization.impFailed = "ドキュメントのインポート要求が失敗しました。";
ORYX.I18N.XFormsSerialization.impTitle = "XForms+XHTML ドキュメントのインポート";
ORYX.I18N.XFormsSerialization.expTitle = "XForms+XHTML ドキュメントのエキスポート";
ORYX.I18N.XFormsSerialization.impButton = "インポート";
ORYX.I18N.XFormsSerialization.impProgress = "インポート中...";
ORYX.I18N.XFormsSerialization.close = "閉じる";


if(!ORYX.I18N.TreeGraphSupport) ORYX.I18N.TreeGraphSupport = {};

ORYX.I18N.TreeGraphSupport.syntaxCheckName = "シンタックスチェック";
ORYX.I18N.TreeGraphSupport.group = "ツリーグラフサポート";
ORYX.I18N.TreeGraphSupport.syntaxCheckDesc = "ツリーグラフ構造のシンタックスチェック";

if(!ORYX.I18N.QueryEvaluator) ORYX.I18N.QueryEvaluator = {};

ORYX.I18N.QueryEvaluator.name = "クエリ―評価";
ORYX.I18N.QueryEvaluator.group = "検証";
ORYX.I18N.QueryEvaluator.desc = "クエリ―の評価";
ORYX.I18N.QueryEvaluator.noResult = "クエリ―結果がマッチしません。";
ORYX.I18N.QueryEvaluator.invalidResponse = "サーバーからの無効な回答です。";

// if(!ORYX.I18N.QueryResultHighlighter) ORYX.I18N.QueryResultHighlighter = {};
// 
// ORYX.I18N.QueryResultHighlighter.name = "JA:Query Result Highlighter";

/** New Language Properties: 08.12.2008 */

ORYX.I18N.PropertyWindow.title = "プロパティ―";

if(!ORYX.I18N.ShapeRepository) ORYX.I18N.ShapeRepository = {};
ORYX.I18N.ShapeRepository.title = "シェープリポジトリ―";

ORYX.I18N.Save.dialogDesciption = "名前、説明、およびコメントを入力してください。";
ORYX.I18N.Save.dialogLabelTitle = "タイトル";
ORYX.I18N.Save.dialogLabelDesc = "説明";
ORYX.I18N.Save.dialogLabelType = "タイプ";
ORYX.I18N.Save.dialogLabelComment = "更新コメント";

ORYX.I18N.Validator.name = "BPMN 評価";
ORYX.I18N.Validator.description = "BPMN の評価";

ORYX.I18N.SSExtensionLoader.labelImport = "インポート";
ORYX.I18N.SSExtensionLoader.labelCancel = "キャンセル";

Ext.MessageBox.buttonText.yes = "はい";
Ext.MessageBox.buttonText.no = "いいえ";
Ext.MessageBox.buttonText.cancel = "キャンセル";
Ext.MessageBox.buttonText.ok = "OK";


/** New Language Properties: 28.01.2009 */
if(!ORYX.I18N.BPMN2XPDL) ORYX.I18N.BPMN2XPDL = {};
ORYX.I18N.BPMN2XPDL.group = "エキスポート";
ORYX.I18N.BPMN2XPDL.xpdlExport = "XPDL へエキスポート";
ORYX.I18N.BPMN2XPDL.xpdlImport = "XPDL からインポート";
ORYX.I18N.BPMN2XPDL.importGroup = "インポート";
ORYX.I18N.BPMN2XPDL.selectFile = "インポートする XPDL (.xml) ファイルまたは XPDL のタイプを選択してください!";
ORYX.I18N.BPMN2XPDL.file = "ファイル";
ORYX.I18N.BPMN2XPDL.impXPDL = "XPDL のインポート";
ORYX.I18N.BPMN2XPDL.impBtn = "インポート";
ORYX.I18N.BPMN2XPDL.impProgress = "インポート中...";
ORYX.I18N.BPMN2XPDL.close = "閉じる";

/** Resource Perspective Additions: 24 March 2009 */
if(!ORYX.I18N.ResourcesSoDAdd) ORYX.I18N.ResourcesSoDAdd = {};

ORYX.I18N.ResourcesSoDAdd.name = "責任制約セパレータ―の定義";
ORYX.I18N.ResourcesSoDAdd.group = "リソースパースペクティブ";
ORYX.I18N.ResourcesSoDAdd.desc = "選択したタスクの責任制約のセパレータ―の定義";

if(!ORYX.I18N.ResourcesSoDShow) ORYX.I18N.ResourcesSoDShow = {};

ORYX.I18N.ResourcesSoDShow.name = "責任制約のセパレータ―の表示";
ORYX.I18N.ResourcesSoDShow.group = "リソースパースペクティブ";
ORYX.I18N.ResourcesSoDShow.desc = "選択したタスクの責任制約のセパレータ―の表示";

if(!ORYX.I18N.ResourcesBoDAdd) ORYX.I18N.ResourcesBoDAdd = {};

ORYX.I18N.ResourcesBoDAdd.name = "責任制約のバインディングの定義";
ORYX.I18N.ResourcesBoDAdd.group = "リソースパースペクティブ";
ORYX.I18N.ResourcesBoDAdd.desc = "選択したタスクの責任制約のバインディングの定義";

if(!ORYX.I18N.ResourcesBoDShow) ORYX.I18N.ResourcesBoDShow = {};

ORYX.I18N.ResourcesBoDShow.name = "責任制約のバインディングの表示";
ORYX.I18N.ResourcesBoDShow.group = "リソースパースペクティブ";
ORYX.I18N.ResourcesBoDShow.desc = "選択したタスクの責任制約のバインディングの表示";

if(!ORYX.I18N.ResourceAssignment) ORYX.I18N.ResourceAssignment = {};

ORYX.I18N.ResourceAssignment.name = "リソース割り当て";
ORYX.I18N.ResourceAssignment.group = "リソースパースペクティブ";
ORYX.I18N.ResourceAssignment.desc = "選択したタスクにリソースを割り当て";

if(!ORYX.I18N.ClearSodBodHighlights) ORYX.I18N.ClearSodBodHighlights = {};

ORYX.I18N.ClearSodBodHighlights.name = "ハイライトとオーバーレイのクリアー";
ORYX.I18N.ClearSodBodHighlights.group = "リソースパースペクティブ";
ORYX.I18N.ClearSodBodHighlights.desc = "責任ハイライト/オーバーレイのすべてのセパレータ―とバインディングの削除";


if(!ORYX.I18N.Perspective) ORYX.I18N.Perspective = {};
ORYX.I18N.Perspective.no = "パースペクティブなし"
ORYX.I18N.Perspective.noTip = "現在のパースペクティブのアンロード"


/** New Language Properties: 21.04.2009 */
ORYX.I18N.JSONSupport = {
    imp: {
        name: "JSON からインポート",
        desc: "JSON からモデルのインポート",
        group: "エキスポート",
        selectFile: "インポートする JSON (.json) ファイルまたは JSON のタイプを選択してください!",
        file: "ファイル",
        btnImp: "インポート",
        btnClose: "閉じる",
        progress: "インポート中 ...",
        syntaxError: "シンタックスエラー"
    },
    exp: {
        name: "JSON へエキスポート",
        desc: "現在のモデルを JSON へエキスポート",
        group: "エキスポート"
    }
};

ORYX.I18N.TBPMSupport = {
        imp: {
        name: "PNG/JPEG からインポート",
        desc: "TPBM 写真からモデルのインポート",
        group: "エキスポート",
        selectFile: "イメージ (.png/.jpeg) ファイルの選択!",
        file: "ファイル",
        btnImp: "インポート",
        btnClose: "閉じる",
        progress: "インポート中 ...",
        syntaxError: "シンタックスエラー",
        impFailed: "ドキュメントのインポートの要求に失敗しました。",
        confirm: "ハイライトされたシェープのインポートの確認!",
    }
};

/** New Language Properties: 08.05.2009 */
if(!ORYX.I18N.BPMN2XHTML) ORYX.I18N.BPMN2XHTML = {};
ORYX.I18N.BPMN2XHTML.group = "エキスポート";
ORYX.I18N.BPMN2XHTML.XHTMLExport = "XHTML ドキュメントのエキスポート";

/** New Language Properties: 09.05.2009 */
if(!ORYX.I18N.JSONImport) ORYX.I18N.JSONImport = {};

ORYX.I18N.JSONImport.title = "JSON のインポート";
ORYX.I18N.JSONImport.wrongSS = "インポートされたファイル ({0}) のステンシルセットは、ロードされたステンシルセット ({1}) に一致しません。";
ORYX.I18N.JSONImport.invalidJSON = "インポートする JSON は無効です。";

if(!ORYX.I18N.Feedback) ORYX.I18N.Feedback = {};

ORYX.I18N.Feedback.name = "フィードバック";
ORYX.I18N.Feedback.desc = "フィードバックをご連絡ください!";
ORYX.I18N.Feedback.pTitle = "フィードバックをご連絡ください!";
ORYX.I18N.Feedback.pName = "名前";
ORYX.I18N.Feedback.pEmail = "Eメール";
ORYX.I18N.Feedback.pSubject = "件名";
ORYX.I18N.Feedback.pMsg = "内容/メッセージ";
ORYX.I18N.Feedback.pEmpty = "* できる限り詳細な情報を返信ください。リクエストについて検討いたします。\n* 不具合については、詳細な再現手順および期待する結果を返信ください。";
ORYX.I18N.Feedback.pAttach = "現在のモデルの添付";
ORYX.I18N.Feedback.pAttachDesc = "この情報はデバッグに役立ちます。モデルに重要な情報が含まれる場合は、その情報を削除するか、この機能をアンチェックしてください。";
ORYX.I18N.Feedback.pBrowser = "ブラウザーと環境についての情報";
ORYX.I18N.Feedback.pBrowserDesc = "この情報はブラウザーによって自動検知されました。ブラウザー固有の不具合がある場合は、この情報が非常に役に立ちます。";
ORYX.I18N.Feedback.submit = "メッセージの送信";
ORYX.I18N.Feedback.sending = "メッセージの送信中 ...";
ORYX.I18N.Feedback.success = "成功";
ORYX.I18N.Feedback.successMsg = "フィードバックありがとうございます!";
ORYX.I18N.Feedback.failure = "失敗";
ORYX.I18N.Feedback.failureMsg = "メッセージは送信されませんでした。もう一度お試しいただくか、http://code.google.com/p/oryx-editor/ にお問い合わせください。";


ORYX.I18N.Feedback.name = "フィードバック";
ORYX.I18N.Feedback.failure = "失敗";
ORYX.I18N.Feedback.failureMsg = "メッセージは送信されませんでいた。もう一度お試しいただくか、http://code.google.com/p/oryx-editor/ にお問い合わせください。";
ORYX.I18N.Feedback.submit = "メッセージの送信";

ORYX.I18N.Feedback.emailDesc = "あなたのEメールアドレスは?";
ORYX.I18N.Feedback.titleDesc = "タイトルにメッセージを要約してください";
ORYX.I18N.Feedback.descriptionDesc = "アイデア、質問、または問題を記述ください。"
ORYX.I18N.Feedback.info = '<p>Oryxは、ビジネスプロセスマネージメントの分野の研究者をサポートすることを意図する研究のプラットフォームです。柔軟かつ、拡張可能なツールを使用して研究論文や実験を検証します。</p><p>私たちがプラットフォームの<a href="http://bpt.hpi.uni-potsdam.de/Oryx/ReleaseNotes" target="_blank"> 最新のテクノロジーと進歩</a>を提供します。<a href="http://bpt.hpi.uni-potsdam.de/Oryx/DeveloperNetwork" target="_blank">私たち</a>は、時々小さな問題が発生することがあるかもしれませんが、信頼性の高いシステムを提供するために努力しています。</p><p>もし Oryx を向上させるためのアイデアを持っている、プラットフォームに関連する質問を持っている、あるいは問題を報告したい場合: <strong>ここに報告ください。</strong></p>'; // general info will be shown, if no subject specific info is given
// list subjects in reverse order of appearance!
ORYX.I18N.Feedback.subjects = [
    {
        id: "question",   // ansi-compatible name
        name: "質問", // natural name
        description: "ここに質問をしてください! \n回答をする前に、こちらからの追加の質問をしなくてよいように、できるだけ詳細な情報を記述ください", // default text for the description text input field
        info: "", // optional field to give more info
    },
    {
        id: "problem",   // ansi-compatible name
        name: "問題", // natural name
        description: "ご不便をおかけして申し訳ありません。問題についてご意見をお寄せください、私たちは問題を解決するように努力します。できるだけ詳細な情報を記述ください", // default text for the description text input field
        info: "", // optional field to give more info
    },
    {
        id: "idea",   // ansi-compatible name
        name: "アイデア", // natural name
        description: "ここにアイデアまたは提案を記述ください!", // default text for the description text input field
        info: "", // optional field to give more info
    }
];

/** New Language Properties: 11.05.2009 */
if(!ORYX.I18N.BPMN2DTRPXMI) ORYX.I18N.BPMN2DTRPXMI = {};
ORYX.I18N.BPMN2DTRPXMI.group = "エキスポート";
ORYX.I18N.BPMN2DTRPXMI.DTRPXMIExport = "XMI (Design Thinking)へエキスポート";
ORYX.I18N.BPMN2DTRPXMI.DTRPXMIExportDescription = "現在のモデルを XMI (ステンシルセット拡張 'BPMN サブセット Design Thinking' が必要)へエキスポート";

/** New Language Properties: 14.05.2009 */
if(!ORYX.I18N.RDFExport) ORYX.I18N.RDFExport = {};
ORYX.I18N.RDFExport.group = "エキスポート";
ORYX.I18N.RDFExport.rdfExport = "RDF へエキスポート";
ORYX.I18N.RDFExport.rdfExportDescription = "現在のモデルをResource Description Framework (RDF) で定義された XML シリアリゼーションへエキスポート";

/** New Language Properties: 15.05.2009*/
if(!ORYX.I18N.SyntaxChecker.BPMN) ORYX.I18N.SyntaxChecker.BPMN={};
ORYX.I18N.SyntaxChecker.BPMN_NO_SOURCE = "エッジはソースが必要です。";
ORYX.I18N.SyntaxChecker.BPMN_NO_TARGET = "エッジはターゲットが必要です。";
ORYX.I18N.SyntaxChecker.BPMN_DIFFERENT_PROCESS = "ソースとターゲットノードは同じプロセスに含まれなければなりません。";
ORYX.I18N.SyntaxChecker.BPMN_SAME_PROCESS = "ソースとターゲットノードは異なるプールに含まれなければなりません。";
ORYX.I18N.SyntaxChecker.BPMN_FLOWOBJECT_NOT_CONTAINED_IN_PROCESS = "フローオブジェクトはプロセスに含まれなければなりません。";
ORYX.I18N.SyntaxChecker.BPMN_ENDEVENT_WITHOUT_INCOMING_CONTROL_FLOW = "終了イベントは入力シーケンスフローが必要です。";
ORYX.I18N.SyntaxChecker.BPMN_STARTEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "開始イベントは出力シーケンスフローが必要です。";
ORYX.I18N.SyntaxChecker.BPMN_STARTEVENT_WITH_INCOMING_CONTROL_FLOW = "開始イベントは出力シーケンスフローが必要ありません。";
ORYX.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITH_INCOMING_CONTROL_FLOW = "添付中間イベントは入力シーケンスフローは必要ありません。";
ORYX.I18N.SyntaxChecker.BPMN_ATTACHEDINTERMEDIATEEVENT_WITHOUT_OUTGOING_CONTROL_FLOW = "添付中間イベントは１つの出力シーケンスフローが必要です。";
ORYX.I18N.SyntaxChecker.BPMN_ENDEVENT_WITH_OUTGOING_CONTROL_FLOW = "終了イベントは出力シーケンスフローは必要ありません。";
ORYX.I18N.SyntaxChecker.BPMN_EVENTBASEDGATEWAY_BADCONTINUATION = "イベントベースゲートウェイはゲートウェイまたはサブプロセスの後に続くことはできません。";
ORYX.I18N.SyntaxChecker.BPMN_NODE_NOT_ALLOWED = "ノード対応は許されません。";

if(!ORYX.I18N.SyntaxChecker.IBPMN) ORYX.I18N.SyntaxChecker.IBPMN={};
ORYX.I18N.SyntaxChecker.IBPMN_NO_ROLE_SET = "相互作用は送信者と受信者の役割セットが必要です。";
ORYX.I18N.SyntaxChecker.IBPMN_NO_INCOMING_SEQFLOW = "このノードは入力シーケンスフローが必要です。";
ORYX.I18N.SyntaxChecker.IBPMN_NO_OUTGOING_SEQFLOW = "このノードは出力シーケンスフローが必要です。";

if(!ORYX.I18N.SyntaxChecker.InteractionNet) ORYX.I18N.SyntaxChecker.InteractionNet={};
ORYX.I18N.SyntaxChecker.InteractionNet_SENDER_NOT_SET = "送信者未設定";
ORYX.I18N.SyntaxChecker.InteractionNet_RECEIVER_NOT_SET = "受信者未設定";
ORYX.I18N.SyntaxChecker.InteractionNet_MESSAGETYPE_NOT_SET = "メッセージタイプ未設定";
ORYX.I18N.SyntaxChecker.InteractionNet_ROLE_NOT_SET = "役割未設定";

if(!ORYX.I18N.SyntaxChecker.EPC) ORYX.I18N.SyntaxChecker.EPC={};
ORYX.I18N.SyntaxChecker.EPC_NO_SOURCE = "エッジはソースが必要です。";
ORYX.I18N.SyntaxChecker.EPC_NO_TARGET = "エッジはターゲットが必要です。";
ORYX.I18N.SyntaxChecker.EPC_NOT_CONNECTED = "ノードはエッジに接続されなければなりません。";
ORYX.I18N.SyntaxChecker.EPC_NOT_CONNECTED_2 = "ノードは複数のエッジに接続されなければなりません。";
ORYX.I18N.SyntaxChecker.EPC_TOO_MANY_EDGES = "ノードに接続されたエッジが多すぎます。";
ORYX.I18N.SyntaxChecker.EPC_NO_CORRECT_CONNECTOR = "ノードは正しいコネクターではありません。";
ORYX.I18N.SyntaxChecker.EPC_MANY_STARTS = "１つの開始イベントのみが必要です。";
ORYX.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_OR = "OR/XOR 分割後ファンクションは必要ありません。";
ORYX.I18N.SyntaxChecker.EPC_PI_AFTER_OR = "OR/XOR 分割後プロセスインターフェースは必要ありません。";
ORYX.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_FUNCTION = "ファンクションの後ファンクションは必要ありません。";
ORYX.I18N.SyntaxChecker.EPC_EVENT_AFTER_EVENT = "イベントの後イベントは必要ありません。";
ORYX.I18N.SyntaxChecker.EPC_PI_AFTER_FUNCTION = "ファンクションの後プロセスインターフェースは必要ありません。";
ORYX.I18N.SyntaxChecker.EPC_FUNCTION_AFTER_PI = "プロセスインスタンスの後ファンクションは必要ありません。";

if(!ORYX.I18N.SyntaxChecker.PetriNet) ORYX.I18N.SyntaxChecker.PetriNet={};
ORYX.I18N.SyntaxChecker.PetriNet_NOT_BIPARTITE = "グラフは二部ではありません";
ORYX.I18N.SyntaxChecker.PetriNet_NO_LABEL = "ラベルはラベル付きの遷移に設定されていません";
ORYX.I18N.SyntaxChecker.PetriNet_NO_ID = "IDのないノードがあります";
ORYX.I18N.SyntaxChecker.PetriNet_SAME_SOURCE_AND_TARGET = "2つのフロー関連は同じソースとターゲットを含みます";
ORYX.I18N.SyntaxChecker.PetriNet_NODE_NOT_SET = "ノードはフロー関連に設定されていません";

/** New Language Properties: 02.06.2009*/
ORYX.I18N.Edge = "エッジ";
ORYX.I18N.Node = "ノード";

/** New Language Properties: 03.06.2009*/
ORYX.I18N.SyntaxChecker.notice = "エラーメッセージを見るには赤い十字アイコンの上にマウスを移動させてください。";

ORYX.I18N.Validator.result = "検証結果";
ORYX.I18N.Validator.noErrors = "検証エラーは見つかりませんでした。";
ORYX.I18N.Validator.bpmnDeadlockTitle = "停止";
ORYX.I18N.Validator.bpmnDeadlock = "このノードは停止しました。すべての入力ブランチが有効化できない状況です。";
ORYX.I18N.Validator.bpmnUnsafeTitle = "同期不足";
ORYX.I18N.Validator.bpmnUnsafe = "このモデルは同期が十分ではありません。マークされたエレメントは複数の入力ブランチから有効化されています。";
ORYX.I18N.Validator.bpmnLeadsToNoEndTitle = "検証結果";
ORYX.I18N.Validator.bpmnLeadsToNoEnd = "プロセスは最終状態へ到達できません。";

ORYX.I18N.Validator.syntaxErrorsTitle = "シンタックスエラー";
ORYX.I18N.Validator.syntaxErrorsMsg = "シンタックスエラーのため、プロセスは検証できません。";
    
ORYX.I18N.Validator.error = "検証失敗";
ORYX.I18N.Validator.errorDesc = 'プロセスの検証に失敗しました。"Feedbackの送信" 機能からプロセスモデルを送信いたたければ、問題を切り分けることができるかもしれません。';

ORYX.I18N.Validator.epcIsSound = "<p><b>The EPC はサウンドです。問題はありません!</b></p>";
ORYX.I18N.Validator.epcNotSound = "JA:<p><b>EPC はサウンドでは<i>ありません</i>!</b></p>";

/** New Language Properties: 05.06.2009*/
if(!ORYX.I18N.RESIZE) ORYX.I18N.RESIZE = {};
ORYX.I18N.RESIZE.tipGrow = "キャンバスサイズの拡張:";
ORYX.I18N.RESIZE.tipShrink = "キャンバスサイズの縮小:";
ORYX.I18N.RESIZE.N = "上";
ORYX.I18N.RESIZE.W = "左";
ORYX.I18N.RESIZE.S = "下";
ORYX.I18N.RESIZE.E = "右";
/** New Language Properties: 14.08.2009*/
if(!ORYX.I18N.PluginLoad) ORYX.I18N.PluginLoad = {};
ORYX.I18N.PluginLoad.AddPluginButtonName = "プラグインの追加";
ORYX.I18N.PluginLoad.AddPluginButtonDesc = "動的にプラグインの追加";
ORYX.I18N.PluginLoad.loadErrorTitle= "ローディングエラー";
ORYX.I18N.PluginLoad.loadErrorDesc = "プラグインをロードできません。 \n エラー:\n";
ORYX.I18N.PluginLoad.WindowTitle = "追加プラグインの追加";

ORYX.I18N.PluginLoad.NOTUSEINSTENCILSET = "このステンシルセットは許可されていません!";
ORYX.I18N.PluginLoad.REQUIRESTENCILSET = "別のステンシルセットが必要です!";
ORYX.I18N.PluginLoad.NOTFOUND = "プラグイン名が見つかりません!"
ORYX.I18N.PluginLoad.YETACTIVATED = "プラグインが有効化されていません!"

/** New Language Properties: 15.07.2009*/
if(!ORYX.I18N.Layouting) ORYX.I18N.Layouting ={};
ORYX.I18N.Layouting.doing = "レイアウト中...";

/** New Language Properties: 18.08.2009*/
ORYX.I18N.SyntaxChecker.MULT_ERRORS = "複数のエラー";

/** New Language Properties: 08.09.2009*/
if(!ORYX.I18N.PropertyWindow) ORYX.I18N.PropertyWindow = {};
ORYX.I18N.PropertyWindow.oftenUsed = "複数利用済み";
ORYX.I18N.PropertyWindow.moreProps = "多くのプロパティ―";

/** New Language Properties: 17.09.2009*/
if(!ORYX.I18N.Bpmn2_0Serialization) ORYX.I18N.Bpmn2_0Serialization = {};
ORYX.I18N.Bpmn2_0Serialization.show = "BPMN 2.0 DI XML の表示";
ORYX.I18N.Bpmn2_0Serialization.showDesc = "表示";
ORYX.I18N.Bpmn2_0Serialization.download = "BPMN 2.0 DI XML のダウンロード";
ORYX.I18N.Bpmn2_0Serialization.downloadDesc = "現在の BPMN 2.0 モデルのBPMN 2.0 DI XMLのダウンロード";
ORYX.I18N.Bpmn2_0Serialization.serialFailed = "BPMN 2.0 DI XML シリアリぜーションの生成中にエラーが発生しました。";
ORYX.I18N.Bpmn2_0Serialization.group = "BPMN 2.0";

/** New Language Properties 01.10.2009 */
if(!ORYX.I18N.SyntaxChecker.BPMN2) ORYX.I18N.SyntaxChecker.BPMN2 = {};

ORYX.I18N.SyntaxChecker.BPMN2_DATA_INPUT_WITH_INCOMING_DATA_ASSOCIATION = "データ入力は入力データ関連の必要はありません。";
ORYX.I18N.SyntaxChecker.BPMN2_DATA_OUTPUT_WITH_OUTGOING_DATA_ASSOCIATION = "データ出力は出力データ関連の必要はありません。.";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_TARGET_WITH_TOO_MANY_INCOMING_SEQUENCE_FLOWS = "イベントベースゲートウェイのターゲットは１つの入力シーケンスフローのみが必要です。";

/** New Language Properties 02.10.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_OUTGOING_SEQUENCE_FLOWS = "イベントベースゲートウェアいは2つ以上の出力シーケンスフローが必要です。";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_EVENT_TARGET_CONTRADICTION = "設定にメッセージ中間イベントを利用している場合、受信タスクを利用することはできません。";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_TRIGGER = "次の中間イベントトリガーのみ有効です: メッセージ、シグナル、タイマー、条件とマルチ。";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WRONG_CONDITION_EXPRESSION = "イベントゲートウェイの出力シーケンスフローは条件式を利用することができません。";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_NOT_INSTANTIATING = "ゲートウェイはプロセスをインスタンス化する条件を満たしません。開始イベントまたはゲートウェイのインスタンス化属性を利用してください。";

/** New Language Properties 05.10.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_MIXED_FAILURE = "ゲートウェイは複数の入力および出力シーケンスフローが両方必要です。";
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_CONVERGING_FAILURE = "ゲートウェイは複数の入力シーケンスフローが必要ですが、出力シーケンスフローは必要ありません。";
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAYDIRECTION_DIVERGING_FAILURE = "ゲートウェイは複数の入力シーケンスフローは必要ありませんが、出力シーケンスフローが必要です。";
ORYX.I18N.SyntaxChecker.BPMN2_GATEWAY_WITH_NO_OUTGOING_SEQUENCE_FLOW = "ゲートウェイは少なくとも１つの出力シーケンスフローが必要です。";
ORYX.I18N.SyntaxChecker.BPMN2_RECEIVE_TASK_WITH_ATTACHED_EVENT = "イベントゲートウェイの設定で利用される受信タスクは添付中間イベントを利用することはできません。";
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_SUBPROCESS_BAD_CONNECTION = "イベントサブプロセスは入力および出力シーケンスフローを利用することはできません。";

/** New Language Properties 13.10.2009 */
ORYX.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_CONNECTED = "少なくとも一方のメッセージフローが接続される必要があります。";

/** New Language Properties 19.10.2009 */
ORYX.I18N.Bpmn2_0Serialization['import'] = "BPMN 2.0 DI XML からのインポート";
ORYX.I18N.Bpmn2_0Serialization.importDesc = "ファイルまたはXML文字列からの BPMN 2.0 モデルのインポート";
ORYX.I18N.Bpmn2_0Serialization.selectFile = "インポートする BPMN 2.0 DI XML の (*.bpmn) またはタイプを選択してください!";
ORYX.I18N.Bpmn2_0Serialization.file = "ファイル:";
ORYX.I18N.Bpmn2_0Serialization.name = "BPMN 2.0 DI XML からのインポート";
ORYX.I18N.Bpmn2_0Serialization.btnImp = "インポート";
ORYX.I18N.Bpmn2_0Serialization.progress = "BPMN 2.0 DI XML インポート中...";
ORYX.I18N.Bpmn2_0Serialization.btnClose = "閉じる";
ORYX.I18N.Bpmn2_0Serialization.error = "BPMN 2.0 DI XML のインポート中にエラーが発生しました";

/** New Language Properties 24.11.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_MESSAGES = "コレオグラフィーアクティビティーは１つの初期化メッセージを利用します。";
ORYX.I18N.SyntaxChecker.BPMN_MESSAGE_FLOW_NOT_ALLOWED = "メッセージフローは利用できません。";

/** New Language Properties 27.11.2009 */
ORYX.I18N.SyntaxChecker.BPMN2_EVENT_BASED_WITH_TOO_LESS_INCOMING_SEQUENCE_FLOWS = "インスタンス化していないイベントベースゲートウェイは少なくとも１つの入力シーケンスフローが必要です。";
ORYX.I18N.SyntaxChecker.BPMN2_TOO_FEW_INITIATING_PARTICIPANTS = "コレオグラフィーアクティビティーは、１つの初期化実行者 (白)が必要です。";
ORYX.I18N.SyntaxChecker.BPMN2_TOO_MANY_INITIATING_PARTICIPANTS = "コレオグラフィーアクティビティーは、1つ以上の初期化実行者 (白)が必要です。"

ORYX.I18N.SyntaxChecker.COMMUNICATION_AT_LEAST_TWO_PARTICIPANTS = "コミュニケーションは少なくとも２つの実行者に接続されなければなりません。";
ORYX.I18N.SyntaxChecker.MESSAGEFLOW_START_MUST_BE_PARTICIPANT = "メッセージフローのソースは実行者でなければなりません。";
ORYX.I18N.SyntaxChecker.MESSAGEFLOW_END_MUST_BE_PARTICIPANT = "メッセージフローのターゲットは実行者でなければなりません。";
ORYX.I18N.SyntaxChecker.CONV_LINK_CANNOT_CONNECT_CONV_NODES = "カンバセーションリンクは、コミュニケーションまたはサブカンバセーションノードと実行者が接続されていなければなりません。";

/** New Language Properties 30.12.2009 */
ORYX.I18N.Bpmn2_0Serialization.xpdlShow = "XPDL 2.2 の表示";
ORYX.I18N.Bpmn2_0Serialization.xpdlShowDesc = "BPMN 2.0 XML (by XSLT) に基づく XPDL 2.2 の表示";
ORYX.I18N.Bpmn2_0Serialization.xpdlDownload = "XPDL 2.2 のダウンロード";
ORYX.I18N.Bpmn2_0Serialization.xpdlDownloadDesc = "BPMN 2.0 XML (by XSLT) に基づく XPDL 2.2 のダウンロード";


if(!ORYX.I18N.cpntoolsSupport) ORYX.I18N.cpntoolsSupport = {};

ORYX.I18N.cpntoolsSupport.serverConnectionFailed = "サーバーへの接続に失敗しました。";
ORYX.I18N.cpntoolsSupport.importTask = "インポートするためには、CPN ファイル (.cpn) または CPN XML のタイプを選択してください!";
ORYX.I18N.cpntoolsSupport.File = "ファイル:";
ORYX.I18N.cpntoolsSupport.cpn = "CPN";
ORYX.I18N.cpntoolsSupport.title = "CPN Oryx";
ORYX.I18N.cpntoolsSupport.importLable = "インポート";
ORYX.I18N.cpntoolsSupport.close = "閉じる";
ORYX.I18N.cpntoolsSupport.wrongCPNFile = "正しい CPN ファイルが選択されていません。";
ORYX.I18N.cpntoolsSupport.noPageSelection = "ページが選択されていません。";
ORYX.I18N.cpntoolsSupport.group = "エキスポート";
ORYX.I18N.cpntoolsSupport.importProgress = "インポート中 ...";
ORYX.I18N.cpntoolsSupport.exportProgress = "エキスポート中 ...";
ORYX.I18N.cpntoolsSupport.exportDescription = "CPN ツールへエキスポート";
ORYX.I18N.cpntoolsSupport.importDescription = "CPN ツールからインポート";

if(!ORYX.I18N.BPMN2YAWLMapper) ORYX.I18N.BPMN2YAWLMapper = {};

ORYX.I18N.BPMN2YAWLMapper.group = "エキスポート";
ORYX.I18N.BPMN2YAWLMapper.name = 'YAWL エキスポート';
ORYX.I18N.BPMN2YAWLMapper.desc = 'このダイアグラムを YAWL へマッピングし、エキスポートしてください。"YAWL へマッピングするための BPMN サブセット" がロードされたかどうか確認してください。';
