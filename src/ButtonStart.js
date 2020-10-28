import React from "react";

const ButtonStart = ({ start, playerNumbers }) =>
  playerNumbers.length === 6 ? (
    <button onClick={start}>nowe losowanie</button>
  ) : null;

export default ButtonStart;
