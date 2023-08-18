import React, { useState, useEffect, useCallback } from "react";
import PageHeader from "../../components/PageHeader";
import DataTable from "react-data-table-component";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { useFetchDepartment } from "../../hooks/useFetchDepartment";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { Departmentcolumns } from "../../utils/Columns/departmentColumn";
import DepartmentPopup from "../../components/Popups/Department";
import { usePopupContext } from "../../context/PopupContext";

const Departments = () => {
  const { getDepartment } = useFetchDepartment();
  const { department, loading } = useEmployeeContext();
  const { isPopup, openPopup } = usePopupContext();

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
    <div className="container-xxl">
      {isPopup && (
        <>
          <div className="fade modal-backdrop show"></div>
          <div
            role="dialog"
            aria-modal="true"
            className="fade modal show"
            tabindex="-1"
            style={{ paddingLeft: "17px", display: "block" }}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <DepartmentPopup />
            </div>
          </div>
        </>
      )}
      <PageHeader
        headerTitle="Departments"
        renderRight={() => {
          return (
            <div className="col-auto d-flex w-sm-100">
              <button
                onClick={() => openPopup()}
                type="button"
                className="btn btn-dark btn-set-task w-sm-100"
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
