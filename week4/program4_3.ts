// Generic Variable
let values: Array<string> = ["A", "B", "C"];

// Generic Function
function displayData<T>(data: T): T {
    return data;
}

// Generic Constraint
interface HasLength {
    length: number;
}

function checkLength<T extends HasLength>(item: T): void {
    console.log("Length:", item.length);
}

// Usage
console.log(displayData<number>(200));
console.log(displayData<string>("Generics"));

checkLength("Hello World");
checkLength([10, 20, 30]);