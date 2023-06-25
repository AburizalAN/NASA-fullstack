import { BiChevronsRight } from "react-icons/bi";
import clsx from "clsx";

export const BreadcrumbItem = ({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <div className="flex items-center breadcrumb-item gap-x-[8px] text-xs">
      <div
        className={clsx("flex-1", active ? "text-gray-500" : "text-gray-300")}
      >
        {children}
      </div>
      <div className="text-gray-300">
        <BiChevronsRight />
      </div>
    </div>
  );
};

const Breadcrumb = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-x-[8px]">{children}</div>;
};

export default Breadcrumb;
