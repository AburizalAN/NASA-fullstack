import Masonry, { MasonryItem } from "@/components/Masonry";
import useWindowWidth from "@/hooks/useWindowWidth";
import useSWR from "@/hooks/useSWR";
import useAxios from "@/hooks/useAxios";
import { Spinner } from "@/components/reusable";
import Link from "next/link";
import moment from "moment";
import { RiArrowDropRightLine } from "react-icons/ri";

const Articles = () => {
  const windowWidth = useWindowWidth();
  const cols = windowWidth < 641 ? 1 : windowWidth < 993 ? 2  : 3;

  const axios = useAxios();

  const uri = `/posts`;
  const { data: posts, isValidating: loadingPosts }: any = useSWR(uri, async() => {
    const res = await axios.get(uri);
    if (res.data.data) {
      return res.data.data;
    }
  });
  return (
    <div className="max-w-6xl m-auto mt-[120px]">
      <h2 className="font-bold mb-7">Articles</h2>
      {loadingPosts ? (
        <div className="w-full grid place-items-center">
          <Spinner width={40} height={40} withColor={true}/>
        </div>
      ) : posts?.length > 0 ? (
        <div className="grid grid-cols-3">
          {posts.map((post: any, i: number) => (
            <div key={i}> 
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
                  <div className="mb-4 flex gap-1">
                    {post.categories.map((category: any, i: number) => (
                      <span key={i} className="text-xs leading-none text-white py-1.5 px-3 font-semibold bg-indigo-400 rounded-full">
                        {category.title}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="no-underline">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-700 line-clamp-2">
                      {post.title}
                    </h1>
                  </Link>
                  <div className="flex items-center mb-2 mt-2 text-gray-400">
                    {/* <div className="w-[32px] h-[32px] rounded-full bg-slate-200 mr-3 flex-shrink-0"></div>
                    <div className="font-bold text-sm">John Doe</div>
                    <div className="border-l border-gray-300 mx-3 h-[1em]"></div> */}
                    <div className="font-bold text-sm">{moment(post.published_at).format("MMMM DD, YYYY")}</div>
                  </div>
                  <div
                    className="text-base text-gray-500 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  >  
                  </div>
                  <div className="mt-5">
                    <Link
                      className="mr-auto text-sm leading-none flex w-max items-center gap-1 no-underline text-indigo-400 font-semibold hover:text-indigo-500 transition-all duration-300"
                      href={`/blog/${post.slug}`}
                    >
                        Continue Reading <RiArrowDropRightLine className="text-[20px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full h-full grid place-items-center">
          No Data
        </div>
      )}
    </div>
  )
}

export default Articles;