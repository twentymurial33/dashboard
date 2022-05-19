import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Layout from "./components/Layout";

function Security() {
  return (
    <>
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
              // src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/783053138602/dashboards/7ebc0ad1-bd0e-42ac-8c9a-1b81c2a86148?directory_alias=defsecc"
            ></iframe>
          </Grid>
          <Grid item md={2}>
            <iframe
              title="This is a unique title"
              width="600"
              height="400"
              // src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/783053138602/dashboards/7ebc0ad1-bd0e-42ac-8c9a-1b81c2a86148?directory_alias=defsecc"
            ></iframe>
          </Grid>

          <Grid item md={2}>
            <iframe
              title="This is a unique title"
              width="600"
              height="400"
              // src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/783053138602/dashboards/7ebc0ad1-bd0e-42ac-8c9a-1b81c2a86148?directory_alias=defsecc"
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
              // src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/783053138602/dashboards/7ebc0ad1-bd0e-42ac-8c9a-1b81c2a86148?directory_alias=defsecc"
            ></iframe>
          </Grid>
          <Grid item md={2}>
            <iframe
              title="This is a unique title"
              width="600"
              height="400"
              src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/783053138602/dashboards/7ebc0ad1-bd0e-42ac-8c9a-1b81c2a86148?directory_alias=defsecc"
            ></iframe>
          </Grid>

          <Grid item md={2}>
            <iframe
              title="This is a unique title"
              width="600"
              height="400"
              src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/783053138602/dashboards/7ebc0ad1-bd0e-42ac-8c9a-1b81c2a86148?directory_alias=defsecc"
            ></iframe>
          </Grid>
        </Box>
      </Layout>
    </>
  );
}

export default Security;
