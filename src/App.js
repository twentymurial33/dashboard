import React from "react";
// import { useState } from "react";
import Landing from "./components/Header";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Design from "./Design";
import Analytics from "./Analytics";
import Security from "./Security";
import Application from "./Application";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const AppWrapper = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },

    { path: "/Design", element: <Design /> },
    { path: "/Security", element: <Security /> },
    { path: "/Application", element: <Application /> },
    { path: "/Analytics", element: <Analytics /> },
  ]);
  return routes;
};

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 4,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}

export default function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Router>
            <AppWrapper />
            <MyApp />
          </Router>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}
