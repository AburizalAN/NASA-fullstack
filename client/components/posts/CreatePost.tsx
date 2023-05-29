"use client";

import BlockNote from "../BlockNote";
import { Disclosure, RadioGroup, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import * as React from "react";

const CreatePost = () => {
  let [plan, setPlan] = React.useState("startup");

  return (
    <div className="flex h-full">
      <div className="basis-3/4 w-full max-w-[75%] py-16 px-4">
        <div className="pl-12 mb-5">
          <input
            placeholder="Untitled"
            className="text-5xl font-bold outline-none border-none no-underline"
            type="text"
            name="title"
          />
        </div>
        <BlockNote />
      </div>
      <div className="basis-1/4 max-w-[25%] border-x">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="p-3 flex justify-between items-center w-full border-b">
                <span>Category</span>
                <FaChevronDown className={`transition-all ${open ? "rotate-180 transform" : ""}`} />
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 p-2">
                <RadioGroup value={plan} onChange={setPlan}>
                  <RadioGroup.Option value="startup">
                    {({ checked }) => (
                      <span className={checked ? "bg-blue-200" : ""}>Startup</span>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option value="business">
                    {({ checked }) => (
                      <span className={checked ? "bg-blue-200" : ""}>Business</span>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option value="enterprise">
                    {({ checked }) => (
                      <span className={checked ? "bg-blue-200" : ""}>
                        Enterprise
                      </span>
                    )}
                  </RadioGroup.Option>
                </RadioGroup>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default CreatePost;
