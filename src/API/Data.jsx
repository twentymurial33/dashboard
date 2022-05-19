import React from "react";
import { useQuery } from "react-query";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function Data() {
  const { isLoading, error, data } = useQuery("comments", () =>
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((res) =>
      res.json()
    )
  );

  return (
    <div>
      <div className="dashboard-preview">
        {/* <QueryClientProvider client={queryClient}>
          <Data userDashboards={userDashboards} />
        </QueryClientProvider> */}
      </div>
    </div>
  );
}

export default Data;
