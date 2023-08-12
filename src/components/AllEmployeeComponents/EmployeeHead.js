import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { usePopupContext } from "../../context/PopupContext";
import "../../style/style.css";
const EmployeeHead = () => {
  const { openPopup } = usePopupContext();

  return (
    <div className="row align-items-center">
      <div className="border-0 mb-4 ">
        <div className="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
          <h3 className="fw-bold mb-0 py-3 pb-2">Employee</h3>
          <div className="col-auto d-flex w-sm-100">
            <button
              onClick={() => openPopup()}
              type="button"
              className="btn btn-dark btn-set-task w-sm-100 me-2"
            >
              <AiOutlinePlusCircle
                style={{ fontSize: "1.3em", marginRight: "0.5em" }}
              />
              Add Employee
            </button>
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                aria-aria-expanded="false"
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
