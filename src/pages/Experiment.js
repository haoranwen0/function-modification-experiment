import React, { useState, useEffect } from "react";

import FunctionDescription from "../components/FunctionDescription";
import Editor from "../components/Editor";
import ExperimentHeader from "../components/ExperimentHeader";
import {
  functionOne,
  functionTwo,
  functionThree,
} from "../constants/functions";

import "../css/Experiment.css";

function Experiment() {
  const functions = [functionOne, functionTwo, functionThree];
  const [value, setValue] = useState("");
  const [time, setTime] = useState(0);
  const [currFunction, setCurrFunction] = useState(0);

  useEffect(() => {
    var interval = null;
    interval = setInterval(() => {
      setTime((time) => time + 1000);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleChange(editor, data, value) {
    setValue(value);
  }

  useEffect(() => {
    setValue(functions[currFunction]);
    // eslint-disable-next-line
  }, [currFunction]);

  function onSubmit() {
    setTime(0);
    setCurrFunction((prev) => prev + 1);
  }

  return (
    <div className="experiment">
      <header className="experiment__header">
        <ExperimentHeader time={time} />
      </header>
      <main className="experiment__main">
        <div className="function-description">
          <FunctionDescription />
        </div>
        <div className="editor">
          <Editor value={value} handleChange={handleChange} />
        </div>
        <button onClick={onSubmit} className="btn submit">
          Submit
        </button>
      </main>
    </div>
  );
}

export default Experiment;
