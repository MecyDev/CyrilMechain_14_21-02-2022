import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";

import Home from "../pages/Home";
import EmployeeList from "../pages/EmployeeList";
import Error404 from "../pages/404";

function Routing() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Fragment>
  );
}

export default Routing;
