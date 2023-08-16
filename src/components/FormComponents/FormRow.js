import React from "react";

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeholder,
}) => {
  return (
    <div className="mb-3 flex-grow-1 ">
      <label
        htmlFor={name}
        className="form-label d-flex justify-content-initial"
      >
        {labelText}
      </label>
      <input
        type={type}
        value={value}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className="form-control border-3"
      />
    </div>
  );
};

export default FormRow;
