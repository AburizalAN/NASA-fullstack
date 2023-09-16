"use client";

import Spline from '@splinetool/react-spline';

const Header = () => {
  return (
    <section className="max-w-6xl m-auto h-[600px] flex items-center">
      <div className="flex-1">
        <h1 className="font-bold text-[50px] leading-[1.2] text-gray-800">
          <span>Hello World</span>
          <br />
          <span>My Name is </span><span className="text-indigo-700">Aburizal Adi Nugroho</span>
        </h1>
      </div>
      <div className="flex-1 h-[500px]">
        <Spline className="w-full" scene="https://prod.spline.design/d1phPmr0qr33MhqE/scene.splinecode" />
      </div>
    </section>
  )
}

export default Header;