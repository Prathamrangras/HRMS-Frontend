import React from "react";
import pic from "../../assets/photo-1502989642968-94fbdc9eace4.jpeg";

const Task = () => {
  return (
    <div className="col-xl-4 col-lg-12 col-md-12 float-end">
      <div className="card mb-3" style={{ width: "280px" }}>
        <div className="card-header py-3">
          <h6 className="mb-0 fw-bold">Current Task</h6>
        </div>
        <div className="card-body">
          <div className="planned_task client_task">
            <div className="dd">
              <div className="dd-list">
                <div className="dd-item mb-3">
                  <div className="dd-handle">
                    <div className="task-info d-flex align-items-center justify-content-between">
                      <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                        Task Name
                      </h6>
                      <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                        <div className="avatar-list avatar-list-stacked m-0">
                          <img
                            className="avatar rounded-circle small-at sm"
                            src={pic}
                            alt=""
                          ></img>
                        </div>
                        <span className="badge bg-warning text-end mt-1">
                          Status
                        </span>
                      </div>
                    </div>
                    <p className="py-2 mb-0">Task description here</p>
                    <div className="tikit-info row g-3 align-items-center">
                      <div className="col-sm text-center">
                        <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                          Social Geek Made
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
