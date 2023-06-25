import withAuth from "@/hocs/withAuth"
import SidebarDashboard from '@/components/sidebar/SidebarDashboard';
import NavbarDashboard from "@/components/Navbar/NavbarDashboard";
import Breadcrumb, { BreadcrumbItem } from "@/components/reusable/Breadcrumb";

const Dashboard = () => {
  return (
    <div className="flex h-full">
      <SidebarDashboard />
      <div className="flex-1 flex flex-col">
        <NavbarDashboard />
        <div className="flex-1 p-4 bg-slate-100">
          <div className="mb-4 flex justify-between items-center">
            <h4 className="font-semibold">Test test</h4>
            <Breadcrumb align="right">
              <BreadcrumbItem>Test test</BreadcrumbItem>
              <BreadcrumbItem>Test test</BreadcrumbItem>
              <BreadcrumbItem active>Test test</BreadcrumbItem>
            </Breadcrumb>
          </div>

        </div>
      </div>
    </div>
  )
}

export default withAuth(Dashboard);