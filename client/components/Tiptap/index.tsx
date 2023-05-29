"use client";

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import Placeholder from '@tiptap/extension-placeholder'
import { Indent } from './indent'
import MenuBar from './MenuBar'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Color,
      TextStyle,
      StarterKit,
      Placeholder.configure({
        // Use different placeholders depending on the node type:
        placeholder: ({ node }: any): string => {
          if (node.type.name === 'heading') {
            return 'What’s the title?'
          }
          return "Write  something..."
        },
      }),
      Indent.configure({
        types: ['listItem', 'paragraph'],
        minLevel: 0,
        maxLevel: 8,
    }),
    ],
    content: '<h1></h1>',
  })

  return (
    <div className="border rounded-md h-full">
      <MenuBar editor={editor} />
      <EditorContent className="px-4 py-8" editor={editor} />
    </div>
  )
}

export default Tiptap