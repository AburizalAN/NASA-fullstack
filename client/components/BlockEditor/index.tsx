"use client";

import * as React from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import useAxios from "@/hooks/useAxios";
import { useSearchParams } from "next/navigation";
import edjsHTML from "editorjs-html";
import DragDrop from "editorjs-drag-drop";

const edjsParser = edjsHTML();

const axios = useAxios();

const BlockEditor = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [blocks, setBlocks] = React.useState(null);
  const [markup, setMarkup] = React.useState<string[] | null>(null);
  const editorRef = React.useCallback((wrapper: any) => {
    if (wrapper === null) return;
    wrapper.innerHTML = "";
    const editorElement = document.createElement("div");
    wrapper.append(editorElement);
    const editor: any = new EditorJS({
      holder: editorElement,
      placeholder: 'Let`s write an awesome story!',
      tools: { 
        header: {
          class: Header, 
          inlineToolbar: true,
        }, 
        list: { 
          class: List, 
          inlineToolbar: true 
        },
        imeg: {
          class: Image,
          config: {
            uploader: {
              uploadByFile: (file: any) => {
                const data = new FormData();
                data.append("image", file);
                return axios.post(`/posts/${id}/upload-image`, data, {
                  headers: {
                    'content-type' : 'multipart/form-data'
                  }
                }).then((res) => res.data);
              },
            }
          }
        }
      },
      autofocus: true,
      onChange: async (api, event) => {
        try {
          const outputData = await editor.save();
          const _markup = edjsParser.parse(outputData);
          setMarkup(_markup);
        } catch (err: any) {
          console.log('Saving failed: ', err);
        }
      },
      onReady: () => {
        new DragDrop(editor);
      }
    });
  }, []);

  return (
    <div ref={editorRef}></div>
  )
}

export default BlockEditor;