import { embedDashboard } from "amazon-quicksight-embedding-sdk";

const dashboard = embedDashboard(options);

function embedDashboard() {
  var containerDiv = document.getElementById("dashboardContainer");
  var options = {
    // url: "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/dashboardId?isauthcode=true&identityprovider=quicksight&code=authcode",
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
