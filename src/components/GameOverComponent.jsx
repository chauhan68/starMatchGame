import React from 'react';

const GameOverComponent = (props) => {
    return (
        <div className='gameOverText'>Game {props.gameStatus}
            <button className='playAgain' onClick={props.resetGame}> Play Again </button>
        </div>
    );
};

export default GameOverComponent;