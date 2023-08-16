import { createContext, useContext, useState } from "react";

const ClientContext = createContext();

const AppContext = ({ children }) => {
  const [Client, setClient] = useState([]);
  const [currentClient, setCurrentclient] = useState(null);
  const [CompanyName, setCompanyName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [UserName, setUserName] = useState([]);
  const [Password, setPassword] = useState([]);

  return (
    <ClientContext.Provider
      value={{
        CompanyName,
        loading,
        Client,
        currentClient,
        setClient,
        setLoading,
        setCompanyName,
        setUserName,
        setPassword,
        setCurrentclient,
        UserName,
        Password,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => useContext(ClientContext);

export default AppContext;