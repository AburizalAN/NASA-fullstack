"use client";

import Spline from '@splinetool/react-spline';

const Header = () => {
  return (
    <section className="max-w-6xl m-auto h-[600px] flex items-center">
      <div className="w-1/2 p-3">
        <h1 className="font-bold text-[50px] leading-[1.2] text-gray-800">
          <span>Hello World</span>
          <br />
          <span>My Name is </span><span className="text-indigo-700">Aburizal Adi Nugroho</span>
        </h1>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="w-[576px] h-[500px]">
          <Spline scene="https://prod.spline.design/dy5YV44ahejZvyM6/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}

export default Header;