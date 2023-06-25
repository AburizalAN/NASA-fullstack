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
          <Breadcrumb>
            <BreadcrumbItem>Test test</BreadcrumbItem>
            <BreadcrumbItem>Test test</BreadcrumbItem>
            <BreadcrumbItem active>Test test</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>
  )
}

export default withAuth(Dashboard);