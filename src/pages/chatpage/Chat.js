import React from "react";
import ChatScreen from "./ChatScreen";
import Sidebar from "../../components/Sidebar";

const Chat = () => {
  return (
    <div className="row flex-nowrap text-center">
      <div className="col-3 w-25">
        <Sidebar />
      </div>
      <div style={{ width: "70%" }}>
        <div className="dashboard-page">
          <ChatScreen />
        </div>
      </div>
    </div>
  );
};

export default Chat;
