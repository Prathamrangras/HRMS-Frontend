import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/AllEmployee/Dashboard";
import ProtectedRoute from "./components/ProtectedRoutes";
import Employee from "./pages/AllEmployee/Employee";
import EmployeeProfile from "./pages/SingleEmployee/EmployeeProfile";
import Project from "./pages/AllProject/Project";

import Departments from "./pages/Departments/Departments";
import Holidays from "./pages/AllHolidays/Holidays";
import Employee from "./pages/Dashboard/AllEmployee/Employee";
import EmployeeProfile from "./pages/Dashboard/SingleEmployee/EmployeeProfile";
import Project from "./pages/Dashboard/AllProject/Project";
import TableData from "./components/TableComponents/DataTable";
import Departments from "./pages/Dashboard/Departments/Departments";
import Task from "./pages/Dashboard/tasks/Task";
import ChatPage from "./pages/chatpage/Chat";

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
          <Route index element={<Client />} />
          <Route path="/dashboard/client/:id" element={<ClientProfile />} />
          <Route path="/dashboard/project" element={<Project />}></Route>
          <Route path="/dashboard/holidays" element={<TableData />} />
          <Route path="/dashboard/departments" element={<Departments />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/chatapp" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
