let elements: number[] = [1, 2, 3, 4, 5, 6];

let positions: number = 2;

let rotatedArray: number[] = [
    ...elements.slice(positions),
    ...elements.slice(0, positions)
];

console.log("Original Array :", elements);
console.log("Rotated Array :", rotatedArray);

export {};