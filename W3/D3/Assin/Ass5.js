//  Wallet with ‘this’ keyword

const wallet = {
    owner: "AbhiGanesh",
    balance: 0,
    lastTransaction: null,
    deposit: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid deposit amount");
            return;
        }
        this.balance += amount;
        this.lastTransaction = {
            type: "DEPOSIT",
            amount: 200 ,
            balanceAfter: this.balance
        };
        // console.log(`Deposited: ${amount}`);
    },
    withdraw: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid withdrawal amount");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }
        this.balance -= amount;
        this.lastTransaction = {
            type: "WITHDRAW",
            amount: 200,
            balanceAfter: this.balance
        };
        // console.log(`Withdrawn: ${amount}`);
    }
};
wallet.deposit(0);
wallet.withdraw(200);
console.log(wallet);