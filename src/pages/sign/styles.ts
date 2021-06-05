import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  width: 475px;
  height: 475px;
  padding: 20px;
  background: var(--white-100);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  header {
    border-bottom: 2px solid var(--blue-900);
    width: 100%;
    max-width: 310px;
    padding: 10px;
    color: var(--blue-900);

    h1 {
      text-align: center;
      font-size: 36px;
      font-weight: 700;
    }
    p {
      text-align: center;
      font-size: 18px;
      font-weight: 700;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 100%;
  }

  a {
    color: var(--grey-300);
    font-weight: 900;
  }
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  position: relative;
  width: 100%;
  max-width: 238px;
  color: var(--grey-300);

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: var(--white-100);
    height: fit-content;
    padding: 0px 10px;
    position: absolute;
    top: -12px;
  }
`;
