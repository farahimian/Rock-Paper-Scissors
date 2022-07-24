import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ wins,loses,ties, myChoice,setWins,setLoses,setTies }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const [counter, setCounter] = useState(3);

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };
  useEffect(() => {
    if(myChoice.length ===0)
    window.location.href="/"
else
    newHousePick();
  }, []);

  const Result = () => {
    if (myChoice === "rock" && house === "scissors") {
      setPlayerWin("win");
      setWins(wins + 1);
    } else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("lose");
      setLoses(loses + 1);
    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerWin("win");
      setWins(wins + 1);
    } else if (myChoice === "scissors" && house === "rock") {
      setPlayerWin("lose");
      setLoses(loses + 1);
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin("win");
      setWins(wins + 1);
    } else if (myChoice === "paper" && house === "scissors") {
      setPlayerWin("lose");
      setLoses(loses + 1);
    } else {
      setPlayerWin("draw");
      setTies(ties+1);
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${myChoice} ${
            playerWin == "win" ? `icon icon--${myChoice}--winner` : ""
          }`}
        ></div>
      </div>
      {playerWin == "win" && (
        <div className="game__play">
          <span className="text win">You Win</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin == "lose" && (
        <div className="game__play">
          <span className="text lose">You Lose</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin == "draw" && (
        <div className="game__play">
          <span className="text draw">Draw</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}

      <div className="game__house">
        <span className="text">The Opponent Picked</span>
        {counter == 0 ? (
          <div
            className={`icon icon--${house} ${
              playerWin == "lose" ? `icon icon--${house}--winner` : ""
            }`}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;

/*
 my choice:{myChoice} <br />
      House choice:{house} <br />
      Result:
      {playerWin == "win" && <h2>You Win</h2>}
      {playerWin == "lose" && <h2>You lose</h2>}
      {playerWin == "draw" && <h2>Draw</h2>}
      <Link to="/" onClick={() => setHouse()}>
        Play Again
      </Link>

*/
