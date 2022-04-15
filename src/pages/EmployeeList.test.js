import EmployeeList from "./EmployeeList";
import TableList from "../components/TableList";
import { render } from "../utils/test";
import { screen } from "@testing-library/react";

describe("EmployeeList", () => {
  test("Should render without crash and show H1 with Current Employees", async () => {
    render(<EmployeeList />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Current Employees",
      })
    ).toBeTruthy();
  });
  it('should be a link that have href value to "/"', () => {
    render(<EmployeeList />);
    const link = screen.getByRole("link", { name: "Home" });
    expect(link.getAttribute("href")).toBe("/");
  });
  it("should render a TableList components", () => {
    render(<TableList />);
  });
});
