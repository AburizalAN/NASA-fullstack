"use client";

import * as React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight';
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import MenuBar from "./MenuBar";
import sanitizeHtml from "sanitize-html";

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)

interface Props {
  content?: string;
  onChange?: (content: string) => void;
  isEditable?: boolean;
}

const RichTextEditor = ({ content, onChange = () => {}, isEditable = true }: Props) => {
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
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      const _HTML = sanitizeHtml(editor.getHTML(), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
      });
      onChange(_HTML);
    },
    editable: isEditable,
  });

  React.useEffect(() => {
    if (editor) {
      const _HTML = sanitizeHtml(editor.getHTML(), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
      });
      onChange(_HTML);
    }
  }, [editor]);

  return (
    <div className="richTextEditor">
      <MenuBar editor={editor} ref={bubbleRef} />
      <EditorContent editor={editor} spellCheck={false} />
    </div>
  );
};

export default RichTextEditor;
