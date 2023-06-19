"use client";

import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import * as React from "react";

const Dashboard = () => {
  const passRef = React.useRef<HTMLInputElement>(null);
  const [passVisible, setPassVisible] = React.useState<boolean>(false);
  const togglePassword = () => {
    const passElement: any = passRef.current;
    const type: string = passElement.type;
    if (type === "password") {
      passElement.type = "text";
      setPassVisible(true);
    } else {
      passElement.type = "password";
      setPassVisible(false);
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
            {!passVisible ? (
              <MdOutlineVisibility
                size={16}
                className="text-gray-500"
              />
            ) : (
              <MdOutlineVisibilityOff
                size={16}
                className="text-gray-500"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;