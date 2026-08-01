let values: number[] = [1, 2, 3, 5, 6];

let totalElements: number = values.length + 1;

let expectedSum: number = (totalElements * (totalElements + 1)) / 2;

let actualSum: number = values.reduce((sum, value) => sum + value, 0);

console.log("Missing Number :", expectedSum - actualSum);

export {};