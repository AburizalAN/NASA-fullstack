"use client";

import * as React from "react";

import Header from "./Header";
import Articles from "./Articles";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import IntersecObserver from "@/components/reusable/IntersecObserver";

export default function Home() {
  return (
    <div className="bg-[#f9f9ff] h-full overflow-hidden">
      <div className="px-6">
        <IntersecObserver component={Header} />
        <IntersecObserver component={AboutMe} />
        <IntersecObserver component={Experiences} />
        <IntersecObserver component={Projects} />
        <IntersecObserver component={Contact} />
        {/* <Articles />  */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
