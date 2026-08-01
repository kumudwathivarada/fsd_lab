let numbers: number[] = [25, 18, 42, 67, 91, 56, 91];

let uniqueNumbers = [...new Set(numbers)];
uniqueNumbers.sort((a, b) => b - a);

console.log("Second Largest Number :", uniqueNumbers[1]);

export {};