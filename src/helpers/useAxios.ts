import axios from "axios";

const ip = "http://mob.kansk-tc.ru";

export function useAxios() {
  function GET(method: string, params?: string, data?: object) {
    return axios.get(`http://mob.kansk-tc.ru/${method}/${params}`, data);
  }

  function POST(method: string, params?: string, data?: object) {
    return axios.post(`http://mob.kansk-tc.ru/${method}/${params}`, data);
  }

  return { GET, POST };
}
