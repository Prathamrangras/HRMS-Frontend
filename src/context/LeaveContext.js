import { createContext, useContext, useState } from "react";

const LeaveContext = createContext();

const AppContext = ({ children }) => {
  const [leave, setLeave] = useState([]);
  const [loading, setLoading] = useState([]);

  return (
    <LeaveContext.Provider
      value={{
        leave,
        setLeave,
        loading,
        setLoading,
      }}
    >
      {children}
    </LeaveContext.Provider>
  );
};

export const useLeaveContext = () => useContext(LeaveContext);

export default AppContext;
