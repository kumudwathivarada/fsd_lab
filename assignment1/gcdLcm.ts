let firstNumber: number = 18;
let secondNumber: number = 24;

let a = firstNumber;
let b = secondNumber;

while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}

let gcd: number = a;
let lcm: number = (firstNumber * secondNumber) / gcd;

console.log("GCD =", gcd);
console.log("LCM =", lcm);

export {};