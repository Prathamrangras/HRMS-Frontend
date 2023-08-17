import { createContext, useContext, useState, React } from "react";

const EmployeeContext = createContext();

const AppContext = ({ children }) => {
  const [employee, setEmployee] = useState([]);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(false);
  const [designation, setDesignation] = useState([]);
  const [department, setDepartment] = useState([]);

  return (
    <EmployeeContext.Provider
      value={{
        team,
        loading,
        employee,
        currentEmployee,
        setEmployee,
        setLoading,
        setTeam,
        setDesignation,
        setDepartment,
        setCurrentEmployee,
        designation,
        department,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => useContext(EmployeeContext);

export default AppContext;
