"use client";

import Header from "./Header";
import Articles from "./Articles";

export default function Home() {
  return (
    <div className="bg-[#F9F9FF] h-full overflow-hidden">
      <Header />
      <Articles /> 
    </div>
  );
}
