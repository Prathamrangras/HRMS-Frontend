import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContext from "./context/AuthContext";
import EmployeeContext from "./context/EmployeeContext";
import PopupContext from "./context/PopupContext";
import ProjectContext from "./context/ProjectContext";
import HolidaysContext from "./context/HolidaysContext";
import ClientContext from "./context/ClientContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <EmployeeContext>
      <ProjectContext>
        <HolidaysContext>
          <ClientContext>
        <PopupContext>
          <App />
        </PopupContext>
        </ClientContext>
        </HolidaysContext>
      </ProjectContext>
    </EmployeeContext>
  </AuthContext>
);
