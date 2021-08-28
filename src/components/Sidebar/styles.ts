import styled from "styled-components";

interface ContainerProps {
  isToggle: boolean;
}
interface ContentProps {
  isToggle: boolean;
}
export const Container = styled.div<ContainerProps>`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${({ isToggle }) => (isToggle ? "21.875rem" : "100px")};
  height: 100vh;
  padding: ${({ isToggle }) => (isToggle ? "1.25rem 2rem" : "1rem")};
  transition: all 0.3s;
  background: #f4f4f2;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  :hover {
    #toggle {
      opacity: 1;
    }
  }

  header {
    border: 2px solid red;
  }
  section {
    border: 2px solid blue;
    height: 100%;
  }
  footer {
    border: 2px solid red;
  }
`;

export const Toggle = styled.div<ContentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.125rem;
  height: 2.125rem;
  position: absolute;
  right: -18px;
  top: 50%;
  opacity: 0;
  transition: all 0.3s;
  background: var(--white-100);
  border: 5px solid var(--white-000);;
  border-radius: 50%;
  box-sizing: border-box;
  filter: drop-shadow(6px 0px 10px rgba(0, 0, 0, 0.18));
  cursor: pointer;
  :hover {
    filter: drop-shadow(6px 0px 10px rgba(0, 0, 0, 0.2));
    transform: scale(1.2);
  }

  svg {
    transition: all 0.3s;
    transform: ${({ isToggle }) =>
      isToggle ? "rotate(0deg)" : "rotate(-180deg)"};
    color: var(--blue-900);
  }
`;
