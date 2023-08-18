import { LuEdit } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

export const LeaveColumns = [
  {
    name: "EMPLOYEE ID",
    selector: (leave) => leave.employeeId,
    sortable: true,
  },
  {
    name: "EMPLOYEE NAME",
    sortable: true,
  },
  {
    name: "LEAVE TYPE",
    sortable: true,
  },
  {
    name: "FROM",
    selector: (leave) => leave.fromDate,
    sortable: true,
  },
  {
    name: "TO",
    selector: (leave) => leave.toDate,
    sortable: true,
  },
  {
    name: "REASON",
    selector: (leave) => leave.fromDate,
    sortable: true,
  },
  {
    name: "ACTION",
    selector: (leave) => {},
    sortable: true,
    cell: (leave) => (
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button className="btn btn-outline-secondary">
          <LuEdit style={{ color: "green" }} />
        </button>
        <button className="btn btn-outline-secondary deleterow">
          <RiDeleteBin6Line style={{ color: "red" }} />
        </button>
      </div>
    ),
  },
];
