const repeatString = function(text, number) {
    let textArray = [];
    for (i = 0; i < number; i++) {
        textArray.push(text);
    }
    let string = textArray.join("");
    return string
};

// Do not edit below this line
module.exports = repeatString;
