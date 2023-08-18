import React, { useState, useEffect, useCallback } from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "react-data-table-component";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { useFetchDepartment } from "../../../hooks/useFetchDepartment";
import { useEmployeeContext } from "../../../context/EmployeeContext";
import { Departmentcolumns } from "../../../utils/Columns/departmentColumn";
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
      <DataTable columns={Departmentcolumns} data={department} />
    </div>
  );
};

export default Departments;
