import React from "react";

function FunctionDescription(props) {
  const { functions, currFunction } = props;

  return (
    <>
      <h3>Description</h3>
      <p>{functions[currFunction].description}</p>
    </>
  );
}

export default FunctionDescription;
