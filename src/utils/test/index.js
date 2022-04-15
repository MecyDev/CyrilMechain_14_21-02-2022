import { render as rtlRender } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { EmployeeProvider } from "../context";

function Wrapper({ children }) {
  return (
    <Router>
      <EmployeeProvider>{children}</EmployeeProvider>
    </Router>
  );
}

export function render(ui) {
  rtlRender(ui, { wrapper: Wrapper });
}
