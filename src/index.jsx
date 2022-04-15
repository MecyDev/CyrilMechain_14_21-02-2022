import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { EmployeeProvider } from "./utils/context";

import App from "./components/App";

import "./styles/styles.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <EmployeeProvider>
        <App />
      </EmployeeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
