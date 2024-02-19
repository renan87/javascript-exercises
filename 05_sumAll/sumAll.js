const sumAll = function(min, max) {
    if (min < 0 || max < 0 || typeof min !== 'number' || typeof max !== 'number') {
        return "ERROR";
    }

    if(min > max) {
        let temp = min;
        min = max;
        max = temp;
    }

    let sumOfAll = 0;
    for (let i = min; i <= max; i++) {
        sumOfAll = sumOfAll + i;
    }
    return sumOfAll; 
 
};

// Do not edit below this line
module.exports = sumAll;
