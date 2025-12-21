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
