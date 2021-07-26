import React from "react";

import { patienceDiff } from "../functions/PatienceDiff";

const aLines =
  'package com.mkyong;\n\nimport java.util.function.Function;\n\npublic class JavaMoney {\n\n    public static void main(String[] args) {\n\n        Function<String, Integer> func = x -> x.length();\n\n        Integer apply = func.apply("mkyong");   // 6\n\n        System.out.println(apply);\n\n    }\n\n}';

const bLines =
  'package com.mkyong;\n\nimport java.util.function.Function;\n\npublic class JavaMoney {\n\n    public static void main(String[] args) {\n\n        Function<String, Integer> func = x -> x.length();\n\n        Integer apply = func.apply("mkyong");   // 6\n\n        System.out.println(apply);\n\n    }\n\n}\n\nchanged';

function Difference() {
  function onSubmit() {
    var a = aLines.split("\n");
    var b = bLines.split("\n");
    var diff = patienceDiff(a, b);

    var diffLines = "";
    diff.lines.forEach((o) => {
      if (o.bIndex < 0 && o.moved) {
        diffLines += "-m  ";
      } else if (o.moved) {
        diffLines += "+m  ";
      } else if (o.aIndex < 0) {
        diffLines += "+   ";
      } else if (o.bIndex < 0) {
        diffLines += "-   ";
      } else {
        diffLines += "    ";
      }
      diffLines += o.line + "\n";
    });

    document.getElementById("diff").value = diffLines;
  }

  return (
    <div className="flex column" style={{ height: "100vh" }}>
      <textarea
        name=""
        id="diff"
        cols="30"
        rows="10"
        style={{ margin: "24px", height: "50%" }}
      ></textarea>
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Difference;
