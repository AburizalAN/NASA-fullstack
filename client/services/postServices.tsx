import useAxios from "@/hooks/useAxios";
import useFetch from "@/hooks/useFetch";


export const usePostService = () => {
  const axios = useAxios();
  return useFetch(
    async ({ id, data }: { id?: number; data: any }) => {
      const res = id
        ? await axios.put(`/posts/${id}`, data)
        : await axios.post("/posts", data);
      return res.data.data;
    }
  );
}