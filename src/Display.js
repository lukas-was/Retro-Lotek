import React from "react";
import Ball from "./Ball";

const Display = ({ drawedNumbers }) => {
  const balls = drawedNumbers.map((number) => (
    <Ball key={number} number={number} />
  ));
  const displayInfo = drawedNumbers.length ? balls : "Skreśl 6 liczb z kuponu";
  return <div className="display">{displayInfo}</div>;
};

export default Display;
