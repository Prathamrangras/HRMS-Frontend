import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Dashboard from "./pages/Dashboard/AllEmployee/Dashboard";
import ProtectedRoute from "./components/ProtectedRoutes";
import Employee from "./pages/Dashboard/AllEmployee/Employee";
import EmployeeProfile from "./pages/Dashboard/SingleEmployee/EmployeeProfile";
import Project from "./pages/Dashboard/AllProject/Project";
import Departments from "./pages/Dashboard/Departments/Departments";
import Holidays from "./pages/Dashboard/AllHolidays/Holidays";
//import TableData from "./components/TableComponents/DataTable";
import Task from "./pages/Dashboard/tasks/Task";
import ChatPage from "./pages/chatpage/Chat";
import Client from "./pages/Dashboard/Allclient/Client";
import ClientProfile from "./pages/Dashboard/Singleclient/clientProfile";
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
          <Route path="/dashboard/employee/:id" element={<EmployeeProfile />} />
          <Route path="/dashboard/client" element={<Client />} />
          <Route path="/dashboard/client/:id" element={<ClientProfile />} />
          <Route path="/dashboard/project" element={<Project />}></Route>
          <Route path="/dashboard/holidays" element={<Holidays />} />
          <Route path="/dashboard/departments" element={<Departments />} />
          <Route path="/dashboard/task" element={<Task />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/chatapp" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
