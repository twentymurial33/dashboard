import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Drawer from "./components/Drawer";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import UserPool from "./UserPool";
import { Head } from "./components/Head";
import Layout from "./components/Layout";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { SignInHeader } from "./components/SignInHeader";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Data from "./components/Data";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports.js";
Amplify.configure(awsExports);

const mdTheme = createTheme();

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const queryClient = new QueryClient();
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
                    <QueryClientProvider client={queryClient}>
                      <Data />
                    </QueryClientProvider>
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
                    <h2>Today's View</h2>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper
                    sx={{ p: 12, display: "flex", flexDirection: "column" }}
                  >
                    <h3>Summary of Dashboards</h3>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell>Name</TableCell>
                          <TableCell>Ship To</TableCell>
                          <TableCell>Payment Method</TableCell>
                          <TableCell align="right">Sale Amount</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shipTo}</TableCell>
                            <TableCell>{row.paymentMethod}</TableCell>
                            <TableCell align="right">{`$${row.amount}`}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Link
                      color="primary"
                      href="#"
                      onClick={preventDefault}
                      sx={{ mt: 3 }}
                    >
                      See more orders
                    </Link>
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
