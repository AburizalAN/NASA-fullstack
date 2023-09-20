"use client";

import Spline from '@splinetool/react-spline';
import { FadeNimation, TextAnimation } from "@/components/reusable/Animation";

const Header = () => {
  return (
    <section className="max-w-6xl m-auto h-[680px] flex items-center">
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
      {/* <div className="flex-1 h-[500px]">
        <Spline className="w-full" scene="https://prod.spline.design/d1phPmr0qr33MhqE/scene.splinecode" />
      </div> */}
    </section>
  )
}

export default Header;