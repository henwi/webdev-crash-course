// Conditionals: Ternary Operator

// syntax
// condition ? ifTrue : ifFalse;


let soup = "Beef Noodle Soup";
let noSoup = "Sorry, no soup for you!."
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";

console.log(response);



let isBanned = 0;


// you can chain ternary operator

let soupAccess = isBanned ? noSoup 
    : soup 
    ? `Yes, we have ${soup} today.`
    : "Sorry, No soup today.";

console.log(soupAccess);

let testScore = 75;
let myGrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F";
console.log(`My test grade is a ${myGrade}`);

let playerOne = "rock";
let computer = "paper";

let result = 
    playerOne === computer 
        ? "Tie game!"
        : playerOne === "rock" && computer === "paper" 
        ? "Computer wins!"
        : playerOne === "paper" && computer === "scissors" 
        ? "Computer wins!"
        : playerOne === "scissors" && computer === "rock" 
        ? "Computer wins!"
        : "playerOne wins!";

console.log(result);
