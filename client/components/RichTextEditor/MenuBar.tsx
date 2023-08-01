import * as React from "react"
import clsx from "clsx"
import useAxios from "@/hooks/useAxios"
import { useSearchParams } from "next/navigation"

const axios = useAxios()

interface MenuBarProps {
  editor: any;
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) return null;

  const search = useSearchParams()
  const id = search.get("id")

  const addImage = React.useCallback(() => {
    const input = document.createElement("input")
    input.type = "file"
    input.addEventListener("change", async (e: any) => {
      const file = e.target.files[0]
      const url = await uploadByFile(file);
      if (url) {
        editor.chain().focus().setImage({ src: url }).run()
      }
    }, { once: true })
    input.click()
  }, [editor])

  const uploadByFile = async (file: any) => {
    const data = new FormData()
    data.append("image", file)
    const res = await axios.post(`/posts/${id}/upload-image`, data, {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    }).then((res) => res.data)
    return res.file.url
  }

  return (
    <div className="richTextEditor__header">
      <button
        className={clsx("btn-editor", editor.isActive("bold") && "btn-editor-active")}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        Bold
      </button>
      <button
        className={clsx("btn-editor", editor.isActive("italic") && "btn-editor-active")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        Italic
      </button>
      <button
        className={clsx("btn-editor", editor.isActive("underline") && "btn-editor-active")}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        Underline
      </button>
      <button
        className={clsx("btn-editor", editor.isActive("heading", { level: 1 }) && "btn-editor-active")}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        Heading 1
      </button>
      <button
        className={clsx("btn-editor", editor.isActive("heading", { level: 2 }) && "btn-editor-active")}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        Heading 2
      </button>
      <button
        className={clsx("btn-editor", editor.isActive("heading", { level: 3 }) && "btn-editor-active")}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        Heading 3
      </button>
      <button
        className={clsx("btn-editor", editor.isActive("bulletList") && "btn-editor-active")}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        Bullet List
      </button>
      <button
        className={clsx("btn-editor", editor.isActive("orderedList") && "btn-editor-active")}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        Ordered List
      </button>
      <button
        className={clsx("btn-editor")}
        onClick={addImage}
      >
        Add Image
      </button>
    </div>
  )
}

export default MenuBar