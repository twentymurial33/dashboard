import React from "react";
import Layout from "./components/Layout";
import getEmbedUrl from "./getEmbedUrl";
import * as QuickSightEmbedding from "amazon-quicksight-embedding-sdk";

function onDashboardLoad(payload) {
  console.log("Do something when the dashboard is fully loaded.");
}

function onError(payload) {
  console.log("Do something when the dashboard fails loading");
}

function Security() {
  var containerDiv = document.getElementById("embeddingContainer");
  var options = {
    // replace this dummy url with the one generated via embedding API
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
  var dashboard = QuickSightEmbedding.embedDashboard(options);
  dashboard.on("error", onError);
  dashboard.on("load", onDashboardLoad);

  return (
    <Layout>
      <div id="embeddingContainer">
        <getEmbedUrl />
      </div>
    </Layout>
  );
}
export default Security;
