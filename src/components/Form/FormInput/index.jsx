import { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Datetime from "react-datetime";
import Select from "react-select";
import { FormContext } from "../../../utils/FormContext";
import moment from "moment";
import "moment/locale/fr";

import "react-datetime/css/react-datetime.css";

const Label = styled.label`
  display: block;
  margin-top: 1rem;
  margin-bottom: 10px;
`;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    background: "#212121",
    color: state.isSelected ? "#ffb300" : "#ababab",
  }),

  indicatorsContainer: (provided, state) => ({
    ...provided,
    background: "#212121",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    background: "#212121",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#dcdcdc",
  }),
};

function FormInput({ label, type = "text", name, list }) {
  const formContext = useContext(FormContext);
  const { addEntry } = formContext;

  let input;
  let initDate;

  if (name === "dateOfBirth") {
    initDate = new Date("1990-01-01T00:00:00");
  } else {
    initDate = moment();
  }

  if (type === "datePicker") {
    let inputProps = {
      "data-testid": name,
    };
    input = (
      <Datetime
        inputProps={inputProps}
        initialValue={initDate}
        initialViewDate={initDate}
        onChange={(date) =>
          addEntry(name, "", moment(date).format("DD/MM/YYYY"))
        }
      />
    );
  } else if (type === "select") {
    input = (
      <Select
        data-testid={name}
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary: "rgba(255,127,0,0.5)",
          },
        })}
        options={list}
        onChange={(event) => addEntry(name, event.value)}
      />
    );
  } else {
    input = (
      <input
        type={type}
        name={name}
        data-testid={name}
        onChange={(event) => addEntry(event.target.name, event.target.value)}
      />
    );
  }

  return (
    <Fragment>
      <Label>{label}</Label>
      {input}
    </Fragment>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  list: PropTypes.array,
};

export default FormInput;
