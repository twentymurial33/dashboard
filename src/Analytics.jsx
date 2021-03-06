import React from "react";
import Box from "@mui/material/Box";
import Layout from "./components/Layout";
import Grid from "@mui/material/Grid";

function Analytics() {
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
            height="400"
            src="https://9f7333gdq3.execute-api.us-east-1.amazonaws.com/test/embed-api"
          ></iframe>
        </Grid>
        <Grid item md={2}>
          <iframe
            title="This is a unique title"
            width="600"
            height="400"
            src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/567024620811/dashboards/ecf68f88-10fa-45e7-a657-8ad14d420023?directory_alias=concave"
          ></iframe>
        </Grid>

        <Grid item md={2}>
          <iframe
            title="This is a unique title"
            width="600"
            height="400"
            src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/567024620811/dashboards/8be4c4b7-17da-4bdb-8815-d54b13eaf449?directory_alias=concave"
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
            src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/567024620811/dashboards/8be4c4b7-17da-4bdb-8815-d54b13eaf449?directory_alias=concave"
          ></iframe>
        </Grid>
        <Grid item md={2}>
          <iframe
            title="This is a unique title"
            width="600"
            height="400"
            src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/567024620811/dashboards/e493221a-a099-47df-9332-482d8c40bf62?directory_alias=concave"
          ></iframe>
        </Grid>

        <Grid item md={2}>
          <iframe
            title="This is a unique title"
            width="600"
            height="400"
            src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/567024620811/dashboards/e493221a-a099-47df-9332-482d8c40bf62?directory_alias=concave"
          ></iframe>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Analytics;
