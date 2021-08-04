import React, { useState, useEffect } from "react";

import {
  functionGroupAplus,
  functionGroupAminus,
  functionGroupEplus,
  functionGroupEminus,
} from "../constants/functions";
import { patienceDiff } from "../functions/PatienceDiff";

function SubjectDataMain(props) {
  const { functionSubmission, currFunction, functionGroup } = props;

  const [submission, setSubmission] = useState([]);
  const [functions, setFunctions] = useState([]);
  const [diff, setDiff] = useState("");

  useEffect(() => {
    if (functionSubmission !== undefined) {
      setSubmission(functionSubmission.functionSubmissions);
    }
  }, [functionSubmission]);

  useEffect(() => {
    if (functionGroup !== undefined) {
      if (functionGroup === "Aplus, Bminus, Cplus, Dminus, Eplus") {
        setFunctions(functionGroupAplus);
      } else if (functionGroup === "Aminus, Bplus, Cminus, Dplus, Eminus") {
        setFunctions(functionGroupAminus);
      } else if (functionGroup === "Eplus, Dminus, Cplus, Bminus, Aplus") {
        setFunctions(functionGroupEplus);
      } else if (functionGroup === "Eminus, Dplus, Cminus, Bplus, Aminus") {
        setFunctions(functionGroupEminus);
      }
    }
  }, [functionGroup]);

  useEffect(() => {
    if (functions.length !== 0 && submission.length !== 0) {
      const original = functions[currFunction].function;
      const modified = submission[currFunction].function;
      var a = original.split("\n");
      var b = modified.split("\n");
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
      setDiff(diffLines);
    }
  }, [functions, submission, currFunction]);

  return (
    <div className="subjectData__functions">
      <div className="function">
        <h3>Original</h3>
        <textarea
          name=""
          id=""
          readOnly
          value={
            functions[currFunction] !== undefined
              ? functions[currFunction].function
              : ""
          }
        />
      </div>
      <div className="function">
        <h3>Modified</h3>
        <textarea
          name=""
          id=""
          readOnly
          value={
            submission[currFunction] !== undefined
              ? submission[currFunction].function
              : ""
          }
        />
      </div>
      <div className="function">
        <h3>Comparision</h3>
        <textarea name="" id="" readOnly value={diff} />
      </div>
    </div>
  );
}

export default SubjectDataMain;
