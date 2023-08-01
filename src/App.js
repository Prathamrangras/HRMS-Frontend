import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/AllEmployee/Dashboard";
import ProtectedRoute from "./components/ProtectedRoutes";
import Employee from "./pages/AllEmployee/Employee";
import EmployeeProfile from "./pages/SingleEmployee/EmployeeProfile";
import Project from "./pages/AllProject/Project";
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
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
