/* Secure Bank Account (Factory + clouseres + this) 
Create a factory function Name CreateBankAccount();

Properties:
Account Holder
Mobile
Email 
balance

methods:
*Independent (call, apply)
Deposite (Amount)
withdraw (Amount)
checkBalance()
checkBalanceProfile 

*/


function CreateBankAccount(accountHolder, mobile, email, initialBalance) {

    let balance = initialBalance; 

    return {
        accountHolder,
        mobile,
        email,

        Deposit(amount) {
            if (amount <= 0) {
                console.log("Deposit amount must be greater than 0.");
                return;
            }

            balance += amount;
            console.log(`₹${amount} deposited into ${this.accountHolder}'s account.`);
        },

        Withdraw(amount) {
            if (amount <= 0) {
                console.log("Invalid withdrawal amount.");
                return;
            }

            if (amount > balance) {
                console.log("Insufficient Balance.");
                return;
            }

            balance -= amount;
            console.log(`₹${amount} withdrawn from ${this.accountHolder}'s account.`);
        },

        CheckBalance() {
            console.log(`${this.accountHolder}'s Balance : ₹${balance}`);
        },

        CheckBalanceProfile() {
            console.log("=================================");
            console.log(`Account Holder : ${this.accountHolder}`);
            console.log(`Mobile Number  : ${this.mobile}`);
            console.log(`Email          : ${this.email}`);
            console.log(`Balance        : ₹${balance}`);
            console.log("=================================");
        }
    };
}

const accounts = [
    CreateBankAccount("Sunny Gautam", "9584676225", "sunny123@gmail.com", 1000),
    CreateBankAccount("Rahul Kumar", "9876543210", "rahul@gmail.com", 5000),
    CreateBankAccount("Priya Sharma", "9123456789", "priya@gmail.com", 3000),
    CreateBankAccount("Amit Verma", "9988776655", "amit@gmail.com", 7000)
];


console.log("------ Account Details ------");

for (const account of accounts) {
    account.CheckBalanceProfile();
}


console.log("\n------ Transactions ------");

for (const account of accounts) {
    account.Deposit(500);
    account.Withdraw(300);
    account.CheckBalance();
    console.log();
}





































































// function createBankAccount(holder, mobile, email, initialBalance) {
//   let balance = initialBalance;
//   let accountHolder = holder;
//   let mobileNumber = mobile;
//   let emailAddress = email;

//   return {
//     deposit(amount) {
//       if (amount > 0) {
//         balance += amount;
//         console.log(`Deposited: $${amount}. New balance: $${balance}`);
//       }
//     },

//     withdraw(amount) {
//       if (amount > 0 && amount <= balance) {
//         balance -= amount;
//         console.log(`Withdrawn: $${amount}. Remaining balance: $${balance}`);
//       } else {
//         console.log("Insufficient funds or invalid amount.");
//       }
//     },

//     checkBalance() {
//       console.log(`Current Balance: $${balance}`);
//       return balance;
//     },

//     checkBankProfile() {
//       return {
//         accountHolder: accountHolder,
//         mobile: mobileNumber,
//         email: emailAddress,
//         balance: balance
//       };
//     }
//   };
// }

// const myAccount = createBankAccount("tusher kumar", "146554313", "tushar@example.com", 1000);

// myAccount.deposit(500);
// myAccount.withdraw(200);
// myAccount.checkBalance();
// console.log(myAccount.checkBankProfile());


