let runCalculator = true;

// array for results
let resultsArray = [];

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
    let op = prompt("Enter an operator (+, -, *, /, %):");

    // If the user clicks "Cancel", exit the loop
    if (op === null) break;

    let result;
    let isError = false;

    switch (op) {
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
                isError = true;
            } else {
                result = x / y;
            }
            break;
        case '%':
            result = x % y;
            break;
        default:
            result = "Error: Invalid operator";
            isError = true;
    }

    // Add a row to the table with the numbers, operator, and result
    document.write("<tr><td>" + x + "</td><td>" + op + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

    // If the result is valid (no error), store it in the resultsArray array
    if (!isError) {
        resultsArray.push(result);
    }

    // Ask if the user wants to continue
    runCalculator = confirm("Do you want to perform another calculation?");
}

// Close the table after the loop finishes
document.write("</table>");

// Calculate statistics for valid results if there are any
if (resultsArray.length > 0) {
    let total = resultsArray.reduce((acc, num) => acc + num, 0); // sum of valid results
    let min = Math.min(...resultsArray); // min value
    let max = Math.max(...resultsArray); // max value
    let avg = total / resultsArray.length; // avg value

    // Create a new table to display the statistics
    document.write("<br><table border='1'>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
} else {
    document.write("<p>No valid results to calculate statistics.</p>");
}
