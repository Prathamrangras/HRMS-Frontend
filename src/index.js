import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContext from "./context/AuthContext";
import EmployeeContext from "./context/EmployeeContext";
import PopupContext from "./context/PopupContext";
import ProjectContext from "./context/ProjectContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <EmployeeContext>
      <ProjectContext>
        <PopupContext>
          <App />
        </PopupContext>
      </ProjectContext>
    </EmployeeContext>
  </AuthContext>
);
