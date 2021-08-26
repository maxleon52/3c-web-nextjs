import { useState, createContext, ReactNode } from "react";
import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from "nookies";

import { api } from "../services/api";
import { useEffect } from "react";

type User = {
  name: string;
  email: string;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

type ResponseData = {
  user: User;
  token: string;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "3cAuth.token": token } = parseCookies();

    if (token) {
      api
        .get("/user")
        .then((response) => {
          setUser(response.data);
          console.log(response);
        })
        .catch(() => {
          destroyCookie(undefined, "3cAuth.token");

          Router.push("/");
        });
    }
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post<ResponseData>("/session", {
        email,
        password,
      });

      const { user, token } = response.data;

      setCookie(undefined, "3cAuth.token", token, {
        maxAge: 60 * 60 * 1, // 1 hour
        path: "/",
      });

      setUser(user);

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      Router.push("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Erro de conexão");
      // console.log(err.response);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
