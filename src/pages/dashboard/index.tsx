// import { Container } from "./styles";

import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <h1>
      Dashboard: {user?.email} | {user?.name}
    </h1>
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

export default Dashboard;
