'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TaskItem, TaskList } from '@tiptap/extension-list';
import { TableKit } from '@tiptap/extension-table';
import ImageResize from 'tiptap-extension-resize-image';
import { useEditorStore } from '@/store/use-editor-store';
import {
  FontFamily,
  TextStyle,
  FontSize,
  LineHeight,
} from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-text-style';
import { Highlight } from '@tiptap/extension-highlight';
import { TextAlign } from '@tiptap/extension-text-align';
import { Ruler } from './ruler';

export function Editor() {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: 'padding-left: 56px; padding-right: 56px',
        class:
          'focus-outline-none print:border-0 print:bg-white border border-[#c7c7c7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text',
      },
    },
    extensions: [
      StarterKit.configure({
        link: {
          openOnClick: false,
          autolink: true,
          defaultProtocol: 'https',
        },
      }),
      TaskItem.configure({ nested: true }),
      TaskList,
      TableKit.configure({
        table: { resizable: true },
      }),
      ImageResize,
      FontFamily,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      FontSize.configure({
        types: ['textStyle', 'heading', 'paragraph'],
      }),
      LineHeight,
    ],
    content: `
        <p>Adjusting line heights can greatly affect the readability of your text, making it easier for users to engage with your content.</p>
        <p>Line height is the vertical distance between lines of text in a paragraph. It's also known as leading, which comes from the days of metal type, when strips of lead were placed between lines of type to add space.</p>
        <p>Line height is expressed as a ratio, meaning the default line height is 1.0. A line height of 1.5 would be 1.5 times the height of the font, while a line height of 2.0 would be twice the height of the font.</p>
        <p>It's important to choose a line height that's appropriate for your font size and line length. A line height that's too small can make text feel cramped, while a line height that's too large can make text feel disconnected.</p>

      `,
  });
  return (
    <div className='size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible'>
      <Ruler />
      <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
