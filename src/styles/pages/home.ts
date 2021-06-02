import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  overflow: hidden;

  @media (max-width: 700px) {
    row-gap: 30px;
  }
`;

export const Header = styled.header`
  background: var(--blue-900);
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 68.75rem;
    height: 6.5rem;
    margin: 0 auto;

    h1 {
      color: var(--white-000);
    }

    button {
      background: transparent;
      padding: 1rem 1.5rem;
      border: 1px solid var(--white-200);
      border-radius: 0.25rem;
      transition: all 0.2s;
      :hover {
        filter: brightness(0.8);
      }
      a {
        color: var(--white-000);
      }
    }
  }

  @media (max-width: 700px) {
    padding: 0rem 1rem;
    > div {
      /* border: 2px solid red; */
      width: 100%;
      h1 {
        max-width: 35px;
        height: 35px;
        overflow: hidden;
      }
    }
  }
`;

export const Block1 = styled.section`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  background: url("/assets/images/buble-right.svg") no-repeat right;
  background-position: 830px -267px;
`;

export const BlockContent = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 68.75rem;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0rem 1rem;
  }
`;

export const BlockContentLeft = styled.div`
  /* border: 2px solid red; */

  @media (max-width: 700px) {
    img {
      width: 100%;
    }
  }
`;

export const BlockContentRight = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  margin-top: 80px;

  > strong {
    height: 10.625rem;
    font-size: 2.6rem;
    text-align: right;
    color: var(--blue-900);
  }

  > button {
    border: none;
    padding: 1.25rem;
    border-radius: 0.25rem;
    background: var(--blue-900);
    transition: all 0.2s;
    width: 100%;
    max-width: 15.5rem;
    :hover {
      filter: brightness(0.9);
    }

    a {
      color: var(--white-000);
      font-size: 1.25rem;
      font-weight: 700;
    }
  }

  @media (max-width: 700px) {
    margin-top: 0px;
    align-items: center;
    row-gap: 20px;

    strong {
      width: 100%;
      height: 100%;
      font-size: 1.96rem;
      text-align: center;
    }
  }
`;

export const Block2 = styled.section`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  padding: 20px 0px;
  background: url("/assets/images/buble-left.svg") no-repeat left;
  background-position: -80px 0px;

  @media (max-width: 700px) {
    padding: 0;
  }
`;

export const BlockContent2 = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 68.75rem;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0rem 1rem;
    row-gap: 2rem;
  }
`;

export const BlockContentLeft2 = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;

  > strong {
    height: 10.625rem;
    font-size: 2.6rem;
    text-align: left;
    color: var(--blue-900);
  }

  @media (max-width: 700px) {
    margin-top: 0px;
    align-items: center;
    row-gap: 20px;

    strong {
      width: 100%;
      height: 100%;
      font-size: 1.96rem;
      text-align: center;
    }
  }
`;

export const BlockContentRight2 = styled.div`
  /* border: 2px solid red; */
  display: flex;
  height: 100%;

  > button {
    border: none;
    padding: 1.25rem;
    border-radius: 0.25rem;
    background: var(--blue-900);
    transition: all 0.2s;
    width: 100%;
    max-width: 15.5rem;
    :hover {
      filter: brightness(0.9);
    }

    a {
      color: var(--white-000);
      font-size: 1.25rem;
    }
  }

  @media (max-width: 700px) {
    img {
      width: 100%;
    }
  }
`;

export const Block3 = styled.section`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  padding: 20px 0px;
  background: url("/assets/images/buble-right.svg") no-repeat right;
  background-position: 830px -3px;

  @media (max-width: 700px) {
    padding: 0px 0px 20px 0px;
  }
`;

export const BlockContent3 = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 68.75rem;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    row-gap: 30px;
    padding: 0rem 1rem;
  }
`;

export const BlockContentLeft3 = styled.div`
  /* border: 2px solid red; */
  max-width: 600px;
  max-height: 600px;

  @media (max-width: 700px) {
    img {
      width: 100%;
    }
  }
`;

export const BlockContentRight3 = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 80px;

  > strong {
    height: 10.625rem;
    font-size: 2.6rem;
    text-align: center;
    color: var(--blue-900);
  }

  > button {
    border: none;
    padding: 1.25rem;
    border-radius: 0.25rem;
    background: var(--blue-900);
    transition: all 0.2s;
    width: 100%;
    max-width: 15.5rem;
    :hover {
      filter: brightness(0.9);
    }

    a {
      color: var(--white-000);
      font-size: 1.25rem;
      font-weight: 700;
    }
  }

  @media (max-width: 700px) {
    margin-top: 0px;
    align-items: center;
    row-gap: 20px;

    strong {
      width: 100%;
      height: 100%;
      font-size: 1.96rem;
      text-align: center;
    }
  }
`;

export const Footer = styled.footer`
  /* border: 2px solid red; */
  display: flex;
  height: 100%;
  background: var(--blue-900);

  section {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    max-width: 68.75rem;
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

    @media (max-width: 700px) {
      justify-content: center;
    }
  }
`;
