function calculateResult() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const operator = document.getElementById('operator').value;
    const number2 = parseFloat(document.getElementById('number2').value);
    const resultDiv = document.getElementById('result');

    // Validation for valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.textContent = 'Please enter valid numbers!';
        return;
    }

    let result;

    // Perform operation based on the selected operator
    switch (operator) {
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            if (number2 === 0) {
                resultDiv.textContent = 'Error: Division by zero is not allowed!';
                return;
            }
            result = divide(number1, number2);
            break;
        default:
            resultDiv.textContent = 'Invalid operator!';
            return;
    }

    // Display the result rounded to 2 decimal places
    resultDiv.textContent = `Result: ${result.toFixed(2)}`;
}

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    return a / b;
}