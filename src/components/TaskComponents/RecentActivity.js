import React from "react";

const RecentActivity = () => {
  return (
    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
      <div class="card">
        <div class="card-header py-3">
          <h6 class="mb-0 fw-bold ">Recent Activity</h6>
        </div>
        <div class="card-body mem-list">
          <div class="timeline-item ti-danger border-bottom ms-2">
            <div class="d-flex">
              <span class="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">
                RH
              </span>
              <div class="flex-fill ms-3">
                <div class="mb-1">
                  <strong>Rechard Add New Task</strong>
                </div>
                <span class="d-flex text-muted">20Min ago</span>
              </div>
            </div>
          </div>
          <div class="timeline-item ti-info border-bottom ms-2">
            <div class="d-flex">
              <span class="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">
                SP
              </span>
              <div class="flex-fill ms-3">
                <div class="mb-1">
                  <strong>Shipa Review Completed</strong>
                </div>
                <span class="d-flex text-muted">40Min ago</span>
              </div>
            </div>
          </div>
          <div class="timeline-item ti-info border-bottom ms-2">
            <div class="d-flex">
              <span class="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">
                MR
              </span>
              <div class="flex-fill ms-3">
                <div class="mb-1">
                  <strong>Mora Task To Completed</strong>
                </div>
                <span class="d-flex text-muted">1Hr ago</span>
              </div>
            </div>
          </div>
          <div class="timeline-item ti-success  ms-2">
            <div class="d-flex">
              <span class="avatar d-flex justify-content-center align-items-center rounded-circle bg-lavender-purple">
                FL
              </span>
              <div class="flex-fill ms-3">
                <div class="mb-1">
                  <strong>Fila Add New Task</strong>
                </div>
                <span class="d-flex text-muted">1Day ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
