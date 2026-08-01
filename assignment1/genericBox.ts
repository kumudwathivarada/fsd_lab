class Box<T> {

    constructor(private value: T) {}

    display(): void {
        console.log("Stored Value :", this.value);
    }
}

const numberBox = new Box<number>(500);
const stringBox = new Box<string>("TypeScript");
const booleanBox = new Box<boolean>(true);

numberBox.display();
stringBox.display();
booleanBox.display();

export {};