const removeFromArray = function(input, ...removeFrom) {
    let initialArray = input;
    let removeArray = [...removeFrom]; 
    let removeArraySize = removeArray.length;

    let newArray = initialArray.filter(element => !removeArray.includes(element));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
