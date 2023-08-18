import useAxios from "@/hooks/useAxios";
import useFetch from "@/hooks/useFetch";
import useSWR from "@/hooks/useSWR";

const axios = useAxios();

export const usePostService = () => {
  return useFetch(
    async ({ id, data }: { id?: number; data: any }) => {
      const res = id
        ? await axios.put(`/posts/${id}`, data)
        : await axios.post("/posts", data);
      return res.data.data;
    }
  );
}

export const useGetCategories = () => {
  const uri = '/posts/categories';
  const fetcher = async () => {
    const res = await axios.get(uri);
    if (res.data.data && res.status === 200) {
      return res.data.data;
    }
  };
  return useSWR(uri, fetcher);
}

export const useGetDetailPost = ({ slug, id }: { slug?: string | null, id?: string | number | null }) => {
  const uri = id ? `/posts/detail?id=${id}` : slug ? `/posts/detail?slug=${slug}` : null;
  const fetcher = async () => {
    const res = await axios.get(uri ?? "");
    if (res.data.data && res.status === 200) {
      return res.data.data;
    }
  }
  return useSWR(uri, fetcher);
}

export const useCreateCategory = () => {
  return useFetch(async (data: { title: string, slug?: string }) => {
    const res = await axios.post(`/posts/categories`, data);
    return res.data.data;
  })
}