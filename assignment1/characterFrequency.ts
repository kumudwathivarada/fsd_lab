let text: string = "typescript";

let frequency: { [key: string]: number } = {};

for (let character of text) {

    if (frequency[character]) {
        frequency[character]++;
    } else {
        frequency[character] = 1;
    }
}

console.log("Character Frequencies:");

for (let key in frequency) {
    console.log(`${key} : ${frequency[key]}`);
}

export {};