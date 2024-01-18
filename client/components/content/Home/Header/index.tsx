"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Illustration3D: () => React.JSX.Element = dynamic(
  () => import("./Illustration3D"),
  { ssr: false }
) as () => React.JSX.Element;

const FadeNimation: any = dynamic(
  () =>
    import("@/components/reusable/Animation").then(
      (module) => module.FadeNimation
    ),
  { ssr: false }
);

const TextAnimation: any = dynamic(
  () =>
    import("@/components/reusable/Animation").then(
      (module) => module.TextAnimation
    ),
  { ssr: false }
);

const Header = () => {
  const containerAnim = React.useRef<HTMLDivElement>(null);
  const box1 = React.useRef<HTMLDivElement>(null);
  const box2 = React.useRef<HTMLDivElement>(null);
  const obj3d = React.useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.from(box1.current, { scale: 0.9, opacity: 0, x: 70, delay: 0.5, ease: "power4.out", duration: 1.5 });
    gsap.from(box2.current, { scale: 0.9, opacity: 0, x: -70, delay: 0.5, ease: "power4.out", duration: 1.5 });
    gsap.from(obj3d.current, { opacity: 0, y: 70, delay: 0.7, ease: "power4.out", duration: 1.5 });
  }, { scope: containerAnim })

  return (
    <div className="max-w-7xl h-screen min-h-[700px] m-auto flex items-center relative">
      <div className="flex items-center w-full h-[600px] relative rounded-lg">
        <div className="w-5/12 z-50">
          <h1 className="text-[65px] leading-[1.1] font-bold mb-4">
            <TextAnimation text="Hello World" />
            <br />
            <TextAnimation text="my name is" />
          </h1>
          <FadeNimation delay={0.5}>
            <h1 className="bg-indigo-800 py-3 px-5 text-[70px] leading-[0.9] font-bold inline-block mb-3 text-white">
              Aburizal Adi
            </h1>
          </FadeNimation>
          <FadeNimation delay={0.7}>
            <h1 className="bg-indigo-800 py-3 px-5 text-[62px] leading-[0.9] font-bold inline-block text-white">
              Nugroho
            </h1>
          </FadeNimation>
          <FadeNimation delay={0.8}>
            <h5 className="mt-12 mb-4 font-bold text-[20px]">
              Front End Developer
            </h5>
            <div className="line"></div>
          </FadeNimation>
        </div>
        <div ref={containerAnim} className="w-7/12 h-full relative">
          <div className="absolute w-[500px] h-[500px] top-[calc(50%-50px)] left-[calc(50%+100px)] translate-x-[-50%] translate-y-[-50%]">
            <div ref={box1} className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/90 rounded-sm"></div>
            <div ref={box2} className="absolute top-[70px] right-[150px] w-[500px] h-[500px] rounded-sm border-[4px] border-indigo-900/80"></div>
          </div>
          <div ref={obj3d} className="absolute center-position h-[750px] w-[800px]">
            <Illustration3D />
          </div>
        </div>
      </div>
      {/* <button className="absolute bottom-[50px] right-[50%] translate-x-2/4 text-[50px] text-[#5b4ea1]">
        <RiArrowDownDoubleFill />
      </button> */}
    </div>
  );
};

export default Header;
