import * as React from "react";
import clsx from "clsx";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";
import { usePathname } from 'next/navigation';
import { LuMoonStar, LuSun } from "react-icons/lu";
import Switch from "../reusable/Switch";

const Navbar = () => {
  const navRef = React.useRef<HTMLDListElement>(null);
  const [scrollPosition, setScrollPosition] = React.useState<number>(0);
  const pathname = usePathname();

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
    scrollPosition > 0 ? "shadow-lg shadow-indigo-700/5 bg-white" : ""
  );

  const btnClass = (curPath: string) => clsx("navbar-menu-item", pathname === curPath && "menu-active");

  return (
    <>
      <nav ref={navRef} className={mergedClass}>
        <div className="px-6">
          <div className="flex py-5 items-center justify-end w-full max-w-7xl mx-auto">
            <div className="flex gap-x-8 text-sm">
              <Link href="/blog">
                <button className={btnClass("/blog")}>Blog</button>
              </Link>
              <Link href="/">
                <button className={btnClass("/")}>About me</button>
              </Link>
              <Link href={"https://github.com/AburizalAN"} target="_blank" className="no-underline">
                <button className="navbar-menu-item flex items-center gap-1">
                  <span>Github</span>
                  <RiExternalLinkLine />
                </button>
              </Link>
            </div>
            <div className="flex items-center ml-auto">
              <span className="pr-5 mr-5 border-r-2 border-gray-200">
                <button className="leading-tight px-4 py-2 border-2 border-indigo-500/25 text-indigo-800/70 font-bold rounded-lg">
                  Download Resume
                </button>
              </span>
              <button title="Color Mode">
                <Switch
                  renderIcon={({ status }: { status: string }) => status === "left" ? <LuSun className="text-xl" /> : <LuMoonStar className="text-xl" />}
                  content={({ status }: { status: string }) => status === "left" ? "Light Mode" : "Dark Mode"} 
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="base-nav w-full"></div>
    </>
  );
};

export default Navbar;
