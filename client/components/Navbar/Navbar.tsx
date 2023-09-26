import * as React from "react";
import clsx from "clsx";
import { Button } from "@/components/reusable";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";

const Navbar = () => {
  const navRef = React.useRef<HTMLDListElement>(null);
  const [scrollPosition, setScrollPosition] = React.useState<number>(0);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const docElement = document.documentElement;
      const position = docElement.scrollTop;
      setScrollPosition(position);
    });
    // const navElement = navRef.current;
    // if (navElement) {
    //   const height = navElement.clientHeight;
    //   const baseNav = document.querySelector<HTMLElement>(".base-nav");
    //   if (baseNav) {
    //     baseNav.style.minHeight = `${height}px`;
    //   }
    // }
  }, []);

  const mergedClass = clsx(
    "text-gray-500 z-50 w-full fixed transition-all duration-300 z-[100]",
    scrollPosition > 0 ? "navbar-shadow bg-white" : ""
  );

  return (
    <>
      <nav ref={navRef} className={mergedClass}>
        <div className="flex py-5 px-4 items-center justify-center w-full max-w-6xl mx-auto">
          <div className="flex gap-x-8 text-sm">
            <button className="navbar-menu-item">Blog</button>
            <button className="navbar-menu-item menu-active">About me</button>
            <button className="navbar-menu-item">Projects</button>
            <Link href={"https://github.com/AburizalAN"} target="_blank" className="no-underline">
              <button className="navbar-menu-item flex items-center gap-1">
                <span>Github</span>
                <RiExternalLinkLine />
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="base-nav w-full"></div>
    </>
  );
};

export default Navbar;
