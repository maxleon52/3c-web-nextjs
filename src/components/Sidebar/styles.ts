import styled from "styled-components";

interface ContainerProps {
  isToggle: boolean;
}
interface NavigationProps {
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
  height: 95vh;
  padding: ${({ isToggle }) => (isToggle ? "1.25rem 2rem" : "1rem")};
  transition: all 0.3s;
  background: #f4f4f2;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  margin: 16px;
  :hover {
    #toggle {
      opacity: 1;
    }
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: ${({ isToggle }) => (isToggle ? "unset" : "center")};
    padding-bottom: 0.625rem;
    border-bottom: 2px solid var(--blue-900);

    h1 {
      width: fit-content;
      color: var(--blue-900);
      font-weight: bold;
      font-size: 36px;
      line-height: 44px;
    }

    h2 {
      display: ${({ isToggle }) => (isToggle ? "flex" : "none")};
      color: var(--blue-900);
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      width: fit-content;
      flex: none;
    }
  }

  footer {
    button {
      display: flex;
      align-items: center;
      column-gap: 1.25rem;
      border: none;
      background: transparent;
      color: var(--blue-900);
      :hover {
        filter: opacity(0.8);
      }

      p {
        color: var(--blue-900);
        font-weight: bold;
        font-size: 28px;
        line-height: 34px;
      }
    }
  }
`;

export const Navigation = styled.section<NavigationProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isToggle }) => (isToggle ? "unset" : "center")};
  justify-content: center;
  height: 100%;

  > a {
    display: flex;
    column-gap: 1.25rem;
    width: fit-content;
    color: var(--blue-900);
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    transition: all 0.2s;
    :hover {
      filter: opacity(0.8);
    }

    p {
      display: ${({ isToggle }) => (isToggle ? "flex" : "none")};
    }
  }

  a + a {
    margin-top: 1.9375rem;
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
  border: 5px solid var(--white-000);
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
