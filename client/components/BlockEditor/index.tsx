"use client";

import * as React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";

const BlockEditor = () => {
  const editorRef = React.useCallback((wrapper: any) => {
    if (wrapper === null) return;
    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new EditorJS({
      holder: editor,
      placeholder: 'Let`s write an awesome story!',
      tools: { 
        header: {
          class: Header, 
          inlineToolbar: ['link'] 
        }, 
        list: { 
          class: List, 
          inlineToolbar: true 
        },
        image: {
          class: Image,
          config: {
            uploader: {
              uploadByFile: () => {},
            }
          }
        }
      }, 
    });
  }, []);

  return (
    <div ref={editorRef}></div>
  )
}

export default BlockEditor;