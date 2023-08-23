import React, { useEffect, useState } from "react";
import ChatScreen from "./ChatScreen";
import Sidebar from "../../components/Sidebar";
import io from "socket.io-client";
import { useAuthContext } from "../../context/AuthContext";

const ENDPOINT = "http://localhost:5000";
var selectedChatCompare, socket;

const Chat = () => {
  const { user } = useAuthContext();
  const [socketConnected, setSocketConnected] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => {
      setSocketConnected(true);
      setIsLoading(false); // Set loading to false when socket is connected
    });
  }, []);
  return (
    <div className="row flex-nowrap text-center">
      <div className="col-3 w-25">
        <Sidebar />
      </div>
      <div style={{ width: "70%" }}>
        <div className="dashboard-page">
          {!isloading ? <ChatScreen socket={socket} /> : <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export default Chat;
