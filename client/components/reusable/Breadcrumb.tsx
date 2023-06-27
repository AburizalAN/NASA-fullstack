import { BiChevronsRight } from "react-icons/bi";
import clsx from "clsx";
import React from "react";

type BreadcrumbItemProps = {
  active?: boolean;
};

export const BreadcrumbItem = ({
  children,
  active,
}: React.PropsWithChildren<BreadcrumbItemProps>) => {
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

type BreadcrumbProps = {
  align?: string;
};

const Breadcrumb = ({
  children,
  align = "left",
}: React.PropsWithChildren<BreadcrumbProps>) => {
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

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
