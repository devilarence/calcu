let isFirstNumber = true;

function addNumber(num) {
    if (isFirstNumber) {
        const firstInput = document.getElementById('firstNumber');
        firstInput.value = (firstInput.value || '') + num;
    } else {
        const secondInput = document.getElementById('secondNumber');
        secondInput.value = (secondInput.value || '') + num;
    }
}

function clearDisplay() {
    document.getElementById('firstNumber').value = '';
    document.getElementById('secondNumber').value = '';
    document.getElementById('result').value = '';
    isFirstNumber = true;
}

function toggleInput() {
    isFirstNumber = !isFirstNumber;
}

function calculate() {
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);
    const operator = document.getElementById('operator').value;
    
    if (isNaN(num1) || isNaN(num2)) return;
    
    let result;
    switch(operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero'; break;
    }
    
    document.getElementById('result').value = result;
}

// Add click event to inputs to switch between them
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('firstNumber').addEventListener('click', () => isFirstNumber = true);
    document.getElementById('secondNumber').addEventListener('click', () => isFirstNumber = false);
});