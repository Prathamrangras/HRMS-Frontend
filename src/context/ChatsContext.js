import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

const AppContext = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <ChatContext.Provider
      value={{
        chats,
        setChats,
        loading,
        setLoading,
        selectedChat,
        setSelectedChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);

export default AppContext;
