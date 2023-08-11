import React, { useCallback, useState } from "react";
import FormRow from "../FormComponents/FormRow";
import { usePopupContext } from "../../context/PopupContext";
import { useFetchHoliday } from "../../hooks/useFetchHolidays";

const initialValue = {
  name: "",
  date: "",
  day: "",
};

const dayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Holiday = () => {
  const [values, setValues] = useState(initialValue);
  const { closePopup, EditPopup } = usePopupContext();
  const { addHoliday } = useFetchHoliday();
  const { isEdit } = usePopupContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const addHolidayAsync = useCallback(async (obj) => {
    await addHoliday(obj);
    closePopup(); // Close the popup after adding holiday
  }, [addHoliday, closePopup]);

  const editHolidayAsync = useCallback(async (obj) => {
    await addHoliday(obj);
    closePopup(); // Close the popup after editing holiday
  }, [addHoliday, closePopup]);

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <div className="fw-bold modal-title h4">
            {EditPopup ? "Edit Holiday" : "Create Holiday"}
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
            !isEdit ? addHolidayAsync(values) : editHolidayAsync(values);
          }}
        >
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            labelText="Holiday Name"
          />
          <FormRow
            type="date"
            name="date"
            value={values.date}
            handleChange={handleChange}
            labelText="Date"
          />
          <div className="mb-3">
            <label htmlFor="day" className="form-label">
              Day
            </label>
            <select
              className="form-select"
              id="day"
              name="day"
              value={values.day}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Day
              </option>
              {dayList.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-secondary">
              Done
            </button>
            <button type="button" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Holiday;

