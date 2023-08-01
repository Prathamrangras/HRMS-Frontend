import React, { useCallback, useState } from "react";
import FormRow from "../FormComponents/FormRow";
import FormRowSelect from "../FormComponents/FormRowSelect";
import { usePopupContext } from "../../context/PopupContext";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { useFetchEmpployee } from "../../hooks/useFetchEmployee";
import { useAuthContext } from "../../context/AuthContext";

const initialValue = {
  name: "",
  email: "",
  password: "",
  phone: "",
  departmentID: "",
  designationID: "",
};

const Employee = () => {
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
    <div className="modal-content">
      <div className="modal-header">
        <div className="fw-bold modal-title h4">Add Employee</div>
        <button
          type="button"
          class="btn-close"
          onClick={() => closePopup()}
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
        <div className="d-flex flex-row justify-content-center gap-3">
          <FormRow
            type={"text"}
            name={"name"}
            value={values.name}
            handleChange={handleChange}
            labelText={"Employee Name"}
          />
          <FormRow
            type={"number"}
            name={"phone"}
            value={values.phone}
            handleChange={handleChange}
            labelText={"Employee Phone Number"}
          />
        </div>

        <FormRow
          type={"email"}
          name={"email"}
          value={values.email}
          handleChange={handleChange}
          labelText={"Employee Email"}
        />
        <FormRow
          type={"password"}
          name={"password"}
          value={values.password}
          handleChange={handleChange}
          labelText={"Employee Password"}
        />
        <div className="d-flex flex-row justify-content-center gap-3">
          <FormRowSelect
            labelText={"Designation"}
            name={"designationID"}
            value={values.designationID}
            handleChange={handleChange}
            list={designation}
          />
          <FormRowSelect
            labelText={"Department"}
            name={"departmentID"}
            value={values.departmentID}
            handleChange={handleChange}
            list={department}
          />
        </div>
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
  );
};

export default Employee;
