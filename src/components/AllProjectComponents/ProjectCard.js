import React, { useCallback } from "react";
import { LuEdit } from "react-icons/lu";
import { GiUnstableProjectile, GiDuration } from "react-icons/gi";
import { FaPaperclip } from "react-icons/fa";
import { BiSolidGroup } from "react-icons/bi";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useFetchProject } from "../../hooks/useFetchProject";
import { usePopupContext } from "../../context/PopupContext";

function daysLeftBetweenDates(date1, date2) {
  // Convert date strings to Date objects
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  // Calculate the time difference in milliseconds
  const timeDifferenceMs = endDate - startDate;

  // Convert milliseconds to days
  const daysLeft = timeDifferenceMs / (1000 * 60 * 60 * 24);

  // Return the number of days left (you can use Math.ceil to round up to the nearest whole day)
  return Math.ceil(daysLeft);
}

const ProjectCard = ({
  _id,
  name,
  Category,
  StartDate,
  EndDate,
  ProjectMembers,
}) => {
  const { openPopup } = usePopupContext();

  const { deleteProject } = useFetchProject();

  const deleteProjectAsync = useCallback(async (id) => {
    await deleteProject(id);
  }, []);

  return (
    <div className="col-lg-12 col-md-12 flex-column">
      <div className="tab-content mt-4">
        <div className="tab-pane fade show active" id="All-list">
          <div className="row g-3 gy-5 py-3 row-deck">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mt-5">
                    <div className="lesson_name">
                      <div className="project-block light-info-bg">
                        <GiUnstableProjectile />
                      </div>
                      <span className="small text-muted project_name fw-bold align-text-center">
                        {name}
                      </span>
                      <h6 className="mb-0 fw-bold fs-6 mb-2">
                        {Category.name}
                      </h6>
                    </div>
                    <div className="btn-group">
                      <button
                        onClick={() => openPopup(_id)}
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <LuEdit style={{ color: "green" }} />
                      </button>
                      <button
                        onClick={() => deleteProjectAsync(_id)}
                        type="button"
                        className="btn btn-outline-secondary"
                      >
                        <RiDeleteBin6Line style={{ color: "red" }} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center"></div>
                <div className="row g-2 pt-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <FaPaperclip />
                      <span className="ms-2">No. of attachments</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <GiDuration />
                      <span className="ms-2">{`${daysLeftBetweenDates(
                        StartDate,
                        EndDate
                      )} Days Left`}</span>
                    </div>
                  </div>
                </div>
                <div className="row g-2 pt-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <BiSolidGroup />
                      <span class="ms-2">{ProjectMembers?.length}</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <BsFillChatLeftDotsFill />
                      <span className="ms-2">messages</span>
                    </div>
                  </div>
                </div>
                <div className="dividers-block"></div>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h4 className="small fw-bold mb-0">Progess</h4>
                  <span className="small light-danger-bg p-1 rounded">
                    <AiOutlineClockCircle
                      style={{
                        fontSize: "1em",
                        marginRight: "0.3em",
                      }}
                    />
                    {EndDate}
                  </span>
                </div>
                {/* Progess bar component */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
