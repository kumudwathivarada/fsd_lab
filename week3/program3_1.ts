class Student {

    constructor(
        public studentName: string,
        public rollNumber: number,
        public department: string
    ) {}

    displayDetails(): void {
        console.log("Student Name :", this.studentName);
        console.log("Roll Number  :", this.rollNumber);
        console.log("Department   :", this.department);
    }
}

const student1 = new Student(
    "Kumudwathi",
    23,
    "CSE(AI&DS)"
);

student1.displayDetails();

export {};