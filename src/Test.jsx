import { embedDashboard } from "amazon-quicksight-embedding-sdk";

const dashboard = embedDashboard(options);

var options = {
  url:
    "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/dashboardId?isauthcode=true&identityprovider=quicksight&code=authcode",
  container: document.getElementById("embeddingContainer"),
  parameters: {
    country: "United States",
    states: ["California", "Washington"],
  },
  scrolling: "no",
  height: "700px",
  iframeResizeOnSheetChange: false, // use this option in combination with height: AutoFit, to allow iframe height to resize dynamically, based on sheet height, on changing sheets.
  width: "1000px",
  locale: "en-US",
  footerPaddingEnabled: true,
  sheetId: "YOUR_SHEETID", // use this option to specify initial sheet id to load for the embedded dashboard
  sheetTabsDisabled: false, // use this option to enable or disable sheet tab controls in dashboard embedding
  printEnabled: false, // use this option to enable or disable print option for dashboard embedding
  undoRedoDisabled: false, // set this option to true to disable undo and redo buttons for dashboard embedding
  resetDisabled: false, // set this option to true to disable reset button for dashboard embedding
  defaultEmbeddingVisualType: TABLE, // this option only applies to experience embedding and will not be used for dashboard embedding
};

function embedDashboard() {
  var containerDiv = document.getElementById("dashboardContainer");
  var options = {
    url: "<signed URL from Step 3>",
    container: containerDiv,
    parameters: {
      country: "United States",
    },
    scrolling: "no",
    height: "700px",
    width: "1000px",
  };
  dashboard = QuickSightEmbedding.embedDashboard(options);
  dashboard.on("error", onError);
  dashboard.on("load", onDashboardLoad);

  return <div></div>;
}

export default embedDashboard;
