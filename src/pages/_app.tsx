import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { parseCookies } from "nookies";
import { AuthProvider } from "../context/AuthContext";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import { GlobalStyles } from "../styles/global";

import * as S from "../styles/pages/app";

function MyApp({ Component, pageProps }: AppProps) {
  const { ["3cAuth.token"]: token } = parseCookies();

  return (
    <AuthProvider>
      <GlobalStyles />
      <S.Container isToken={!!token}>
        {!!token === true && <Sidebar />}

        <section>
          {!!token === true && <Header />}
          <main>
            <Component {...pageProps} />
          </main>
        </section>
      </S.Container>
    </AuthProvider>
  );
}

export default MyApp;
