import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContext from "./context/AuthContext";
import EmployeeContext from "./context/EmployeeContext";
import PopupContext from "./context/PopupContext";
import ProjectContext from "./context/ProjectContext";
import HolidaysContext from "./context/HolidaysContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <EmployeeContext>
      <ProjectContext>
        <HolidaysContext>
          <PopupContext>
            <App />
          </PopupContext>
        </HolidaysContext>
      </ProjectContext>
    </EmployeeContext>
  </AuthContext>
);
