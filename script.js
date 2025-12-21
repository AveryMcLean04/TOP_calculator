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

const digits = document.querySelectorAll('.digit');

digits.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        const resultDiv = document.querySelector('.result');
        resultDiv.textContent += value;
    });
})


const operators = document.querySelectorAll('.operator');

operators.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        const resultDiv = document.querySelector('.result');
        resultDiv.textContent += ` ${value} `;
    });
})

const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {
    const resultDiv = document.querySelector('.result');
    let n = resultDiv.textContent.length;
    const parts = resultDiv.textContent.split(' ');
    const firstNumber = parseInt(parts[0]);
    const lastNumber = parseInt(parts[2]);
    const operator = parts[1];

    if (operator === '+') {
        resultDiv.textContent = add(firstNumber, lastNumber);
    } else if (operator === '-') {
        resultDiv.textContent = subtract(firstNumber, lastNumber);
    } else if (operator === 'x') {
        resultDiv.textContent = multiply(firstNumber, lastNumber);
    } else if (operator === '/') {
        resultDiv.textContent = divide(firstNumber, lastNumber);
    }
});