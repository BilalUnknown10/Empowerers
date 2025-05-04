// "use client";

// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import Link from "@tiptap/extension-link";
// import Image from "@tiptap/extension-image";
// import TextAlign from "@tiptap/extension-text-align";
// import FontSize from "@tiptap/extension-font-size";
// import { Bold, Italic, List, ListOrdered, LinkIcon, ImageIcon, AlignLeft, AlignCenter, AlignRight, Text } from "lucide-react";
// import { useEffect } from "react";

// const RichTextEditor = ({ value, onChange }) => {
//   console.log("RichTextEditor", value);
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Link.configure({ openOnClick: true }),
//       Image,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//       FontSize.configure({ types: ["textStyle"] }),
//     ],
//     content: value, // Initial content
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML());
//     },
//   });
  
//   useEffect(() => {
//     if (editor && value) {
//       editor.commands.setContent(value);
//     }
//   }, [editor, value]); // Update content when value changes
  

//   if (!editor) return null;

//   return (
//     <div className="border rounded p-4">
//       {/* Toolbar with Icons */}
//       <div className="flex gap-2 mb-3 border-b pb-2">
//         <button onClick={() => editor.chain().focus().toggleBold().run()}>
//           <Bold size={20} />
//         </button>
//         <button onClick={() => editor.chain().focus().toggleItalic().run()}>
//           <Italic size={20} />
//         </button>
//         <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
//           <List size={20} />
//         </button>
//         <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
//           <ListOrdered size={20} />
//         </button>
//         <button onClick={() => editor.chain().focus().setLink({ href: prompt("Enter URL") }).run()}>
//           <LinkIcon size={20} />
//         </button>
//         <button onClick={() => editor.chain().focus().setImage({ src: prompt("Enter image URL") }).run()}>
//           <ImageIcon size={20} />
//         </button>
//         <button onClick={() => editor.chain().focus().setTextAlign("left").run()}>
//           <AlignLeft size={20} />
//         </button>
//         <button onClick={() => editor.chain().focus().setTextAlign("center").run()}>
//           <AlignCenter size={20} />
//         </button>
//         <button onClick={() => editor.chain().focus().setTextAlign("right").run()}>
//           <AlignRight size={20} />
//         </button>
//         <button onClick={() => editor.chain().focus().setFontSize(prompt("Enter font size")).run()}>
//           <Text size={20} />
//         </button>
//       </div>

//       {/* Editor Content */}
//       <EditorContent editor={editor} className="border p-2 rounded min-h-[200px]" />
//     </div>
//   );
// };

// export default RichTextEditor;

"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import FontSize from "@tiptap/extension-font-size";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  LinkIcon,
  ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Text,
} from "lucide-react";
import { useEffect } from "react";

const RichTextEditor = ({ value, onChange }) => {
  console.log("RichTextEditor", value);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: true }),
      Image,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      FontSize.configure({ types: ["textStyle"] }),
      BulletList,
      OrderedList,
      TextStyle
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && value) {
      editor.commands.setContent(value);
    }
  }, [editor, value]);

  if (!editor) return null;

  return (
    <div className="border rounded p-4">
      {/* Toolbar with Icons */}
      <div className="flex gap-2 mb-3 border-b pb-2">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold size={20} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic size={20} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <List size={20} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <ListOrdered size={20} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().setLink({ href: prompt("Enter URL") }).run()}>
          <LinkIcon size={20} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().setImage({ src: prompt("Enter image URL") }).run()}>
          <ImageIcon size={20} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign("left").run()}>
          <AlignLeft size={20} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign("center").run()}>
          <AlignCenter size={20} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().setTextAlign("right").run()}>
          <AlignRight size={20} />
        </button>
        <button type="button" onClick={() => editor.chain().focus().setFontSize(prompt("Enter font size")).run()}>
          <Text size={20} />
        </button>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} className="tiptap prose prose-a:text-blue-500 prose-a:underline border p-2 rounded min-h-[200px]" />
    </div>
  );
};

export default RichTextEditor;

