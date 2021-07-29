import React from "react";

function ExperimentHeader(props) {
  const { time, currFunction } = props;

  return (
    <>
      <span>Function {currFunction + 1}</span>
      <span id="timer">{time / 1000} s</span>
    </>
  );
}

export default ExperimentHeader;
