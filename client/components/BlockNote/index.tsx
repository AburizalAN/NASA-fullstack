"use client";

import * as React from "react";
import { BlockNoteEditor, Block } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

type RichEditorProps = {
  getMarkdown?: (data: string) => void;
  getHTML?: (data: string) => void;
  htmlValue?: string;
}

const BlockNote: React.FC<RichEditorProps> = ({ getMarkdown = () => {}, getHTML = () => {}, htmlValue }) => {
  
  const editor: BlockNoteEditor | null = useBlockNote({
    onEditorContentChange: (editor) => {
      const saveBlocksAsMarkdown = async () => {
        const markdown: string = 
          await editor.blocksToMarkdown(editor.topLevelBlocks);
        getMarkdown(markdown);
      };
      const saveBlocksAsHTML = async () => {
        const html: string = await editor.blocksToHTML(editor.topLevelBlocks);
        getHTML(html);
      };
      Promise.all([saveBlocksAsMarkdown(), saveBlocksAsHTML()]);
    },
  });

  React.useEffect(() => {
    if (!htmlValue) return;
    if (!editor) return;
    const getBlocks = async () => {
      const blocks: Block[] = await editor.HTMLToBlocks(htmlValue);
      editor.replaceBlocks(editor.topLevelBlocks, blocks);
    };
    getBlocks();
  }, [editor, htmlValue])

  return (
    <div>
      <BlockNoteView editor={editor} />
    </div>
  )
}

export default BlockNote;