"use client";

import * as React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import MenuBar from "./MenuBar";
import sanitizeHtml from "sanitize-html";

interface Props {
  content?: string;
  onChange: (content: string) => void;
}

const RichTextEditor = ({ content, onChange = () => {} }: Props) => {
  const bubbleRef = React.useRef<HTMLDivElement>(null);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      BubbleMenu.configure({
        shouldShow: ({ editor, view, state, oldState, from, to }) => {
          return editor.isActive('image') ? false : true
        },
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      const _HTML = sanitizeHtml(editor.getHTML(), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
      });
      onChange(_HTML);
    },
  });

  React.useEffect(() => {
    if (editor) {
      const _HTML = sanitizeHtml(editor.getHTML(), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
      });
      onChange(_HTML);
    }
  }, [editor])

  return (
    <div className="richTextEditor">
      <MenuBar editor={editor} ref={bubbleRef} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
