import React, { useCallback, useState } from "react";
import FormRow from "../FormComponents/FormRow";
import DatePicker from "react-datepicker";
import { usePopupContext } from "../../context/PopupContext";
import { useFetchHoliday } from "../../hooks/useFetchHolidays";

const initialValue = {
  name: "",
  date: "",
};

const Holiday = () => {
  const [values, setValues] = useState(initialValue);
  const { closePopup } = usePopupContext();
  const { createHoliday } = useFetchHoliday();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const addHoliday = useCallback(async (obj) => {
    console.log(values);
    await createHoliday(obj);
  }, []);

  return (
    <>
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
            addHoliday(values);
          }}
        >
          <FormRow
            type={"text"}
            name={"name"}
            placeholder={"name@example.com"}
            value={values.name}
            handleChange={handleChange}
            labelText={"Holiday Name"}
          ></FormRow>
          <FormRow
            type={"date"}
            name={"date"}
            value={values.name}
            handleChange={handleChange}
            labelText={"Holiday Date"}
          ></FormRow>
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
    </>
  );
};

export default Holiday;
