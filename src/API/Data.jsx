import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useQuery } from "react-query";

function Data() {
  const { isLoading, error, data } = useQuery("comments", () =>
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then((res) =>
      res.json()
    )
  );

  return (
    <div>
      {isLoading && "Loading......"}
      {error && error.message}
      {data && data.map((comment) => <p key={comment.id}>{comment.name}</p>)}
    </div>
  );
}

export default Data;
