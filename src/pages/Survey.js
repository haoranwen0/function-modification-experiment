import React from "react";

import SurveyForm from "../components/SurveyForm";

import "../css/Survey.css";

function Survey() {
  return (
    <div className="main-container">
      <main className="main-content">
        <h1>Survey</h1>
        <SurveyForm />
      </main>
    </div>
  );
}

export default Survey;
