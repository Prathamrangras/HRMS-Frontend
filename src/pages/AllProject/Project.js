import React, { useCallback, useEffect } from "react";
import { useFetchProject } from "../../hooks/useFetchProject";
import { useProjectContext } from "../../context/ProjectContext";

const Project = () => {
  const { loading } = useProjectContext();
  const { getProject, error } = useFetchProject();

  const getProjectsAsync = useCallback(async () => {
    await getProject();
  }, []);

  useEffect(() => {
    getProjectsAsync();
  }, []);

  if (loading) {
    <div>Loading ...</div>;
  }

  return <div></div>;
};

export default Project;
