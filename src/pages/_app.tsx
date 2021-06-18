import { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";
import { GlobalStyles } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </AuthProvider>
  );
}

export default MyApp;
