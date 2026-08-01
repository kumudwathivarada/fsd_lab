let inputText: string = "programming";
let uniqueText: string = "";

for (let character of inputText) {

    if (!uniqueText.includes(character)) {
        uniqueText += character;
    }
}

console.log("Original String :", inputText);
console.log("Without Duplicates :", uniqueText);

export {};