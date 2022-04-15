import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Title from "../components/Title";
import CreateEmployee from "../components/CreateEmployee";

const Main = styled.main`
  margin-top: -50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
`;

function Home() {
  return (
    <Fragment>
      <Title content="HRnet" />
      <Main>
        <Container>
          <Link to="/employee-list">View Current Employees</Link>
          <h2>Create Employee</h2>
        </Container>
        <CreateEmployee />
      </Main>
    </Fragment>
  );
}

export default Home;
