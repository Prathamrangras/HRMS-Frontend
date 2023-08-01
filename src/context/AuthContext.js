import { createContext, useContext, useState } from "react";
import { getUserFromLocalStorage } from "../utils/localstorage";

const AuthContext = createContext();

const AppContext = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AppContext;
