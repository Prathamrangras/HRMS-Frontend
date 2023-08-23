import React from "react";
import image from "../../assets/photo-1502989642968-94fbdc9eace4.jpeg";
import { BsPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../style/Clientcard.css";

const ClientCard = ({ _id, name, company, designation, username, email, phoneNO }) => {
  return (
    <div className={`col mt-2`}>
      <div className="card teacher-cards">
        <div className="card-body d-flex flex-column">
          <div className="client-image">
            <img
              src={image}
              alt=""
              className="avatar xl rounded-circle img-thumbnail shadow-sm"
            />
          </div>
          <div className="client-info">
            <h6 className="mb-0 mt-2 fw-bold d-block fs-6 text-capitalize faded">
              {name}
            </h6>
            <span className="company-name light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
              {company}
            </span>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">
                  <MdEmail /> {email}
                </span>
              </div>
              <div className="btn-group">
                <a href="#" className="btn btn-dark btn-sm mt-1 me-2">
                  Chat
                </a>
                <Link
                  to={`/dashboard/client/${_id}`}
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
