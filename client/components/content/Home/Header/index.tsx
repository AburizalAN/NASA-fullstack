"use client";

import { FadeNimation, TextAnimation } from "@/components/reusable/Animation";
import { RiArrowDownDoubleFill } from "react-icons/ri";

import Illustration3D from "./Illustration3D";
import Illustration2 from "./Illustration2";

const Header = () => {
  return (
    <div className="max-w-6xl h-[700px] m-auto flex items-center relative">
      <div className="flex items-center w-full h-[600px] relative rounded-lg">
        <div className="w-5/12 z-50">
          <h1 className="text-[65px] leading-[1.1] font-bold mb-4">
            <TextAnimation text="Hello World" />
            <br />
            <TextAnimation text="my name is" />
          </h1>
          <FadeNimation delay={500}>
            <h1 className="bg-indigo-800 py-3 px-5 text-[70px] leading-[0.9] font-bold inline-block mb-3 text-white">
              Aburizal Adi
            </h1>
          </FadeNimation>
          <FadeNimation delay={700}>
            <h1 className="bg-indigo-800 py-3 px-5 text-[62px] leading-[0.9] font-bold inline-block text-white">Nugroho</h1>
          </FadeNimation>
          <FadeNimation delay={800}>
            <h5 className="mt-12 mb-4 font-bold text-[20px]">
              Front End Developer
            </h5>
            <div className="line"></div>
          </FadeNimation>
        </div>
        <div className="w-7/12 h-full relative">
          <div className="absolute illustration3d-wrapper h-[750px] w-[800px]">
            <Illustration3D />
          </div>
        </div>
      </div>
      {/* <button className="absolute bottom-[50px] right-[50%] translate-x-2/4 text-[50px] text-[#5b4ea1]">
        <RiArrowDownDoubleFill />
      </button> */}
    </div>
  )
}

export default Header;