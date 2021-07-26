import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API } from "aws-amplify";

import FunctionDescription from "../components/FunctionDescription";
import Editor from "../components/Editor";
import ExperimentHeader from "../components/ExperimentHeader";
import {
  functionOne,
  functionTwo,
  functionThree,
} from "../constants/functions";
import Loading from "../components/Loading";

import "../css/Experiment.css";

// Constants
const functions = [functionOne, functionTwo, functionThree];

function Experiment() {
  // Initialize useHistory hook
  const history = useHistory();

  // Initialize useState constants
  const [value, setValue] = useState(functions[0].function);
  const [time, setTime] = useState(0);
  const [currFunction, setCurrFunction] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    var interval = null;
    interval = setInterval(() => {
      setTime((time) => time + 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Handle changes made in the editor
  function handleChange(editor, data, value) {
    setValue(value);
  }

  function onSubmit() {
    setTime(0);
    if (currFunction !== functions.length - 1) {
      setLoading((prev) => !prev);
      setCurrFunction((prev) => prev + 1);
      API.post("functionModificationAPI", "/function-submissions", {
        body: {
          email: "testing@gmail.com",
          originalFunction: functions[0].function,
          editedFunction: value,
        },
      }).then((res) => {
        console.log(res);
        setValue(functions[currFunction].function);
        setLoading((prev) => !prev);
      });
    } else {
      history.push({
        pathname: "/survey",
      });
    }
  }

  return (
    <div className="experiment">
      <header className="experiment__header">
        <ExperimentHeader currFunction={currFunction} time={time} />
      </header>
      <main className="experiment__main">
        <div className="function-description">
          <FunctionDescription
            functions={functions}
            currFunction={currFunction}
          />
        </div>
        <div className="editor">
          <Editor value={value} handleChange={handleChange} />
        </div>
        <div className="flex row flex-end margin-top-24">
          <Loading loading={loading} />
          <button
            onClick={onSubmit}
            className="btn submit margin-left-12"
            style={loading ? { pointerEvents: "none", opacity: "0.5" } : null}
          >
            {currFunction === functions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Experiment;
