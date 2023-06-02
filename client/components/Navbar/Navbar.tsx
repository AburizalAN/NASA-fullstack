import * as React from "react";
import clsx from "clsx";
import { Button } from "@/components/reusable";

const Navbar = () => {
  const navRef = React.useRef<HTMLDListElement>(null);
  const [scrollPosition, setScrollPosition] = React.useState<number>(0);

  React.useEffect(() => {
    document.addEventListener("scroll", () => {
      const docElement = document.documentElement;
      const position = docElement.scrollTop;
      setScrollPosition(position);
    });
    const navElement = navRef.current;
    if (navElement) {
      const height = navElement.clientHeight;
      const baseNav = document.querySelector<HTMLElement>(".base-nav");
      if (baseNav) {
        baseNav.style.minHeight = `${height}px`;
      }
    }
  }, []);

  const mergedClass = clsx(
    "bg-white text-gray-500 z-50 w-full fixed transition-all duration-300",
    scrollPosition > 0 ? "navbar-shadow" : ""
  );

  return (
    <>
      <nav ref={navRef} className={mergedClass}>
        <div className="flex py-4 px-4 items-center justify-center w-full max-w-6xl mx-auto">
          <div className="text-xl font-bold mr-12 flex-1 text-indigo-900">Logo</div>
          <div className="flex gap-x-8 text-sm">
            <button className="navbar-menu-item">Programming</button>
            <button className="navbar-menu-item">Tech Info</button>
            <button className="navbar-menu-item">News</button>
            <button className="navbar-menu-item menu-active">About me</button>
          </div>
        </div>
      </nav>
      <div className="base-nav w-full"></div>
    </>
  );
};

export default Navbar;
