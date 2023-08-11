import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { usePopupContext } from "../../context/PopupContext";

const ProjectHead = () => {
  const { openPopup } = usePopupContext();

  return (
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header p-0 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold py-3 mb-0">Projects</h3>
          <div className="d-flex py-2 project-tab flex-wrap w-sm-100">
            <button
              onClick={() => openPopup(null)}
              type="button"
              className="btn w-sm-100"
            >
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
  );
};

export default ProjectHead;
