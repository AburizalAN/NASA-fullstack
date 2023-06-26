import withAuth from "@/hocs/withAuth";
import SidebarDashboard from "@/components/sidebar/SidebarDashboard";
import NavbarDashboard from "@/components/Navbar/NavbarDashboard";
import Breadcrumb, { BreadcrumbItem } from "@/components/reusable/Breadcrumb";
import Dropdown from "@/components/reusable/Dropdown";
import Card from "@/components/reusable/Card";
import { BiTime, BiDotsHorizontalRounded } from "react-icons/bi";
import clsx from "clsx";
import Link from "next/link";

const PostDropdown = ({ postData }: { postData?: {} }) => {
  return (
    <Dropdown
      list={[
        { content: <Link href="/dashboard/create-post">Edit post</Link> },
        { content: "test2" }
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
  )
}

const Dashboard = () => {
  return (
    <div className="flex h-full">
      <SidebarDashboard />
      <div className="flex-1 flex flex-col">
        <NavbarDashboard />
        <div className="flex-1 p-4 md:p-6 bg-slate-100">
          <div className="mb-6 flex justify-between items-center">
            <h4 className="font-semibold">Test test</h4>
            <Breadcrumb align="right">
              <BreadcrumbItem>Test test</BreadcrumbItem>
              <BreadcrumbItem>Test test</BreadcrumbItem>
              <BreadcrumbItem active>Test test</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <section className="flex gap-x-6">
            <div className="w-1/2">
              <Card>
                <h6 className="text-gray-500">Blog Posts</h6>
                <div className="border-b border-gray-100 my-4"></div>
                <ul className="flex flex-col gap-y-4">
                  {[...Array(4)].map((_, i) => (
                    <li className="flex items-center">
                      <div className="flex-1">
                        <h4 className="leading-normal font-semibold text-gray-700">
                          Lorem Ipsum Dolor Sit Amet
                        </h4>
                        <div className="text-xs text-gray-400 flex items-center gap-x-1">
                          <BiTime />
                          <span>May 30, at 5:28 PM</span>
                        </div>
                      </div>
                      <div className="pl-5">
                        <PostDropdown />
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            <div className="w-1/2">
              <Card>Test</Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
