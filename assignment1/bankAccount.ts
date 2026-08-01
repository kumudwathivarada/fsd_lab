class BankAccount {

    private balance: number;

    constructor(
        private accountHolder: string,
        openingBalance: number
    ) {
        this.balance = openingBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ₹${amount}`);
    }

    withdraw(amount: number): void {

        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ₹${amount}`);
        } else {
            console.log("Insufficient Balance");
        }
    }

    displayBalance(): void {
        console.log("Account Holder :", this.accountHolder);
        console.log("Current Balance :", this.balance);
    }
}

const account = new BankAccount("Kumudwathi", 5000);

account.deposit(2000);
account.withdraw(1500);
account.displayBalance();

export {};