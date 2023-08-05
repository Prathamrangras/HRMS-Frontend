import React from "react";
import DataTable from "react-data-table-component";
import { HolidaysData } from "./AppData";

const TableData = () => {
  return (
    <>
      <div className="card-mb">
        <DataTable
          columns={HolidaysData.columns}
          data={HolidaysData.rows}
          className="table myDataTable table-hover align-middle mb-0 d-row
        nowrap dataTable no-footer dtr-inline"
          highlightOnHover={true}
        ></DataTable>
      </div>
    </>
  );
};

export default TableData;
