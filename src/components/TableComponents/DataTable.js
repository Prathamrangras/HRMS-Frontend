import React from "react";
import DataTable from "react-data-table-component";
import "../../style/style.css";
import { useCallback, useEffect } from "react";
import { useFetchHoliday } from "../../hooks/useFetchHolidays";
import { useHolidaysContext } from "../../context/HolidaysContext";
// import usePopupContext from "../../context/PopupContext";
import { usePopupContext } from "../../context/PopupContext";
import HolidayHead from "../../components/AllEmployeeComponents/HolidaysHead";
import HolidayPopup from "../../components/Popups/Holidays";
import HolidaysData from "./AppData";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

function Holiday() {
  const { holidays, loading } = useHolidaysContext();
  const { getHoliday, error } = useFetchHoliday();
  const { isPopup, openPopup } = usePopupContext();
  

  const getHolidayAsync = useCallback(async () => {
    await getHoliday();
    console.log(holidays)
  }, []);

  // useEffect(() => {
  //   getHolidayAsync();
  //   console.log(holidays);
  // }, []);
  // const fetchHolidays = (async () => {
  //   await fetchHolidays();
  // }, []);
  useEffect(() => {
    getHolidayAsync();
    console.log(Holiday);
  }, []);
  

  // useEffect(() => {
  //   getHolidayAsync();
  //   console.log(holidays);
  // }, []);
  const openEditHolidayPopup = (holiday) => {
    openPopup(holiday);
    console.log(isPopup)
  };
  const openDeleteHolidayPopup = (holiday) => {
    openPopup("deleteHoliday");
  };
  if (loading) {
    return <div>Loading ...</div>;
  }
  const columns = [
    {
      name: "#",
      selector: (row) => <span className={row.txtClass}>{row.ticketid}</span>,
      sortable: true,
    },
    {
      name: "HOLIDAY DAY",
      selector: (row) => <span className={row.txtClass}>{row.Holidayday}</span>,
      sortable: true,
    },
    {
      name: "HOLIDAY DATE",
      selector: (row) => (
        <span className={row.txtClass}>{row.holidaydate}</span>
      ),
      sortable: true,
    },
    {
      name: "HOLIDAY NAME",
      selector: (row) => (
        <span className={row.txtClass}>{row.holidayname}</span>
      ),
      sortable: true,
    },
    {
      name: "ACTION",
      selector: () => {},
      sortable: true,
      cell: (row) => (
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn btn-outline-secondary" 
          onClick={(row) => openEditHolidayPopup(row)}>
            <LuEdit style={{ color: "green" }} />
          </button>
          <button type="button" className="btn btn-outline-secondary deleterow"
          onClick={(row) => openDeleteHolidayPopup(row)}>
            <RiDeleteBin6Line style={{ color: "red" }} />
          </button>
        </div>
      ),
    },
    // {
    //   name: "Actions",
    //   selector: () => {
    //     ( <div>
    //       <button>Edit</button>
    //       <button>Delete</button>
    //     </div>)
    //   },
    //   sortable: true,
    //   cell: (row) => (
    //     // <button onClick={(row) => openEditHolidayPopup(row)}>Edit</button>
    //     <div>
    //       <button onClick={() => openEditHolidayPopup(row.ticketid)}>Edit</button>
    //       <button onClick={() => openDeleteHolidayPopup(row.ticketid)}>Delete</button>
    //     </div>
    //   ),
    // },
  
  ];
  // const HolidaysData = {
  //   columns: HolidaysData.columns,
  //   rows: HolidaysData.rows,
  // };
  return (
    <>

      <div className="main px-lg-4 px-md-4">
        <div className="body d-flex py-lg-3 py-md-2">
          <div className="container-xxl">
            {/* Holiday header */}
            {isPopup && (
              <>
                <div className="fade modal-backdrop show"></div>
                <div
                  role="dialog"
                  aria-modal="true"
                  className="fade modal show"
                  tabIndex="-1"
                  style={{ paddingLeft: "17px", display: "block" }}
                >
                  <div className="modal-dialog modal-lg modal-dialog-centered">
                    <HolidayPopup />
                  </div>
                </div>
              </>
            )}

            <HolidayHead />

            {/* Table Data */}
            <div className="card-mb">
              { <DataTable
                columns={columns}
                data={holidays}
                className="table myDataTable table-hover align-middle mb-0 d-data nowrap dataTable no-footer dtr-inline"
                highlightOnHover={true}
              ></DataTable> }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Holiday;




