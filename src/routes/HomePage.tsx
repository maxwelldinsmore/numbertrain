import React, { ChangeEvent, useEffect } from 'react';
import './HomePage.css';
import { useState, FunctionComponent, Component } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ModeSelect from '../Components/ModeSelect';
import NumPad from '../Components/NumPad';
// https://www.youtube.com/watch?v=wXLf18DsV-I&ab_channel=ReactConf
// To understand hooks better



const HomePage = () => {
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
			setGuess("");
			return "Incorrect, try again";
		}
	}
	
	const newQuestion = () => {
		setNum(prevnum => ({
			...prevnum,
			num1: calc(),
			num2: calc()
		}));
	}
	
	
	function calc () {
	return Math.floor(Math.random() * 98 + 1)
	}
	
	function keyDown(e: React.KeyboardEvent) {
	if (e.key === "Enter") {
		checkAnswer();
		console.log("Enter");
	} else {
		var test = new RegExp('[0-9.]')
		if (test.test(e.key)) {
		setGuess(guess + e.key);
		}
		if (e.key === "Backspace") {
		setGuess(guess.slice(0, guess.length -1));
		}
	} 
	} 
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
	  return (
		<div className="App" onKeyDown={e => keyDown(e)} tabIndex={0}>
		<header className="App-header">
		</header>
		<ModeSelect></ModeSelect>
			<div className='questionDiv'>
				<p className="question">{num.num1}<br/>{num.num2}</p>
				<p className='calc'>{calcs.operationSymbol}</p>
				<span><p></p></span>
				<p className='answerBox'>=</p>
				<p className='answerGuess'>{guess}</p>
			</div>

			<p>Correct Streak: {streak}</p>
			
			<section className='numbox'>
			<NumPad guess={guess} setGuess={setGuess} 
				checkAnswer={checkAnswer} 
				setAnswerState={setAnswerState} 
			/>
			</section>
		  
		  
		  <p>{answerState}</p>
	  </div>
  );
}





export default HomePage;