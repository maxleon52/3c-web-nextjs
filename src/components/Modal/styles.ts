import styled, { keyframes } from "styled-components";

const FadeInDownAnimation = keyframes`
  from {
     opacity: 0;
     transform: translate3d(0, -100%, 0);
   }
   to {
     opacity: 1;
     transform: none;
   }
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;

  @media (max-width: 700px) {
    padding: 0px 0.75rem;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  height: 29.688rem;
  min-width: 29.688rem;
  max-height: 90%;
  padding: 1rem;
  border-radius: 8px;
  background: var(--white-100);
  overflow-y: auto;
  animation-name: ${FadeInDownAnimation};
  animation-duration: 0.5s;

  header {
    border: 2px solid blue;
    display: flex;
    width: 100%;

    h1 {
      width: 100%;
      font-weight: bold;
      font-size: 1.625rem;
      line-height: 2rem;
    }

    button {
      padding: 0.5rem 0.75rem;
      border-radius: 4px;
      border: none;
      background: transparent;
      transition: all 0.2s;
      :hover {
        background: var(--white-200);

        svg {
          color: var(--blue-900);
        }
      }

      svg {
        font-size: 1.05rem;
        color: var(--grey-300);
        transition: all 0.2s;
      }
    }
  }

  @media (max-width: 700px) {
    min-width: 18.75rem;
  }
`;

export const Content = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow-x: hidden;

  .container-image {
    img {
      border: 2px solid blue;
      width: 100%;
    }
  }
`;
