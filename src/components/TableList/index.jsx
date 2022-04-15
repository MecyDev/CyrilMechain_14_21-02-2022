import { useContext } from "react";
import DataTables from "datatables-plugin-react";

import { Labels } from "../../data/tablesLabels";
import { EmployeeContext } from "../../utils/context";

function TableList() {
  const employeeContext = useContext(EmployeeContext);
  const { listEmployee } = employeeContext;
  return <DataTables labels={Labels} data={listEmployee} />;
}

export default TableList;
