import { useState } from "react";
import customFetch from "../utils/customFetch";
import { usePopupContext } from "../context/PopupContext";
import { useProjectContext } from "../context/ProjectContext";

export const useFetchTask = () => {
  const [error, setError] = useState(null);
  const { setTasks, setLoading } = useProjectContext();
  const { EditPopup } = usePopupContext();

  const getTask = async (id) => {
    setLoading(true);

    const resp = await customFetch.get(`/task`);
    if (!resp.data.error) {
      setTasks(resp.data.data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const addTask = async (obj) => {
    setLoading(true);

    let resp;

    if (EditPopup) {
      resp = await customFetch.patch(`task/${EditPopup}`, obj);
    } else {
      resp = await customFetch.post(`/task/create`, obj);
    }

    if (!resp.data.error) {
      console.log(resp.data);
      setTasks((prev) => [...prev, resp.data]);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    setLoading(true);

    const resp = await customFetch.delete(`/task/${id}`);

    if (!resp.data.error) {
      console.log(resp.data);
      setTasks((prev) => prev.filter((e) => e._id !== id));
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return { error, getTask, addTask, deleteTask };
};
