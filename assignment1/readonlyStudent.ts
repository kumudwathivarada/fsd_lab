class Student {

    readonly studentId: number;
    studentName: string;

    constructor(id: number, name: string) {
        this.studentId = id;
        this.studentName = name;
    }

    displayDetails(): void {
        console.log("Student ID :", this.studentId);
        console.log("Student Name :", this.studentName);
    }
}

const student = new Student(101, "Kumudwathi");

student.displayDetails();

// student.studentId = 200; // Error: Cannot assign to 'studentId'

export {};