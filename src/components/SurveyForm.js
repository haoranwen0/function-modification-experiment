import React, { useState } from "react";
import { toast } from "react-toastify";
import { API } from "aws-amplify";

import { warningOptions } from "../constants/toasts";
import Loading from "./Loading";

// constants
const email = localStorage.getItem("email");

function SurveyForm() {
  // Initialize useState constants
  //eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [quesOne, setQuesOne] = useState(5);
  const [quesTwo, setQuesTwo] = useState(5);
  const [quesThree, setQuesThree] = useState("select");
  const [quesFour, setQuesFour] = useState("");
  const [quesFive, setQuesFive] = useState("");
  const [quesSix, setQuesSix] = useState("");
  const [comment, setComment] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (quesThree === "select") {
      toast(
        "Warning! You must select an educational status in question 3!",
        warningOptions
      );
    } else {
      toast.dismiss();
      const submissionTime = new Date();
      const data = {
        email: email,
        questionOne: parseInt(quesOne),
        questionTwo: parseInt(quesTwo),
        questionThree: quesThree,
        questionFour: quesFour.trim() === "" ? "N/A" : parseInt(quesFour),
        questionFive: quesFive.trim() === "" ? "N/A" : parseInt(quesFive),
        questionSix: quesSix.trim() === "" ? "N/A" : quesSix,
        comment: comment.trim() === "" ? "N/A" : comment,
        submissionTime: submissionTime,
      };
      setLoading((prev) => !prev);
      API.post("functionModificationAPI", "/survey", {
        body: data,
      }).then((res) => {
        setLoading((prev) => !prev);
        console.log(res);
      });
    }
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
              <span className="font-weight-600">2</span>. Did you find the
              commentary in the functions (whenever there was one) useful?
            </label>
            <span>{quesTwo}</span>
          </div>
          <input
            type="range"
            name="survey question 4"
            min="1"
            max="5"
            id=""
            value={quesTwo}
            onChange={(e) => setQuesTwo(e.target.value)}
          />
          <div className="flex row space-between">
            <span>Not Useful At All</span>
            <span>Very Useful</span>
          </div>
        </div>
        <div className="form-select-group margin-bottom-36">
          <label htmlFor="education">
            <span className="font-weight-600">3</span>. Highest Education
            Qualification? *
          </label>
          <select
            name="education"
            value={quesThree}
            onChange={(e) => {
              setQuesThree(e.target.value);
            }}
          >
            <option value="select" default>
              Select
            </option>
            <option value="High School">High School</option>
            <option value="US Bachelor's Degree">US Bachelor's Degree</option>
            <option value="Master's or higher">Master's or higher</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-number-input-group margin-bottom-36 flex column">
          <label htmlFor="survey question 3">
            <span className="font-weight-600">4</span>. What is your age?
          </label>
          <input
            type="number"
            name="number"
            placeholder="18"
            value={quesFour}
            onChange={(e) => setQuesFour(e.target.value)}
          />
        </div>
        <div className="form-number-input-group margin-bottom-36 flex column">
          <label htmlFor="survey question 5">
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
          <label>
            <span className="font-weight-600">6</span>. Any problems you
            encountered or things that would help us make the instructions and
            website more clear?
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={quesSix}
            onChange={(e) => setQuesSix(e.target.value)}
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
