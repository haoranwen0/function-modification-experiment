import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API } from "aws-amplify";
import { toast } from "react-toastify";

import FunctionDescription from "../components/FunctionDescription";
import Editor from "../components/Editor";
import ExperimentHeader from "../components/ExperimentHeader";
// import { Aplus, Aminus, Bplus } from "../constants/functions";
import Loading from "../components/Loading";
import { warningOptions } from "../constants/toasts";

import "../css/Experiment.css";

function Experiment() {
  const email = localStorage.getItem("email");
  const functions = JSON.parse(localStorage.getItem("functions"));

  // Initialize useHistory hook
  const history = useHistory();

  // Initialize useState constants
  const [value, setValue] = useState(
    functions === null ? "" : functions[0].function
  );
  const [time, setTime] = useState(0);
  const [currFunction, setCurrFunction] = useState(0);
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [functionSubmissions, setFunctionSubmissions] = useState([]);

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
    toast.dismiss();
    setValue(value);
    setConfirmed(false);
  }

  useEffect(() => {
    if (functionSubmissions.length !== 0) {
      // console.log(functionSubmissions);
      setLoading((prev) => !prev);
      API.post("functionModificationAPI", "/function-submissions", {
        body: {
          email: email,
          functionSubmissions: functionSubmissions,
          pilotTest: 2,
        },
      }).then((res) => {
        // console.log(res);
        window.scrollTo(0, 0);
        setTime(0);
        setConfirmed((prev) => !prev);
        setValue(functions[currFunction].function);
        setLoading((prev) => !prev);
        if (functionSubmissions.length === functions.length) {
          history.push({
            pathname: "/survey",
          });
        }
      });
    }
    //eslint-disable-next-line
  }, [functionSubmissions]);

  function onSubmit() {
    if (!confirmed) {
      toast(
        "Warning: You are about to submit. Are you sure? If yes, click confirm. If not, continue editing the function",
        warningOptions
      );
      setConfirmed((prev) => !prev);
    } else {
      var obj = {};
      obj["function"] = value;
      obj["time"] = time;
      setFunctionSubmissions((curr) => [...curr, obj]);
      // console.log("check");
      toast.dismiss();
      if (currFunction !== functions.length - 1) {
        setCurrFunction((prev) => prev + 1);
      }
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
            {confirmed ? "Confirm" : "Submit"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Experiment;
