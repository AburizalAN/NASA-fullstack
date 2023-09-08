"use client";

import Spline from '@splinetool/react-spline';

const Header = () => {
  return (
    <section className="max-w-6xl m-auto h-[500px] flex items-center">
      <div className="w-1/2 p-3">
        <h1 className="font-bold text-[50px] leading-[1.2] text-gray-800">
          <span>Hello World</span>
          <br />
          <span>My Name is </span><span className="text-indigo-700">Aburizal Adi Nugroho</span>
        </h1>
      </div>
      <div className="w-1/2">
        <Spline scene="https://prod.spline.design/WYbqjhvLspBf8CGw/scene.splinecode" />
      </div>
    </section>
  )
}

export default Header;