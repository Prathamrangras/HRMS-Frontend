import React from "react";

const AssignedToCard = ({ tasks }) => {
  return (
    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-12" style={{ width: "74%" }}>
      <div class="card">
        <div class="card-header py-3">
          <h6 class="mb-0 fw-bold ">Allocated Task Members</h6>
        </div>
        <div class="card-body">
          <div class="flex-grow-1 mem-list">
            {tasks.map((e) => (
              <div class="py-2 d-flex align-items-center border-bottom">
                <div class="d-flex ms-2 align-items-center flex-fill">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQQHCAkDBv/aAAgBAQAAAAC/xlyajAyxq5bOuiN887H2Q9qJF/WS1GMbLJL1ICqYW0nz/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAQGAv/aAAgBAhAAAAADMtUpoP8A/8QAGQEAAgMBAAAAAAAAAAAAAAAAAwYAAQcF/9oACAEDEAAAAIcFtap1tuxH/8QAKxAAAQQBAwIFBAMBAAAAAAAAAQIDBAUGAAcRITEIEBJRYRMUcZEgIlOB/9oACAEBAAE/APLxVZhm0nc24xmylS49HDQwa+GhSkMOtLbBL3sslWvCrmGbxNzKfG66VMfopiHzYQ1qUthplDZIe9kEK/hfXUHGKK5yCyURErYT8x8p7htlBWQPkga3B3ezLcfIXru0sFx2QVohw46vQ1FYJ5CB7n3UdYTuTmOD3sHIae3k+tlwBxl1xSmJDfPKmnEnoQdUN5EyKgp8gg8/bWUJiYyFdwh9AcAPyOfPemvl22024MCAhSpDlNI+khPdwoHrKB8kDW1nh1sb9uPeZqHq+tVwtmEP6Snx7r/zRrPtraWftzY47QU7MZcJozK9thHX7hkc8e6lODlJJ1tVAk0m2mC1U1JTLj0kNLyFd0LLYJQflPnJYEhhxlXQKTxzq5hy6lL5ZhOSnEjltpBSgufgrIA1SxJNm2wp6GuK4ocuNuFKy3+SgkHUdlLDTbSeyEhPm9b1sUrS9LQFJ7gdSD/zUvNKnKUJVQT0vNx3VpcWnofUDxxwevGoea1OKoUq/sEstyHUIbWrqfUTx2HXjUe2q5JbS1LBUrjgduf35HtrcWW5W4/arYUUyZJLDRHcFw9SPkDk6Yqp0Vf1Yz7rK+OPU2opP7Gn6udJX9WTIdec7epxRUf2dbczHLLHqpb6iqTGIYdJ7ktnoT8kcHQ1/8QAIhEAAgEEAQQDAAAAAAAAAAAAAQIRAAMEIRIQFDFBJFFx/9oACAECAQE/AKEbk/nRiwViokxqruRm3cpZkMr6QeBSzxXl5jdZuU+ObKooJdo36rh8vu+4E/UVhZT5BvK6gFGiR7r/xAAoEQABAgUCBAcAAAAAAAAAAAABAhEAAwQFEhMxEBRikRUXISMkcXL/2gAIAQMBAT8AjGm0nym6rbYjHu78Es4y2f1iXIopNCqYnEy1pZSyRl2gs5bZ4stsF1rJVIVlJWtCA3UWjyztePK+LfE/Huv9xerYLVWzaTMqKFrQX6S0f//Z"
                    class="avatar lg rounded-circle img-thumbnail"
                    alt="avatar"
                  />
                  <div class="d-flex flex-column ps-2">
                    <h6 class="fw-bold mb-0">{e.assignedto.name}</h6>
                    <span class="small text-muted">{e.title}r</span>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn light-danger-bg text-end"
                  data-bs-toggle="modal"
                  data-bs-target="#dremovetask"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignedToCard;
