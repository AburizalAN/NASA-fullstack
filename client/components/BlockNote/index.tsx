"use client";

import * as React from "react";
import { defaultBlockSchema } from "@blocknote/core";
import { BlockNoteView, createReactBlockSpec, useBlockNote, InlineContent, getDefaultReactSlashMenuItems } from "@blocknote/react";
import { RiImage2Fill } from "react-icons/ri";
import "@blocknote/core/style.css";

type RichEditorProps = {
  getMarkdown?: (data: string) => void;
  getHTML?: (data: string) => void;
  htmlValue?: string;
}

const BlockNote: React.FC<RichEditorProps> = ({ getMarkdown = () => {}, getHTML = () => {}, htmlValue }) => {
  const ImageBlock = createReactBlockSpec({
    type: "image",
    propSchema: {
      src: {
        default: "https://via.placeholder.com/1000",
      },
    },
    containsInlineContent: true,
    render: ({ block }) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={block.props.src}
          alt={"Image"}
          contentEditable={false}
        />
        <InlineContent />
      </div>
    ),
  });

  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      const saveBlocksAsMarkdown = async () => {
        console.log(editor.topLevelBlocks);
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
    blockSchema: {
      ...defaultBlockSchema,
      image: ImageBlock,
    },
    slashMenuItems: [ ...getDefaultReactSlashMenuItems() ],
  });

  React.useEffect(() => {
    if (editor && htmlValue) {
      const getBlocks = async () => {
        const blocks: any = await editor.HTMLToBlocks(htmlValue);
        editor?.replaceBlocks(editor.topLevelBlocks, blocks);
      };
      getBlocks();
    };
  }, [editor, htmlValue]);

  return (
    <div className="blocknote-editor">
      <BlockNoteView editor={editor} />
    </div>
  )
}

export default BlockNote;