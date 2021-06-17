import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--blue-900);
  height: 2.5rem;
  color: var(--white-000);
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.2s;

  :hover {
    filter: brightness(0.9);
  }
`;

export const Loader = styled.div`
  svg {
    animation: ${rotate} 1.2s ease-in-out infinite;
  }
`;
