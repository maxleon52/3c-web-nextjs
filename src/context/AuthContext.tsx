import { useState, createContext, ReactNode } from "react";
import Router from "next/router";
import { setCookie, parseCookies } from "nookies";

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
    const { "3cAuth.token": isToken } = parseCookies();

    if (isToken) {
      api.get("/user").then((response) => {
        const user = response.data;
        setUser(user);
      });
    }

    return;
  }, []);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post<ResponseData>("/session", {
        email,
        password,
      });

      const { user, token } = response.data;

      setCookie(undefined, "3cAuth.token", token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      setUser(user);

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      Router.push("/dashboard");
    } catch (err) {
      alert(err.response.data.message);
      console.log(err.response.data.message);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
