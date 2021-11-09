// import { Container } from "./styles";

import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import Select from "../components/Select";

import * as S from "../styles/pages/resumo";

function Resumo() {
  return (
    <S.Container>
      <header>
        <Select title="Cartão" data={["Cartão 1", "Cartão 2"]} />
        <Select
          title="Data da fatura"
          data={["Fatura do dia 21/02/2021", "Fatura do dia 21/02/2021"]}
        />
      </header>

      <S.Content>
        <S.List>
          <S.ListTitles>
            <h3>Devedor</h3>
            <h3>Produto</h3>
            <h3>Loja</h3>
            <h3>Data compra</h3>
            <h3>Parcela</h3>
            <h3>Valor</h3>
          </S.ListTitles>

          <S.ListItem>
            <span>Alex</span>
            <span>PS5</span>
            <span>Kabum</span>
            <span>10/01/2021</span>
            <span>01/12</span>
            <span>R$ 416,58</span>
          </S.ListItem>
          <S.ListItem>
            <span>Francisco gambares pereira soares da silva</span>
            <span>Geladeira</span>
            <span>Casas Bahia</span>
            <span>10/01/2021</span>
            <span>04/12</span>
            <span>R$ 216,58</span>
          </S.ListItem>
        </S.List>

        <S.ResumeDebtors>
          <h2>Resumo por devedores</h2>
          <S.WrapperCards>
            <S.DebtorCard>
              <img src="/assets/images/fake-avatar.png" alt="avatar faker" />
              <p>Fulano de tal</p>
              <strong>R$ 299,00</strong>
            </S.DebtorCard>
            <S.DebtorCard>
              <img src="/assets/images/fake-avatar.png" alt="avatar faker" />
              <p>Fulano de tal</p>
              <strong>R$ 299,00</strong>
            </S.DebtorCard>
            <S.DebtorCard>
              <img src="/assets/images/fake-avatar.png" alt="avatar faker" />
              <p>Fulano de tal</p>
              <strong>R$ 299,00</strong>
            </S.DebtorCard>
            <S.DebtorCard>
              <img src="/assets/images/fake-avatar.png" alt="avatar faker" />
              <p>Fulano de tal</p>
              <strong>R$ 299,00</strong>
            </S.DebtorCard>
          </S.WrapperCards>
        </S.ResumeDebtors>
      </S.Content>
    </S.Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ["3cAuth.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
};

export default Resumo;
