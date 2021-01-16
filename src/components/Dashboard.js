import React from "react";

const Dashboard = (props) => {
  return (
    <div>
      <div>
        <h1>Wellcome to sample auth using session</h1>
        <h1>This is page Dashboard</h1>
        <br/>
        <h2>Status: {props.loggedInStatus}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
