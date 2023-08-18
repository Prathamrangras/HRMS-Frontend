import React from "react";

const ProgressCard = ({ tasks }) => {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
      <div className="card">
        <div className="card-header py-3">
          <h6 className="mb-0 fw-bold ">Task Progress</h6>
        </div>
        <div className="card-body mem-list">
          {tasks.map((e) => (
            <div className="progress-count mb-4">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h6 className="mb-0 fw-bold d-flex align-items-center">
                  {e.title}
                </h6>
                <span className="small text-muted">02/07</span>
              </div>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  role="progressbar"
                  className={`progress-bar progress-${e.Progress}`}
                  aria-valuenow="92"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: "10px" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
