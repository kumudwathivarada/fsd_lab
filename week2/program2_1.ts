// Program to demonstrate Functions, Parameters and Return Types

// Function with return type (string)
function getUserName(name: string): string {
    let message: string = "Welcome " + name + " to TypeScript Lab";
    return message;
}

// Function with parameters and return type (number)
function calculateAmount(price: number, quantity: number): number {
    let total: number;
    total = price * quantity;
    return total;
}

// Function with no return (void)
function printDetails(text: string): void {
    console.log("Details:", text);
}

// Function using multiple parameters
function findAverage(a: number, b: number, c: number): number {
    let avg: number;
    avg = (a + b + c) / 3;
    return avg;
}

// Main Program
let studentName: string = "Karthik";
let msg = getUserName(studentName);
console.log(msg);

let totalBill = calculateAmount(150, 3);
console.log("Total Bill Amount:", totalBill);

printDetails("Functions executed successfully");

let averageMarks = findAverage(75, 80, 85);
console.log("Average Marks:", averageMarks);