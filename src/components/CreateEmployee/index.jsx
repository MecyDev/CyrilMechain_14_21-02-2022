import styled from "styled-components";

import { FormProvider } from "../../utils/FormContext";

import FormMain from "../Form/FormMain";
import FormInput from "../Form/FormInput";

import { states } from "../../data/stateList";
import { departments } from "../../data/departmentList";

const Fieldset = styled.fieldset`
  margin-top: 10px;
`;

function CreateEmployee() {
  return (
    <FormProvider>
      <FormMain>
        <FormInput label="First Name" name="firstName" />
        <FormInput label="Last Name" name="lastName" />
        <FormInput label="Date of Birth" type="datePicker" name="dateOfBirth" />
        <FormInput label="Start Date" type="datePicker" name="startDate" />
        <Fieldset>
          <legend>Address</legend>
          <FormInput label="Street" name="street" />
          <FormInput label="City" name="city" />
          <FormInput label="State" name="state" type="select" list={states} />
          <FormInput label="Zip Code" name="zipCode" type="number" />
        </Fieldset>
        <FormInput
          label="Department"
          name="department"
          type="select"
          list={departments}
        />
      </FormMain>
    </FormProvider>
  );
}

export default CreateEmployee;
