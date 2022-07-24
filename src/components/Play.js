import React, { useState } from "react";
import { Link } from "react-router-dom";
import Triangle from "../images/bg-triangle.svg";

const Play = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };
  const [showChoice, setShowChoice] = useState("");
  return (
    <div className="play">
      {/* <img src={Triangle} alt="" className="triangle" /> */}
      <div className="showChoice">{showChoice}</div>
      <div className="items">
        <Link to="/game">
          <div
            data-id="paper"
            onClick={setChoice}
            onMouseEnter={()=>{setShowChoice('PAPER')}}
            onMouseLeave={()=>{setShowChoice('')}}
            className="icon icon--paper"
          ></div>
        </Link>
        <Link to="/game">
          <div
              onMouseEnter={()=>{setShowChoice('SCISSORS')}}
              onMouseLeave={()=>{setShowChoice('')}}
            data-id="scissors"
            onClick={setChoice}
            className="icon icon--scissors"
          ></div>
        </Link>
        <Link to="/game">
          <div
           onMouseEnter={()=>{setShowChoice('ROCK')}}
           onMouseLeave={()=>{setShowChoice('')}}
            data-id="rock"
            onClick={setChoice}
            className="icon icon--rock"
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default Play;
