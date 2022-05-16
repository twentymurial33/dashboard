import React from "react";

const userDashboardIds = [
  {
    name: "test2",
    id: "ecf68f88-10fa-45e7-a657-8ad14d420023",
  },
  {
    name: "New Dashboard 1",
    id: "a3a80918-6cce-4a41-b0ae-fb782515df70",
  },
];

function Dashboard() {
  return (
    <>
      {userDashboardIds.map((userDashboardId) => (
        <div>
          <p>{`Name:${userDashboardId.name} ID:${userDashboardId.id}`}</p>
        </div>
      ))}
    </>
  );
}

export default Dashboard;
