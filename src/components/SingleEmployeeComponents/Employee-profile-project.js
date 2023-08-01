import React from "react";
import "../../style/style.css";
import { GiUnstableProjectile, GiDuration } from "react-icons/gi";
import { FaPaperclip } from "react-icons/fa";
import { BiSolidGroup } from "react-icons/bi";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
const Project = ({ name }) => {
  return (
    <>
      <h6 className="fw-bold py-3 mb-3">Current Work Project</h6>
      <div className="teachercourse-list">
        <div className="row g-3 gy-5 py-3 row-deck">
          <div className="col-xxl-6 col-xl-6 xol-lg-6 col-md-3 col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mt-5">
                  <div className="lesson_name">
                    <div className="project-block light-info-bg">
                      <GiUnstableProjectile />
                    </div>
                    <span className="small text-muted project_name fw-bold align-text-center">
                      {name}
                    </span>
                    <h6 className="mb-0 fw-bold fs-6 mb-2">Role in project</h6>
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-outline-secondary">
                      <LuEdit style={{ color: "green" }} />
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      <RiDeleteBin6Line style={{ color: "red" }} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center"></div>
              <div className="row g-2 pt-4">
                <div className="col">
                  <div className="d-flex align-items-center">
                    <FaPaperclip />
                    <span className="ms-2">No. of attachments</span>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex align-items-center">
                    <GiDuration />
                    <span className="ms-2">Duration</span>
                  </div>
                </div>
              </div>
              <div className="row g-2 pt-4">
                <div className="col">
                  <div className="d-flex align-items-center">
                    <BiSolidGroup />
                    <span class="ms-2">no. of Members</span>
                  </div>
                </div>
                <div className="col">
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
                  {/* clock icon */}
                  no. of days left
                </span>
              </div>
              {/* Progess bar component */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
