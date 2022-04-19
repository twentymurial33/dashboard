import Landing from "./components/Header";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import ToggleDark from "./components/ToggleDark";

const AppWrapper = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },

    { path: "/Profile", element: <Profile /> },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ToggleDark />
        <Router>
          <AppWrapper />
        </Router>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
