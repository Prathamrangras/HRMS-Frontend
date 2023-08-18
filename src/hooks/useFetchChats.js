import { useState } from "react";
import customFetch from "../utils/customFetch";
import { useChatContext } from "../context/ChatsContext";

export const useFetchChats = () => {
  const [error, setError] = useState(null);
  const { setLoading, setChats } = useChatContext();

  const getChats = async () => {
    setLoading(false);
    const resp = await customFetch.get("/chat");
    if (!resp.data.error) {
      setChats(resp.data.data);
      setLoading(false);
    } else {
      setError(resp.data.error);
      setLoading(false);
    }
  };
  return { error, getChats };
};
