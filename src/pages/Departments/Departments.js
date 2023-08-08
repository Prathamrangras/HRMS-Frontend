import React, { useState, useEffect, useCallback } from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "react-data-table-component";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useFetchDepartment } from "../../hooks/useFetchDepartment";
import { useEmployeeContext } from "../../context/EmployeeContext";
const Departments = () => {
  const { getDepartment } = useFetchDepartment();
  const { department, loading } = useEmployeeContext();
  const fetchDepartment = useCallback(async () => {
    await getDepartment();
  }, []);

  useEffect(() => {
    fetchDepartment();
    console.log(department);
  }, []);

  if (loading) {
    return <div>Loading..</div>;
  }
  var columnsT = "";

  columnsT = [
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

  return (
    // <>
    //   {department.map((e) => {
    //     return <div>{"name"}</div>;
    //   })}
    // </>

    <div className="container-xxl">
      <PageHeader
        headerTitle="Departments"
        renderRight={() => {
          return (
            <div className="col-auto d-flex w-sm-100">
              <button
                className="btn btn-dark btn-set-task w-sm-100"
                // onClick={() => {
                //   setIsModal(true);
                //   setModalHeader("Add Departments");
                // }}
              >
                <AiOutlinePlusCircle
                  style={{ fontSize: "1.3em", marginRight: "0.5em" }}
                />
                Add Departments
              </button>
            </div>
          );
        }}
      />
      <DataTable columns={columnsT} data={department} />
    </div>
  );
};

export default Departments;
