import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";

const cookies = parseCookies();

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies["3cAuth.token"]}`,
  },
});

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error: AxiosError) => {
//     console.log("Meu console aqui: ", error?.response?.data.message);
//   },
// );
