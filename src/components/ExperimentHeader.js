import React from "react";

function ExperimentHeader(props) {
  const { time } = props;

  return (
    <>
      <span>Function 1</span>
      <span id="timer">{time / 1000}</span>
    </>
  );
}

export default ExperimentHeader;
