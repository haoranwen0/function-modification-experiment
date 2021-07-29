import React from "react";

function FunctionDescription(props) {
  const { functions, currFunction } = props;

  return (
    <>
      <h3>Function {currFunction + 1} Description</h3>
      <p>{functions === null ? "" : functions[currFunction].description}</p>
    </>
  );
}

export default FunctionDescription;
