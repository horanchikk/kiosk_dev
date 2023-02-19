import axios from "axios";
import { dev } from "../store/devMode";

const ip = "https://mob.kansk-tc.ru/ktc-api/";

export const useAxios = {
  GET: (method: string, params?: string) => {
    return axios
      .get(`${ip}${method}${params ? "?" + params : ""}`)
      .then((r) => r.data)
      .catch((err) => {
        dev().log(`${ip}${method}${params ? "?" + params : ""}`, err.message);
        console.error("useAxios exception: ", err.message);
      });
  },
  POST: (method: string, params?: string) => {
    return axios
      .post(`${ip}${method}${params ? "?" + params : ""}`)
      .then((r) => r.data)
      .catch((err) => {
        dev().log(`${ip}${method}${params ? "?" + params : ""}`, err.message);
        console.error("useAxios exception: ", err.message);
      });
  },
};
