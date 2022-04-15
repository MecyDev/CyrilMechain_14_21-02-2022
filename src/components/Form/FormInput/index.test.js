import FormInput from "./";
import { FormProvider } from "../../../utils/FormContext";
import { render } from "../../../utils/test";
import { screen, fireEvent } from "@testing-library/react";

import { states } from "../../../data/stateList";

describe("FormInput", () => {
  it("Should render a text when input is text", () => {
    render(
      <FormProvider>
        <FormInput label="First Name" name="firstName" />
      </FormProvider>
    );
    const input = screen.getByTestId("firstName");
    fireEvent.change(input, { target: { value: "John" } });
    expect(input.value).toBe("John");
  });
  it("Should render a date when input is Datepicker", () => {
    render(
      <FormProvider>
        <FormInput label="Date of Birth" type="datePicker" name="dateOfBirth" />
      </FormProvider>
    );
    const input = screen.getByTestId("dateOfBirth");
    fireEvent.change(input, { target: { value: "27/12/1989 00:00" } });
    expect(input.value).toBe("27/12/1989 00:00");
  });
  it("Should render a number when input is type number", () => {
    render(
      <FormProvider>
        <FormInput label="Zip Code" name="zipCode" type="number" />
      </FormProvider>
    );
    const input = screen.getByTestId("zipCode");
    fireEvent.change(input, { target: { value: "27000" } });
    expect(input.value).toBe("27000");
  });
  it("Should render a select component", () => {
    render(
      <FormProvider>
        <FormInput label="State" name="state" type="select" list={states} />
      </FormProvider>
    );
  });
});
