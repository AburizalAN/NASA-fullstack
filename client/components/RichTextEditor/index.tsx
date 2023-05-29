"use client";

import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useCallback } from "react";

interface RichEditorProps {}

const RichTextEditor: React.FC<RichEditorProps> = () => {
  const wrapperRef = useCallback((wrapper: HTMLDivElement) => {
    if (!wrapper) return;
    wrapper.innerHTML = "";
    const options = {
      theme: "snow",
      placeholder: 'Write something...',
    }
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, options);
  }, []);

  return (
    <div>
      <div ref={wrapperRef}></div>
    </div>
  )
}

export default RichTextEditor;