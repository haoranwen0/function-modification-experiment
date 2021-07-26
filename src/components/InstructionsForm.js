import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "aws-amplify";

import { sliderJavaExperience } from "../constants/variables";
import Loading from "./Loading";

import "../css/form.css";

function InstructionsForm() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sonaid, setSonaid] = useState("");
  const [javaExperience, setJavaExperience] = useState(5);

  function onSubmit(e) {
    e.preventDefault();
    setLoading((prev) => !prev);
    const data = {
      name: name,
      email: email,
      sonaid: sonaid,
      javaExperience: sliderJavaExperience[javaExperience],
    };
    API.post("functionModificationAPI", "/subject-informations", {
      body: data,
    }).then((res) => {
      setLoading((prev) => !prev);
      history.push({
        pathname: "/experiment",
      });
    });
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
          <label htmlFor="sonaid">SonaID</label>
          <input
            type="text"
            value={sonaid}
            onChange={(e) => setSonaid(e.target.value)}
          />
        </div>
      </div>
      <div className="flex column">
        <div className="form-slider-input-group margin-bottom-12">
          <div className="flex row space-between">
            <label htmlFor="java experience">Java programming experience</label>
            <span>{sliderJavaExperience[javaExperience]}</span>
          </div>
          <input
            type="range"
            name="java experience"
            value={javaExperience}
            onChange={(e) => setJavaExperience(e.target.value)}
            min="1"
            max="5"
            id=""
          />
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
