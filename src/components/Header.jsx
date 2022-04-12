import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "../layout/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import { Footer } from "./Footer";
import { Head } from "./Head";
import { SignInHeader } from "./SignInHeader";
// import { SignInFooter } from "./SignInFooter";
import Chatbot from "./Chatbot";
import Footer from "../layout/Footer";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../aws-exports.js";
Amplify.configure(awsExports);

const mdTheme = createTheme();

function Header(user) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <Chatbot />
        </Drawer>
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
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={3}>
                <iframe
                  title="This is a unique title"
                  width="1060"
                  height="680"
                  src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/567024620811/dashboards/ecf68f88-10fa-45e7-a657-8ad14d420023?directory_alias=concave"
                ></iframe>
              </Grid>
              <Grid item xs={12} md={8} lg={9}></Grid>

              <Grid item xs={12} md={4} lg={3}>
                <iframe
                  title="This is a unique title"
                  width="1060"
                  height="680"
                  src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/567024620811/dashboards/ecf68f88-10fa-45e7-a657-8ad14d420023?directory_alias=concave"
                ></iframe>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default withAuthenticator(Header, {
  components: {
    Head,
    SignIn: {
      Header: SignInHeader,
    },
    Footer,
  },
});
