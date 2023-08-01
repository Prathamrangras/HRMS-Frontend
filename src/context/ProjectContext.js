import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

const AppContext = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <ProjectContext.Provider
      value={{ projects, setProjects, loading, setLoading }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);

export default AppContext;
