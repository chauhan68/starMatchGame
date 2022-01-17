import React from 'react';
import GameOverComponent from './GameOverComponent';
import { utils } from '../utils/utils';

const RenderStars = (props) => {
    const generateStars = () => {
        const iconsArray = utils.range(1, props.stars);

        const icons = iconsArray.map((number) => (
            <div key={number} className="star" />
        ));

        return icons;
    };

    const gameStatus = !props.star && props.secondsLeft? 'Won' : 'Over';

    return (
        <div className='iconsContainer'>
            {props.stars && props.secondsLeft ?
                generateStars() :
                <GameOverComponent resetGame={props.resetGame} gameStatus={gameStatus}/>
            }
        </div>
    );
};

export default RenderStars;