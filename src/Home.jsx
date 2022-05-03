import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Drawer from "./components/Drawer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Head } from "./components/Head";
import Layout from "./components/Layout";
import { SignInHeader } from "./components/SignInHeader";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports.js";
Amplify.configure(awsExports);

const mdTheme = createTheme();

function Header(user) {
  return (
    <Layout>
      <ThemeProvider theme={mdTheme}>
        {/* <Drawer /> */}
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <h2>Statistics</h2>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                    }}
                  >
                    <h2>No clue yet</h2>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 12, display: "flex", flexDirection: "column" }}
                  >
                    <h3>Summary of Dashboards</h3>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </Layout>
  );
}

export default withAuthenticator(Header, {
  components: {
    Head,
    SignIn: {
      Header: SignInHeader,
    },
  },
});
