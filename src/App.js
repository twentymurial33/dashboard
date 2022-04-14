import Landing from "./components/Header";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

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
      <Router>
        <AppWrapper />
      </Router>
    </div>
  );
}

export default App;
