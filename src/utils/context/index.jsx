import { createContext, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [listEmployee, setListEmployee] = useState([]);
  const addEmployee = (newEmployee) => {
    setListEmployee((old) => [...old, newEmployee]);
  };

  return (
    <EmployeeContext.Provider value={{ listEmployee, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
