let value: number = 153;
let original: number = value;
let total: number = 0;

while (value > 0) {
    let digit = value % 10;
    total += digit ** 3;
    value = Math.floor(value / 10);
}

if (total === original) {
    console.log(original + " is an Armstrong Number");
} else {
    console.log(original + " is not an Armstrong Number");
}

export {};