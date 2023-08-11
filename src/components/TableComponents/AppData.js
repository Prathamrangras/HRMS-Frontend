import React from "react";

export const HolidaysData = {
  
  title: "Holidays List",
  columns: [
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
          <button type="button" className="btn btn-outline-secondary">
            <svg
              className="text-success"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              {/* SVG path for the edit icon in green */}
              <path
                d="M8.146 1.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708l7-7z"
              />
              <path
                d="M9.854 2.854a.5.5 0 0 1 0 .708L6.708 7l1.146 1.146a.5.5 0 0 1-.708.708L6 7.707l-2.146 2.147a.5.5 0 0 1-.708-.708L5.292 7 2.146 3.854a.5.5 0 0 1 .708-.708L6 6.293l2.146-2.147a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <button type="button" className="btn btn-outline-secondary deleterow">
            <svg
              className="text-danger"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              {/* SVG path for the delete icon in red */}
              <path
                d="M3.5 1a.5.5 0 0 1 .5.5V2h8V1.5a.5.5 0 0 1 1 0V2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-.447l-.743 10.595A2 2 0 0 1 10.811 16H5.189a2 2 0 0 1-1.999-1.405L2.447 5H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1v-.5a.5.5 0 0 1 .5-.5zm1 1.03V3h8V2.03a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5zM4.879 6l-.2 9.006A1 1 0 0 0 5.689 16h4.622a1 1 0 0 0 .91-1.994L11.12 6H4.879zM4.23 6L4.52 15.006A2 2 0 0 0 6.495 17h3.01a2 2 0 0 0 1.976-1.994L11.77 6H4.23z"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ],
  rows: [
    {
      ticketid: "01",
      Holidayday: "Tuesday",
      holidaydate: "January 26, 2021",
      holidayname: "Republic Day",
      txtClass: "text-danger",
    },
    {
      ticketid: "02",
      Holidayday: "Friday",
      holidaydate: "April 2, 2021",
      holidayname: "Good Friday",
      txtClass: "text-danger",
    },
    {
      ticketid: "03",
      Holidayday: "Monday",
      holidaydate: "April 30, 2021",
      holidayname: "Memorial Day",
      txtClass: "text-danger",
    },
    {
      ticketid: "04",
      Holidayday: "Wednesday",
      holidaydate: "August 15, 2021",
      holidayname: "Independence Day",
      txtClass: "text-success",
    },
    {
      ticketid: "05",
      Holidayday: "Wednesday",
      holidaydate: "August 22, 2021",
      holidayname: "Bakrid",
    },
    {
      ticketid: "06",
      Holidayday: "Monday",
      holidaydate: "September 30, 2021",
      holidayname: "Janmashtami",
    },
    {
      ticketid: "07",
      Holidayday: "Tuesday",
      holidaydate: "Octomber 2, 2021",
      holidayname: "Gandhi Jayanti",
    },
    {
      ticketid: "08",
      Holidayday: "Wednesday",
      holidaydate: "November 7, 2021",
      holidayname: "Diwali",
    },
    {
      ticketid: "09",
      Holidayday: "Tuesday	",
      holidaydate: "December 25, 2021",
      holidayname: "Christmas Day",
    },
  ],
};
export default HolidaysData;