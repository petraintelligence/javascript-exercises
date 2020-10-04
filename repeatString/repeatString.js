const repeatString = function(string, repeatCount) {
    let concatString = '';
    if (repeatCount < 0){
        return 'ERROR';
    }
    for(i = 0; i < repeatCount; i++) {
        concatString += string;
    }
    return concatString;
}

module.exports = repeatString
