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

const Breadcrumb = ({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: string;
}) => {
  return (
    <div
      className={clsx(
        "flex gap-x-[8px]",
        align === "left"
          ? "justify-start"
          : align === "right"
          ? "justify-end"
          : ""
      )}
    >
      {children}
    </div>
  );
};

export default Breadcrumb;
