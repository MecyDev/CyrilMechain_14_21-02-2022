import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TableList from "../components/TableList";
import Title from "../components/Title";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TableContainer = styled.div`
  display: flex;
  justify-content: center;

  & .dtb {
    position: absolute;
    &-search {
      margin-right: -50px;
    }
    &-table {
      width: 100%;
    }
    &-table-row:nth-child(odd) {
      background: none;
      > td:first-child {
        background: none;
      }
    }
    &-table-row:nth-child(even) {
      > td:first-child {
        background: none;
      }
    }
    &-table-row:hover td {
      background: grey;
      cursor: default;
    }
    &-pagination-btn {
      background: grey;
      &:hover {
        background: grey;
        color: #fff;
      }
    }
  }
`;

function EmployeeList() {
  return (
    <Fragment>
      <Title content="Current Employees" />
      <Container>
        <Link to="/">Home</Link>
      </Container>
      <TableContainer>
        <TableList />
      </TableContainer>
    </Fragment>
  );
}

export default EmployeeList;
