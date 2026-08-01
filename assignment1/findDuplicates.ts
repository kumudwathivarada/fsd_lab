let numbers: number[] = [12, 18, 25, 18, 30, 12, 40, 25];

let visited = new Set<number>();
let duplicateNumbers = new Set<number>();

for (let value of numbers) {

    if (visited.has(value)) {
        duplicateNumbers.add(value);
    } else {
        visited.add(value);
    }
}

console.log("Duplicate Elements:");

duplicateNumbers.forEach((value) => {
    console.log(value);
});

export {};