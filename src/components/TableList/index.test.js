import DataTables from "datatables-plugin-react";
import { Labels } from "../../data/tablesLabels";
import { render } from "../../utils/test";
import { screen } from "@testing-library/react";

const mockListEmployee = [
  {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "01/01/1990",
    startDate: "15/04/2022",
    street: "rue",
    city: "ville",
    state: "AS",
    zipCode: "67000",
    department: "Human Res.",
  },
];

describe("TableList", () => {
  it("Should render a DataTables component", () => {
    render(<DataTables labels={Labels} data={mockListEmployee} />);
  });
});
