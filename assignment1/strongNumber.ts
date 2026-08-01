let number: number = 145;
let originalNumber: number = number;
let total: number = 0;

while (number > 0) {
    let digit = number % 10;
    let factorial = 1;

    for (let i = 1; i <= digit; i++) {
        factorial *= i;
    }

    total += factorial;
    number = Math.floor(number / 10);
}

if (total === originalNumber) {
    console.log(originalNumber + " is a Strong Number");
} else {
    console.log(originalNumber + " is not a Strong Number");
}

export {};