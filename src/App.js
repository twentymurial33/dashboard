import Landing from "./components/Header";
import SignOut from "./layout/authentication/index";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const AppWrapper = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    { path: "/Auth", element: <SignOut /> },

    // { path: "/SignOut", element: <SignOut /> },
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
