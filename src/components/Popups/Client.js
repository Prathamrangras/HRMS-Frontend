import React, { useCallback, useState } from "react";
import FormRow from "../FormComponents/FormRow";
import FormRowSelect from "../FormComponents/FormRowSelect";
import { usePopupContext } from "../../context/PopupContext";
import { useClientContext } from "../../context/ClientContext";
import { useFetchClient } from "../../hooks/useFetchClient";
import { useAuthContext } from "../../context/AuthContext";

const initialValue = {
  _id: "",
  name: "",
  designation:"",
  CompanyName: "",
  Photo: "",
  UserName: "",
  email: "",
  phone: "",
  
};

const Clients = () => {
  const [values, setValues] = useState(initialValue);
  const { closePopup } = usePopupContext();
  const { designation, department } = useClientContext();
  const { addClient } = useFetchClient();
   const designationList = designation.map((e) => e.name);
   const departmentList = department.map((e) => e.name);
  const { user } = useAuthContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const addCli = useCallback(async (obj, id) => {
    console.log(values);
    await addClient(obj, id);
  }, []);

  return (
    <div className="modal-content">
      <div className="modal-header">
        <div className="fw-bold modal-title h4">Add client</div>
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
          addCli(values, user._id);
        }}
      >
        <div className="d-flex flex-row justify-content-center gap-3">
        <FormRow
            type={"text"}
            name={"_id"}
            value={values.id}
            handleChange={handleChange}
            labelText={"client id"}
          />

          <FormRow
            type={"text"}
            name={"name"}
            value={values.name}
            handleChange={handleChange}
            labelText={"client Name"}
          />
          <div className="d-flex flex-row justify-content-center gap-3">
          <FormRow
            type={"text"}
            name={"Companyname"}
            value={values.name}
            handleChange={handleChange}
            labelText={"client Name"}
            />
          <FormRow
            type={"number"}
            name={"phone"}
            value={values.phone}
            handleChange={handleChange}
            labelText={"client Phone Number"}
          />
        </div>
        <FormRow
           type={"image"}
           name={"Photo"}
           value={values.Photo}
           handleChange={handleChange}
           labelText={"client ProfileImage"}
           />
        <FormRow
            type={"text"}
            name={"username"}
            value={values.UserName}
            handleChange={handleChange}
            labelText={"User Name"}
            />
        <FormRow
          type={"email"}
          name={"email"}
          value={values.email}
          handleChange={handleChange}
          labelText={"client Email"}
        />
        <FormRow
          type={"password"}
          name={"password"}
          value={values.password}
          handleChange={handleChange}
          labelText={"client Password"}
        />
        </div>
        <div className="d-flex flex-row justify-content-center gap-3">
          
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

export default Clients;