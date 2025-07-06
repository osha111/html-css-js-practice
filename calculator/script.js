//  This selects display input box 

const display = document.getElementById("display");

// This function updates the display with the clicked button's value

function updateDisplay(value) {
    display.value += value;
}

//  This function clears the display

function clearDisplay() {
    display.value ="";
}


// This function evaluates the expression in the display

function evaluateExpression() {
    try {

        // Use eval to calculate the expression
        const result = eval(display.value);
        display.value = result;

    } catch (error) {
        display.value = "Error";
    }
}
