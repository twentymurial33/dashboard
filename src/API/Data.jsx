import React from "react";
import { useQuery } from "react-query";

function Data() {
  const { isLoading, error, data } = useQuery("comments", () =>
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((res) =>
      res.json()
    )
  );

  return (
    <div>
      <div className="dashboard-preview"></div>
    </div>
  );
}

export default Data;
