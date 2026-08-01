let number: number = 5834;
let digitSum: number = 0;

while (number > 0) {
    digitSum += number % 10;
    number = Math.floor(number / 10);
}

console.log("Sum of Digits =", digitSum);

export {};