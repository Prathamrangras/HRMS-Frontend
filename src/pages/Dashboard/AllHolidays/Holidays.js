import React, { useCallback, useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import DataTable from "react-data-table-component";
import { getHolidaysCol } from "../../../utils/Columns/holidaysColumns";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useFetchHoliday } from "../../../hooks/useFetchHolidays";
import { useHolidayContext } from "../../../context/HolidaysContext";
import { usePopupContext } from "../../../context/PopupContext";
import HolidayPopup from "../../../components/Popups/Holiday";

const Holidays = () => {
  const { openPopup, isPopup } = usePopupContext();
  const { getHolidays, deleteHoliday, isDeleting, error } = useFetchHoliday();
  const { holiday, loading } = useHolidayContext();
  const fetchHoliday = useCallback(async () => {
    await getHolidays();
  }, []);

  useEffect(() => {
    fetchHoliday();
    console.log(holiday);
  }, []);

  if (loading) {
    return <div>laoding...</div>;
  }

  return (
    <>
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
                <HolidayPopup />
              </div>
            </div>
          </>
        )}
        <PageHeader
          headerTitle="Holidays"
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
                  Add Holidays
                </button>
              </div>
            );
          }}
        />
        <DataTable
          columns={getHolidaysCol(deleteHoliday, isDeleting, error)}
          data={holiday}
          className="table myDataTable table-hover align-middle mb-0 d-row
         nowrap dataTable no-footer dtr-inline"
          highlightOnHover={true}
        />
      </div>
    </>
  );
};

export default Holidays;
