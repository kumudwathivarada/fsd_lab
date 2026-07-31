// any: variable can hold values of different types
let userValue: any = 250;

console.log("Initial value:", userValue);

userValue = "Guest User";
console.log("Updated value:", userValue);

userValue = true;
console.log("Final value:", userValue);

// unknown: value should be checked before using it
let inputData: unknown = "CSE(AI&DS)";

function processInput(value: unknown): void {
    if (typeof value === "string") {
        console.log("String value:", value);
        console.log("Length:", value.length);
    } else if (typeof value === "number") {
        console.log("Number value:", value);
        console.log("Double:", value * 2);
    } else {
        console.log("Unknown type received");
    }
}

processInput(inputData);
processInput(25);
processInput(false);

// void: function does not return any value
function displayMessage(message: string): void {
    console.log("Message:", message);
}

displayMessage("Welcome to Full Stack Development Lab");

export {};