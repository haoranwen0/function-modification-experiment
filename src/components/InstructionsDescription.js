import React from "react";

function InstructionsDescription() {
  return (
    <>
      <p>
        For this experiment your task is to modify a simple piece of code in
        Java in order to achieve an indicated functionality. You are expected to
        know how to write code.
      </p>
      <p>
        There will be 5 problems and you will receive $6 dollars for each
        problem you solve correctly. You will receive an additional $5 dollars
        if we see that you tried to solve the 5 problems. You can receive up to
        $35 dollars total.
      </p>
      {/* <div className="flex column margin-bottom-12">
        <span>
          You can receive up to $35 for participating in this experiment:
        </span>
        <span className="margin-left-24">
          - The base amount will be $5 for completing all problems.
        </span>
        <span className="margin-left-24">
          - You will receive an additional bonus of up to $6 dollars for each
          problem you get right ($6 if done in less than 4min, $5 if in 4-6min,
          $4 if in 6-8min, $3 if in 8-10min, and $2 if in &gt; 10min as long as
          it is correct)
        </span>
      </div>
      <div className="margin-bottom-12">
        <div className="table">
          <div className="body">
            <div className="cell">+$6 / problem</div>
            <div className="cell">correct and done in less than 4 mins</div>
          </div>
          <div className="body lightgray">
            <div className="cell">+$5 / problem</div>
            <div className="cell">correct and done in between 4 - 6 mins</div>
          </div>
          <div className="body">
            <div className="cell">+$4 / problem</div>
            <div className="cell">correct and done in between 6 - 8 mins</div>
          </div>
          <div className="body lightgray">
            <div className="cell">+$3 / problem</div>
            <div className="cell">correct and done in between 8 - 10 mins</div>
          </div>
          <div className="body">
            <div className="cell">+$2 / problem</div>
            <div className="cell">correct and done in more than 10 mins</div>
          </div>
        </div>
      </div> */}
      <p>
        If you decide not to try please cancel your registration from the MIT
        BRL site to open the slot for another subject.
      </p>
      <p>
        <span className="important-red">Important! </span>
        You have to complete all the experiment in a single run, do not refresh
        or attempt to go back or all your data will be lost.
      </p>
      <p>
        It's best to complete this on a desktop/laptop on full screen using
        Google Chrome as your browser.
      </p>
    </>
  );
}

export default InstructionsDescription;
