import React from "react";
import Rock from '../images/icon-rock-light.svg'
import Paper from '../images/icon-paper-light.svg'
import Scissors from '../images/icon-scissors-light.svg'

const Header = ({ score,wins,ties,loses }) => {
  return (
    <div className="header">
      <div className="text">
        <span>R<img src={Rock}/>CK</span>
        <span>P<img src={Paper}/>PER</span>
        <span>SC<img src={Scissors}/>SSORS</span>
      </div>
      <div className="score-box wins">
        <span>WINS</span>
        <div className="score-box__score">{wins}</div>
      </div>
      <div className="score-box ties">
        <span>TIES</span>
        <div className="score-box__score">{ties}</div>
      </div>
      <div className="score-box loses">
        <span>LOSES</span>
        <div className="score-box__score">{loses}</div>
      </div>
    </div>
  );
};

export default Header;
