import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    row-gap: 30px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 8rem;

  @media (max-width: 768px) {
    row-gap: 6rem;
  }
`;

export const Header = styled.header`
  background: var(--blue-900);
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 83.75rem;
    height: 6.5rem;
    margin: 0 auto;

    h1 {
      color: var(--white-000);
    }

    button {
      background: transparent;
      padding: 0.5rem 1rem;
      border: 1px solid var(--white-200);
      border-radius: 0.25rem;
      transition: all 0.2s;
      color: var(--white-000);

      :hover {
        filter: brightness(0.8);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0rem 1rem;
    > div {
      width: 100%;
      h1 {
        max-width: 35px;
        height: 35px;
        overflow: hidden;
      }
    }
  }
`;

export const BlockRight = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const BlockLeft = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const BlockContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 4rem;
  width: 100%;
  max-width: 41.563rem;
  height: 100%;

  @media (max-width: 768px) {
    margin-top: 0px;
    align-items: center;
    row-gap: 20px;
  }

  > strong {
    font-size: 4rem;
    line-height: 4.875rem;
    text-align: right;
    color: var(--blue-900);
    @media (max-width: 768px) {
      line-height: 2rem;
      width: 100%;
      height: 100%;
      font-size: 1.96rem;
      text-align: center;
    }
  }

  > button {
    border: none;
    padding: 1.25rem;
    border-radius: 0.25rem;
    background: var(--blue-900);
    transition: all 0.2s;
    width: 100%;
    max-width: 15.5rem;
    color: var(--white-000);
    font-size: 1.25rem;
    font-weight: 700;
    :hover {
      filter: brightness(0.9);
    }
  }
  img {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const BlockContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 4rem;
  width: 100%;
  max-width: 38.563rem;
  height: 100%;

  > strong {
    font-size: 4rem;
    line-height: 78px;
    text-align: left;
    color: var(--blue-900);
    @media (max-width: 768px) {
      line-height: 2rem;
      width: 100%;
      height: 100%;
      font-size: 1.96rem;
      text-align: center;
    }
  }

  > img {
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const BlockContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5.125rem;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0rem 1rem;
    row-gap: 2rem;
  }

  #img-buble1 {
    position: absolute;
    top: -200px;
    right: -140px;
    z-index: -1;
    @media (max-width: 768px) {
      display: none;
    }
  }
  #img-buble2 {
    position: absolute;
    top: -144px;
    left: -140px;
    z-index: -1;
    @media (max-width: 768px) {
      display: none;
    }
  }
  #img-buble3 {
    position: absolute;
    top: 0px;
    right: -140px;
    z-index: -1;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  padding: 0.5rem 0rem;
  background: var(--blue-900);

  section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    max-width: 83.75rem;
    height: 6.5rem;
    margin: 0 auto;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white-000);
      padding: 0.5rem;
      border: 1px solid var(--white-000);
      border-radius: 4px;
      transition: all 0.2s;
      :hover {
        filter: brightness(0.9);
      }
    }
    a + a {
      margin-left: 10px;
    }

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  row-gap: 1.25rem;
  width: 100%;
  max-width: 29.688rem;
  padding: 1.25rem;
  background: var(--white-100);
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }

  > div {
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
    transition: all 0.2s;
    :hover {
      filter: brightness(0.9);
    }
  }
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--grey-300) !important;
  position: relative;
  width: 100%;
  max-width: 238px;
  padding: 0px !important;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--grey-300);
    background: var(--white-100);
    height: fit-content;
    padding: 0px 10px;
    position: absolute;
    top: -11px;
  }
`;
