import { useState } from "react";
import customFetch from "../utils/customFetch";
import { useProjectContext } from "../context/ProjectContext";

export const useFetchProject = () => {
  const [error, setError] = useState(null);
  const { setProjects, setLoading } = useProjectContext();

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
  return { error, getProject };
};
