class Student {

    constructor(
        private studentName: string,
        private rollNumber: number,
        private department: string
    ) {}

    displayDetails(): void {
        console.log("Student Name :", this.studentName);
        console.log("Roll Number  :", this.rollNumber);
        console.log("Department   :", this.department);
    }
}

const student = new Student(
    "Kumudwathi",
    23,
    "CSE(AI&DS)"
);

student.displayDetails();

export {};