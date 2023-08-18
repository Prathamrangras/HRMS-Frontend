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
  phoneNO: "",
  
};

const Clients = () => {
  const [values, setValues] = useState(initialValue);
  const { closePopup } = usePopupContext();
  const { designation, department } = useClientContext();
  const { addClient } = useFetchClient();
   const designationList = designation.map((e) => e.name);
  const { user } = useAuthContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleChanges = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setValues((prevValues) => ({
      ...prevValues,
      profileImage: selectedImage,
    }));
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
       <div>
  <div className="d-flex flex-row justify-content-center gap-3">
    <FormRow
      type={"text"}
      name={"name"}
      value={values.name}
      handleChange={handleChange}
      labelText={"Client Name"}
    />
  </div>
  <div className="d-flex flex-row justify-content-center gap-3">
    <FormRow
      type={"text"}
      name={"Company"}
      value={values.name}
      handleChange={handleChange}
      labelText={"Company"}
    />
  </div>
  <div className="d-flex flex-row justify-content-center gap-3">
    <div className="form-group">
      <label htmlFor="profileImage" className="form-label">
        Profile Image
      </label>
      <input
        type="file"
        id="profileImage"
        name="profileImage"
        onChange={(e) => handleImageChange(e)}
        accept="image/*"
        className="form-control"
      />
      {values.profileImage && (
        <div className="image-preview">
          <img src={URL.createObjectURL(values.profileImage)} alt="Profile" />
        </div>
         )}
         </div>
       </div>
  <div className="d-flex flex-row justify-content-center gap-3">
    <FormRow
      type={"text"}
      name={"username"}
      value={values.UserName}
      handleChange={handleChange}
      labelText={"User Name"}
    />
    <FormRow
      type={"password"}
      name={"password"}
      value={values.password}
      handleChange={handleChange}
      labelText={"Client Password"}
    />
  </div>
  <div className="d-flex flex-row justify-content-center gap-3">
    <FormRow
      type={"email"}
      name={"email"}
      value={values.email}
      handleChange={handleChange}
      labelText={"Client Email"}
    />
    <FormRow
      type={"number"}
      name={"phoneNO"}
      value={values.phone}
      handleChange={handleChange}
      labelText={"Client Phone Number"}
    />
  </div>
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