import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Title({ content }) {
  return (
    <TitleContainer>
      <h1>{content}</h1>
    </TitleContainer>
  );
}

export default Title;
