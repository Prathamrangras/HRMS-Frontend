import React from "react";
import PageHeader from "../../components/PageHeader";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { usePopupContext } from "../../context/PopupContext";
const LeaveHead = () => {
  const { openPopup } = usePopupContext();
  return (
    <PageHeader
      headerTitle="Leave Requests"
      renderRight={() => {
        return (
          <div className="col-auto d-flex w-sm-100">
            <button
              onClick={() => openPopup()}
              type="button"
              className="btn btn-dark btn-set-task w-sm-100"
            >
              <AiOutlinePlusCircle
                style={{ fontSize: "1.3em", marginRight: "0.5em" }}
              />
              Add Leave
            </button>
          </div>
        );
      }}
    />
  );
};

export default LeaveHead;
