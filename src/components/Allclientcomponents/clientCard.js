import React from "react";
import image from "../../assets/photo-1502989642968-94fbdc9eace4.jpeg";
import { BsPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const ClientCard = ({ _id, name, designation, username, email, phoneNO }) => {
  return (
    <div className={`col mt-2`}>
      <div className="card teacher-cards">
        <div className="card-body d-flex flex-column">
          <div className="mx-auto">
            <img
              src={image}
              alt=""
              className="clientimage avatar xl rounded-circle img-thumbnail shadow-sm"
            ></img>
          </div>
          <div className="teacher-info border-start">
            <h6 className="mb-0 mt-2 fw-bold d-block fs-6 text-capitalize text-center">
              {name}
            </h6>
            <span className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
              {designation?.name}
            </span>
            <div className="video-setting-icon mt-3 pt-3 border-top d-flex flex-row justify-content-center align-items-center">
              <span className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                <MdEmail /> {email}
              </span>
            </div>
            <div className="teacher-info border-start">
              <h6 className="mb-0 mt-2 fw-bold d-block fs-6 text-capitalize text-center">
                {username}
              </h6>
              <div className="teacher-info border-start">
                <h6 className="mb-0 mt-2 fw-bold d-block fs-6 text-capitalize text-center">
                  {phoneNO}
                </h6>
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
      </div>
    </div>
  );
};

export default ClientCard;