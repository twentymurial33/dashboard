import React, { useState, useEffect } from "react";

function Dashboard() {
  const [userDashboards, setUserDashboards] = useState([]);

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
    <>
      <ul>
        {userDashboards.map((userDashboard, i) => {
          return <li key={i}>{userDashboard.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Dashboard;
