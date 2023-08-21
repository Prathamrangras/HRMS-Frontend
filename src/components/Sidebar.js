import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoTriangleLeft } from "react-icons/go";
import {
  FaHome,
  FaUser,
  FaUsers,
  FaCalculator,
  FaCaretSquareLeft,
} from "react-icons/fa";
import { BsBriefcaseFill, BsCodeSlash, BsTicketFill } from "react-icons/bs";
import { IoMdColorPalette } from "react-icons/io";
import { PiAppWindow } from "react-icons/pi";
import { GoTriangleDown } from "react-icons/go";
import { useAuthContext } from "../context/AuthContext";

const Sidebar = () => {
  const [darkLightMode, setDarkLightMode] = useState("light");
  const [updateRtl, setUpdateRtl] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    window.document.children[0].setAttribute("data-theme", "light");
  }, []);

  const onChangeDarkMode = () => {
    if (window.document.children[0].getAttribute("data-theme") === "light") {
      window.document.children[0].setAttribute("data-theme", "dark");
      setDarkLightMode("dark");
    } else {
      window.document.children[0].setAttribute("data-theme", "light");
      setDarkLightMode("light");
    }
  };

  const onChangeRtlMode = () => {
    if (document.body.classList.contains("rtl_mode")) {
      document.body.classList.remove("rtl_mode");
    } else {
      document.body.classList.add("rtl_mode");
    }
    setUpdateRtl(!updateRtl);
  };

  return (
    <div id="mainSideMenu" className="sidebar px-4 py-3 me-0">
      <div className="d-flex flex-column h-100">
        <Link to="#" className="mb-0 brand-icon text-white">
          <span class="logo-icon">
            <svg
              width="35"
              height="35"
              fill="currentColor"
              class="bi bi-clipboard-check"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
          </span>
          <span className="logo-text">My-Task</span>
        </Link>
        {/* <!-- Menu: main ul --> */}
        <ul className="menu-list flex-grow-1 mt-3 ">
          <li className="collapsed ">
            <Link
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-Components"
              to="#"
            >
              <FaHome className="icofont-home fs-5 " />

              <span>Dashboard</span>
              <span className="arrow ms-auto text-end fs-5 text-white">
                <GoTriangleDown />
              </span>
            </Link>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="dashboard-Components">
              <li>
                <Link className="ms-link" to="#">
                  <span>Hr Dashboard</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="#">
                  <span>Project Dashboard</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="collapsed">
            <Link
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#project-Components"
              to="#"
            >
              <BsBriefcaseFill className="icofont-briefcase" />

              <span>Projects</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </Link>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="project-Components">
              <li>
                <Link className="ms-link" to="/dashboard/project">
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="/dashboard/task">
                  <span>Tasks</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="#">
                  <span>Timesheet</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="#">
                  <span>Leaders</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="collapsed">
            <Link
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#tikit-Components"
              to="#"
            >
              <BsTicketFill className="icofont-ticket" />
              <span>Tickets</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </Link>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="tikit-Components">
              <li>
                <Link className="ms-link" to="tickets.html">
                  <span>Tickets View</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="#">
                  <span>Ticket Detail</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="collapsed">
            <Link
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#client-Components"
              to="#"
            >
              <FaUser className="icofont-user-male" />
              <span>Our Clients</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </Link>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="client-Components">
              <li>
                <Link className="ms-link" to="#">
                  <span>Clients</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="#">
                  <span>Client Profile</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="collapsed">
            <Link
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#emp-Components"
              to="#"
            >
              <FaUsers className="icofont-users-alt-5" />
              <span>Employees</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </Link>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="emp-Components">
              <li>
                <Link className="ms-link" to="/dashboard">
                  <span>Members</span>
                </Link>
              </li>
              <li>
                <Link
                  className="ms-link"
                  to={`/dashboard/employee/${user._id}`}
                >
                  <span>Members Profile</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="#">
                  <span>Holidays</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="#">
                  <span>Attendance Employees</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="#">
                  <span>Attendance</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="#">
                  <span>Leave Request</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="#">
                  <span>Department</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="collapsed">
            <Link
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#menu-Componentsone"
              to="#"
            >
              <FaCalculator className="icofont-ui-calculator" />
              <span>Accounts</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </Link>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="menu-Componentsone">
              <li>
                <Link className="ms-link" to="invoices.html">
                  <span>Invoices</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="payments.html">
                  <span>Payments</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="expenses.html">
                  <span>Expenses</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="collapsed">
            <Link
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#payroll-Components"
              to="#"
            >
              <FaUsers className="icofont-users-alt-5" />
              <span>Payroll</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </Link>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="payroll-Components">
              <li>
                <Link className="ms-link" to="salaryslip.html">
                  <span>Employee Salary</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="collapsed">
            <Link
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#app-Components"
              to="#"
            >
              <PiAppWindow className="icofont-contrast" />
              <span>App</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </Link>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="app-Components">
              <li>
                <Link className="ms-link" to="calendar.html">
                  <span>Calander</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="chat.html">
                  <span>Chat App</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="collapsed">
            <Link
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#extra-Components"
              to="#"
            >
              <BsCodeSlash className="icofont-code-alt" />
              <span>Other Pages</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </Link>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="extra-Components">
              <li>
                <Link className="ms-link" to="charts.html">
                  <span>Apex Charts</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="forms.html">
                  <span>Forms Example</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="table.html">
                  <span>Table Example</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="review.html">
                  <span>Reviews Page</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="icon.html">
                  <span>Icons</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="contact.html">
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="widgets.html">
                  <span>Widgets</span>
                </Link>
              </li>
              <li>
                <Link className="ms-link" to="todo-list.html">
                  <span>Todo-List</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="m-link" to="ui-elements/ui-alerts.html">
              <IoMdColorPalette className="icofont-paint" />
              <span>UI Components</span>
            </Link>
          </li>
        </ul>

        {/* <!-- Theme: Switch Theme --> */}
        <ul className="list-unstyled mb-0">
          <li className="d-flex align-items-center ">
            <div className="form-check form-switch theme-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={darkLightMode === "dark" ? true : false}
                id="theme-switch"
                onChange={() => {
                  onChangeDarkMode();
                }}
              ></input>
              <label className="form-check-label" for="theme-switch">
                Enable Dark Mode
              </label>
            </div>
          </li>
          <li className="d-flex align-items-cneter ">
            <div className="form-check form-switch theme-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={document.body.classList.contains("rtl_mode")}
                id="theme-switch"
                onChange={() => {
                  onChangeRtlMode();
                }}
              ></input>
              <label className="form-check-label" for="theme-switch">
                Enable RTL Mode
              </label>
            </div>
          </li>
        </ul>
        {/* <!-- Menu: menu collepce btn --> */}
        {/* <button
          type="button"
          className="btn btn-link sidebar-mini-btn text-light"
        >
          <span className="ms-2">
            <FaCaretSquareLeft class="icofont-bubble-right" />
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default Sidebar;
