"use client";

import BlockNote from "@/components/BlockNote";
import { Disclosure, RadioGroup, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { HiPlus } from "react-icons/Hi";
import { Button, Combobox } from "@/components/reusable";
import * as React from "react";

const CreatePost = () => {
  return (
    <div className="flex h-full">
      <div className="flex-1 min-w-0 max-w-4xl mx-auto py-16 px-4">
        <div className="pl-9 mb-5">
          <input
            placeholder="Untitled"
            className="text-5xl font-bold outline-none no-underline border-none focus:ring-transparent"
            type="text"
            name="title"
          />
        </div>
        <BlockNote />
      </div>
      <div className="w-[350px] border-x">
        <div className="disclosure border-t-0">
          <Disclosure defaultOpen={true}>
            {({ open }) => (
              <>
                <Disclosure.Button className={`header ${open ? "open" : ""}`}>
                  <span>Summary</span>
                  <FaChevronDown
                    className={`transition-all ${
                      open ? "rotate-180 transform" : ""
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 p-3">
                  <div className="grid grid-cols-[minmax(0,_80px)_auto] gap-y-3 gap-x-5 break-words">
                    <div className="text-sm">Author</div>
                    <div>
                      <Combobox />
                    </div>
                    <div className="text-sm">Slug</div>
                    <div>
                      <input
                        className="w-full border shadow-md shadow-stone-100 rounded-md outline-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                        placeholder="Isi Slugz`"
                      />
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="disclosure">
          <Disclosure defaultOpen={true}>
            {({ open }) => (
              <>
                <Disclosure.Button className={`header ${open ? "open" : ""}`}>
                  <span>Category</span>
                  <FaChevronDown
                    className={`transition-all ${
                      open ? "rotate-180 transform" : ""
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 p-3">
                  <div className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                    />
                    <label className="text-sm ml-3 min-w-0 flex-1 text-gray-500">
                      test kategori 1
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked={true}
                    />
                    <label className="text-sm ml-3 min-w-0 flex-1 text-gray-500">
                      test kategori 1
                    </label>
                  </div>
                  <div className="mt-5">
                    <Button variant="outlined" color={null} block>
                      <div className="flex items-center justify-center">
                        <HiPlus />
                        <span>Tambah Kategori</span>
                      </div>
                    </Button>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;