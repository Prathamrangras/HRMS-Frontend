import React, { useCallback, useState } from "react";
import FormRow from "../FormComponents/FormRow";
import { usePopupContext } from "../../context/PopupContext";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { useFetchDepartment } from "../../hooks/useFetchDepartment";
import "../../style/style.css";

const initialValue = {
  name: "",
  DepartmentHead: "",
};

const Department = () => {
  const [values, setValues] = useState(initialValue);
  const { closePopup } = usePopupContext();
  const { department } = useEmployeeContext();
  const { createDepartment } = useFetchDepartment();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const createDept = useCallback(async (obj) => {
    console.log(values);
    await createDepartment(obj);
  }, []);

  return (
    <>
      <div className="modal-content">
        <div className="modal-header">
          <div className="fw-bold modal-title h4">Add Department</div>
          <button
            type="button"
            className="btn-close"
            onClick={() => closePopup()}
            aria-label="Close"
          ></button>
        </div>
        <form
          className="modal-body"
          onSubmit={(e) => {
            e.preventDefault();
            createDept(values);
          }}
        >
          <FormRow
            type={"text"}
            name={"name"}
            value={values.name}
            handleChange={handleChange}
            labelText={"Department Name"}
          />
          <FormRow
            type={"text"}
            name={"DepartmentHead"}
            value={values.DepartmentHead}
            handleChange={handleChange}
            labelText={"Department Head"}
          />

          <div className=" modal-footer">
            <button type="submit" className="btn btn-secondary">
              Done
            </button>
            <button type="button" className="btn btn-primary">
              Sent
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Department;
