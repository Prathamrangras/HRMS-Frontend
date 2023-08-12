import React from "react";
import image from "../../assets/photo-1502989642968-94fbdc9eace4.jpeg";
import { HiOutlineMail } from "react-icons/hi";
import { FaBirthdayCake } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../style/employeeCard.css";

const EmployeeCard = ({ name, designationID, _id, email, dateOfBirth }) => {
  return (
    <div className={`col mt-2`}>
      <div className="card teacher-cards">
        <div className="card-body d-flex flex-column">
          <div className="mx-auto">
            <img
              src={image}
              alt=""
              className="employeeimage avatar xl rounded-circle img-thumbnail shadow-sm"
            ></img>
          </div>
          <div className="teacher-info border-start">
            <h6 className="mb-0 mt-2  fw-bold d-block fs-6 text-capitalize text-center">
              {name}
            </h6>
            <span className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
              {designationID?.name}
            </span>
            <div className="video-setting-icon mt-3 pt-3 border-top d-flex flex-row justify-content-center align-items-center">
              {/* <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrice
              </p> */}
              <span className="mx-3 light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                {" "}
                {<FaBirthdayCake />} {dateOfBirth}
              </span>
              <span className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                {" "}
                {<HiOutlineMail />} {email}
              </span>
            </div>
            <a href="#" className="btn btn-dark btn-sm mt-1 me-2">
              Add Task
            </a>
            <Link
              to={`/dashboard/employee/${_id}`}
              className="btn btn-dark btn-sm mt-1"
            >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
