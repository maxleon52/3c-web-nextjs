import styled from "styled-components";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  column-gap: 0.75rem;
  border: 1px solid;
  border-color: ${(props) =>
    props.isFocused
      ? "var(--blue-900)"
      : props.isFilled
      ? "var(--blue-900)"
      : "var(--grey-300) !important"};
  background: var(--white-200);
  color: ${(props) =>
    props.isFocused
      ? "var(--blue-900)"
      : props.isFilled
      ? "var(--blue-900)"
      : "var(--grey-300) !important"};
  padding: 1rem;
  border-radius: 4px;
  transition: all 0.2s;

  svg {
    transition: all 0.2s;
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
