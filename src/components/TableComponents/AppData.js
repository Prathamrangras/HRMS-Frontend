import React from "react";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
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
      cell: () => (
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn btn-outline-secondary">
            <LuEdit style={{ color: "green" }} />
          </button>
          <button type="button" className="btn btn-outline-secondary deleterow">
            <RiDeleteBin6Line style={{ color: "red" }} />
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
