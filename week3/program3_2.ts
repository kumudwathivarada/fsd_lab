class BankAccount {

    public accountHolder: string;
    private balance: number;
    protected branch: string;

    constructor(name: string, amount: number, branchName: string) {
        this.accountHolder = name;
        this.balance = amount;
        this.branch = branchName;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log("Amount Deposited Successfully");
    }

    showDetails(): void {
        console.log("Account Holder :", this.accountHolder);
        console.log("Branch         :", this.branch);
        console.log("Balance        :", this.balance);
    }
}

const account = new BankAccount(
    "Kumudwathi",
    5000,
    "Bhimavaram"
);

account.deposit(1500);

account.showDetails();

export {};