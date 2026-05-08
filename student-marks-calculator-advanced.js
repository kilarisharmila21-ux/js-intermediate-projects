// Student Details

let studentName = "Chinnu";
let telugu = 85;
let english = 78;
let maths = 92;
let science = 74;
let social = 80;

// Total Marks

let total = telugu + english + maths + science + social;

// Average

let average = total/5;

// Grade Calculator

let grade;
 
if (average>=90) {
    grade = "A+";
}

else if (average>=75) {
    grade = "A";
}

else if (average>=60) {
    grade = "B";
}

else if (average>=50) {
    grade = "C";
}

else {
    grade = "Fail";
}

console.log("Student Name:", studentName);
console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Grade:", grade);