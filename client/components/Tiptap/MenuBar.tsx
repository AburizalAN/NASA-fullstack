import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaCode,
  FaParagraph,
  FaList,
  FaListOl,
  FaQuoteRight,
  FaUndo,
  FaRedo,
  FaRemoveFormat
} from 'react-icons/fa'
import {
  RiCodeBoxLine,
  RiSeparator,
  RiTextWrap,
  RiH1,
  RiH2,
  RiH3,
  RiH4,
  RiH5,
  RiH6,
} from "react-icons/ri";

const MenuBar = ({ editor } : any) => {
  if (!editor) {
    return null
  }

  return (
    <div className="p-4 flex gap-x-2 gap-y-2 flex-wrap bg-slate-100">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={`${editor.isActive('bold') ? 'btn-editor-active' : 'btn-editor'}`}
        title="Bold"
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'btn-editor-active' : 'btn-editor'}
        title="Italic"
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'btn-editor-active' : 'btn-editor'}
        title="Strike"
      >
        <FaStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={editor.isActive('code') ? 'btn-editor-active' : 'btn-editor'}
        title="Code"
      >
        <FaCode />
      </button>
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="btn-editor"
        title="Clear Marks"
      >
        <FaRemoveFormat />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'btn-editor-active' : 'btn-editor'}
      >
        <FaParagraph />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'btn-editor-active' : 'btn-editor'}
      >
        <RiH1 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'btn-editor-active' : 'btn-editor'}
      >
        <RiH2 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'btn-editor-active' : 'btn-editor'}
      >
        <RiH3 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'btn-editor-active' : 'btn-editor'}
      >
        <RiH4 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'btn-editor-active' : 'btn-editor'}
      >
        <RiH5 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'btn-editor-active' : 'btn-editor'}
      >
        <RiH6 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'btn-editor-active' : 'btn-editor'}
        title="Bullet List"
      >
        <FaList />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'btn-editor-active' : 'btn-editor'}
        title="Ordered List"
      >
        <FaListOl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'btn-editor-active' : 'btn-editor'}
        title="Block Code"
      >
        <RiCodeBoxLine />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'btn-editor-active' : 'btn-editor'}
        title="BlockQuote"
      >
        <FaQuoteRight />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="btn-editor"
        title="Horizontal Rule"
      >
        <RiSeparator />
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className="btn-editor"
        title="Hard Break"
      >
        <RiTextWrap />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className="btn-editor"
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        <FaUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className="btn-editor"
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        <FaRedo />
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'btn-editor-active' : 'btn-editor'}
      >
        purple
      </button>
      <button
        onClick={() => editor.chain().focus().unsetColor().run()}
        className={'btn-editor'}
      >
        unset color
      </button>
    </div>
  )
}

export default MenuBar;