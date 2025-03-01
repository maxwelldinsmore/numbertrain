import React, { ChangeEvent, useEffect, useState } from 'react';
import '../css/HomePage.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ModeSelect from '../Components/ModeSelect';
import NumPad from '../Components/NumPad';

const HomePage = () => {
    const [timer, setTimer] = useState(20); // Set initial time (e.g., 60 seconds)
    const [gameStarted, setGameStarted] = useState(false);
    const [isGameOver, setIsGameOver] = useState(false);
    const [guess, setGuess] = useState<string>("");
    const [answerState, setAnswerState] = useState("");
    const [num, setNum] = useState({ num1: calc(), num2: calc() });
    const [calcs, setCalcs] = useState({ operationType: "Addition", operationSymbol: "+" });
    const [keyInput, setKeyInput] = useState({ keyDown: "" });
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        if (gameStarted && timer > 0) {
            const intervalId = setInterval(() => {
                setTimer(prevTime => prevTime - 1);
            }, 1000);

            // Cleanup function to clear interval when component unmounts
            return () => clearInterval(intervalId);
        } else if (timer === 0) {
            setIsGameOver(true);
        }
    }, [gameStarted, timer]);

    useEffect(() => {
        if (guess !== "") {
            setGameStarted(true);
        }
    }, [guess]);

	useEffect(() => {
		if (gameStarted) {
			const appDiv = document.querySelector('.App') as HTMLDivElement;
			if (appDiv) {
				appDiv.focus();
			}
		}
	}, [gameStarted]);

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

	useEffect(() => {

		const handleKeyDown = (e: KeyboardEvent) => {
			keyDown(e);
		};

		window.addEventListener('keydown', handleKeyDown);

        const appDiv = document.querySelector('.App') as HTMLDivElement;
			if (appDiv) {
				appDiv.focus();
		}
		// Cleanup function to remove event listener when component unmounts
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
        
    }, [guess]);

    function calc() {
        return Math.floor(Math.random() * 98 + 1);
    }

    function keyDown(e: KeyboardEvent) {
		console.log("Keydown");
        if (e.key === "Enter") {
            checkAnswer();
            console.log("Enter");
        } else {
			var test = new RegExp('^[0-9]$');
            if (test.test(e.key)) {
                setGuess(guess + e.key);
            }
            if (e.key === "Backspace") {
                setGuess(guess.slice(0, guess.length - 1));
            }
        }
    }

    if (isGameOver) {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Game Over</h1>
                    <p>Your final streak: {streak}</p>
                    <button onClick={() => window.location.reload()}>Restart</button>
                </header>
            </div>
        );
    }

    return (
        <div className="App" 
			tabIndex={0}>
			
            <header className="App-header">
            </header>
            <ModeSelect></ModeSelect>
            <p>Time Left: {timer}</p>
            <div className='questionDiv'>
                <p className="question">{num.num1}<br />{num.num2}</p>
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