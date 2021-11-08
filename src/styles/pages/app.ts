import styled from "styled-components";

interface ContainerProps {
  isToken: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  column-gap: 2rem;
  width: 100%;
  height: 100vh;

  > section {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    width: 100%;
    height: 100vh;
    padding: ${({ isToken }) =>
      isToken === false ? "0px 0px 0px 0px" : "0px 32px 32px 0px"};
    main {
    }
  }
`;
