// User Details

let userName = "Chinnu";
let city = "Hyderabad";
let profession = "Student";

// Income Details

let monthlyIncome = 50000;
let extraIncome = 3000;

// Total Income

let totalIncome=monthlyIncome+extraIncome;

// Expense Details

let foodExpense = 2500;
let travelExpense = 1200;
let rentExpense = 6000;
let shoppingExpense = 1500;
let entertainmentExpense = 800;
let mobileRechargeExpense = 300;
let internetBillExpense = 500;
let electricityBillExpense = 700;
let otherExpense = 600;

// Total Expenses

let totalExpenses=foodExpense+travelExpense+rentExpense+shoppingExpense+entertainmentExpense+mobileRechargeExpense+internetBillExpense+electricityBillExpense+otherExpense;

// Savings

let totalSavings=totalIncome-totalExpenses;

// Yearly Calculations

let yearlyIncome=totalIncome*12;
let yearlyExpenses=totalExpenses*12;
let yearlySavings=totalSavings*12;

console.log("-------Personal Final Report-------");

console.log("User Nmae:", userName);
console.log("City:", city);
console.log("Profession:", profession);

console.log(" ");

console.log("Monthly Income:", totalIncome);
console.log("Monthly Expenses:", totalExpenses);
console.log("Monthly Savings:", monthlySavings);

console.log(" ");

console.log("Yearly Income:", yearlyIncome);
console.log("Yearly Expenses:", yearlyExpenses);
console.log("Yearly Savings:", yearlySavings);

console.log(" ");

console.log("Expense Breakdown:");
console.log("Food:", foodExpense);
console.log("Travel:", travelExpense);
console.log("Rent:", rentExpense);
console.log("Shopping:", shoppingExpense);
console.log("Entertainment:", entertainmentExpense);
console.log("Mobile Recharge:", mobileRechargeExpense);
console.log("Internet Bill:", internetBillExpense);
console.log("Electricity Bill:", electricityBillExpense);
console.log("Other Expense:", otherExpense);

console.log(" ");

console.log("Total Income:", totalIncome);
console.log("Total Expenses:", totalExpenses);
console.log("Final Savings:", monthlySavings);

console.log("-------Report End-------");