import React, { useState, useEffect } from "react";

function SubjectDataHeader({
  functionSubmission,
  functionGroup,
  onNext,
  onPrev,
  currFunction,
  onToggleDarkTheme,
  dark,
}) {
  const [group, setGroup] = useState("");
  const [submission, setSubmission] = useState({});

  useEffect(() => {
    if (submission !== {}) {
      console.log(submission);
    }
  }, [submission]);

  useEffect(() => {
    if (functionSubmission !== undefined) {
      setSubmission(functionSubmission);
    }
  }, [functionSubmission]);

  useEffect(() => {
    if (functionGroup !== undefined) {
      if (functionGroup === "Aplus, Bminus, Cplus, Dminus, Eplus") {
        setGroup("A+B-C+D-E+");
      } else if (functionGroup === "Aminus, Bplus, Cminus, Dplus, Eminus") {
        setGroup("A-B+C-D+E-");
      } else if (functionGroup === "Eplus, Dminus, Cplus, Bminus, Aplus") {
        setGroup("E+D-C+B-A+");
      } else if (functionGroup === "Eminus, Dplus, Cminus, Bplus, Aminus") {
        setGroup("E-D+C-B+A-");
      }
    }
  }, [functionGroup]);

  return (
    <>
      <div>
        <span>{submission.email}</span>
      </div>
      <div>
        <span
          className="select"
          onClick={() => onPrev()}
          style={
            currFunction === 0
              ? {
                  opacity: "0.5",
                  pointerEvents: "none",
                }
              : null
          }
        >
          Prev
        </span>
        <span
          className="select"
          onClick={() => onNext()}
          style={
            submission.functionSubmissions !== undefined
              ? currFunction === submission.functionSubmissions.length - 1
                ? {
                    opacity: "0.5",
                    pointerEvents: "none",
                  }
                : null
              : null
          }
        >
          Next
        </span>
        <span className="select" onClick={() => onToggleDarkTheme()}>
          Dark Theme: {dark ? "On" : "Off"}
        </span>
        <span>Function Group: {group}</span>
        <span>Function {currFunction + 1}</span>
        <span>
          {submission.functionSubmissions !== undefined
            ? (
                submission.functionSubmissions[currFunction].time / 60000
              ).toFixed(2)
            : null}{" "}
          mins
        </span>
      </div>
    </>
  );
}

export default SubjectDataHeader;
