import React from "react";
import { QueryClient, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";
import Clock from "./Clock";

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
        {/* <span
          class="material-symbols-outlined"
          style={{ padding: "20px", size: "large", fontSize: "80px" }}
        >
          insights
        </span> */}

        <Clock />
        {isLoading && "Loading......"}
        {error && error.message}
        {data &&
          data.map((comment) => (
            <p style={{ textAlign: "center" }} key={comment.id}>
              {comment.name}
            </p>
          ))}
      </div>
    </div>
  );
}

export default Data;
