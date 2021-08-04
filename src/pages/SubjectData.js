import React, { useState, useEffect } from "react";

import SubjectDataHeader from "../components/SubjectDataHeader";
import SubjectDataMain from "../components/SubjectDataMain";
import SubjectDataSurvey from "../components/SubjectDataSurvey";

import "../css/SubjectData.css";

function SubjectData() {
  const [subject, setSubject] = useState({});
  const [currFunction, setCurrFunction] = useState(0);

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

  return (
    <div className="subjectData">
      <header className="subjectData__header">
        <SubjectDataHeader
          functionGroup={subject.functionGroup}
          functionSubmission={subject.functionSubmission}
          onNext={onNext}
          onPrev={onPrev}
          currFunction={currFunction}
        />
      </header>
      <main className="subjectData__main">
        <SubjectDataMain
          currFunction={currFunction}
          functionSubmission={subject.functionSubmission}
          functionGroup={subject.functionGroup}
        />
        <SubjectDataSurvey survey={subject.survey} />
      </main>
    </div>
  );
}

export default SubjectData;
