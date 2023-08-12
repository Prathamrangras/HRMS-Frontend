import { createContext, useContext, useState } from "react";

const HolidaysContext = createContext();

const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [holiday, setHoliday] = useState([]);

  return (
    <HolidaysContext.Provider
      value={{
        loading,
        holiday,
        setLoading,
        setHoliday,
      }}
    >
      {children}
    </HolidaysContext.Provider>
  );
};

export const useHolidayContext = () => useContext(HolidaysContext);

export default AppContext;
