const palindromes = function (stringInput) {

    const normalizedString = stringInput.toLowerCase().replace(/[\W_]/g, "");
    const array = normalizedString.split("");
    const reverseText = array.reverse().join("");


    if (normalizedString === reverseText) {
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
