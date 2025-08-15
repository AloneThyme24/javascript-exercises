const reverseString = function(word) {
    const inputArray = word.split(''); // splits the string into an array
    const reversedArray = inputArray.reverse() // reverses the array
    return reversedArray.join('') // join the array into string note the '' in join() glues the letters back together without a separator
};

// Do not edit below this line
module.exports = reverseString;
