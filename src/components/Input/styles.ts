import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isError?: boolean;
}

export const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 10px;

  > p {
    color: var(--red-700);
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  column-gap: 0.75rem;
  border: 1px solid;
  background: var(--white-200);
  padding: 1rem;
  border-radius: 4px;
  transition: all 0.2s;
  border-color: var(--grey-300);

  ${({ isFocused }) =>
    isFocused === true &&
    css`
      border-color: var(--blue-900);
    `}

  svg {
    transition: all 0.2s;
    color: ${({ isFilled }) =>
      isFilled === true ? "var(--blue-900)" : "var(--grey-300)"};
  }

  input {
    background: var(--white-200);
    border: none;
    width: 100%;
    height: 100%;
    outline: none;
    font-size: 1rem;
    font-weight: bold;
    color: var(--blue-900);

    ::placeholder {
      color: var(--grey-300);
    }
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px var(--white-200) inset;
  }
`;
