import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContext from "./context/AuthContext";
import ChatContext from "./context/ChatsContext";
import EmployeeContext from "./context/EmployeeContext";
import PopupContext from "./context/PopupContext";
import ProjectContext from "./context/ProjectContext";
import HolidaysContext from "./context/HolidaysContext";
import LeaveContext from "./context/LeaveContext";
import ClientContext from "./context/ClientContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContext>
    <ChatContext>
      <HolidaysContext>
        <EmployeeContext>
          <ProjectContext>
            <ClientContext>
              <LeaveContext>
                <PopupContext>
                  <App />
                </PopupContext>
              </LeaveContext>
            </ClientContext>
          </ProjectContext>
        </EmployeeContext>
      </HolidaysContext>
    </ChatContext>
  </AuthContext>
);
