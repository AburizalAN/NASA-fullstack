"use client";

import Header from "./Header";
import Articles from "./Articles";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import dynamic from "next/dynamic";

// const Header = dynamic(() => import("./Header"), { ssr: false }) as () => React.JSX.Element

export default function Home() {
  return (
    <div className="bg-[#F9F9FF] h-full overflow-hidden">
      <Header />
      <Experiences />
      <Projects />
      {/* <Articles />  */}
      <Contact />
    </div>
  );
}
