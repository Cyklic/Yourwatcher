import { RichTextEditor } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";

import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { ReactElement, useEffect } from "react";
import { Text } from "@mantine/core";

type Props = {
  placeholder: string;
  content: string;
  label: ReactElement;
  onChange: (text: string) => void;
  clear?: boolean;
  error?: any;
  height?: number;
};
export default function Editor({
  placeholder,
  content,
  label,
  error,
  onChange,
  clear,
  height,
}: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: placeholder }),
    ],
    content: clear ? "" : content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (clear && editor) {
      editor.commands.clearContent(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clear]);

  return (
    <>
      {label}
      <RichTextEditor
        editor={editor}
        style={{ border: error ? "1px solid red" : "" }}
      >
        <RichTextEditor.Toolbar sticky stickyOffset={60}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Underline />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
            <RichTextEditor.Highlight />
            <RichTextEditor.Code />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Hr />
            <RichTextEditor.BulletList />
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content mih={height} />
      </RichTextEditor>

      {error && (
        <Text size={"sm"} fw={400} mb={10} c="#fa5252">
          {error}
        </Text>
      )}
    </>
  );
}
