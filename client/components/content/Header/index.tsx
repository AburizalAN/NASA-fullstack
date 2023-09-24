"use client";

import { FadeNimation, TextAnimation } from "@/components/reusable/Animation";
import Illustration3D from "./Illustration3D";

const Header = () => {
  return (
    <div className="max-w-6xl h-[800px] m-auto flex items-center relative">
      <div className="w-5/12">
        <h1 className="text-[60px] leading-[1.1] font-bold mb-3">
          <TextAnimation text="Hello World," />
          <br />
          <TextAnimation text="My Name is" />
        </h1>
        <FadeNimation delay={500}>
          <h1 className="bg-indigo-800 py-3 px-5 text-[60px] leading-[0.9] font-bold inline-block mb-3 text-white">
            Aburizal Adi
          </h1>
        </FadeNimation>
        <FadeNimation delay={700}>
          <h1 className="bg-indigo-800 py-3 px-5 text-[60px] leading-[0.9] font-bold inline-block text-white">Nugroho</h1>
        </FadeNimation>
        <FadeNimation delay={800}>
          <h5 className="mt-10 font-bold text-[20px]">
            Front End Developer
          </h5>
          <div className="line"></div>
        </FadeNimation>
      </div>
      <div className="w-7/12 h-full relative">
        <div className="absolute illustration3d-wrapper h-full w-[1000px]">
          <Illustration3D />
        </div>
      </div>
    </div>
  )
}

export default Header;