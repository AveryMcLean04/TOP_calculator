function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(firstNumber, operator, lastNumber) {
    if (operator === '+') {
        return add(firstNumber, lastNumber);
    } else if (operator === '-') {
        return subtract(firstNumber, lastNumber);
    } else if (operator === 'x') {
        return multiply(firstNumber, lastNumber);
    } else if (operator === '/') {
        if (lastNumber === 0) {
            return 'Error: Division by zero';
        } else {
            return divide(firstNumber, lastNumber);
        }
    }
}

function clear() {
    const resultDiv = document.querySelector('.result');
    resultDiv.textContent = '';
    hasDigit = false;
    hasOperator = false;
}

let hasDigit = false;
let hasOperator = false;
let shouldReset = false;

const digits = document.querySelectorAll('.digit');

digits.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        const resultDiv = document.querySelector('.result');
        if (shouldReset) {
            clear();
            shouldReset = false;
        }
        resultDiv.textContent += value;
        hasDigit = true;
    });
})

const operators = document.querySelectorAll('.operator');

operators.forEach((button) => {
    button.addEventListener('click', () => {
        shouldReset = false;

        if (!hasOperator && hasDigit) {
            const value = button.textContent;
            const resultDiv = document.querySelector('.result');
            resultDiv.textContent += ` ${value} `;
            hasOperator = true;
        } else if (hasOperator) {
            let resultDiv = document.querySelector('.result');
            let parts = resultDiv.textContent.split(' ');

            let firstNumber = parseInt(parts[0]);
            let lastNumber = parseInt(parts[2]);
            const operator = parts[1];

            if (!isNaN(lastNumber)) {
                const operationResult = operate(firstNumber, operator, lastNumber);
                resultDiv.textContent = `${operationResult} ${button.textContent} `;
            } else {
                resultDiv.textContent = `${firstNumber} ${button.textContent} `;
            }
        }
    });
})

const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {
    let resultDiv = document.querySelector('.result');
    let parts = resultDiv.textContent.split(' ');

    let firstNumber = parseInt(parts[0]);
    let lastNumber = parseInt(parts[2]);
    const operator = parts[1];
    if (!isNaN(lastNumber)) {
        resultDiv.textContent = operate(firstNumber, operator, lastNumber);
        hasOperator = false;
        shouldReset = true;
    }
});


const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    clear();
});