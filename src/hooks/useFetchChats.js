import { useState } from "react";
import customFetch from "../utils/customFetch";
import { useChatContext } from "../context/ChatsContext";

export const useFetchChats = () => {
  const [error, setError] = useState(null);
  const { setLoading, setChats, setMessage } = useChatContext();

  const getChats = async () => {
    setLoading(true);
    const resp = await customFetch.get("/chat");
    if (!resp.data.error) {
      setChats(resp.data.data);
      setLoading(false);
    } else {
      setError(resp.data.error);
      setLoading(false);
    }
  };

  const sendMessage = async (content, chatId, socket) => {
    const resp = await customFetch.post(`message`, {
      content: content,
      chatId: chatId,
    });
    socket.emit("new-message", resp);
    console.log(resp);
    setMessage((prev) => [...prev, resp.data]);
  };

  return { error, getChats, sendMessage };
};
