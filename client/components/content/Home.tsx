import Masonry, { MasonryItem } from "@/components/Masonry";
import useWindowWidth from "@/hooks/useWindowWidth";
import useSWR from "@/hooks/useSWR";
import useAxios from "@/hooks/useAxios";
import { Spinner } from "@/components/reusable";
import Link from "next/link";
import moment from "moment";
import { RiArrowDropRightLine } from "react-icons/ri"

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
    <div className="bg-[#F9F9FF] h-full">
      <section className="max-w-6xl m-auto h-[500px] flex items-center">
        <div className="w-1/2 p-3">
          <h1 className="font-bold text-[50px] leading-[1.2] text-gray-800">
            <span>Hello World</span>
            <br />
            <span>My Name is </span><span className="text-indigo-700">Aburizal Adi Nugroho</span>
          </h1>
        </div>
      </section>
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
                      <div className="rounded-t-2xl flex items-center justify-center overflow-hidden">
                        <img
                          src={post.featured_image ?? "https://dummyimage.com/600x400/e3e3e3/fff.png&text=dummy+image"}
                          className="w-full h-full block"
                          loading="lazy"
                        />
                      </div>
                    </Link>
                    <div className="p-4 sm:p-6">
                      <div className="mb-4 flex gap-1">
                        {post.categories.map((category: any) => (
                          <span className="text-xs leading-none text-white py-1.5 px-3 font-semibold bg-indigo-400 rounded-full">
                            {category.title}
                          </span>
                        ))}
                      </div>
                      <Link href={`/blog/${post.slug}`} className="no-underline">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-600 line-clamp-2">
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
                        className="text-base text-gray-400 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      >  
                      </div>
                      <div className="mt-5">
                        <Link
                          className="mr-auto text-sm leading-none flex w-max items-center gap-1 no-underline text-indigo-300 font-semibold hover:text-indigo-500 transition-all duration-300"
                          href={`/blog/${post.slug}`}
                        >
                            Continue Reading <RiArrowDropRightLine className="text-[20px]" />
                        </Link>
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
