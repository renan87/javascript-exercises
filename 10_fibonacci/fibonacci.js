const fibonacci = function(numberPosition) {

    numberPosition = +numberPosition;
    
    let previousNumber = 0, fibonacciNumber = 1, temp;
    
    if (numberPosition < 0) return "OOPS";
    if (numberPosition === 0) return 0; 
    if (numberPosition === 1) return fibonacciNumber;
    
    for (let i = 2; i <= numberPosition; i++) {
        temp = previousNumber + fibonacciNumber;
        previousNumber = fibonacciNumber;
        fibonacciNumber = temp;
    }
    return fibonacciNumber;
};

// Do not edit below this line
module.exports = fibonacci;
