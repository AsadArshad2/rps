console.log("Hello world");

function getComputerChoice() {
    var cID = Math.floor(Math.random() * 3) + 1;
    if (cID == 1) {
        return "Rock";
    }
    if (cID == 2) {
        return "Paper";
    }
    return "Scissors";
}

function getPlayerChoice() {
     var pW = prompt("Choose Rock, Paper or Scissors");
    var pID;
    
    if (pW.toLowerCase().includes("rock")) {
        pID = "Rock";
    }
    if (pW.toLowerCase().includes("paper")) {
        pID = "Paper";
    }
    if (pW.toLowerCase().includes("scissors")) {
        pID = "Scissors";
    }

    console.log("Player chose: " + pW);
    return pID;
}

function game(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log("It's a tie!");
    } else if (
        (computerChoice === "Rock" && playerChoice === "Scissors") ||
        (computerChoice === "Paper" && playerChoice === "Rock") ||
        (computerChoice === "Scissors" && playerChoice === "Paper")
    ) {
        console.log("Computer wins!");
    } else {
        console.log("You win!");
    }
}

// Get the computer's choice
const computerChoice = getComputerChoice();
console.log("Computer chose: " + computerChoice);

// Get the player's choice
const playerChoice = getPlayerChoice();

// Check if player made a valid choice
if (playerChoice) {
    game(computerChoice, playerChoice);
} else {
    console.log("Invalid input. Please choose Rock, Paper, or Scissors.");
}
