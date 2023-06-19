"use client";

import { MdOutlineVisibility } from "react-icons/md";
import * as React from "react";

const Dashboard = () => {
  const passRef = React.useRef<HTMLInputElement>(null);
  const togglePassword = () => {
    const passElement: any = passRef.current;
    const type: string = passElement.type;
    if (type === "password") {
      passElement.type = "text";
    } else {
      passElement.type = "password";
    }
  }

  return (
    <div className="h-full grid place-items-center">
      <div className="border border-gray-100 rounded-xl p-4 w-[500px] shadow-lg shadow-indigo-50">
        <h3 className="font-semibold text-center mb-3">Login</h3>
        <input placeholder="Username" type="text" className="input shadow-none mb-3" />
        <div className="input shadow-none flex items-center">
          <input
            ref={passRef}
            placeholder="Password"
            type="password"
            className="outline-none w-full flex-1"
          />
          <button onClick={togglePassword}>
            <MdOutlineVisibility
              size={16}
              className="text-gray-500"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;