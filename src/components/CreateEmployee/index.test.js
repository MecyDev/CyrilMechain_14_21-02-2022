import CreateEmployee from "./";
import { FormProvider } from "../../utils/FormContext";
import { render } from "../../utils/test";

describe("CreateEmployee", () => {
  test("Should render without crash", async () => {
    render(
      <FormProvider>
        <CreateEmployee />
      </FormProvider>
    );
  });
});
