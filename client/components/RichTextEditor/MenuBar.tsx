"use client";

import * as React from "react";
import clsx from "clsx";
import useAxios from "@/hooks/useAxios";
import { useSearchParams } from "next/navigation";
import { BubbleMenu, FloatingMenu } from "@tiptap/react";
import {
  RiBold,
  RiItalic,
  RiUnderline,
  RiListUnordered,
  RiListOrdered,
  RiCodeFill,
  RiImageAddLine,
  RiText,
  RiArrowDropDownFill,
} from "react-icons/ri";
import Dropdown from "@/components/reusable/Dropdown";

const axios = useAxios();

interface MenuBarProps {
  editor: any;
}

const MenuBar = React.forwardRef<HTMLDivElement, MenuBarProps>(function (
  props,
  bubbleRef
) {
  const { editor, ...rest } = props;
  if (!editor) return null;

  const search = useSearchParams();
  const id = search.get("id");

  const addImage = React.useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.addEventListener(
      "change",
      async (e: any) => {
        const file = e.target.files[0];
        const url = await uploadByFile(file);
        if (url) {
          editor.chain().focus().setImage({ src: url }).run();
        }
      },
      { once: true }
    );
    input.click();
  }, [editor]);

  const uploadByFile = async (file: any) => {
    const data = new FormData();
    data.append("image", file);
    const res = await axios
      .post(`/posts/${id}/upload-image`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
    return res.file.url;
  };

  const menu = (
    <div className="richTextEditor__bubbleMenu">
      <Dropdown
        toggleOutside={false}
        list={[
          {
            onClick: () =>
              editor.chain().focus().toggleHeading({ level: 1 }).run(),
            content: "Heading 1",
          },
          {
            onClick: () =>
              editor.chain().focus().toggleHeading({ level: 2 }).run(),
            content: "Heading 2",
          },
          {
            onClick: () =>
              editor.chain().focus().toggleHeading({ level: 3 }).run(),
            content: "Heading 3",
          },
          {
            onClick: () => editor.chain().focus().setParagraph().run(),
            content: "Paragraph",
          },
        ]}
      >
        {({ openDropdown }) => (
          <button
            className={clsx(
              "btn-editor",
              "flex items-center justify-center"
            )}
            onClick={openDropdown}
          >
            <RiText />
            <div className="ml-1">
              <RiArrowDropDownFill />
            </div>
          </button>
        )}
      </Dropdown>
      <button
        className={clsx(
          "btn-editor",
          editor.isActive("bold") && "btn-editor-active"
        )}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <RiBold />
      </button>
      <button
        className={clsx(
          "btn-editor",
          editor.isActive("italic") && "btn-editor-active"
        )}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <RiItalic />
      </button>
      <button
        className={clsx(
          "btn-editor",
          editor.isActive("underline") && "btn-editor-active"
        )}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <RiUnderline />
      </button>
      <button
        className={clsx(
          "btn-editor",
          editor.isActive("code") && "btn-editor-active"
        )}
        onClick={() => editor.chain().focus().toggleCode().run()}
      >
        <RiCodeFill />
      </button>
      <button
        className={clsx(
          "btn-editor",
          editor.isActive("bulletList") && "btn-editor-active"
        )}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <RiListUnordered />
      </button>
      <button
        className={clsx(
          "btn-editor",
          editor.isActive("orderedList") && "btn-editor-active"
        )}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <RiListOrdered />
      </button>
      <button className={clsx("btn-editor")} onClick={addImage}>
        <RiImageAddLine />
      </button>
    </div>
  )

  return (
    <React.Fragment>
      {editor ? (
        <>
          <BubbleMenu
            editor={editor}
            tippyOptions={{ duration: 100 }}
          >
            {menu}
          </BubbleMenu>
          <FloatingMenu
            editor={editor}
            tippyOptions={{ duration: 100 }}
          >
            {menu}
          </FloatingMenu>
        </>
      ) : null}
    </React.Fragment>
  );
});

export default MenuBar;
