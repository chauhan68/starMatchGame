import React from 'react';
import RenderNumbers from './RenderNumbers';
import RenderStars from './RenderStars';

const Game = (props) => {
    return (
        <div className='gameContainer'>
            <RenderStars
                stars={props.stars}
                secondsLeft={props.secondsLeft}
                resetGame={props.resetGame}
            />
            <RenderNumbers {...props} />
        </div>
    );
};

export default Game;