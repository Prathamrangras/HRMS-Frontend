import { LuEdit } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import deleteHoliday from "../../hooks/useFetchHolidays";

export const HolidaysColumns = [
  {
    name: "#",
    selector: (_, index) => index + 1,
    sortable: true,
  },
  {
    name: "HOLIDAY DAY",
    selector: (holiday) => holiday.day,
    sortable: true,
  },
  {
    name: "HOLIDAY DATE",
    selector: (holiday) => holiday.date,
    sortable: true,
  },
  {
    name: "HOLIDAY NAME",
    selector: (holiday) => holiday.name,
    sortable: true,
  },
  {
    name: "ACTION",
    selector: (holiday) => {},
    sortable: true,
    cell: (holiday) => {
      const { deleteHoliday, isDeleting, error } = deleteHoliday();

      const handleDelete = async () => {
        await deleteHoliday(holiday._id);
      };

      return (
        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn btn-outline-secondary">
            <LuEdit style={{ color: "green" }} />
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary deleterow"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            <RiDeleteBin6Line style={{ color: "red" }} />
          </button>
          {isDeleting && <span>Deleting...</span>}
          {error && <span className="error-message">{error.message}</span>}
        </div>
      );
    },
  },
];
