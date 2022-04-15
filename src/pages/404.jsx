import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function Error404() {
  return (
    <Container>
      <h1>404 - Page Not Found</h1>
    </Container>
  );
}

export default Error404;
