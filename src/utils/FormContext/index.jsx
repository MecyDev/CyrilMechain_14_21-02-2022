import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  };

  const [form, setForm] = useState(initialValues);

  const addEntry = (name, value, date) => {
    if (date) {
      value = date;
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <form id="form">
      <FormContext.Provider value={{ form, addEntry }}>
        {children}
      </FormContext.Provider>
    </form>
  );
};
