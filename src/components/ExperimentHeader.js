import React, { useState, useEffect } from "react";

function ExperimentHeader(props) {
  const [timer, setTimer] = useState(0);
  const { time, currFunction } = props;

  useEffect(() => {
    setTimer(new Date(time).toISOString().substr(11, 8));
  }, [time]);

  return (
    <>
      <span>Problem {currFunction + 1}</span>
      <span id="timer">{timer}</span>
    </>
  );
}

export default ExperimentHeader;
