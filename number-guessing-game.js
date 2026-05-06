// Game title

let gameName="Number Guessing Game";

// Secret Number

let secretNumber=7;

// User guess

let userGuess=5;

console.log("Welcome to", gameName);

// Check result

if(userGuess===secretNumber) {
console.log("🎉 Correct Guess: You Win!");
}
else {
console.log("❌ Wrong Guess! Try Again");
}

// Difference

let difference=secretNumber-userGuess;
console.log("Difference:", difference);

let attempts=3;
let score=100;

console.log("Attempts:", attempts);
console.log("Score:", score);

