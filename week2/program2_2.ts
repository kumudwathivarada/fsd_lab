// Program to demonstrate Arrow Functions

// Normal Function
function calculateSum(a: number, b: number): number {
    let sum: number;
    sum = a + b;
    return sum;
}

// Arrow Function (same logic)
const calculateSumArrow = (a: number, b: number): number => {
    let sum: number;
    sum = a + b;
    return sum;
};

// Arrow Function (short form)
const multiply = (x: number, y: number): number => x * y;

// Arrow Function with single parameter
const getSquare = (num: number): number => {
    return num * num;
};

// Arrow Function with no parameters
const showMessage = (): void => {
    console.log("Arrow function executed");
};

// Main Program
let result1 = calculateSum(10, 20);
console.log("Normal Function Result:", result1);

let result2 = calculateSumArrow(10, 20);
console.log("Arrow Function Result:", result2);

let mul = multiply(5, 4);
console.log("Multiplication:", mul);

let sq = getSquare(6);
console.log("Square:", sq);

showMessage();