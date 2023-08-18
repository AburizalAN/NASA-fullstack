import useSWR from "@/hooks/useSWR";
import useAxios from "@/hooks/useAxios";

const axios = useAxios();

export const useGetUserInfo = () => {
  return useSWR("get-user-info", async () => {
    try {
      const res = await axios.get('/auth/me')
      if (res.data.data && res.status === 200) {
        return res.data.data;
      }
    } catch (err) {
      throw err;
    }
  })
}