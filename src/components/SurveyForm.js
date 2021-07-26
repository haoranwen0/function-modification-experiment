import React, { useState } from "react";

import Loading from "./Loading";

function SurveyForm() {
  // Initialize useState constants
  const [loading, setLoading] = useState(false);
  const [quesOne, setQuesOne] = useState(5);
  const [quesTwo, setQuesTwo] = useState(5);
  const [quesThree, setQuesThree] = useState(5);
  const [quesFour, setQuesFour] = useState(5);
  const [quesFive, setQuesFive] = useState(5);
  const [comment, setComment] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const data = {
      questionOne: parseInt(quesOne),
      questionTwo: parseInt(quesTwo),
      questionThree: parseInt(quesThree),
      questionFour: parseInt(quesFour),
      questionFive: parseInt(quesFive),
      comment: comment,
    };
    console.log(data);
  }

  return (
    <form className="form">
      <div className="flex column">
        <div className="form-slider-input-group margin-bottom-36">
          <div className="flex row space-between">
            <label htmlFor="survey question 1">
              <span className="font-weight-600">1</span>. How enjoyable was the
              task?
            </label>
            <span>{quesOne}</span>
          </div>
          <input
            type="range"
            name="survey question 1"
            min="1"
            max="5"
            id=""
            value={quesOne}
            onChange={(e) => setQuesOne(e.target.value)}
          />
          <div className="flex row space-between">
            <span>Very Unenjoyable</span>
            <span>Very Enjoyable</span>
          </div>
        </div>
        <div className="form-slider-input-group margin-bottom-36">
          <div className="flex row space-between">
            <label htmlFor="survey question 1">
              <span className="font-weight-600">2</span>. How enjoyable was the
              task?
            </label>
            <span>{quesTwo}</span>
          </div>
          <input
            type="range"
            name="survey question 1"
            min="1"
            max="5"
            id=""
            value={quesTwo}
            onChange={(e) => setQuesTwo(e.target.value)}
          />
          <div className="flex row space-between">
            <span>Very Unenjoyable</span>
            <span>Very Enjoyable</span>
          </div>
        </div>
        <div className="form-slider-input-group margin-bottom-36">
          <div className="flex row space-between">
            <label htmlFor="survey question 1">
              <span className="font-weight-600">3</span>. How enjoyable was the
              task?
            </label>
            <span>{quesThree}</span>
          </div>
          <input
            type="range"
            name="survey question 1"
            min="1"
            max="5"
            id=""
            value={quesThree}
            onChange={(e) => setQuesThree(e.target.value)}
          />
          <div className="flex row space-between">
            <span>Very Unenjoyable</span>
            <span>Very Enjoyable</span>
          </div>
        </div>
        <div className="form-slider-input-group margin-bottom-36">
          <div className="flex row space-between">
            <label htmlFor="survey question 1">
              <span className="font-weight-600">4</span>. How enjoyable was the
              task?
            </label>
            <span>{quesFour}</span>
          </div>
          <input
            type="range"
            name="survey question 1"
            min="1"
            max="5"
            id=""
            value={quesFour}
            onChange={(e) => setQuesFour(e.target.value)}
          />
          <div className="flex row space-between">
            <span>Very Unenjoyable</span>
            <span>Very Enjoyable</span>
          </div>
        </div>
        <div className="form-number-input-group margin-bottom-36 flex column">
          <label htmlFor="survey question 1">
            <span className="font-weight-600">5</span>. Are you willing to have
            a quick 5-10 minutes call to discuss the experiment and your overall
            experience doing it? If yes, please input your number below (only
            numbers are allowed). Otherwise, leave blank.
          </label>
          <input
            type="number"
            name="number"
            placeholder="1234567890"
            value={quesFive}
            onChange={(e) => setQuesFive(e.target.value)}
          />
        </div>
        <div className="form-comments flex column margin-bottom-12">
          <label className="font-weight-600">
            Any other comments or feedback?
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="flex row">
          <button onClick={onSubmit} className="btn submit margin-right-12">
            Submit
          </button>
          <Loading loading={loading} />
        </div>
      </div>
    </form>
  );
}

export default SurveyForm;
