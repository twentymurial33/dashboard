import React from "react";
// import { useState } from "react";
import Landing from "./components/Header";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Design from "./Design";
import Analytics from "./Analytics";
import Security from "./Security";
import Application from "./Application";

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

function App() {
  return (
    <div className="App">
      <Router>
        <AppWrapper />
      </Router>
    </div>
  );
}

export default App;
