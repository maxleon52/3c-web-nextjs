// import { Container } from "./styles";

import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import Select from "../components/Select";

import * as S from "../styles/pages/resumo";

function Resumo() {
  return (
    <S.Container>
      <Select title="Cartão" data={["Cartão 1", "Cartão 2"]} />
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