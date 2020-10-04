const repeatString = function(string, repeatCount) {
    let concatString = string;
    for(i = 1; i < repeatCount; i++) {
        concatString += string;
    }
    return concatString;
}

module.exports = repeatString
