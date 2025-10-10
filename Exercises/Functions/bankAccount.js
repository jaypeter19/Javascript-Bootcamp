class BankAccount {
    constructor(accountHolder, accountNumber, balance = 0) {
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance
    }
    deposit(amt) {
        if (amt > 0) {
            this.balance += amt;
            console.log(`You deposited ${amt}. New balance is: $${this.balance}`)
        } else {
            console.log("Can't deposit a negative amount ")
        }
    }
    withdraw(amt) {
        if (amt > this.balance) {
            console.log("You can't withdraw that much!")
        } else {
            this.balance -= amt;
            console.log(`You withdrew $${amt}. New balance is: $${this.balance}`)
        }
    }
}