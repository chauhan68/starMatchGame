import React from 'react';
import { utils, colors, status } from '../utils/utils';

const RenderNumbers = (props) => {
    const {
        availableNumber,
        candidateNumber,
        onNumberClick,
        stars,
        updateStars,
        secondsLeft
    } = props;

    const candidatesAreWrong = utils.sum(candidateNumber) > stars;

    const numberStatus = (number) => {
        if (!availableNumber.includes(number)) {
            return status.used;
        }
        if (candidateNumber.includes(number)) {
            return candidatesAreWrong ? status.wrong : status.candidate;
        }
        return status.available;
    };

    const generateNumbers = () => {
        const numbersArray = utils.range(1, 9);
        const numberButtons = numbersArray.map((number) => {
            const status = numberStatus(number)
            return <button
                key={number}
                className="number"
                onClick={() => { onNumberClick(number, status, secondsLeft, updateStars) }}
                style={{ backgroundColor: colors[status] }}
            >
                {number}
            </button>
        });

        return numberButtons;
    };

    return (
        <div className='iconsContainer'>
            {generateNumbers()}
        </div>
    );
};

export default RenderNumbers;