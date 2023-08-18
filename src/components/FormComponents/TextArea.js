import React from "react";

const TextArea = ({ name, value, handleChange, labelText, placeholder }) => {
  return (
    <div className="mb-3 flex-grow-1 ">
      <label className="form-label d-flex justify-content-initial">
        {labelText}
      </label>
      <TextArea
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        rows={4}
        cols={40}
        className="mt-2"
      ></TextArea>
    </div>
  );
};

export default TextArea;
