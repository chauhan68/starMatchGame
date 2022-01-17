import React, { useEffect, useState } from 'react';

import '../style/index.css';
import Game from './Game.jsx';
import { useGameState } from './customHooks/useGameState.jsx';
import { utils } from '../utils/utils.js';

const App = () => {
    const [secondsLeft, setSecondsLeft] = useState(10);
    const [gameKey, setGameKey] = useState(1);
    const [stars, setStars] = useState(utils.random(1, 9));

    const { availableNumber, candidateNumber, onNumberClick, clearGame } = useGameState(stars);

    const resetGame = () => {
        setGameKey(gameKey + 1);
        setSecondsLeft(10);
        clearGame();
    };

    useEffect(() => {
        if (secondsLeft > 0 && availableNumber.length) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => { clearTimeout(timerId); }
        }
    })
    return (
        <div className='game'>
            <header className='title'>Pick 1 or more numbers that sum to the number of stars</header>
            <Game
                key={gameKey}
                secondsLeft={secondsLeft}
                resetGame={resetGame}
                stars={stars}
                updateStars={setStars}
                availableNumber={availableNumber}
                candidateNumber={candidateNumber}
                onNumberClick={onNumberClick}
            />
            <footer>Time Remaining: {secondsLeft}</footer>
        </div>
    );
};

export default App;
