import React from "react";
import { useQuery } from "react-query";

function Data() {
  const { isLoading, error, data } = useQuery("comments", () =>
    fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
      res.json()
    )
  );

  return (
    <div>
      <h1>Welcome to React Query</h1>
      {isLoading && "Loading......"}
      {error && error.message}
      {data && data.map((comment) => <h1 key={comment.id}>{comment.name}</h1>)}
    </div>
  );
}

export default Data;
