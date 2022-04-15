import FormMain from "./";
import { FormProvider } from "../../../utils/FormContext";
import { render } from "../../../utils/test";

describe("FormInput", () => {
  test("Should render without crash", () => {
    render(
      <FormProvider>
        <FormMain />
      </FormProvider>
    );
  });
});
