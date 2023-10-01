"use client";

import Header from "./Header";
import Articles from "./Articles";
import Experiences from "./Experiences";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="bg-[#F9F9FF] h-full overflow-hidden">
      <Header />
      <Experiences />
      <Projects />
      <Articles /> 
    </div>
  );
}
