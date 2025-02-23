import React from 'react';

interface NumPadProps {
  guess: string;
  setGuess: (guess: string) => void;
  checkAnswer: () => string;
  setAnswerState: (state: string) => void;
}

const NumPad: React.FC<NumPadProps> = ({ guess, setGuess, checkAnswer, setAnswerState }) => {
  const handleButtonClick = (value: string) => {
    setGuess(guess + value);
  };

  const handleClear = () => {
    setGuess("");
  };

  const handleGuess = () => {
    setAnswerState(checkAnswer());
  };

  return (
    <section className='numbox'>
      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'].map((value) => (
        <button
          key={value}
          onClick={(e) => { handleButtonClick(value); (e.target as HTMLElement).blur(); }}
          tabIndex={-1}
        >
          {value}
        </button>
      ))}
      <button onClick={(e) => { handleClear(); (e.target as HTMLElement).blur(); }} tabIndex={-1}>Clear</button>
      <button className="guessButton" tabIndex={-1} onClick={handleGuess}>
        Guess
      </button>
    </section>
  );
};

export default NumPad;