// String: stores text data
let studentName: string = "Kumudwathi";

// Number: stores numeric values
let studentAge: number = 20;

// Boolean: stores true or false
let isEnrolled: boolean = true;

// Display the data types
console.log("Data type of studentName is -->", typeof studentName);
console.log("Data type of studentAge is -->", typeof studentAge);
console.log("Data type of isEnrolled is -->", typeof isEnrolled);

// Function using string, number and boolean types
function showStudentProfile(
    name: string,
    age: number,
    active: boolean
): void {
    console.log(`Student: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${active ? "Active" : "Inactive"}`);
}

showStudentProfile(studentName, studentAge, isEnrolled);

export {};