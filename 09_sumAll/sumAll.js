const sumAll = function(start, end) {
    let runningTotal = 0;
    for (let i = start; i <= end; i++) {
        runningTotal += i;
    }
    return runningTotal;
};

// Do not edit below this line
module.exports = sumAll;
