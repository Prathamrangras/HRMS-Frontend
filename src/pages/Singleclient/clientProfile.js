import React, { useCallback, useEffect, useState } from "react";
import image from "../../assets/photo-1502989642968-94fbdc9eace4.jpeg";
import { BsPhoneFill } from "react-icons/bs";
import { FaBirthdayCake, FaAddressBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useParams } from "react-router-dom";
import "../../style/style.css";
import { useFetchClient } from "../../hooks/useFetchClient";
import { useFetchTeam } from "../../hooks/useFetchTeam";
import { useClientContext } from "../../context/ClientContext";
import { LuEdit } from "react-icons/lu";
const ClientProfile = () => {
  const { currentClient, loading,  } = useClientContext();
  const { error, getSingleclient } = useFetchClient();
  const { getTeam } = useFetchTeam();


  const params = useParams();
  const { id } = params;

  const getclient = useCallback(async () => {
    await getSingleclient(id);
  }, []);

  const getTeamAsync = useCallback(async () => {
    await getTeam(id);
  }, []);

  useEffect(() => {
    console.log("asd");
    getclient();
    getTeamAsync();
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
                      <h3 class="fw-bold flex-fill mb-0">
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
                            class="avatar xl rounded-circle img-thumbnail shadow-sm "
                          ></img>
                        </a>
                        <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                          <h6 class="mb-0 fw-bold d-block fs-6">
                            {currentClient?.designation}
                          </h6>
                          <span class="text-muted small">
                            Client
                         Id : _id
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
                        <div class="row g-2 pt-2">
                          <div className="col-xl-5">
                            <div className="d-flex align-items-center">
                              <FaBirthdayCake />
                              <span className="ms-2 small">
                                {currentClient?.dateOfBirth}
                              </span>
                            </div>
                          </div>
                          <div className="col-xl-5">
                            <div className="d-flex align-items-center">
                              <FaAddressBook />
                              <span className="ms-2 small">Address</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* personal information start */}

                  <div class="row g-3">
                    <div class="col">
                      <div class="card">
                        <div class="card-header py-3 d-flex justify-content-between">
                          <h6 class="mb-0 fw-bold">Personal Informations</h6>
                          <button type="button" class="btn p-0">
                            <LuEdit style={{ color: "darkblue" }} />
                          </button>
                        </div>
                        <div class="card-body">
                          <ul class="list-unstyled mb-0">
                            <li class="row flex-wrap mb-3">
                              <div class="col-6">
                                <span class="fw-bold">Nationality</span>
                              </div>
                              <div class="col-6">
                                <span class="text-muted">Indian</span>
                              </div>
                            </li>
                            <li class="row flex-wrap mb-3">
                              <div class="col-6">
                                <span class="fw-bold">Religion</span>
                              </div>
                              <div class="col-6">
                                <span class="text-muted">Hindu</span>
                              </div>
                            </li>
                            <li class="row flex-wrap mb-3">
                              <div class="col-6">
                                <span class="fw-bold">Marital Status</span>
                              </div>
                              <div class="col-6">
                                <span class="text-muted">Married</span>
                              </div>
                            </li>
                            <li class="row flex-wrap mb-3">
                              <div class="col-6">
                                <span class="fw-bold">Passport No.</span>
                              </div>
                              <div class="col-6">
                                <span class="text-muted">5468953210</span>
                              </div>
                            </li>
                            <li class="row flex-wrap">
                              <div class="col-6">
                                <span class="fw-bold">Emergency Contact</span>
                              </div>
                              <div class="col-6">
                                <span class="text-muted">7468953210</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card">
                        <div class="card-header py-3 d-flex justify-content-between">
                          <h6 class="mb-0 fw-bold">Bank informations</h6>
                          <button type="button" class="btn p-0">
                            <LuEdit style={{ color: "darkblue" }} />
                          </button>
                        </div>
                        <div class="card-body">
                          <ul class="list-unstyled mb-0">
                            <li class="row flex-wrap mb-3">
                              <div class="col-6">
                                <span class="fw-bold">Bank Name</span>
                              </div>
                              <div class="col-6">
                                <span class="text-muted">Kotak</span>
                              </div>
                            </li>
                            <li class="row flex-wrap mb-3">
                              <div class="col-6">
                                <span class="fw-bold">Account No.</span>
                              </div>
                              <div class="col-6">
                                <span class="text-muted">5436874596325486</span>
                              </div>
                            </li>
                            <li class="row flex-wrap mb-3">
                              <div class="col-6">
                                <span class="fw-bold">IFSC Code</span>
                              </div>
                              <div class="col-6">
                                <span class="text-muted">Kotak000021</span>
                              </div>
                            </li>
                            <li class="row flex-wrap mb-3">
                              <div class="col-6">
                                <span class="fw-bold">Pan No</span>
                              </div>
                              <div class="col-6">
                                <span class="text-muted">ACQPF6584L</span>
                              </div>
                            </li>
                            <li class="row flex-wrap">
                              <div class="col-6">
                                <span class="fw-bold">UPI Id</span>
                              </div>
                              <div class="col-6">
                                <span class="text-muted">454812kotak@upi</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12">
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