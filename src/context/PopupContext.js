import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

const AppContext = ({ children }) => {
  const [isPopup, setIsPopup] = useState(false);

  const closePopup = () => {
    setIsPopup(false);
  };

  const openPopup = () => {
    setIsPopup(true);
  };

  return (
    <PopupContext.Provider value={{ isPopup, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopupContext = () => useContext(PopupContext);

export default AppContext;
