import { render } from "../utils/test";
import { screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("Should render title", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "HRnet",
      })
    ).toBeTruthy();
  });
  it("Should render title 2", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Create Employee",
      })
    ).toBeTruthy();
  });
  it('should be a link that have href value to "/employee-list"', () => {
    render(<Home />);
    const link = screen.getByRole("link", { name: "View Current Employees" });
    expect(link.getAttribute("href")).toBe("/employee-list");
  });
});
