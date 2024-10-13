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
var pScore = 0;
var cScore = 0;

function getPscore(){
    let score = Number.toString(pScore);
    return score;
}

document.getElementById("playerScore").innerHTML = pScore.toString() ;
document.getElementById("compScore").innerHTML = cScore.toString() ;



var pID;
function getPlayerChoice(){
    return pID;
}

function setPlayerChoice(choice){
    if (choice == 1) {
        pID = "Rock";
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

    }
    if (choice == 2) {
        pID = "Paper";
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

    }
    if (choice == 3) {
        pID = "Scissors";
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

    }
    
}





function game(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log("It's a tie!");
        document.getElementById("resultBox").innerHTML = "Its a Tie!";

    } else if (
        (computerChoice === "Rock" && playerChoice === "Scissors") ||
        (computerChoice === "Paper" && playerChoice === "Rock") ||
        (computerChoice === "Scissors" && playerChoice === "Paper")
    ) {
        console.log("Computer wins!");
        document.getElementById("resultBox").innerHTML = "Computer Wins!";
        cScore++;
        document.getElementById("compScore").innerHTML = cScore.toString() ;


    } else {
        console.log("You win!");
        document.getElementById("resultBox").innerHTML = "You Win!";
        pScore++;
        document.getElementById("playerScore").innerHTML = pScore.toString() ;


    }
    if (cScore == 5){
        document.getElementById("fin").innerHTML = 'GAME OVER YOU LOSE';
        cScore = 0;
        pScore = 0;
        document.getElementById("compScore").innerHTML = cScore.toString() ;
        document.getElementById("playerScore").innerHTML = pScore.toString() ;


    }
    if (pScore == 5){
        document.getElementById("fin").innerHTML = 'GAME OVER YOU WIN';
        pScore = 0;
        cScore = 0;
        document.getElementById("compScore").innerHTML = cScore.toString() ;
        document.getElementById("playerScore").innerHTML = pScore.toString() ;


    }

}

