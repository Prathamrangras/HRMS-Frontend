import React, { useEffect, useState } from "react";

import {
  FaHome,
  FaUser,
  FaUsers,
  FaCalculator,
  FaCaretSquareLeft,
} from "react-icons/fa";
import {
  BsBriefcaseFill,
  BsCodeSlash,
  BsTicketFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { IoMdColorPalette } from "react-icons/io";
import { PiAppWindow } from "react-icons/pi";
import { GoTriangleDown } from "react-icons/go";

const Sidebar = () => {
  const [isSidebarMini, setIsSidebarMini] = useState(false);
  const [darkLightMode, setDarkLightMode] = useState("light");
  const [updateRtl, setUpdateRtl] = useState(false);

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
    <div id="mainSideMenu" className="sidebar px-4 py-4 py-md-5 me-0">
      <div className="d-flex flex-column h-100">
        <a href="#" className="mb-0 brand-icon text-white">
          <span className="logo-icon">
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
        </a>
        {/* <!-- Menu: main ul --> */}
        <ul className="menu-list flex-grow-1 mt-3 ">
          <li className="collapsed ">
            <a
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-Components"
              href="#"
            >
              <FaHome className="icofont-home fs-5 " />

              <span>Dashboard</span>
              <span className="arrow ms-auto text-end fs-5 text-white">
                <GoTriangleDown />
              </span>
            </a>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="dashboard-Components">
              <li>
                <a className="ms-link" href="#">
                  <span>Hr Dashboard</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="#">
                  <span>Project Dashboard</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="collapsed">
            <a
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#project-Components"
              href="#"
            >
              <BsBriefcaseFill className="icofont-briefcase" />

              <span>Projects</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </a>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="project-Components">
              <li>
                <a className="ms-link" href="#">
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="#">
                  <span>Tasks</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="#">
                  <span>Timesheet</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="#">
                  <span>Leaders</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="collapsed">
            <a
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#tikit-Components"
              href="#"
            >
              <BsTicketFill className="icofont-ticket" />
              <span>Tickets</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </a>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="tikit-Components">
              <li>
                <a className="ms-link" href="tickets.html">
                  <span>Tickets View</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="#">
                  <span>Ticket Detail</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="collapsed">
            <a
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#client-Components"
              href="#"
            >
              <FaUser className="icofont-user-male" />
              <span>Our Clients</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </a>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="client-Components">
              <li>
                <a className="ms-link" href="#">
                  <span>Clients</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="#">
                  <span>Client Profile</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="collapsed">
            <a
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#emp-Components"
              href="#"
            >
              <FaUsers className="icofont-users-alt-5" />
              <span>Employees</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </a>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="emp-Components">
              <li>
                <a className="ms-link" href="#">
                  <span>Members</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="#">
                  <span>Members Profile</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="#">
                  <span>Holidays</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="#">
                  <span>Attendance Employees</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="#">
                  <span>Attendance</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="#">
                  <span>Leave Request</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="#">
                  <span>Department</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="collapsed">
            <a
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#menu-Componentsone"
              href="#"
            >
              <FaCalculator className="icofont-ui-calculator" />
              <span>Accounts</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </a>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="menu-Componentsone">
              <li>
                <a className="ms-link" href="invoices.html">
                  <span>Invoices</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="payments.html">
                  <span>Payments</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="expenses.html">
                  <span>Expenses</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="collapsed">
            <a
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#payroll-Components"
              href="#"
            >
              <FaUsers className="icofont-users-alt-5" />
              <span>Payroll</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </a>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="payroll-Components">
              <li>
                <a className="ms-link" href="salaryslip.html">
                  <span>Employee Salary</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="collapsed">
            <a
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#app-Components"
              href="#"
            >
              <PiAppWindow className="icofont-contrast" />
              <span>App</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </a>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="app-Components">
              <li>
                <a className="ms-link" href="calendar.html">
                  <span>Calander</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="chat.html">
                  <span>Chat App</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="collapsed">
            <a
              className="m-link"
              data-bs-toggle="collapse"
              data-bs-target="#extra-Components"
              href="#"
            >
              <BsCodeSlash className="icofont-code-alt" />
              <span>Other Pages</span>
              <span className="arrow ms-auto text-end fs-5">
                <GoTriangleDown />
              </span>
            </a>
            {/* <!-- Menu: Sub menu ul --> */}
            <ul className="sub-menu collapse" id="extra-Components">
              <li>
                <a className="ms-link" href="charts.html">
                  <span>Apex Charts</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="forms.html">
                  <span>Forms Example</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="table.html">
                  <span>Table Example</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="review.html">
                  <span>Reviews Page</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="icon.html">
                  <span>Icons</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="contact.html">
                  <span>Contact</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="widgets.html">
                  <span>Widgets</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="todo-list.html">
                  <span>Todo-List</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="m-link" href="ui-elements/ui-alerts.html">
              <IoMdColorPalette className="icofont-paint" />
              <span>UI Components</span>
            </a>
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
        <button
          type="button"
          className="btn btn-link sidebar-mini-btn text-light"
          onClick={() => {
            setIsSidebarMini(!isSidebarMini);
          }}
        >
          <span className="ms-2">
            <FaCaretSquareLeft class="icofont-bubble-right" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
