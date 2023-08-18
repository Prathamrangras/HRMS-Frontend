import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContext from "./context/AuthContext";
import EmployeeContext from "./context/EmployeeContext";
import PopupContext from "./context/PopupContext";
import ProjectContext from "./context/ProjectContext";
import HolidaysContext from "./context/HolidaysContext";
import LeaveContext from "./context/LeaveContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <EmployeeContext>
      <ProjectContext>
        <HolidaysContext>
          <LeaveContext>
            <PopupContext>
              <App />
            </PopupContext>
          </LeaveContext>
        </HolidaysContext>
      </ProjectContext>
    </EmployeeContext>
  </AuthContext>
);
