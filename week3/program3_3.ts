class College {

    static collegeName: string = "SVECW";

    readonly studentId: number;

    constructor(id: number) {
        this.studentId = id;
    }

    display(): void {
        console.log("College :", College.collegeName);
        console.log("Student ID :", this.studentId);
    }
}

const student = new College(101);

student.display();

console.log("College Name :", College.collegeName);

export {};