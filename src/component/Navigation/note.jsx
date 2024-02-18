import React, { useState, useMemo } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./note.css";
const Note = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleChange = (data) => {
    setEditorState(data);
  };

  var htmlData = useMemo(
    () => draftToHtml(convertToRaw(editorState.getCurrentContent())),
    [editorState]
  );

  const toolbarOptions = {
    options: ["inline", "fontSize", "image", "emoji"],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough"],
    },
  };

  return (
    <div className="app">
      <h1>یادداشت</h1>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleChange}
        wrapperClassName="editor-wrapper"
        editorClassName="message-editor"
        toolbarClassName="message-toolbar"
        toolbar={toolbarOptions}
      />
      <div className="html-output">{htmlData}</div>
    </div>
  );
};

export default Note;
