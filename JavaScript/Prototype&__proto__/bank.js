class Bank {
  constructor(name, mobile, email, amount = 0) {
    this.__accountHolderName = name;
    this.mobile = mobile;
    this._email = email;
    this.balance = amount;
  }

  deposit(amount) {
    this.balance += Number(amount);

    console.log(
      `Amount of Rs. ${amount} is Deposited by ${this.__accountHolderName}`
    );

    this.sendDepositEmail(amount);
  }

  checkBalance() {
    console.log(`Your balance is Rs. ${this.balance}`);
  }

  withdraw(amount) {
    if (amount !== undefined && amount !== 0) {
      if (this.balance <= 0 || this.balance < amount) {
        console.log("Insufficient Balance");
        this.InsufficientFundEmail(amount);
      } else {
        this.balance -= Number(amount);

        console.log(`Amount Withdrawn : Rs. ${amount}`);

        let sendEmail = this.sendWithdrawEmail.bind(
          this,
          amount,
          this.__accountHolderName
        );

        sendEmail();
      }
    } else {
      console.log("Please Enter Amount to Withdraw");
    }
  }
}
// ================= Prototype Methods =================

Bank.prototype.sendDepositEmail = function (amount) {
  console.log(`
To: ${this.__accountHolderName}

This is to inform you that Rs. ${amount} has been deposited successfully.
Available Balance: Rs. ${this.balance}
`);
};

Bank.prototype.sendWithdrawEmail = function (amount) {
  console.log(`
To: ${this.__accountHolderName}

This is to inform you that Rs. ${amount} has been withdrawn successfully.
Available Balance: Rs. ${this.balance}
`);
};

Bank.prototype.InsufficientFundEmail = function (amount) {
  console.log(`
To: ${this.__accountHolderName}

Withdrawal of Rs. ${amount} failed due to insufficient balance.
Available Balance: Rs. ${this.balance}
`);
};

// ================= Object =================

let obj1 = new Bank(
  "sunny",
  "5959561000",
  "raj45@gmail.com",
  522000
);

