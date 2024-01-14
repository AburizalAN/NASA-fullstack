"use client"

import * as React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MyComponent() {
  const container = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".box", { rotate: -360, duration: 5 });
  }, { scope: container })

  return (
    <div
      className="flex items-center justify-center h-screen flex-col"
    >
      <div ref={container}>
        <div
          className="box"
          style={{
            width: 80,
            height: 80,
            background: '#ff6d6d',
            borderRadius: 8,
          }}
        />
      </div>
      <div className="mt-5">
        <div
          className="box"
          style={{
            width: 80,
            height: 80,
            background: '#ff6d6d',
            borderRadius: 8,
          }}
        />
      </div>
    </div>
  )
}