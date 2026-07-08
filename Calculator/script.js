const display = document.getElementById("display");

// Append values to the display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        let expression = display.value.replace(/%/g, "/100");
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        }, 1200);
    }
}

// Keyboard Support
document.addEventListener("keydown", function (e) {

    const allowedKeys = [
        "0","1","2","3","4","5","6","7","8","9",
        "+","-","*","/",".",
        "%","(",")"
    ];

    if (allowedKeys.includes(e.key)) {
        appendValue(e.key);
    }

    if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    }

    if (e.key === "Backspace") {
        deleteLast();
    }

    if (e.key === "Delete") {
        clearDisplay();
    }

    if (e.key === "Escape") {
        clearDisplay();
    }
});