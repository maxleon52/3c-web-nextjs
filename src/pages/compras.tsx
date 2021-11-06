// import { Container } from "./styles";

import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

import { Container } from "../styles/pages/compras";

function Compras() {

  return (
    <Container>
      compras
    </Container>
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

export default Compras;
