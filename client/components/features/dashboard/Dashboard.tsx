import withAuth from "@/hocs/withAuth";
import SidebarDashboard from "@/components/sidebar/SidebarDashboard";
import NavbarDashboard from "@/components/Navbar/NavbarDashboard";
import Breadcrumb from "@/components/reusable/Breadcrumb";
import Dropdown from "@/components/reusable/Dropdown";
import Card from "@/components/reusable/Card";
import { BiTime, BiDotsHorizontalRounded } from "react-icons/bi";
import clsx from "clsx";
import Link from "next/link";
import useAxios from "@/hooks/useAxios";
import useSWR from "@/hooks/useSWR";
import moment from "moment";
import { Button } from "@/components/reusable";
import ModalDeletePost from "./ModalDeletePost";
import { useGetPosts } from "@/services/postServices";

const { Item: BreadcrumbItem } = Breadcrumb;

type PostProps = {
  title: string;
  published_at?: string;
  id: number;
  created_at: string;
}

const PostDropdown = ({ data }: { data: PostProps }) => {
  const { mutate: mutatePost }: { mutate: () => void } = useGetPosts();
  return (
    <Dropdown
      list={[
        { content: <Link href={`/dashboard/edit-post?id=${data.id}`}>Edit post</Link> },
        { content: (
            <ModalDeletePost id={data.id} callback={() => mutatePost()}>
              {({ openModal }) => (
                <div onClick={openModal}>Delete</div>
              )}
            </ModalDeletePost>
          ),
        },
      ]}
    >
      {({ openDropdown, toggle }) => (
        <button onClick={openDropdown} className="text-gray-400">
          <div className={clsx("transition-all", toggle ? "rotate-90" : "")}>
            <BiDotsHorizontalRounded size={20} />
          </div>
        </button>
      )}
    </Dropdown>
  );
};

const Dashboard = () => {
  
  const {
    data: posts,
    isValidating: loadingPosts,
  }: { data?: any; isValidating: boolean } = useGetPosts()

  return (
    <div className="flex h-full">
      <SidebarDashboard />
      <div className="flex-1 flex flex-col">
        <NavbarDashboard />
        <div className="flex-1 p-6 bg-slate-100">
          <div className="mb-6 flex justify-between items-center">
            <h4 className="font-semibold">Dashboard</h4>
            <Breadcrumb align="right">
              <BreadcrumbItem>Test</BreadcrumbItem>
              <BreadcrumbItem active>Test test</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <section className="flex gap-x-6">
            <div className="w-2/3">
              <Card>
                <div className="flex items-center">
                  <h6 className="text-gray-600 font-semibold">Blog Posts</h6>
                  <div className="ml-auto">
                    <Link href="/dashboard/create-post" className="no-underline text-black">
                      <Button size="sm" variant="outlined">Create New Post</Button>
                    </Link>
                  </div>
                </div>
                <div className="border-b border-gray-100 my-4"></div>
                <ul className="flex flex-col gap-y-4">
                  {posts?.length > 0
                    ? posts?.map((post: PostProps, i: number) => (
                        <li key={i} className="flex items-center">
                          <div className="flex-1 overflow-hidden">
                            <h4 className="leading-normal font-semibold text-gray-700 line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <div className="flex gap-3">
                              <div className="text-xs text-gray-400 flex items-center gap-x-1">
                                <BiTime />
                                <span>Created: </span>
                                <span>
                                  {post.created_at
                                    ? moment(post.created_at).format(
                                        "MMM DD, [at] hh:mm A"
                                      )
                                    : "-"}
                                </span>
                              </div>
                              <div className="text-xs text-gray-400 flex items-center gap-x-1">
                                <BiTime />
                                <span>Published: </span>
                                <span>
                                  {post.published_at
                                    ? moment(post.published_at).format(
                                        "MMM DD, [at] hh:mm A"
                                      )
                                    : "Not published yet"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="pl-5">
                            <PostDropdown data={post} />
                          </div>
                        </li>
                      ))
                    : null}
                </ul>
              </Card>
            </div>
            <div className="w-1/3">
              <Card>Test</Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
