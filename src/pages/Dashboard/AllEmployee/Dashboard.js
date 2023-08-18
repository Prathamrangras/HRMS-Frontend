import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import Navbar from "../../../components/Navbar";

const Dashboard = () => {
  return (
    <div className="row flex-nowrap text-center">
      <Sidebar />
      <div className="main px-lg-4 px-md-4">
        <Navbar />
        <div className="body d-flex py-lg-3 py-md-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
