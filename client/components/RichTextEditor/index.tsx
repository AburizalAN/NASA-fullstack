"use client"

import * as React from "react"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'
import MenuBar from './MenuBar'

interface Props {
  content?: string;
  onChange: (content: string) => void;
}

const RichTextEditor = ({ content, onChange = () => {} }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
    ],
    content: content,
    onUpdate: ({ editor }) => {
      const _HTML = editor.getHTML()
      onChange(_HTML)
    },
  });

  return (
    <div className="richTextEditor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}

export default RichTextEditor