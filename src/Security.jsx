import React from "react";
import Layout from "./components/Layout";
import * as QuickSightEmbedding from "amazon-quicksight-embedding-sdk";

function onDashboardLoad(payload) {
  console.log("Do something when the dashboard is fully loaded.");
}

function onError(payload) {
  console.log("Do something when the dashboard fails loading");
}
var dashboard;
function Security() {
  var containerDiv = document.getElementById("embeddingContainer");
  var options = {
    url:
      "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/dashboardId?isauthcode=true&identityprovider=quicksight&code=authcode",
    container: containerDiv,
    parameters: {
      country: "United States",
    },
    scrolling: "no",
    height: "700px",
    width: "1000px",
    locale: "en-US",
    footerPaddingEnabled: true,
  };
  dashboard = QuickSightEmbedding.embedDashboard(options);
  dashboard.on("error", onError);
  dashboard.on("load", onDashboardLoad);

  return (
    <Layout>
      <div>{dashboard}</div>
    </Layout>
  );
}

export default Security;
