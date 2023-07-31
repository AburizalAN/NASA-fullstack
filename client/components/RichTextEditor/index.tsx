"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'
import MenuBar from './MenuBar'

const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
    ],
    content: '<p>Hello World</p>'
  })
  return (
    <div className="richTextEditor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default RichTextEditor