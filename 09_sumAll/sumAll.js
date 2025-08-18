const sumAll = function(start, end) {
    if (start < 0 || end < 0) return 'ERROR';
    
    if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';

    let runningTotal = 0;
    const min = Math.min(start, end);
    const max = Math.max (start, end);
    
    for (let i = min; i <= max; i++) {
        runningTotal += i;
    }

    return runningTotal;
};

// Do not edit below this line
module.exports = sumAll;
