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
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#dde4f0",
    ...theme.typography.body2,
    padding: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <ThemeProvider theme={mdTheme}>
      <Drawer />
      <Box sx={{ width: 1 }}>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={4}
          style={{ marginTop: "20px" }}
        >
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box
            gridColumn="span 4"
            title="This is a unique title"
            src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/567024620811/dashboards/a3a80918-6cce-4a41-b0ae-fb782515df70?directory_alias=concave"
          >
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={4}
          style={{ marginTop: "60px" }}
        >
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
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
