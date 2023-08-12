import useAxios from "@/hooks/useAxios";
import useFetch from "@/hooks/useFetch";
import useSWR from "@/hooks/useSWR";

const axios = useAxios();

export const useGetImages = (params: { page?: number | string, limit?: number | string }, isFetching: boolean = true) => {
  const uri: string | null = isFetching ? `/posts/images` : null;
  return useSWR(uri, async () => {
    const res = await axios.get(uri ?? "", { params });
    if (res.data.data) {
      return res.data.data;
    }
  })
}

export const useUploadImage = () => {
  const fetcher = async (file: any) => {
    const data = new FormData();
    data.append("image", file);
    const res = await axios
      .post(`/posts/upload-image`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
    return res.file.url;
  }
  return useFetch(fetcher);
}
