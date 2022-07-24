import React, { useState } from "react";
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  const [ties, setTies] = useState(0);
  const [wins, setWins] = useState(0);
  const [loses, setLoses] = useState(0);



  return (
    <>
      <div className="container">
        <Header score={score} wins={wins} loses={loses} ties={ties}/>
        <Switch>
          <Route exact path="/">
            <Play setMyChoice={setMyChoice} />
          </Route>
          <Route path="/game">
            <Game myChoice={myChoice} score={score} wins={wins} loses={loses} ties={ties} setScore={setScore} setWins={setWins} setLoses={setLoses} setTies={setTies} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
