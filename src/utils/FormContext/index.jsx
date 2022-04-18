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

  const EmptyForm = () => {
    setForm({ ...initialValues });
  };

  return (
    <form id="form">
      <FormContext.Provider value={{ form, addEntry, EmptyForm }}>
        {children}
      </FormContext.Provider>
    </form>
  );
};
