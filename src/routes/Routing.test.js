import Routing from "./Routing";
import { render } from "../utils/test";

describe("Routing", () => {
  test("Should render without crash", async () => {
    render(<Routing />);
  });
});
