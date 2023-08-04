import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <div className="row flex-nowrap text-center">
      <div className="col-3 w-25">
        <Sidebar />
      </div>
      <div style={{ width: "70%" }}>
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
