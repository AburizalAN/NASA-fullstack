import clsx from "clsx"
import * as React from "react"

interface MenuBarProps {
  editor: any;
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) return null;

  const addImage = React.useCallback(() => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

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