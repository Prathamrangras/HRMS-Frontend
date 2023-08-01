import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div id="mainSideMenu" className="sidebar px-4 py-4 py-md-5 me-0 ">
      <div className="d-flex flex-column h-100">
        <Link to="hr-dashboard" className="mb-0 brand-icon text-white">
          <span className="logo-icon">
            <svg
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-clipboard-check"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              ></path>
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
            </svg>
          </span>
          <span className="logo-text text-white">My-Task</span>
        </Link>
        <ul className="menu-list flex-grow-1 mt-3">
          <li className=" collapsed text-white">
            <a className="m-link " href="#!" aria-expanded="false">
              <i className="icofont-home fs-5"></i>
              <span className="text-white">Dashboard</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span>
            </a>
            <ul className="sub-menu collapse has-children" id="menu-Pages0">
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/hr-dashboard"
                >
                  {" "}
                  <span className="text-white">Hr Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/project-dashboard"
                >
                  {" "}
                  <span className="text-white">Project Dashboard</span>
                </a>
              </li>
            </ul>
          </li>
          <li className=" collapsed">
            <a className="m-link " href="#!" aria-expanded="false">
              <i className="icofont-briefcase"></i>
              <span className="text-white">Projects</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span>
            </a>
            <ul
              className="sub-menu collapse has-children text-white"
              id="menu-Pages1"
            >
              <li>
                <a className="ms-link" href="/template/my-task/react/projects">
                  {" "}
                  <span className="text-white">Projects</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/template/my-task/react/tasks">
                  {" "}
                  <span className="text-white">Tasks</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/template/my-task/react/timesheet">
                  {" "}
                  <span className="text-white">Timesheet</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/template/my-task/react/leaders">
                  {" "}
                  <span className="text-white">Leaders</span>
                </a>
              </li>
            </ul>
          </li>
          <li className=" collapsed">
            <a className="m-link " href="#!" aria-expanded="false">
              <i className="icofont-ticket"></i>
              <span className="text-white">Tickets</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span>
            </a>
            <ul className="sub-menu collapse has-children" id="menu-Pages2">
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/tickets-view"
                >
                  {" "}
                  <span className="text-white">Tickets View</span>
                </a>
              </li>
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/tickets-detail"
                >
                  {" "}
                  <span className="text-white">Tickets Detail</span>
                </a>
              </li>
            </ul>
          </li>
          <li className=" collapsed">
            <a className="m-link " href="#!" aria-expanded="false">
              <i className="icofont-user-male"></i>
              <span className="text-white">Our Clients</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span>
            </a>
            <ul className="sub-menu collapse has-children" id="menu-Pages3">
              <li>
                <a className="ms-link" href="/template/my-task/react/clients">
                  {" "}
                  <span className="text-white">Clients</span>
                </a>
              </li>
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/client-profile"
                >
                  {" "}
                  <span className="text-white">Client Profile</span>
                </a>
              </li>
            </ul>
          </li>
          <li className=" collapsed">
            <a className="m-link active" href="#!" aria-expanded="true">
              <i className="icofont-users-alt-5"></i>
              <span className="text-white">Employees</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span>
            </a>
            <ul
              className="sub-menu collapse has-children show"
              id="menu-Pages4"
            >
              <li>
                <a
                  className="ms-link active"
                  href="/template/my-task/react/members"
                >
                  {" "}
                  <span className="text-white">Members</span>
                </a>
              </li>
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/members-profile"
                >
                  {" "}
                  <span className="text-white">Members Profile</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/template/my-task/react/holidays">
                  {" "}
                  <span className="text-white">Holidays</span>
                </a>
              </li>
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/attendance-employees"
                >
                  {" "}
                  <span className="text-white">Attendance Employees</span>
                </a>
              </li>
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/attendance"
                >
                  {" "}
                  <span className="text-white">Attendance</span>
                </a>
              </li>
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/leave-request"
                >
                  {" "}
                  <span className="text-white">Leave Request</span>
                </a>
              </li>
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/department"
                >
                  {" "}
                  <span className="text-white">Department</span>
                </a>
              </li>
            </ul>
          </li>
          <li className=" collapsed">
            <a className="m-link " href="#!" aria-expanded="true">
              <i className="icofont-ui-calculator"></i>
              <span className="text-white">Accounts</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span>
            </a>
            <ul className="sub-menu collapse has-children" id="menu-Pages5">
              <li>
                <a className="ms-link" href="/template/my-task/react/invoices">
                  {" "}
                  <span className="text-white">Invoices</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/template/my-task/react/payments">
                  {" "}
                  <span className="text-white">Payments</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/template/my-task/react/expenses">
                  {" "}
                  <span className="text-white">Expenses</span>
                </a>
              </li>
            </ul>
          </li>
          <li className=" collapsed">
            <a className="m-link " href="#!" aria-expanded="false">
              <i className="icofont-users-alt-5"></i>
              <span className="text-white">Payroll</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span>
            </a>
            <ul className="sub-menu collapse has-children" id="menu-Pages6">
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/employee-salary"
                >
                  {" "}
                  <span className="text-white">Employee Salary</span>
                </a>
              </li>
            </ul>
          </li>
          <li className=" collapsed">
            <a className="m-link " href="#!" aria-expanded="false">
              <i className="icofont-contrast"></i>
              <span className="text-white">App</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span>
            </a>
            <ul className="sub-menu collapse has-children" id="menu-Pages7">
              <li>
                <a className="ms-link" href="/template/my-task/react/calander">
                  {" "}
                  <span className="text-white">Calander</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/template/my-task/react/chat-app">
                  {" "}
                  <span className="text-white">Chat App</span>
                </a>
              </li>
            </ul>
          </li>
          <li className=" collapsed">
            <a className="m-link " href="#!" aria-expanded="false">
              <i className="icofont-code-alt"></i>
              <span className="text-white">Other Pages</span>
              <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span>
            </a>
            <ul className="sub-menu collapse has-children" id="menu-Pages8">
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/apex-charts"
                >
                  {" "}
                  <span className="text-white">Apex Charts</span>
                </a>
              </li>
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/forms-example"
                >
                  {" "}
                  <span className="text-white">Forms Example</span>
                </a>
              </li>
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/table-example"
                >
                  {" "}
                  <span className="text-white">Table Example</span>
                </a>
              </li>
              <li>
                <a
                  className="ms-link"
                  href="/template/my-task/react/reviews-page"
                >
                  {" "}
                  <span className="text-white">Reviews Page</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/template/my-task/react/icons">
                  {" "}
                  <span className="text-white">Icons</span>
                </a>
              </li>
              <li>
                <a className="ms-link" href="/template/my-task/react/widgets">
                  {" "}
                  <span className="text-white">Widgets</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="m-link " href="#!">
              <i className="icofont-paint"></i>
              <span className="text-white">UI Components</span>
            </a>
          </li>
        </ul>
        <ul className="list-unstyled mb-0">
          <li className="d-flex align-items-center justify-content-center">
            <div className="form-check form-switch theme-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="theme-switch"
              />
              <label className="form-check-label" htmlFor="theme-switch">
                Enable Dark Mode!
              </label>
            </div>
          </li>
          <li className="d-flex align-items-center justify-content-center">
            <div className="form-check form-switch theme-rtl">
              <input
                className="form-check-input"
                type="checkbox"
                id="theme-rtl"
              />
              <label className="form-check-label" htmlFor="theme-rtl">
                Enable RTL Mode!
              </label>
            </div>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-link sidebar-mini-btn text-light"
        >
          <span className="ms-2">
            <i className="icofont-bubble-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
