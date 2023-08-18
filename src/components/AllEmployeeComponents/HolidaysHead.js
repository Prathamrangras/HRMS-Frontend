import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { usePopupContext } from "../../context/PopupContext";

const HolidayHead = () => {
  const { openPopup } = usePopupContext();

  return (
    <div className="row align-items-center">
      <div className="border-0 mb-4">
        <div className="card-header p-0 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom">
          <h3 className="fw-bold py-3 mb-0">Holidays</h3>
          <div className="d-flex py-2 flex-wrap">
            <button
              onClick={() => openPopup(null)}
              type="button"
              className="btn btn-dark"
              style={{ background: "#484c7f", borderColor: "#484c7f" }}
            >
              <AiOutlinePlusCircle
                style={{ fontSize: "1.3em", marginRight: "0.5em" }}
              />
              Add Holidays
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayHead;

