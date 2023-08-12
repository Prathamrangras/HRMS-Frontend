import React, { useCallback, useState } from "react";
import FormRow from "../FormComponents/FormRow";
import FormRowSelect from "../FormComponents/FormRowSelect";
import { usePopupContext } from "../../context/PopupContext";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { useFetchProject } from "../../hooks/useFetchProject";
// import { useAuthContext } from "../../context/AuthContext";
import { priorityList } from "../../utils/data";

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

const Task = () => {
  const [values, setValues] = useState(initialValue);
  const { closePopup, EditPopup } = usePopupContext();
  const { team, department } = useEmployeeContext();
  const { addProject } = useFetchProject();
  const { isEdit } = usePopupContext();

  // const designationList = designation.map((e) => e.name);
  // const departmentList = department.map((e) => e.name);
  // const { user } = useAuthContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const addProjectAsync = useCallback(async (obj) => {
    console.log(values);
    await addProject(obj);
  }, []);

  const EditProjectAsync = useCallback(async (obj) => {
    console.log(values);
    await addProject(obj);
  }, []);

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <div className="fw-bold modal-title h4">
            {EditPopup ? "Edit Project" : "Create Popup"}
          </div>
          <button
            onClick={() => closePopup()}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
        <form
          className="modal-body px-5"
          onSubmit={(e) => {
            e.preventDefault();
            !isEdit ? addProjectAsync(values) : EditProjectAsync();
          }}
        >
          <FormRow
            type={"text"}
            name={"name"}
            value={values.name}
            handleChange={handleChange}
            labelText={"Project Name"}
          />
          {/* <FormRowSelect
            labelText={"Category"}
            name={"Category"}
            value={values.Category}
            handleChange={handleChange}
            list={department}
          /> */}
          <div className="d-flex flex-row justify-content-center gap-3 mt-3">
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

          {/* <FormRowSelect
            labelText={"Designation"}
            name={"designationID"}
            value={values.designationID}
            handleChange={handleChange}
            list={designation}
          /> */}
          <FormRowSelect
            labelText={"Priority"}
            name={"Priority"}
            value={values.Priority}
            handleChange={handleChange}
            list={priorityList}
          />
          {/* <FormRowSelect
            labelText={"Team Assigned"}
            name={"teamAssigned"}
            value={values.teamAssigned}
            handleChange={handleChange}
            list={team}
          /> */}

          <textarea
            className="mt-2"
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

export default Task;
