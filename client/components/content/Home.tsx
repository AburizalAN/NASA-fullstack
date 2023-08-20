import Masonry, { MasonryItem } from "@/components/Masonry";
import useWindowWidth from "@/hooks/useWindowWidth";
import useSWR from "@/hooks/useSWR";
import useAxios from "@/hooks/useAxios";
import { Spinner } from "@/components/reusable";
import Link from "next/link";

const axios = useAxios();

export default function Home() {
  const windowWidth = useWindowWidth();
  const cols = windowWidth < 641 ? 1 : windowWidth < 993 ? 2  : 3;

  const uri = `/posts`;
  const { data: posts, isValidating: loadingPosts }: any = useSWR(uri, async() => {
    const res = await axios.get(uri);
    if (res.data.data) {
      return res.data.data;
    }
  });
  
  return (
    <div className="bg-indigo-50 h-full">
      <div className="max-w-6xl m-auto h-full">
        {loadingPosts ? (
          <div className="w-full h-full grid place-items-center">
            <Spinner width={40} height={40} withColor={true}/>
          </div>
        ) : posts?.length > 0 ? (
          <div className="pt-5">
            <Masonry cols={cols}>
              {posts.map((post: any, i: number) => (
                <MasonryItem key={i}> 
                  <div className="post-card-item">
                    <Link href={`/blog/${post.slug}`} className="no-underline">
                      <div className="rounded-t-lg flex items-center justify-center overflow-hidden">
                        <img
                          src={post.featured_image ?? "https://dummyimage.com/600x400/e3e3e3/fff.png&text=dummy+image"}
                          className="w-full h-full block"
                          loading="lazy"
                        />
                      </div>
                    </Link>
                    <div className="p-4 sm:p-6">
                      <Link href={`/blog/${post.slug}`} className="no-underline">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-4 line-clamp-2">
                          {post.title}
                        </h1>
                      </Link>
                      <div
                        className="text-sm text-gray-500 line-clamp-4"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      >  
                      </div>
                    </div>
                  </div>
                </MasonryItem>
              ))}
            </Masonry>
          </div>
        ) : (
          <div className="w-full h-full grid place-items-center">
            No Data
          </div>
        )}
      </div>
    </div>
  );
}
