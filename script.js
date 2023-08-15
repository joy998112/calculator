const result = document.getElementById("result");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const calculateButton = document.getElementById("calculate");
const op = document.getElementById("op");

let currentInput = "";
let currentOperator = "";
let previousInput = "";

numbers.forEach(number => {
    number.addEventListener("click", () => {
        currentInput += number.textContent;
        result.value = currentInput;
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (currentOperator !== "") {
            calculate();
        }
        currentOperator = operator.textContent;
        previousInput = currentInput;
        if(currentInput !==""){
        op.value = currentOperator;
        }
        currentInput = "";
    });
});

calculateButton.addEventListener("click", () => {
    calculate();
    currentOperator = "";
    op.value = "";
});

clearButton.addEventListener("click", () => {
    currentInput = "";
    currentOperator = "";
    previousInput = "";
    result.value = "";
});

function calculate() {
    if (previousInput === "" || currentOperator === "") {
        return;
    }
    
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    
    if (isNaN(num1) || isNaN(num2)) {
        result.value = "Error";
        return;
    }
    
    switch (currentOperator) {
        case "+":
            result.value = num1 + num2;
            break;
        case "-":
            result.value = num1 - num2;
            break;
        case "*":
            result.value = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result.value = "Error";
            } else {
                result.value = num1 / num2;
            }
            break;
        default:
            result.value = "Error";
    }
    
    currentInput = result.value;
}
