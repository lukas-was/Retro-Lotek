import React from "react";

const Results = ({ games, hits, money }) => {
  const prize = 3;
  const information = hits ? `Trafiłeś ${hits}-kę!` : "Nic nie trafiłeś...";
  return (
    <section className="results">
      <h3 className="info">{games ? information : "..."}</h3>
      <div className="games">
        <span>Ilość gier:</span>
        <span>{games}</span>
      </div>
      <div className="wallet">
        <span>Kwota wydana na zakłady:</span>
        <span>{games * prize}pln</span>
      </div>
      <div className="money">
        <span>Kwota wygrana:</span>
        <span>{money}pln</span>
      </div>
    </section>
  );
};

export default Results;
