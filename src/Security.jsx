import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Layout from "./components/Layout";
import * as QuickSightEmbedding from "amazon-quicksight-embedding-sdk";

var dashboard;
function onDashboardLoad(payload) {
  console.log("Do something when the dashboard is fully loaded.");
}

function onError(payload) {
  console.log("Do something when the dashboard fails loading");
}

function Security() {
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
  return (
    <Layout>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={4}
        style={{ paddingTop: "20px", display: "flex" }}
      >
        <Grid item md={2}>
          <iframe
            title="This is a unique title"
            width="600"
            marginTop="20px"
            height="400"
          ></iframe>
        </Grid>

        <Grid item md={2}>
          <iframe
            title="This is a unique title"
            width="600"
            height="400"
          ></iframe>
        </Grid>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gap={4}
        style={{ paddingTop: "20px", display: "flex" }}
      >
        <Grid item md={2}>
          <iframe
            title="This is a unique title"
            width="600"
            marginTop="20px"
            height="400"
          ></iframe>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Security;
