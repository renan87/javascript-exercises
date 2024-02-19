const reverseString = function(textInput) {

    const array = textInput.split("");
    const reverseArray = array.reverse();
    const reverseText = reverseArray.join("");
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
