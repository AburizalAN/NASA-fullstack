import axios from "axios"
import Cookies from "js-cookie"

const token = Cookies.get("jwtToken") ?? "";

const useAxios = ({ headers }: any = {}) => {
  return axios.create({
    baseURL: process.env.apiBaseUrl,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization' : `${token}`,
      'Access-Control-Allow-Origin': '*',
      ...headers,
    }
  })
}

export default useAxios;