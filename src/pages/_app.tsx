import { AppProps } from "next/app";
import { parseCookies } from "nookies";
import { AuthProvider } from "../context/AuthContext";

import Sidebar from "../components/Sidebar";

import { GlobalStyles } from "../styles/global";

import "../styles/pages/app.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { ["3cAuth.token"]: token } = parseCookies();

  return (
    <AuthProvider>
      <GlobalStyles />
      <div className="container">
        {!!token === true && <Sidebar />}
        <main className="container__main">
          <Component {...pageProps} />
        </main>
      </div>
    </AuthProvider>
  );
}

export default MyApp;
