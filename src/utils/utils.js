export const utils = {
    // Sum an array
    sum: arr => arr.reduce((prev, current) => prev + current, 0),

    // Create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

    // Pick a random number between min and max (edges included)
    random: (min, max) => (Math.floor(Math.random() * (max - min + 1) + min)),

    // Given an array of numbers and a max,
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
        const sets = [[]];
        const sums = [];
        arr.forEach((element) => {
            for (let j = 0, len = sets.length; j < len; j++) {
                const candidateSet = sets[j].concat(element);
                const candidateSum = utils.sum(candidateSet);
                if (candidateSum <= max) {
                    sets.push(candidateSet);
                    sums.push(candidateSum);
                }
            }
        })
        return sums[utils.random(0, sums.length - 1)];
    },
};

export const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};

export const status = {
    available: 'available',
    used: 'used',
    wrong: 'wrong',
    candidate: 'candidate',
};
