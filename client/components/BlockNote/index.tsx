"use client";

import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

interface RichEditorProps {}

const BlockNote: React.FC<RichEditorProps> = () => {
  const editor: BlockNoteEditor | null = useBlockNote({
    onEditorContentChange: (editor) => {
      console.log("editor", editor.topLevelBlocks);
    },
  });

  return (
    <div>
      <BlockNoteView editor={editor} />
    </div>
  )
}

export default BlockNote;