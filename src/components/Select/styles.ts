import styled from "styled-components";

export const Container = styled.select`
  width: 250px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  -webkit-appearance: none;
  appearance: none;
  color: var(--blue-900);
  border-bottom: 2px solid var(--blue-900);
  border-top: none;
  border-left: none;
  border-right: none;
  outline: 0;
  padding: 0.65em 2.5em 0.55em 0.75em;
  background-color: transparent;
  background-image: url("./assets/images/arrow-down.svg");
  background-position: 98% 50%;
  background-repeat: no-repeat;
`;
