import React from "react";

const ButtonStart = ({ start, playerNumbers }) =>
  playerNumbers.length === 6 ? (
    <button className="start" onClick={start}>
      nowe losowanie
    </button>
  ) : (
    <button className="off" disabled>
      nowe losowanie
    </button>
  );

export default ButtonStart;
