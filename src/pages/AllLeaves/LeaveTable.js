import React, { useCallback, useEffect } from "react";
import LeaveHead from "./LeaveHead";
import DataTable from "react-data-table-component";
import { LeaveColumns } from "../../utils/Columns/leaveColumns";
import { usePopupContext } from "../../context/PopupContext";
import LeavePopup from "../../components/Popups/Leave";
import { useFetchLeave } from "../../hooks/useFetchLeave";
import { useLeaveContext } from "../../context/LeaveContext";

const LeaveTable = () => {
  const { getLeave } = useFetchLeave();
  const { leave, loading } = useLeaveContext();
  const { isPopup } = usePopupContext();

  const fetchLeave = useCallback(async () => {
    await getLeave();
  }, []);

  useEffect(() => {
    fetchLeave();
    console.log(leave);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-xxl">
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
              <LeavePopup />
            </div>
          </div>
        </>
      )}
      <LeaveHead />
      <DataTable columns={LeaveColumns} data={leave} />
    </div>
  );
};

export default LeaveTable;
