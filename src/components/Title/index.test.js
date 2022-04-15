import Title from "./";

import { render } from "../../utils/test";

describe("Title", () => {
  test("Should render without crash", async () => {
    render(<Title />);
  });
});
