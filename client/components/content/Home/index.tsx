"use client";

import Header from "./Header";
import Articles from "./Articles";
import About from "./About";

export default function Home() {
  return (
    <div className="bg-[#F9F9FF] h-full overflow-hidden">
      <Header />
      <About />
      {/* <Articles />  */}
    </div>
  );
}
