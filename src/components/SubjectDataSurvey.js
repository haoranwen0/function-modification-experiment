import React, { useState, useEffect } from "react";

function SubjectDataSurvey(props) {
  const { survey } = props;

  const [s, setS] = useState({});

  useEffect(() => {
    if (survey !== undefined) {
      setS(survey);
    }
  }, [survey]);

  return (
    <>
      <h3>Survey</h3>
      <div className="survey">
        <div className="survey-row">
          <div className="survey-question-group">
            <h4>How enjoyable was the task?</h4>
            <span>{s.questionOne}</span>
          </div>
          <div className="survey-question-group">
            <h4>
              In the problems with comments in the code, did you find the
              comments useful?
            </h4>
            <span>{s.questionTwo}</span>
          </div>
          <div className="survey-question-group">
            <h4>Highest Education Qualification?</h4>
            <span>{s.questionThree}</span>
          </div>
          <div className="survey-question-group">
            <h4>What is your age?</h4>
            <span>{s.questionFour}</span>
          </div>
        </div>
        <div className="survey-row">
          <div className="survey-question-group">
            <h4>
              Are you willing to have a quick 5-10 minutes call to discuss the
              experiment and your overall experience doing it? If yes, please
              input your number below (only numbers are allowed). Otherwise,
              leave blank.
            </h4>
            <span>{s.questionFive}</span>
          </div>
          <div className="survey-question-group">
            <h4>
              Any problems you encountered or things that would help us make the
              instructions and website more clear?
            </h4>
            <span>{s.questionSix}</span>
          </div>
          <div className="survey-question-group">
            <h4>Any other comments or feedback?</h4>
            <span>{s.comment}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubjectDataSurvey;
