// Function declaration 
function squareAddNumbers1(number1, number2) {
    const squareOutput1 = (number1 * number1);
    const squareOutput2 = (number2 * number2);
    const addOutput3 = (squareOutput1 + squareOutput2);
    return (addOutput3 * addOutput3);
}

console.log(squareAddNumbers1(5, 9));

// Function expression
const squareAddNumbers2 = function (number1, number2) {
    const squareOutput1 = (number1 * number1);
    const squareOutput2 = (number2 * number2);
    const addOutput3 = (squareOutput1 + squareOutput2);
    return (addOutput3 * addOutput3)
};
console.log(squareAddNumbers2(5, 9));

// Arrow function 
const squareAddNumbers3 = (number1, number2) => {
    const squareOutput1 = (number1 * number1);
    const squareOutput2 = (number2 * number2);
    const addOutput3 = (squareOutput1 + squareOutput2);
    return (addOutput3 * addOutput3)
};

console.log(squareAddNumbers3(5, 9));