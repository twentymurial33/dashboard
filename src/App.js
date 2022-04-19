import React from "react";
import { useState } from "react";
import Landing from "./components/Header";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
import Design from "./Design";
import Analytics from "./Analytics";
import Security from "./Security";
import Profile from "./Profile";

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black",
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "pink",
  tagLineColor: "lavendar",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const AppWrapper = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },

    { path: "/Design", element: <Design /> },
    { path: "/Security", element: <Security /> },
    { path: "/Profile", element: <Profile /> },
    { path: "/Analytics", element: <Analytics /> },
  ]);
  return routes;
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      {/* <ThemeProvider theme={themes[theme]}> */}
      {/* <Splash theme={theme} setTheme={setTheme} /> */}
      <Router>
        <AppWrapper />
      </Router>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
