import React from "react";
import image from "../../assets/photo-1502989642968-94fbdc9eace4.jpeg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import "../../style/employeeCard.css";

const EmployeeCard = ({ name, designationID, _id }) => {
  return (
    <div className={`col mb-4`}>
      <div className="card teacher-cards">
        <div className="card-body d-flex">
          <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
            <img
              src={image}
              alt=""
              className=" avatar xl rounded-circle img-thumbnail shadow-sm"
            ></img>
            <span className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0 mt-1">
              {designationID?.name}
            </span>
          </div>

          <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
            <h6 className="mb-0 mt-2  fw-bold d-block fs-6 text-capitalize small-14">
              {name}
            </h6>
            <div className="video-setting-icon mt-3 pt-3 border-top small-13 ">
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et
                ultrices.Vestibulum ante ipsum primis in faucibus orci
              </p>
            </div>
            <div className="d-flex flex-wrap align-items-center ">
              <a href="#" className="btn btn-dark btn-sm mt-1 me-2 ">
                <AiOutlinePlusCircle
                  style={{ fontSize: "1.3em", marginRight: "0.5em" }}
                />
                Add Task
              </a>
              <Link
                to={`/dashboard/employee/${_id}`}
                className="btn btn-dark btn-sm mt-1"
              >
                <CgProfile
                  style={{ fontSize: "1.3em", marginRight: "0.5em" }}
                />
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
