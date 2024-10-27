import React, { ChangeEvent, useEffect } from 'react';
import './MainGame.css';
import { useState, FunctionComponent, Component } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function HomePage() {

  let [guess, setGuess] = useState("");
  let [answerState, setAnswerState] = useState("");
  
  let [num, setNum] = useState({
    num1: calc(),
    num2: calc()
  });

  let [calcs, setCalcs] = useState({
    operationType: "Addition",
    operationSymbol: "+"
  });

  let [keyInput, setKeyInput] = useState({
    keyDown: ""
  });

  let [streak, setStreak] = useState(0);


  function checkAnswer() {
    
    let guessCheck = 0;
    try {
      guessCheck = Number(guess);
    } catch (error) {
      console.error(error);
      return "Error - non valid Integer";
    }
    if (num.num1 + num.num2 === guessCheck) {
      setGuess("");
      setStreak(streak + 1);
      newQuestion();
      return "Correct!";
    } else {
      setStreak(0);
      return "Incorrect, try again";
    }
  }

  function newQuestion() {
    setNum(prevnum => ({
      ...prevnum,
      num1: calc(),
      num2: calc()
   }));
  }


  function calc () {
    return Math.floor(Math.random() * 98 + 1)
  }

  function keyDown(e: string) {
    if (e == "Enter") {
      checkAnswer();
    } else {
      var test = new RegExp('[0-9.]')
      if (test.test(e)) {
        setGuess(guess + e);
      }
      if (e == "Backspace") {
        setGuess(guess.slice(0, guess.length -1));
      }
    } 
  } 



  return (
    <div className="App" onKeyDown={e => keyDown(e.key)}>
      <header className="App-header">
        
        <div className='questionDiv'>
          <p className="question">{num.num1}<br/>{num.num2}</p>
          <p className='calc'>{calcs.operationSymbol}</p>
          <span><p></p></span>
          <p className='answerBox'>=</p>
          <p className='answerGuess'>{guess}</p>
        </div>
        
        <p>Correct Streak: {streak}</p>
        <section className='numbox'>
        <button onClick={() => setGuess(guess + "1")}>1</button>
        <button onClick={() => setGuess(guess + "2")}>2</button>
        <button onClick={() => setGuess(guess + "3")}>3</button>
        <button onClick={() => setGuess(guess + "4")}>4</button>
        <button onClick={() => setGuess(guess + "5")}>5</button>
        <button onClick={() => setGuess(guess + "6")}>6</button>
        <button onClick={() => setGuess(guess + "7")}>7</button>
        <button onClick={() => setGuess(guess + "8")}>8</button>
        <button onClick={() => setGuess(guess + "9")}>9</button>
        <button onClick={() => setGuess(guess + ".")}>.</button>
        <button onClick={() => setGuess(guess + "0")}>0</button>
        <button onClick={() => setGuess("")}>Clear</button>
        <button className="guessButton" onClick={() => setAnswerState(checkAnswer())}>Guess</button>
        </section>
        
        <p>{answerState}</p>
      </header>
    </div>
  );
}
export default HomePage;