const palindromes = function (string) {
    const characters = string.split("");
    const reversedString = characters.reverse().join("");
    return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
