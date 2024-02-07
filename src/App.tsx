import React, { ChangeEvent, useEffect } from 'react';
import './App.css';
import { useState, FunctionComponent, Component } from 'react';
import { stringify } from 'querystring';

function checkAnswer(num1: number, num2: number, guess: string) {
  try {
    let guessCheck: number = Number(guess);
    if (num1 + num2 == guessCheck) {
      return "Correct!"
    } else {
      return "Incorrect, try again"
    }
  } catch (error) {
    console.error(error);
    return "Error - non valid Integer"
  }
}

function calc () {
  return Math.floor(Math.random() * 100)
}


function App() {
  let [num1, setNum1] = useState(calc());
  let [num2, setNum2] = useState(calc());
  let [calcs, setCalcs] = useState(num1 + "+" + num2);
  let [guess, setGuess] = useState("");
  let [answerState, setAnswerState] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <p>Question: {calcs}</p>
        <p>Your Guess: {guess}</p>
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
        </section>
        <button onClick={() => setAnswerState(checkAnswer(num1, num2, guess))}>Guess</button>
        <p>{answerState}</p>
      </header>
    </div>
  );
}

export default App;
