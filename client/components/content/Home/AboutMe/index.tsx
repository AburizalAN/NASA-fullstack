import * as React from "react";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import { FaReact, FaSass, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PropTypes {
  isIntersecting: boolean
}

const AboutMe = ({ isIntersecting = false }: PropTypes) => {
  const container = React.useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // animation for title
    if (isIntersecting) {
      gsap.from(".big-title-1", { opacity: 0, x: -100, ease: "power4.out", duration: 1.25 });
      gsap.from(".big-title-2", { opacity: 0, x: -100, ease: "power4.out", duration: 1.25, delay: .2 });
      gsap.from(".big-title-3", { opacity: 0, x: -100, ease: "power4.out", duration: 1.25, delay: .4 });
    
      // animation for paragraph
      gsap.from(".paragraph-1", { opacity: 0, x: -100, ease: "power4.out", duration: 1.25, delay: .6 });
      gsap.from(".paragraph-2", { opacity: 0, x: -100, ease: "power4.out", duration: 1.25, delay: .8 });
    
      // animation for button
      gsap.from(".button-1", { opacity: 0, y: 20, scale: .8, ease: "power4.out", duration: 1.4, delay: .8 });
      gsap.from(".button-2", { opacity: 0, y: 20, scale: .8, ease: "power4.out", duration: 1.4, delay: 1.2 });
  
      // box content
      gsap.from(".box-1", { opacity: 0, x: 50, y: 20, scale: .8, ease: "power4.out", duration: 1, delay: .6 })
      gsap.from(".box-2", { opacity: 0, x: 50, y: 20, scale: .8, ease: "power4.out", duration: 1, delay: .8 })
      gsap.from(".box-3", { opacity: 0, x: 50, y: 20, scale: .8, ease: "power4.out", duration: 1, delay: 1 })
    }
  }, { scope: container, dependencies: [isIntersecting], revertOnUpdate: true })
  
  return (
    <section ref={container} className="max-w-7xl m-auto">
      <div className="flex">
        <div className="flex-1 pr-10">
          <h1 className="font-bold text-[70px] leading-[1]">
            <span className="big-title-1 inline-block">I am <span className="text-indigo-800">design</span></span>
            <br />
            <span className="big-title-2 inline-block">& <span className="text-indigo-800">technology</span></span>
            <br />
            <span className="big-title-3 inline-block">enthusiast.</span>
          </h1>
          <p className="paragraph-1 mt-[2rem] mb-[1rem]">
            {`I like creating cool things on the Computer and Internet, such
            as design or Application that can run interactively.`}
          </p>
          <p className="paragraph-2">
            {`i’m really interested to work on tech industry as an Software
            Engineer, and i hope i’ll be able to provide something useful
            for people around me with technology.`}
          </p>
          <div className="mt-[2.4rem] pt-3 buttons flex gap-5">
            <a
              href="https://linkedin.com/in/aburizal-a-n"
              className="button-1 no-underline border border-indigo-800 hover:bg-indigo-800 px-5 py-1.5 text-indigo-800 hover:text-white rounded-[0.25rem] flex justify-center items-center gap-2"
            >
              <span>
                <RiLinkedinBoxFill />
              </span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/AburizalAN"
              className="button-2 no-underline border border-indigo-800 hover:bg-indigo-800 px-5 py-1.5 text-indigo-800 hover:text-white rounded-[0.25rem] flex justify-center items-center gap-2"
            >
              <span>
                <RiGithubFill />
              </span>
              <span>Github</span>
            </a>
          </div>
        </div>
        <div className="w-6/12 flex items-center justify-center pl-10">
          <div className="flex gap-5 items-center">
            <div className="flex flex-1 flex-col flex-wrap justify-center gap-5">
              <div className="box-1 bg-white/40 rounded-xl p-5 shadow-2xl shadow-indigo-500/20">
                <div className="mt-4 inline-flex gap-3">
                  <SiJavascript className="text-indigo-800 text-[30px]" />
                  <SiTypescript className="text-indigo-800 text-[30px]" />
                </div>
                <h4 className="font-bold mt-2">Javascript & TypeScript</h4>
                <p className="mt-2">
                  Strong fundamentals of Programming using JavaScript &
                  TypeScript
                </p>
              </div>
              <div className="box-2 bg-white/40 rounded-xl p-5 shadow-2xl shadow-indigo-500/20">
                <div className="mt-4 inline-flex gap-3">
                  <FaReact className="text-indigo-800 text-[30px]" />
                  <TbBrandNextjs className="text-indigo-800 text-[30px]" />
                </div>
                <h4 className="font-bold mt-2">React & Next.js</h4>
                <p className="mt-2">
                  Have deep understanding to React & Next.js
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col flex-wrap justify-center gap-5">
              <div className="box-3 bg-white/40 rounded-xl p-4 shadow-2xl shadow-indigo-500/20">
                <div className="mt-4 inline-flex gap-3">
                  <FaCss3Alt className="text-indigo-800 text-[30px]" />
                  <FaSass className="text-indigo-800 text-[30px]" />
                </div>
                <h4 className="font-bold mt-2">CSS Styling</h4>
                <p className="mt-2">
                  Able to create amazing website design using CSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
