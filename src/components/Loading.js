import React from "react";
import Loader from "react-js-loader";

function Loading(props) {
  const { loading } = props;

  return (
    <>
      {loading ? (
        <Loader type="spinner-default" bgColor={"#26abff"} size={25} />
      ) : null}
    </>
  );
}

export default Loading;
