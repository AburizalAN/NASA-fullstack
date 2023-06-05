"use client";

import Spline from '@splinetool/react-spline';

const Header = () => {
  return (
    <header className="flex h-[600px] relative">
      <div className="pl-4 my-auto">
        <h1 className="font-extrabold text-[70px] leading-[1.1] text-indigo-900">
          Hello World
          <br />
          My Name is
          <br />
          AburizalAN
        </h1>
      </div>
      <div className="flex-1">
        <div className="h-full">
          <Spline scene="https://prod.spline.design/QlVaiYN0MV-wzLAa/scene.splinecode" />
        </div>
      </div>
    </header>
  )
}

export default Header;