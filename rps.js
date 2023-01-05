const choices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
let playerSelection;
let computerSelection;
let computerScore;
let playerScore;

function game(){
    computerScore = 0;
    playerScore = 0;
    for(let i = 0; i <= 5; i++){
        userInput();
    }
    console.log(declareWinner());
    
    function declareWinner(){
        if(computerScore === playerScore){
            alert("Tie!");
            return "Tie!";
        } else if(computerScore > playerScore){
            alert("You Lose. :( ");
            return "You Lose. :( ";
        } else {
            alert("You WIN!!!");
            return "You WIN!!!";
        }
    }
}

function userInput(){
    playerSelection = prompt('Rock, Paper, or Scissor?','');
    if(playerSelection.toLowerCase() == 'rock' || 
        playerSelection.toLowerCase() == 'paper' ||
        playerSelection.toLowerCase() == 'scissor'){
            console.log(playRound(playerSelection, computerSelection));
        } else {
            alert("Not a valid choice.");
            userInput();
        }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    if(computerSelection == playerSelection) {
        alert("Tie");
        return "Tie!" + ++playerScore + ++computerScore;
    } else if((computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissor" && playerSelection == "paper")){
            alert("You Lose.")
            return "You lose." + ++computerScore;
        }
        alert("You win!")
        return "You win!" + ++playerScore;
}

game();

