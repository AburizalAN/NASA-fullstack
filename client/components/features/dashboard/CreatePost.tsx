"use client";

import { Disclosure, RadioGroup, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { HiPlus } from "react-icons/Hi";
import { Button, Combobox, ResizableTextArea } from "@/components/reusable";
import * as React from "react";
import { useSearchParams, usePathname } from "next/navigation";
import useSWR from "@/hooks/useSWR";
import useAxios from "@/hooks/useAxios";
import useFetch from "@/hooks/useFetch";
import dynamic from "next/dynamic";

const BlockNote = dynamic(() => import("@/components/BlockNote"), {
  ssr: false,
});

const axios = useAxios();

const CreatePost = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [title, setTitle] = React.useState<string | null>("");
  const [content, setContent] = React.useState<string | null>(null);

  const uri = `/posts/${id}`;
  const { data: post, mutate: mutatePost }: any = useSWR(uri, async () => {
    const res = await axios.get(uri);
    if (res.data.data) {
      return res.data.data;
    }
  });

  const { action: postService } = useFetch(
    async ({ id, data }: { id?: number; data: any }) => {
      const res = id
        ? await axios.put(`/posts/${id}`, data)
        : await axios.post("/posts", data);
      return res.data.data;
    }
  );

  const getHTML = (html: string) => {
    setContent(html);
  };

  const saveDraft = async () => {
    const data = {
      author_id: post.author_id,
      title,
      content,
    };
    const res = await postService({ id: post?.id, data });
    if (res) {
      mutatePost();
    }
  };

  const handlePublish = async () => {
    const data = {
      author_id: post.author_id,
      title,
      content,
      published: post?.published ? 0 : 1,
    };
    const res = await postService({ id: post?.id, data });
    if (res) {
      mutatePost();
    }
  };

  React.useEffect(() => {
    const _title = post?.title ?? undefined;
    if (_title) {
      setTitle(_title);
    }
  }, [post?.title]);

  return (
    <div className="flex h-full flex-col">
      <nav className="bg-white border-b border-slate-200 text-gray-500">
        <div className="flex py-3 px-4 items-center w-full mx-auto justify-end">
          <div className="flex gap-x-3">
            <button onClick={saveDraft} className="btn">
              {post?.published ? "Update" : "Save draft"}
            </button>
            <button onClick={handlePublish} className="btn btn-primary">
              {post?.published ? "Unpublish" : "Publish"}
            </button>
          </div>
        </div>
      </nav>
      <div className="flex h-full">
        <div className="flex-1 min-w-0 max-w-4xl mx-auto py-16 px-4">
          <div className="px-12 mb-8">
            <ResizableTextArea
              defaultValue={post?.title}
              placeholder="Untitled"
              onChange={(e: { target: { value: string } }) =>
                setTitle(e.target.value)
              }
              name="title"
              className="text-5xl font-bold outline-none no-underline border-none focus:ring-transparent block w-full overflow-hidden"
              maxlength={100}
            />
          </div>
          <BlockNote htmlValue={post?.content} getHTML={getHTML} />
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
                      <input type="checkbox" defaultChecked={true} />
                      <label className="text-sm ml-3 min-w-0 flex-1 text-gray-500">
                        test kategori 1
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" defaultChecked={true} />
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
    </div>
  );
};

export default CreatePost;
