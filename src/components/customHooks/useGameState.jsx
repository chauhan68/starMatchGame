import { useState } from 'react';
import { utils, status } from '../../utils/utils';

export const useGameState = (numberOfStars = 0) => {
    const numbersArray = utils.range(1, 9);
    const [availableNumber, setAvailableNumber] = useState(numbersArray);
    const [candidateNumber, setCandidateNumber] = useState([]);

    const clearGame = () => {
        setAvailableNumber(numbersArray);
        setCandidateNumber([]);
    };

    const onNumberClick = (number, currentStatus, secondsLeft, updateStarsCallback) => {
        if (currentStatus === status.used || !secondsLeft) {
            return
        }

        const newCandidateNumbers = currentStatus === status.available
            ? candidateNumber.concat(number)
            : candidateNumber.filter(candidateNumber => candidateNumber !== number);
        if (utils.sum(newCandidateNumbers) !== numberOfStars) {
            setCandidateNumber(newCandidateNumbers);
        } else {
            const newAvailableNumber = availableNumber.filter(n => !newCandidateNumbers.includes(n));
            setAvailableNumber(newAvailableNumber);
            setCandidateNumber([]);
            updateStarsCallback(utils.randomSumIn(newAvailableNumber, 9));
        }
    };

    return {
        availableNumber,
        candidateNumber,
        onNumberClick,
        clearGame
    }
}