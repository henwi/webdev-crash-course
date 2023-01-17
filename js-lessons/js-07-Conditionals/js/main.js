// Conditionals: IF statements



let customerIsBanned = 0;
let soup = "beef noodle soup";
let crackers = 0;
let reply;



if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & crakers.`;
} else if (soup) {
    reply = `Here's your order of ${soup}.`
} else {
    reply = `Sorry, we're out of ${soup}`;
}

console.log(reply);


// Conditionals: Switch Statements

switch (Math.floor(Math.random() * 5 + 1)) {
    case 1:
        console.log(1);
        break;
        
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log('No Match!');

}

let playerOne = "rock";
let computer = "scissor";

switch (playerOne) {
    case computer:
        console.log("Tie game!");
        break;
    case "rock":
        if (computer === "paper") {
            console.log("computer wins!");
        } else {
            console.log("playerOne wins");
        }
        break;
    case "paper":
        if (computer === "scissor") {
            console.log("computer wins!");
        } else {
            console.log("playerOne wins");
        }
        break;
    default:
        if (computer === "rock") {
            console.log("computer wins!");
        } else {
            console.log("playerOne wins");
        }
        break;
}