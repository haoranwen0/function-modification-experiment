import React, { useState, useEffect } from "react";

import SubjectDataHeader from "../components/SubjectDataHeader";
import SubjectDataMain from "../components/SubjectDataMain";
import SubjectDataSurvey from "../components/SubjectDataSurvey";

import "../css/SubjectData.css";

function SubjectData() {
  const [subject, setSubject] = useState({});
  const [currFunction, setCurrFunction] = useState(0);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // console.log(subject);
  }, [subject]);

  useEffect(() => {
    const subjectInformation = JSON.parse(sessionStorage.getItem("subject"));
    setSubject(subjectInformation);
  }, []);

  const onNext = () => {
    setCurrFunction((prev) => prev + 1);
    console.log("next");
  };

  const onPrev = () => {
    setCurrFunction((prev) => prev - 1);
    console.log("previous");
  };

  const onToggleDarkTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <div className="subjectData">
      <header className="subjectData__header">
        <SubjectDataHeader
          functionGroup={subject.functionGroup}
          functionSubmission={subject.functionSubmission}
          onNext={onNext}
          onPrev={onPrev}
          currFunction={currFunction}
          onToggleDarkTheme={onToggleDarkTheme}
          dark={dark}
        />
      </header>
      <main
        className="subjectData__main"
        style={dark ? { backgroundColor: "#222222", color: "#fff" } : null}
      >
        <SubjectDataMain
          currFunction={currFunction}
          functionSubmission={subject.functionSubmission}
          functionGroup={subject.functionGroup}
          dark={dark}
        />
        <SubjectDataSurvey survey={subject.survey} dark={dark} />
      </main>
    </div>
  );
}

export default SubjectData;
