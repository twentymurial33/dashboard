import Landing from "./components/Header";
// import SignIn from "./components/SignIn";
// import Layout from "./components/layout/Layouts";
import Profile from "./components/Profile";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import SignOut from "./components/SignOut";

const AppWrapper = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Landing />,
    },
    // { path: "/Landing", element: <Landing /> },
    { path: "/Profile", element: <Profile /> },
    { path: "/SignOut", element: <SignOut /> },
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
