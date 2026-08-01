class Employee {

    public employeeName: string;
    private salary: number;
    protected department: string;

    constructor(
        name: string,
        salary: number,
        department: string
    ) {
        this.employeeName = name;
        this.salary = salary;
        this.department = department;
    }

    displayEmployee(): void {
        console.log("Employee :", this.employeeName);
        console.log("Department :", this.department);
        console.log("Salary :", this.salary);
    }
}

const employee = new Employee(
    "Rahul",
    45000,
    "Software Development"
);

employee.displayEmployee();

export {};