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

let hasDigit = false;
let hasOperator = false;

const digits = document.querySelectorAll('.digit');

digits.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        const resultDiv = document.querySelector('.result');
        resultDiv.textContent += value;
        hasDigit = true;
    });
})


const operators = document.querySelectorAll('.operator');

operators.forEach((button) => {
    button.addEventListener('click', () => {
        if (!hasOperator && hasDigit) {
            const value = button.textContent;
            const resultDiv = document.querySelector('.result');
            resultDiv.textContent += ` ${value} `;
            hasOperator = true;
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
        if (operator === '+') {
            resultDiv.textContent = add(firstNumber, lastNumber);
        } else if (operator === '-') {
            resultDiv.textContent = subtract(firstNumber, lastNumber);
        } else if (operator === 'x') {
            resultDiv.textContent = multiply(firstNumber, lastNumber);
        } else if (operator === '/') {
            resultDiv.textContent = divide(firstNumber, lastNumber);
        }
    }
    hasOperator = false;

});

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    const resultDiv = document.querySelector('.result');
    resultDiv.textContent = '';
    hasDigit = false;
    hasOperator = false;
});