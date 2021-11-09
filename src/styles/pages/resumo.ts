import styled from "styled-components";

export const Container = styled.div`
  /* border: 2px solid ; */
  display: flex;
  flex-direction: column;
  row-gap: 75px;

  header {
    select + select {
      margin-left: 32px;
    }
  }
`;

export const Content = styled.div`
  /* border: 1px solid red; */
  display: flex;
  column-gap: 54px;
  width: 100%;
  height: 100%;
`;
export const List = styled.div`
  /* border: 5px solid blue; */
`;

export const ListTitles = styled.div`
  display: grid;
  grid-template-columns: 230px 125px 125px 125px 125px 125px;
  border-bottom: 2px solid var(--blue-900);
  padding-bottom: 5px;
`;

export const ListItem = styled.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 230px 125px 125px 125px 125px 125px;
  margin-top: 32px;
`;
export const ResumeDebtors = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 54px;

  h2 {
    padding-bottom: 5px;
    border-bottom: 2px solid var(--blue-900);
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const DebtorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 160px;
  width: 171px;
  border-radius: 4px;
  background: var(--blue-900);

  img {
    margin-top: -35px;
    height: 90px;
    width: 90px;
    border-radius: 50%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  p {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: var(--white-000);
    margin-top: 26px;
  }
  strong {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: var(--white-000);
  }
`;

export const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px 32px;
`;
