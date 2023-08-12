import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/AllEmployee/Dashboard";
import ProtectedRoute from "./components/ProtectedRoutes";
import Employee from "./pages/AllEmployee/Employee";
import EmployeeProfile from "./pages/SingleEmployee/EmployeeProfile";
import Project from "./pages/AllProject/Project";

import Departments from "./pages/Departments/Departments";
import Holidays from "./pages/AllHolidays/Holidays";

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
          <Route path="/dashboard/project" element={<Project />}></Route>
          <Route path="/dashboard/holidays" element={<Holidays />} />
          <Route path="/dashboard/departments" element={<Departments />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
