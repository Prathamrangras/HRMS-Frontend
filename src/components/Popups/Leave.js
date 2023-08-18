import React, { useState, useCallback } from "react";
import { usePopupContext } from "../../context/PopupContext";
import TextArea from "../FormComponents/TextArea";
import FormRow from "../FormComponents/FormRow";
import FormRowSelect from "../FormComponents/FormRowSelect";
import { useFetchLeave } from "../../hooks/useFetchLeave";

const initialValue = {
  leaveType: "",
  fromDate: "",
  toDate: "",
  reason: "",
};

const Leave = () => {
  const [values, setValues] = useState(initialValue);
  const { closePopup } = usePopupContext();
  const { createLeave } = useFetchLeave();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const addLeave = useCallback(async (obj) => {
    console.log(values);
    await createLeave(obj);
  }, []);

  return (
    <div className="modal-content">
      <div className="modal-header">
        <div className="fw-bold modal-title h4">Add Leave</div>
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
          addLeave(values);
        }}
      >
        <FormRowSelect
          labelText={"Select leave type"}
          name={"leaveType"}
          value={values.leaveType}
          handleChange={handleChange}
          list={["Casual Leave", "Medical Leave"]}
        />
        <div className="d-flex flex-row justify-content-center gap-3">
          <FormRow
            type={"date"}
            name={"fromDate"}
            value={values.fromDate}
            handleChange={handleChange}
            labelText={"Leave From Date"}
          />
          <FormRow
            type={"date"}
            name={"toDate"}
            value={values.toDate}
            handleChange={handleChange}
            labelText={"Leave To Date"}
          />
        </div>

        <TextArea
          name={"reason"}
          value={values.reason}
          labelText={"Leave Reason"}
          handleChange={handleChange}
        ></TextArea>

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
  );
};

export default Leave;
