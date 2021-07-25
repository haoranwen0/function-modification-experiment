import React from "react";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/clike/clike";
import { Controlled as ControlledEditor } from "react-codemirror2";

function Editor(props) {
  const { value, handleChange } = props;

  return (
    <>
      <h3>Editor</h3>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: "clike",
          theme: "material",
          lineNumbers: true,
        }}
      />
    </>
  );
}

export default Editor;
