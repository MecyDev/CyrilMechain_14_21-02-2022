import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { SimplyModal, useModal } from "react-simply-modal";

import { EmployeeContext } from "./../../../utils/context/index";
import { FormContext } from "../../../utils/FormContext";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 100px;
  margin-top: 1rem;
`;

const ModalHeading = styled.h1`
  font-size: 1.5rem;
  color: #ababab;
`;

function Form({ children }) {
  const { addEmployee } = useContext(EmployeeContext);
  const { form, EmptyForm } = useContext(FormContext);
  const { isOpen, toggle } = useModal();

  const content = <ModalHeading id="heading">Employee Created!</ModalHeading>;

  function submit() {
    if (
      (form.firstName !== "") &
      (form.lastName !== "") &
      (form.city !== "") &
      (form.dateOfBirth !== "") &
      (form.department !== "") &
      (form.startDate !== "") &
      (form.state !== "") &
      (form.street !== "") &
      (form.zipCode !== "")
    ) {
      toggle();
      addEmployee(form);
      document.getElementById("form").reset();
      EmptyForm();
    }
  }

  return (
    <Fragment>
      {children}
      <ButtonContainer>
        <Button type="button" onClick={() => submit()}>
          Save
        </Button>
      </ButtonContainer>
      <SimplyModal
        isOpen={isOpen}
        visible={toggle}
        content={content}
        bgColor="#4E4E4E"
        bgModalColor="#2b2b2b"
        borderColor="#666"
        bgCloseColor="#ffb300"
        bgCloseHvColor="#FFFB00"
      />
    </Fragment>
  );
}

Form.propTypes = {
  children: PropTypes.array,
};

export default Form;
