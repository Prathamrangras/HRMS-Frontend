import { createContext, useContext, useState, React } from "react";

const PopupContext = createContext();

const AppContext = ({ children }) => {
  const [isPopup, setIsPopup] = useState(false);
  const [EditPopup, setEditPopup] = useState(null);

  const closePopup = () => {
    setEditPopup(null);
    setIsPopup(false);
  };

  const openPopup = (_id) => {
    console.log(_id);
    if (_id) {
      setEditPopup(_id);
      setIsPopup(true);
    } else {
      setIsPopup(true);
    }
  };

  return (
    <PopupContext.Provider
      value={{ isPopup, openPopup, closePopup, EditPopup }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopupContext = () => useContext(PopupContext);

export default AppContext;
