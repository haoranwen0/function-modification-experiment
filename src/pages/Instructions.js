import React from "react";

import InstructionsDescription from "../components/InstructionsDescription";
import InstructionsForm from "../components/InstructionsForm";

import "../css/Instructions.css";

function Instructions() {
  return (
    <div className="instructions">
      <main className="instructions__main">
        <h1>Welcome!</h1>
        <InstructionsDescription />
        <div className="instructions__form">
          <InstructionsForm />
        </div>
      </main>
    </div>
  );
}

export default Instructions;
