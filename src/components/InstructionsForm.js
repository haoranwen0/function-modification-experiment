import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { sliderJavaExperience } from "../constants/variables";

import "../css/form.css";

function InstructionsForm() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sonaid, setSonaid] = useState("");
  const [javaExperience, setJavaExperience] = useState(5);

  function onSubmit(e) {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      sonaid: sonaid,
      javaExperience: sliderJavaExperience[javaExperience],
    };
    history.push({
      pathname: "/experiment",
    });
    console.log(data);
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
      <button onClick={onSubmit} className="btn submit">
        Submit
      </button>
    </form>
  );
}

export default InstructionsForm;
