import { Editor } from "@tinymce/tinymce-react";

export default function TextEditor({
  ref,
  toolbar,
  placeholder,
  initialValue,
}) {
  const apiKey = import.meta.env.VITE_TINYMCE_API_KEY;

  return (
    <Editor
      apiKey={apiKey}
      onInit={(_evt, editor) => (ref.current = editor)}
      inline={true}
      initialValue={initialValue}
      init={{
        placeholder: placeholder,
        height: 700,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "code",
          "help",
          "wordcount",
        ],
        toolbar: toolbar,
        content_style:
          'body { font-family:"Inter", sans-serif; font-size:0.875rem }',
        setup: (editor) => {
          editor.on("focus", () => {
            editor.execCommand("selectAll");
          });
        },
      }}
    />
  );
}
