import React from "react";
import source from "../assets/photo-1502989642968-94fbdc9eace4.jpeg";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar py-4">
        <div className="container-xxl">
          <div className="h-right d-flex align-items-center order-1">
            <div className="d-flex">
              <a
                className="nav-link text-primary collapsed info-page-icon"
                title="Get Help"
              ></a>
              <div className="avatar-list avatar-list-stacked px-3 me-2"></div>
            </div>
          </div>
          <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
            <div className="input-group flex-nowrap input-group-lg">
              <button
                type="button"
                className="input-group-text"
                id="addon-wrapping"
              >
                <FaSearch />
              </button>
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="search"
                aria-describedby="addon-wrapping"
              />
              <button type="button" className="input-group-text add-member-top">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
