import React from "react";

function Submitted() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#26abff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px 48px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h4>
        Thank you very much for completing this experiment! We will follow up
        via email regarding the payments. You may close this tabe now.
      </h4>
    </div>
  );
}

export default Submitted;
