import React, { useEffect, useCallback } from "react";
import { useEmployeeContext } from "../../../context/EmployeeContext";
import { useFetchEmpployee } from "../../../hooks/useFetchEmployee";
import { useFetchDesignation } from "../../../hooks/useFetchDesignation";
import { useFetchDepartment } from "../../../hooks/useFetchDepartment";
import { useAuthContext } from "../../../context/AuthContext";
import "../../../style/style.css";
import EmployeeHead from "../../../components/AllEmployeeComponents/EmployeeHead";
import EmployeeCard from "../../../components/AllEmployeeComponents/EmployeeCard";
import { usePopupContext } from "../../../context/PopupContext";
import EmployeePopup from "../../../components/Popups/Employee";

const Employee = () => {
  const { error, getEmployees } = useFetchEmpployee();
  const { getDesignations } = useFetchDesignation();
  const { getDepartment } = useFetchDepartment();
  const { employee, loading } = useEmployeeContext();
  const { user } = useAuthContext();
  const { isPopup } = usePopupContext();

  const getemp = useCallback(async () => {
    await getEmployees(user._id);
  }, []);

  const getDesig = useCallback(async () => {
    await getDesignations();
  }, []);

  const getDept = useCallback(async () => {
    await getDepartment();
  }, []);

  useEffect(() => {
    getemp();
    getDesig();
    getDept();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="mytask-layout" className="theme-indigo">
        <div className="body d-flex py-lg-3 py-md-2">
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
                    <EmployeePopup />
                  </div>
                </div>
              </>
            )}
            <EmployeeHead />
            <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
              {employee.map((e, i) => (
                <EmployeeCard {...e} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
