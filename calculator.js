let runCalculator = true;

// Create a table header before the loop starts
document.write("<table border='1'>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (runCalculator) {
    // Prompt the user for the first number
    let x = prompt("Enter the first number:");

    // If the user clicks "Cancel", exit the loop
    if (x === null) break;

    // Convert x to a number
    x = parseFloat(x);
    if (isNaN(x)) {
        document.write("<tr><td colspan='4'>Error: First input is not a valid number.</td></tr>");
        continue;
    }

    // Prompt the user for the second number
    let y = prompt("Enter the second number:");

    // If the user clicks "Cancel", exit the loop
    if (y === null) break;

    // Convert y to a number
    y = parseFloat(y);
    if (isNaN(y)) {
        document.write("<tr><td colspan='4'>Error: Second input is not a valid number.</td></tr>");
        continue;
    }

    // Prompt the user for an operator
    let operator = prompt("Enter an operator (+, -, *, /, %):");

    // If the user clicks "Cancel", exit the loop
    if (operator === null) break;

    let result;
    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            if (y === 0) {
                result = "Error: Division by zero";
            } else {
                result = x / y;
            }
            break;
        case '%':
            result = x % y;
            break;
        default:
            result = "Error: Invalid operator";
    }

    // Add a row to the table with the numbers, operator, and result
    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

    // Ask if the user wants to continue
    runCalculator = confirm("Do you want to perform another calculation?");
}

// Close the table after the loop finishes
document.write("</table>");
