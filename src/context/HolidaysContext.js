import { createContext, useContext, useState } from "react";

const HolidaysContext = createContext();

const AppContext = ({ children }) => {
  const [holidays, setHolidays] = useState([]); // Corrected variable name
  const [loading, setLoading] = useState(false);
  return (
    <HolidaysContext.Provider
      value={{ holidays, setHolidays, loading, setLoading }}
    >
      {children}
    </HolidaysContext.Provider>
  );
};

export const useHolidaysContext = () => useContext(HolidaysContext);

export default AppContext;
