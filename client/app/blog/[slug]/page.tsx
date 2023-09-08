import DetailBlog from "@/components/features/blog/DetailBlog";
import useAxios from "@/hooks/useAxios";

// eslint-disable-next-line react-hooks/rules-of-hooks
const axios = useAxios();

const getDetailPost = async ({ id, slug }: { slug?: string | null, id?: string | number | null }) => {
  try {
    const uri = id ? `/posts/detail?id=${id}` : slug ? `/posts/detail?slug=${slug}` : null;
    const res: any = await axios.get(uri ?? "");
    if (res.data.data && res.status === 200) {
      return res.data.data;
    }
  } catch (err: any) {
    console.log(err.response);
  }
  
}

const Index = async (props: any) => {
  const slug = props.params.slug;
  const post = await getDetailPost({ slug });
  return (
    <DetailBlog post={post} />
  );
}

export default Index;
