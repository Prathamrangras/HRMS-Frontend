import "../../style/style.css";
import React, { useCallback, useEffect } from "react";
import { useFetchProject } from "../../hooks/useFetchProject";
import { useProjectContext } from "../../context/ProjectContext";
import ProjectHead from "../../components/AllProjectComponents/ProjectHead";
import ProjectCard from "../../components/AllProjectComponents/ProjectCard";
import { usePopupContext } from "../../context/PopupContext";
import ProjectPopup from "../../components/Popups/Project";
import { useFetchDepartment } from "../../hooks/useFetchDepartment";
import { useFetchTeam } from "../../hooks/useFetchTeam";

const Project = () => {
  const { loading, projects } = useProjectContext();
  const { getProject, error } = useFetchProject();
  const { getAllTeams } = useFetchTeam();
  const { isPopup } = usePopupContext();
  const { getDepartment } = useFetchDepartment();

  const getProjectsAsync = useCallback(async () => {
    await getProject();
  }, []);

  const getDept = useCallback(async () => {
    await getDepartment();
  }, []);

  const getTeams = useCallback(async () => {
    await getAllTeams();
  }, []);

  useEffect(() => {
    getProjectsAsync();
    getDept();
    getTeams();
  }, []);

  if (loading) {
    <div>Loading ...</div>;
  }

  return (
    <>
      <div className="main px-lg-4 px-md-4">
        <div className="body d-flex py-lg-3 py-md-2">
          <div className="container-xxl">
            {/* Project header */}
            {isPopup && (
              <>
                <div className="fade modal-backdrop show"></div>
                <div
                  role="dialog"
                  aria-modal="true"
                  className="fade modal show"
                  tabindex="-1"
                  style={{ paddingLeft: "17px", display: "block" }}
                >
                  <div className="modal-dialog modal-lg modal-dialog-centered">
                    <ProjectPopup />
                  </div>
                </div>
              </>
            )}

            <ProjectHead />
            <div className="d-flex flex-wrap">
              {/* main body start */}
              {projects.map((e) => (
                <ProjectCard {...e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
