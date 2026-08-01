let values: number[] = [5, 2, 5, 8, 2, 5, 9, 8];

let occurrences: { [key: number]: number } = {};

for (let value of values) {
    occurrences[value] = (occurrences[value] || 0) + 1;
}

console.log("Occurrences of Elements:");

for (let key in occurrences) {
    console.log(`${key} -> ${occurrences[key]}`);
}

export {};