import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePopupContext } from "../../context/PopupContext";

const EmployeeHead = () => {
  const { openPopup } = usePopupContext();

  return (
    <div className="row clearfix">
      <div className="col-md-12">
        <div className="card border-0 mb-4 no-bg">
          <div className="card-header py-3 px-0 d-sm-flex align-items-center  justify-content-between border-bottom">
            <h3 className="fw-bold flex-fill mb-0 mt-sm-0">Employee</h3>
            <button
              onClick={() => openPopup()}
              type="button"
              className="btn btn-dark me-1 mt-1 w-sm-100"
            >
              {/* <FontAwesomeIcon icon="fa-regular fa-circle-plus" /> */}
              {/* <i className="incofont-plus-circle me-2 fs-6"></i>Add */}
              Add Employee
            </button>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle mt-1  w-sm-10"
                type="button"
                id="dropdownMenuButton2"
              >
                Status
              </button>
              <ul className="dropdown-menu  dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    All
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Task Assign Members
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Not Assign Members
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeHead;
