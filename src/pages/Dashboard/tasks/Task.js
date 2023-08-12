import React, { useCallback, useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useProjectContext } from "../../../context/ProjectContext";
import { useFetchTask } from "../../../hooks/useFetchTasks";
import ProgressCard from "../../../components/TaskComponents/ProgressCard";
import RecentActivity from "../../../components/TaskComponents/RecentActivity";
import AssignedToCard from "../../../components/TaskComponents/AssignedToCard";
import AllTasksCard from "../../../components/TaskComponents/AllTasksCard";
import { usePopupContext } from "../../../context/PopupContext";
import TaskPopup from "../../../components/Popups/Task";

const Task = () => {
  const { getTask } = useFetchTask();
  const { loading, task } = useProjectContext();
  const { openPopup, isPopup } = usePopupContext();

  const getTaskAsync = useCallback(async () => {
    await getTask();
  }, []);

  useEffect(() => {
    getTaskAsync();
    console.log(task);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container-xxl">
        <PageHeader
          headerTitle="Tasks Management"
          renderRight={() => {
            return (
              <div className="col-auto d-flex w-sm-100">
                <button
                  onClick={() => openPopup()}
                  type="button"
                  className="btn btn-dark btn-set-task w-sm-100 d-flex align-items-center"
                >
                  <AiOutlinePlusCircle
                    style={{ fontSize: "1.3em", marginRight: "0.5em" }}
                  />
                  Add Task
                </button>
              </div>
            );
          }}
        />
        <div className="row clearfix g-3">
          <div className="col-lg-12 col-md-12 flex-column">
            <div className="row g-3 row-deck">
              <ProgressCard tasks={task} />
              <RecentActivity />
              <AssignedToCard tasks={task} />
            </div>
            <div className="row taskboard g-3 py-xxl-4">
              <AllTasksCard
                tasks={task}
                // tasksInProgress={task.filter(
                //   (e) => !e.isCompleted && !e.submission
                // )}
                // tasksReviewed={task.filter((e) => !e.isCompleted && e.submission)}
                // tasksCompleted={task.filter((e) => e.isCompleted)}
              />
            </div>
          </div>
        </div>
      </div>
      {isPopup && (
        <>
          <div className="fade modal-backdrop show"></div>
          <div
            role="dialog"
            aria-modal="true"
            className="fade modal show"
            tabindex="-1"
            style={{ paddingLeft: "17px", display: "block" }}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <TaskPopup />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Task;
