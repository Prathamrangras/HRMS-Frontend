const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="form-row" style={{ width: "100%" }}>
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        id={name}
        onChange={handleChange}
        className="form-select"
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue._id}>
              {itemValue.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
