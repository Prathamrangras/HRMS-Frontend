import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LuEdit } from "react-icons/lu";
import { GiUnstableProjectile, GiDuration } from "react-icons/gi";
import { FaPaperclip } from "react-icons/fa";
import { BiSolidGroup } from "react-icons/bi";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import "../../style/style.css";
// import React, { useCallback, useEffect } from "react";
// import { useFetchProject } from "../../hooks/useFetchProject";
// import { useProjectContext } from "../../context/ProjectContext";

const Project = () => {
  //   const { loading } = useProjectContext();
  //   const { getProject, error } = useFetchProject();

  //   const getProjectsAsync = useCallback(async () => {
  //     await getProject();
  //   }, []);

  //   useEffect(() => {
  //     getProjectsAsync();
  //   }, []);

  //   if (loading) {
  //     <div>Loading ...</div>;
  //   }

  return (
    <>
      <div className="main px-lg-4 px-md-4">
        <div className="body d-flex py-lg-3 py-md-2">
          <div className="container-xxl">
            {/* Project header */}

            <div className="row align-items-center">
              <div className="border-0 mb-4">
                <div className="card-header p-0 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                  <h3 className="fw-bold py-3 mb-0">Projects</h3>
                  <div className="d-flex py-2 project-tab flex-wrap w-sm-100">
                    <button type="button" className="btn btn-dark w-sm-100">
                      <AiOutlinePlusCircle
                        style={{ fontSize: "1.3em", marginRight: "0.5em" }}
                      />
                      Create Project
                    </button>
                    <ul className="nav nav-tabs tab-body-header rounded ms-3 prtab-set w-sm-100">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          All
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Started
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Approval
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Completed
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* main body start */}

            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 flex-column">
                <div className="tab-content mt-4">
                  <div className="tab-pane fade show active" id="All-list">
                    <div className="row g-3 gy-5 py-3 row-deck">
                      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mt-5">
                              <div className="lesson_name">
                                <div className="project-block light-info-bg">
                                  <GiUnstableProjectile />
                                </div>
                                <span className="small text-muted project_name fw-bold align-text-center">
                                  name of project
                                </span>
                                <h6 className="mb-0 fw-bold fs-6 mb-2">
                                  Role in project
                                </h6>
                              </div>
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  <LuEdit style={{ color: "green" }} />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  <RiDeleteBin6Line style={{ color: "red" }} />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center"></div>
                          <div className="row g-2 pt-4">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <FaPaperclip />
                                <span className="ms-2">No. of attachments</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <GiDuration />
                                <span className="ms-2">Duration</span>
                              </div>
                            </div>
                          </div>
                          <div className="row g-2 pt-4">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <BiSolidGroup />
                                <span class="ms-2">no. of Members</span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <BsFillChatLeftDotsFill />
                                <span className="ms-2">messages</span>
                              </div>
                            </div>
                          </div>
                          <div className="dividers-block"></div>
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <h4 className="small fw-bold mb-0">Progess</h4>
                            <span className="small light-danger-bg p-1 rounded">
                              <AiOutlineClockCircle
                                style={{
                                  fontSize: "1em",
                                  marginRight: "0.3em",
                                }}
                              />
                              no. of days left
                            </span>
                          </div>
                          {/* Progess bar component */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
