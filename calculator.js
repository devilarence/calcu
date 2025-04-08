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

function calculate() {
    const num1 = parseFloat(document.getElementById('firstNumber').value);
    const num2 = parseFloat(document.getElementById('secondNumber').value);
    const operator = document.getElementById('operator').value;
    const resultDisplay = document.getElementById('result');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.value = 'Invalid input';
        return;
    }
    
    let result;
    switch(operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': 
            if (num2 === 0) {
                result = 'Cannot divide by zero';
            } else {
                result = num1 / num2;
            }
            break;
    }
    
    resultDisplay.value = typeof result === 'number' ? result.toFixed(2) : result;
}

// Add click event to inputs to switch between them
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('firstNumber').addEventListener('click', () => isFirstNumber = true);
    document.getElementById('secondNumber').addEventListener('click', () => isFirstNumber = false);
});
