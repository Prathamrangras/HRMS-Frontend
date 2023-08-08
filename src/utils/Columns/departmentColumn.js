import { LuEdit } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Departmentcolumns = [
  {
    name: "#",
    selector: (department) => department.Type,
    sortable: true,
  },
  {
    name: "DEPARTMENT HEAD",
    selector: (department) => department.DepartmentHead.name,
    sortable: true,
    cell: (department) => (
      <div>
        {" "}
        <img
          className="avatar rounded-circle"
          src={department.Image}
          alt=""
        ></img>
        <span className="fw-bold ms-1">{department.DepartmentHead.name}</span>
      </div>
    ),
  },
  {
    name: "DEPARTMENT NAME",
    selector: (department) => department.name,
    sortable: true,
  },
  // {
  //   name: "EMPLOYEE UNDER WORK",
  //   selector: (row) => row.employeeNo,
  //   sortable: true,
  // },
  {
    name: "ACTION",
    selector: (department) => {},
    sortable: true,
    cell: (department) => (
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          className="btn btn-outline-secondary"
          // department-bs-toggle="modal"
          // department-bs-target="#depedit"
          // onClick={() => {
          //   setIsModal(true);
          //   setIsEditModaldepartment(row);
          //   setModalHeader("Edit Departments");
          // }}
        >
          <LuEdit style={{ color: "green" }} />
        </button>
        <button className="btn btn-outline-secondary deleterow">
          <RiDeleteBin6Line style={{ color: "red" }} />
        </button>
      </div>
    ),
  },
];
