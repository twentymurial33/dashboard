import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Data from "./Data";
const queryClient = new QueryClient();
function Dashboard() {
  const [userDashboards, setUserDashboards] = useState(" ");

  useEffect(() => {
    fetch("http://localhost:8000/userDashboards")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUserDashboards(data);
      });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Data userDashboards={userDashboards} />
    </QueryClientProvider>
  );
}

export default Dashboard;
