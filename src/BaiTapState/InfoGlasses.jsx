import React from "react";

const InfoGlasses = ({ imgGlasses }) => {
  console.log({ imgGlasses });
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: "120px",
        backgroundColor: "yellow",
        width: "478px",
      }}
    >
      <h2 style={{ color: "blue" }}>{imgGlasses?.name}</h2>
      <p style={{ color: "while" }}>{imgGlasses?.desc}</p>
    </div>
  );
};

export default InfoGlasses;
