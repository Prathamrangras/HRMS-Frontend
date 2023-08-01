import React, { useCallback, useState } from "react";
import FormRow from "../FormComponents/FormRow";
import FormRowSelect from "../FormComponents/FormRowSelect";
import { usePopupContext } from "../../context/PopupContext";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { useFetchEmpployee } from "../../hooks/useFetchEmployee";
import { useAuthContext } from "../../context/AuthContext";

const initialValue = {
  name: "",
  Category: "",
  StartDate: "",
  EndDate: "",
  teamAssigned: "",
  Budget: "",
  Priority: "",
  Description: "",
};

const Project = () => {
  const [values, setValues] = useState(initialValue);
  const { closePopup } = usePopupContext();
  const { designation, department } = useEmployeeContext();
  const { addEmployee } = useFetchEmpployee();
  // const designationList = designation.map((e) => e.name);
  // const departmentList = department.map((e) => e.name);
  const { user } = useAuthContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const addEmp = useCallback(async (obj, id) => {
    console.log(values);
    await addEmployee(obj, id);
  }, []);

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <div className="fw-bold modal-title h4">Create Project</div>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
        <form
          className="modal-body"
          onSubmit={(e) => {
            e.preventDefault();
            addEmp(values, user._id);
          }}
        >
          <FormRow
            type={"text"}
            name={"name"}
            value={values.name}
            handleChange={handleChange}
            labelText={"Project Name"}
          />
          <FormRowSelect
            labelText={"Category"}
            name={"Category"}
            value={values.Category}
            handleChange={handleChange}
            list={designation}
          />
          <div className="d-flex flex-row justify-content-center gap-3">
            <FormRow
              type={"date"}
              name={"StartDate"}
              value={values.StartDate}
              handleChange={handleChange}
              labelText={"Start Date"}
            />
            <FormRow
              type={"date"}
              name={"EndDate"}
              value={values.EndDate}
              handleChange={handleChange}
              labelText={"End Date"}
            />
          </div>
          <div className="d-flex flex-row justify-content-center gap-3">
            <FormRowSelect
              labelText={"Designation"}
              name={"designationID"}
              value={values.designationID}
              handleChange={handleChange}
              list={designation}
            />
            <FormRowSelect
              labelText={"Priority"}
              name={"priority"}
              value={values.departmentID}
              handleChange={handleChange}
              list={department}
            />
          </div>
          <textarea
            onChange={handleChange}
            value={values.Description}
            name="Description"
            labelText="Description"
          ></textarea>
          <div className="modal-footer">
            <button type="submit" className="btn btn-secondary">
              Done
            </button>
            <button type="button" className="btn btn-primary">
              Sent
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Project;
