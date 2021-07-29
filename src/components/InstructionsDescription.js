import React from "react";

function InstructionsDescription() {
  return (
    <>
      <p>
        For this experiment your task is to modify a simple piece of code in
        java in order to achieve an indicated functionality.
      </p>
      <p>There will be (x - TBD) rounds.</p>
      <div className="flex column margin-bottom-12">
        <span>
          You can receive up to $30 for participating in this experiment:
        </span>
        <span className="margin-left-24">
          - The base amount will be $10 for completing both problems.
        </span>
        <span className="margin-left-24">
          - You will receive an additional bonus of up to $10 dollars per
          problem, conditional on getting it right, depending on how fast you do
          it.
        </span>
      </div>
      <p>
        <span className="important-red">Important! </span>
        You have to complete all the experiment in a single run, do not refresh
        or attempt to go back or all your data will be lost.
      </p>
      <p>
        It's best to complete this on a desktop/laptop on fullscreen using
        Google Chrome as your browser.
      </p>
    </>
  );
}

export default InstructionsDescription;
