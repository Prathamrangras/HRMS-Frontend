import React, { useCallback, useEffect } from "react";
import image from "../../../assets/photo-1502989642968-94fbdc9eace4.jpeg";
import { BsPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useParams } from "react-router-dom";
import "../../../style/style.css";
import { useFetchClient } from "../../../hooks/useFetchClient";
//import { useFetchTeam } from "../../../hooks/useFetchTeam";
import { useClientContext } from "../../../context/ClientContext";
import { LuEdit } from "react-icons/lu";

const ClientProfile = () => {
  const { currentClient, loading } = useClientContext();
  const { getSingleclient } = useFetchClient();
  // const { getTeam } = useFetchTeam();

  const params = useParams();
  const { id } = params;

  const getclient = useCallback(async () => {
    await getSingleclient(id);
  }, []);

  // const getTeamAsync = useCallback(async () => {
  //  await getTeam(id);
  // }, [getTeam, id]);

  useEffect(() => {
    console.log("x");
    getclient();
    // getTeamAsync();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <div id="mytask-layout" className="theme-indigo">
        <div className="main px-lg-4 px-md-4">
          <div className="body d-flex py-lg-3 py-md-2">
            <div className="container-xxl">
              {/* header */}
              <div className="row clearfix">
                <div className="col-md-12">
                  <div className="card border-0 mb-4 no-bg">
                    <div className="card-header py-3 px-0 d-flex align-items-center justify-content-between border-bottom">
                      <h3 className="fw-bold flex-fill mb-0">
                        {currentClient?.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* profile card */}
              <div className="row g-3">
                <div className="col-xl-8 col-lg-12 col-md-12">
                  <div className="card teacher-card mb-3">
                    <div className="card-body d-flex teacher-fulldeatil">
                      <div className="profile-teacher pe-xl-4 pe-md-2 pe-sm-4 pe-0 text-center w220 mx-sm-0 mx-auto">
                        <a href="#">
                          <img
                            src={image}
                            alt=""
                            className="avatar xl rounded-circle img-thumbnail shadow-sm "
                          ></img>
                        </a>
                        <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                          <h6 className="mb-0 fw-bold d-block fs-6">
                            {currentClient?.designation}
                          </h6>
                          <span className="text-muted small">
                            Client Id : id
                          </span>
                        </div>
                      </div>
                      <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
                        <h6 className="mb-0 mt-2 fw-bold d-block fs-6">
                          {currentClient?.name}
                        </h6>
                        <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">
                          role
                        </span>
                        <p className="mt-2 small">description here.</p>
                        <div className="row g-2 pt-2">
                          <div className="col-xl-5">
                            <div className="d-flex align-items-center">
                              <BsPhoneFill />
                              <span className="ms-2 small">Contact no.</span>
                            </div>
                          </div>
                          <div className="col-xl-5">
                            <div className="d-flex align-items-center">
                              <MdEmail />
                              <span className="ms-2 small">
                                {currentClient?.email}
                              </span>
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
        </div>
      </div>
    </>
  );
};

export default ClientProfile;
