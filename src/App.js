import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Dashboard from "./pages/Dashboard/AllEmployee/Dashboard";
import ProtectedRoute from "./components/ProtectedRoutes";
import LeaveTable from "./pages/AllLeaves/LeaveTable";
import Employee from "./pages/Dashboard/AllEmployee/Employee";
import EmployeeProfile from "./pages/Dashboard/SingleEmployee/EmployeeProfile";
import Project from "./pages/Dashboard/AllProject/Project";
import Departments from "./pages/Dashboard/Departments/Departments";
import Holidays from "./pages/Dashboard/AllHolidays/Holidays";
import Task from "./pages/Dashboard/tasks/Task";
import ChatPage from "./pages/chatpage/Chat";
import Client from "./pages/Dashboard/AllClient/Client";
import ClientProfile from "./pages/Dashboard/SingleClient/ClientProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Employee />} />
          <Route path="employee/:id" element={<EmployeeProfile />} />
          <Route path="client" element={<Client />} />
          <Route path="client/:id" element={<ClientProfile />} />
          <Route path="project" element={<Project />} />
          <Route path="holidays" element={<Holidays />} />
          <Route path="departments" element={<Departments />} />
          <Route path="leave" element={<LeaveTable />} />
          <Route path="task" element={<Task />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/chatapp" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
