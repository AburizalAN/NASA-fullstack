"use client";

import { Disclosure } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { HiPlus } from "react-icons/Hi";
import { Button, Combobox, ResizableTextArea } from "@/components/reusable";
import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import ModalAddCategory from "./ModalAddCategory";
import FeaturedImage from "./FeaturedImage";
import { usePostService, useGetCategories, useGetDetailPost } from "@/services/postServices";
import { useGetUserInfo } from "@/services/authService";
import message from "@/components/reusable/message";
import Skeleton from 'react-loading-skeleton';
import RichTextEditor from "@/components/RichTextEditor";

const CreatePost = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [title, setTitle] = React.useState<string | null>("");
  const [content, setContent] = React.useState<string | null>(null);
  const [postCategories, setPostCategories] = React.useState<any>([]);
  const [slug, setSlug] = React.useState<any>("");
  const [url, setUrl] = React.useState<string | null>(null);
  const { data: me, isValidating: loadingMe }: any = useGetUserInfo();
  const { data: post, mutate: mutatePost, isValidating: loadingPost }: any = useGetDetailPost({ id })
  const { data: categories, isValidating: loadingCategories, mutate: mutateCategories }: any = useGetCategories();

  const { action: postService } = usePostService();

  React.useEffect(() => {
    if (post?.categories) {
      setPostCategories(post.categories)
    }
  }, [post?.categories]);

  React.useEffect(() => {
    const _title = post?.title ?? undefined;
    if (_title) {
      setTitle(_title);
    }
  }, [post?.title]);

  React.useEffect(() => {
    if (post?.slug) {
      setSlug(post?.slug);
    }
  }, [post?.slug])

  React.useEffect(() => {
    if (post?.featured_image) {
      setUrl(post?.featured_image)
    }
  }, [post?.featured_image])

  const getHTML = (html: string) => {
    setContent(html);
  };

  const saveDraft = async () => {
    try {
      const data = {
        author_id: me?.id,
        title,
        content,
        categories: postCategories?.map((item: any) => item.id) ?? null,
        slug: slug?.trim().length === 0 ? null : slug,
        featured_image: url,
      };
      const res = await postService({ id: post?.id, data });
      if (res) {
        mutatePost();
        message({
          type: "success",
          content: "Success",
          duration: 2000,
        });
      }
      if (!id) router.push(`/dashboard/edit-post?id=${res.id}`)
    } catch (err: any) {
      message({
        type: "error",
        content: err?.response?.data?.message,
        duration: 2000,
      });
    }
  };

  const handlePublish = async () => {
    try {
      const data = {
        author_id: post.author_id,
        title,
        content,
        published: post?.published ? 0 : 1,
        slug: slug?.trim().length === 0 ? null : slug,
      };
      const res = await postService({ id: post?.id, data });
      if (res) {
        mutatePost();
        message({
          type: "success",
          content: "Success",
          duration: 2000,
        });
      }
    } catch (err: any) {
      message({
        type: "error",
        content: err?.response?.data?.message,
        duration: 2000,
      });
    }
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const categoryId = parseInt(e.target.value);
    const categoryIndex = postCategories?.findIndex((item: any) => item?.id === categoryId);
    if (categoryIndex !== -1) {
      setPostCategories((prev: any) => {
        const newPostCategories = structuredClone(prev);
        newPostCategories.splice(categoryIndex, 1);
        return newPostCategories;
      });
    } else {
      setPostCategories((prev: any) => {
        const category = categories?.find((item: any) => item?.id === categoryId);
        const newPostCategories = [ ...prev, category ];
        return newPostCategories;
      });
    }
  };

  const handleChangeSlug = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSlug(value);
  };

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
          <div className="mb-8">
            <ResizableTextArea
              defaultValue={post?.title}
              placeholder="Untitled"
              onChange={(e: { target: { value: string } }) =>
                setTitle(e.target.value)
              }
              name="title"
              className="text-5xl leading-snug font-bold outline-none no-underline border-none focus:ring-transparent block w-full overflow-auto"
              maxLength={100}
              disableEnter
              // maxRows={2}
            />
          </div>
          {!loadingPost ? (
            <RichTextEditor content={post?.content} onChange={getHTML} />
          ) :(
            <>
              <Skeleton count={5} height={30} containerClassName="leading-[3]" />
              <Skeleton count={1} height={30} width="80%" containerClassName="leading-[3]" />
              <Skeleton count={1} height={30} width="40%" containerClassName="leading-[3]" />
            </>
          )}
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
                      {/* <div className="text-sm">Author</div>
                      <div>
                        <Combobox />
                      </div> */}
                      <div className="text-sm">Slug</div>
                      <div>
                        <input
                          value={slug}
                          onChange={handleChangeSlug}
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
                    {categories?.map((category: any, i: number) => (
                      <div key={i} className="flex items-center mb-2 last:mb-0">
                        <input
                          value={category.id}
                          onChange={handleChangeCategory}
                          type="checkbox"
                          checked={
                            postCategories?.find(
                              (item: any) => item?.id === category.id
                            )
                              ? true
                              : false
                          }
                        />
                        <label className="text-sm ml-3 min-w-0 flex-1 text-gray-500">
                          {category.title}
                        </label>
                      </div>
                    ))}
                    <div className="mt-5">
                      <ModalAddCategory
                        callback={() => {
                          mutatePost();
                          mutateCategories();
                        }}
                      >
                        {({ openModal }) => (
                          <Button
                            onClick={openModal}
                            variant="outlined"
                            block
                          >
                            <div className="flex items-center justify-center">
                              <HiPlus />
                              <span>Tambah Kategori</span>
                            </div>
                          </Button>
                        )}
                      </ModalAddCategory>
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
                    <span>Featured Image</span>
                    <FaChevronDown
                      className={`transition-all ${
                        open ? "rotate-180 transform" : ""
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 p-3">
                    <FeaturedImage
                      post={post}
                      mutatePost={mutatePost}
                      loadingPost={loadingPost}
                      url={url}
                      setUrl={setUrl}
                    />
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
