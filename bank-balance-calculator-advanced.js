// User details

let userName = "Chinnu";
let bankName = "SBI";
let accountNumber = 123456789;

// Account balance

let balance = 10000;

// Deposit amount

let depositAmount = 6000;

// Withdraw amount

let withdrawAmount = 2000;

// Balance after deposit

balance=balance+depositAmount;

// Balance after withdraw

balance=balance-withdrawAmount;

// ATM Information

let atmLocation="Hyderabad";
let transactionCharge=10;

// Deduct transaction charge

balance=balance-transactionCharge;

console.log("-------ATM Transaction-------");

console.log("User Name:", userName);
console.log("Bank:", bankName);
console.log("Account Number:", accountNumber);

console.log(" ");

console.log("Deposit Amount:", depositAmount);
console.log("Withdraw Amount:", withdrawAmount);

console.log(" ");

console.log("Transaction Charge:", transactionCharge);

console.log(" ");

console.log("Remaining Balance:", balance);

console.log("ATM Location:", atmLocation);

console.log("-------Transaction complete-------");