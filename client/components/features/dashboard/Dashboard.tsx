import withAuth from "@/hocs/withAuth";
import SidebarDashboard from "@/components/sidebar/SidebarDashboard";
import NavbarDashboard from "@/components/Navbar/NavbarDashboard";
import Breadcrumb, { BreadcrumbItem } from "@/components/reusable/Breadcrumb";
import Dropdown from "@/components/reusable/Dropdown";
import { BiTime, BiDotsVertical, BiDotsHorizontal } from "react-icons/bi";
import clsx from "clsx";

const Dashboard = () => {
  return (
    <div className="flex h-full">
      <SidebarDashboard />
      <div className="flex-1 flex flex-col">
        <NavbarDashboard />
        <div className="flex-1 p-4 bg-slate-100">
          <div className="mb-6 flex justify-between items-center">
            <h4 className="font-semibold">Test test</h4>
            <Breadcrumb align="right">
              <BreadcrumbItem>Test test</BreadcrumbItem>
              <BreadcrumbItem>Test test</BreadcrumbItem>
              <BreadcrumbItem active>Test test</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <section>
            <div className="w-1/2 bg-white p-4 rounded-lg shadow-md shadow-[#00000008]">
              <h6>Blog Posts</h6>
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
                      <Dropdown
                        content={
                          <div className="flex flex-col w-56">
                            <a className="p-2 rounded-md text-sm hover:bg-violet-500 hover:text-white transition-all no-underline text-gray-500">
                              Test
                            </a>
                            <a className="p-2 rounded-md text-sm hover:bg-violet-500 hover:text-white transition-all no-underline text-gray-500">
                              Test
                            </a>
                          </div>
                        }
                      >
                        {({ openDropdown, toggle }) => (    
                          <button onClick={openDropdown} className="text-gray-400">
                            <div className={clsx("transition-all", toggle ? "rotate-90" : "")}><BiDotsHorizontal size={20} /></div>
                          </button>
                        )}
                      </Dropdown>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
