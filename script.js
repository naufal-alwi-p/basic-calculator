const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector('.calculator-screen');
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';
let result = '';

const inputNumber = (number) => {
    if (currentNumber === '0' || currentNumber === result) {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '';
}; 

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

const calculate = () => {
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            if (result === 0.1 + 0.2) {
                result = 0.3;
                //or you can use result = (parseFloat(prevNumber) * 10 + parseFloat(currentNumber) * 10) / 10;
            }
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
};

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
};

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});
