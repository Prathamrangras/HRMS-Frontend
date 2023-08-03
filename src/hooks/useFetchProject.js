import { useState } from "react";
import customFetch from "../utils/customFetch";
import { usePopupContext } from "../context/PopupContext";
import { useProjectContext } from "../context/ProjectContext";

export const useFetchProject = () => {
  const [error, setError] = useState(null);
  const { setProjects, setLoading } = useProjectContext();
  const { isEdit } = usePopupContext();

  const getProject = async (id) => {
    setLoading(true);

    const resp = await customFetch.get(`/project`);
    if (!resp.data.error) {
      setProjects(resp.data.data);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const addProject = async (obj) => {
    setLoading(true);

    let resp;

    if (isEdit) {
      resp = await customFetch.patch(`project/${isEdit}`, obj);
    } else {
      resp = await customFetch.post(`/project/create`, obj);
    }

    if (!resp.data.error) {
      console.log(resp.data);
      setProjects((prev) => [...prev, resp.data]);
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const deleteProject = async (id) => {
    setLoading(true);

    console.log("hello");

    const resp = await customFetch.delete(`/project/${id}`);

    if (!resp.data.error) {
      console.log(resp.data);
      setProjects((prev) => prev.filter((e) => e._id !== id));
      setLoading(false);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return { error, getProject, addProject, deleteProject };
};
