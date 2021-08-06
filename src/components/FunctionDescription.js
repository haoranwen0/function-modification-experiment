import React from "react";
import ReactHtmlParser from "react-html-parser";

function FunctionDescription(props) {
  const { functions, currFunction } = props;

  return (
    <>
      <h3>Problem {currFunction + 1} Description</h3>
      <>
        {ReactHtmlParser(
          functions === null ? "" : functions[currFunction].description
        )}
      </>
    </>
  );
}

export default FunctionDescription;
