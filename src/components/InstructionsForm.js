import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { API } from "aws-amplify";
import { toast } from "react-toastify";
import * as EmailValidator from "email-validator";

import { warningOptions } from "../constants/toasts";
import { sliderJavaExperience } from "../constants/variables";
import Loading from "./Loading";
import {
  functionGroupAplus,
  functionGroupAminus,
  functionGroupEplus,
  functionGroupEminus,
} from "../constants/functions";

import "../css/form.css";

function InstructionsForm() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sonaid, setSonaid] = useState("");
  const [javaExperience, setJavaExperience] = useState(5);

  useEffect(() => {
    localStorage.clear();
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || sonaid.trim() === "") {
      toast("Warning: empty name, email, or sonaID field.", warningOptions);
    } else if (!EmailValidator.validate(email)) {
      toast(
        "Warning: Invalid email address. Check to see that there is no extra space at the end of the email.",
        warningOptions
      );
    } else {
      toast.dismiss();
      setLoading((prev) => !prev);
      API.get("functionModificationAPI", "/subject-informations").then(
        (res) => {
          const numOfSubject = res.data.length;
          var functionGroup = "";
          if (numOfSubject % 4 === 0) {
            localStorage.setItem(
              "functions",
              JSON.stringify(functionGroupAplus)
            );
            functionGroup = "Aplus, Bminus, Cplus, Dminus, Eplus";
          } else if (numOfSubject % 4 === 1) {
            localStorage.setItem(
              "functions",
              JSON.stringify(functionGroupAminus)
            );
            functionGroup = "Aminus, Bplus, Cminus, Dplus, Eminus";
          } else if (numOfSubject % 4 === 2) {
            localStorage.setItem(
              "functions",
              JSON.stringify(functionGroupEplus)
            );
            functionGroup = "Eplus, Dminus, Cplus, Bminus, Aplus";
          } else if (numOfSubject % 4 === 3) {
            localStorage.setItem(
              "functions",
              JSON.stringify(functionGroupEminus)
            );
            functionGroup = "Eminus, Dplus, Cminus, Bplus, Aminus";
          }
          const date = new Date();
          const data = {
            name: name,
            email: email,
            sonaid: sonaid,
            javaExperience: sliderJavaExperience[javaExperience],
            functionGroup: functionGroup,
            registrationTime: date,
            pilotTest: "Upwork-1",
          };
          API.post("functionModificationAPI", "/subject-informations", {
            body: data,
          }).then((res) => {
            // console.log(res);
            localStorage.setItem("email", email);
            setLoading((prev) => !prev);
            history.push({
              pathname: "/experiment",
            });
          });
        }
      );
    }
  }

  return (
    <form className="form">
      <div className="flex row space-between margin-bottom-12">
        <div className="form-text-input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-text-input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-text-input-group">
          <label htmlFor="sonaid">Location</label>
          <input
            type="text"
            value={sonaid}
            onChange={(e) => setSonaid(e.target.value)}
          />
        </div>
      </div>
      <div className="flex column">
        <div className="form-slider-input-group margin-bottom-12">
          <label htmlFor="java experience">Java programming experience</label>
          <input
            type="range"
            name="java experience"
            value={javaExperience}
            onChange={(e) => setJavaExperience(e.target.value)}
            min="1"
            max="5"
            id=""
          />
          <div className="flex row flex-end">
            <span>{sliderJavaExperience[javaExperience]}</span>
          </div>
        </div>
      </div>
      <div className="flex row">
        <button onClick={onSubmit} className="btn submit margin-right-12">
          Submit
        </button>
        <Loading loading={loading} />
      </div>
    </form>
  );
}

export default InstructionsForm;
