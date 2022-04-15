import Error404 from "./404";
import { render } from "../utils/test";
import { screen } from "@testing-library/react";

describe("Error404", () => {
  test("Should render a title with 404 erro message", async () => {
    render(<Error404 />);
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "404 - Page Not Found",
      })
    ).toBeTruthy();
  });
});
