//Function to print text before beginning the game 
let i = 0;
let txt = 'Rock, Paper, or Scissors?';
let speed = 50;

function typeWriter() {
    if(i < txt.length) {
        document.getElementById("gameh1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

//function to play audio @ start
function playSound () {
    const buttonPress = document.querySelector("#startbuttonsound");
    buttonPress.play();
}
mainButton = document.querySelector("#startbutton").addEventListener("click", playSound);

// Function to play winner audio on win
function playWinSound() {
    const winSound = document.getElementById("winnersound");
    winSound.play();
}

// Function to play loser audio on loss
function playLoseSound() {
    const loseSound = document.getElementById("losersound");
    loseSound.play();
}

//hide start div and show the main content
let startContainer = document.getElementById('start_container');
let btn = document.querySelector('#startbutton');

btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    //add timeout lenght matching animation duration
    window.setTimeout(function () { 
      startContainer.style.display = 'none';  
    }, 700);
    setTimeout(() => {typeWriter();}, 1000);
    //add event listener to all of the game buttons
    gameButtons = document.querySelectorAll(".button").forEach(item => {
        item.addEventListener("click", playSound);
    })
});

//function to hide end div and show winner 
function hideEndContainer() {
    let gameContainer = document.querySelector('.gamecontainer');
    let bottomContainer = document.getElementById('bottomcontainer');
    gameContainer.style.opacity = 0;
    gameContainer.style.transform = 'scale(0)';
    //add timeout length mathcing animation 
    gameContainer.style.display = 'none';
    bottomContainer.style.display = 'block';
}
btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    //add timeout lenght matching animation duration
    window.setTimeout(function () { 
        startContainer.style.display = 'none';  
      }, 700);
      setTimeout(() => {typeWriter();}, 1000);
      //add event listener to all of the game buttons
      gameButtons = document.querySelectorAll(".button").forEach(item => {
          item.addEventListener("click", playSound);
      })
});

//global variables
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

document.addEventListener("click", gameSelectionListener);
function gameSelectionListener(event) {
    let element = event.target;
    console.log(event.target);
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors"
    if (element.classList.contains("button") && element.id === ("rock")) {
        playRound(rock);
        console.log("submitted rock")
    }
    else if (element.classList.contains("button") && element.id === ("paper")) {
        playRound(paper);
        console.log("submitted paper")
    }
    else if (element.classList.contains("button") && element.id === ("scissors")) {
        playRound(scissors);
        console.log("submitted scissors")
    }
}

// Function to randomly generate computer game entries
function computerPlay() {
    randomGameValue = Math.floor(Math.random() * 3);
    if (randomGameValue == "0") {
        return "rock";
    }
    else if (randomGameValue == "1") {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//main game function
function playRound(playerSelection) {
    console.log(playerSelection);
    //set variables for selections
    const computerSelection = computerPlay();
    const rockSelected = document.querySelector("#rock");
    const paperSelected = document.querySelector("#paper");
    const scissorsSelected = document.querySelector("#scissors");
    const computerRockSelected = document.querySelector("#computerrock");
    const computerPaperSelected = document.querySelector("#computerpaper");
    const computerScissorsSelected = document.querySelector("#computerscissors");
    //loop through computer options
    if (computerSelection == "rock") {
        // Change the background color of the rock div
        computerRockSelected.style.backgroundColor = "#7987e9";
        // Change the background color of the other divs
        computerPaperSelected.style.backgroundColor = "white";
        computerScissorsSelected.style.backgroundColor = "white";
    }
    else if (computerSelection == "paper") {
        // Change the background color of the paper div
        computerPaperSelected.style.backgroundColor = "#7987e9";
        // Change the background color of the other divs
        computerRockSelected.style.backgroundColor = "white";
        computerScissorsSelected.style.backgroundColor = "white";
    }
    else if (computerSelection == "scissors") {
        // Change the background color of the rock div
        computerScissorsSelected.style.backgroundColor = "#7987e9";
        // Change the background color of the other divs
        computerRockSelected.style.backgroundColor = "white";
        computerPaperSelected.style.backgroundColor = "white";
    }
    // Convert player entry to string
    let playerSelectionString = String(playerSelection);
    // Convert player selection to all lowercase
    let playerSelectionLowercase = playerSelectionString.toLowerCase();
    // If player selection is rock
    if (playerSelectionLowercase === "rock") {
        // Change the background color of the rock div
        rockSelected.style.backgroundColor = "#fc5868";
        // Change the background color of the other divs
        paperSelected.style.backgroundColor = "white";
        scissorsSelected.style.backgroundColor = "white";
        // If computer selection is rock then draw
        if (computerSelection === "rock") {
            console.log("Draw!");
            playerScore++;
            computerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "draw";
        }
        // If computer selection is paper then lose as paper beats rock
        else if (computerSelection === "paper") {
            console.log("You lose - paper beats rock!");
            computerScore++;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        }
        // If computer selection is scissors then win as scissors beats paper
        else {
            console.log ("You win - scissors beats paper!");
            playerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
            return "win";
        }
    }
    // Else if player selection is paper
    else if (playerSelectionLowercase === "paper") {
        // Change the background color of the paper div
        paperSelected.style.backgroundColor = "#fc5868";
        // Change the background color of the other divs
        rockSelected.style.backgroundColor = "white";
        scissorsSelected.style.backgroundColor = "white";
        // If computer selection is rock then win as paper beats rock
        if (computerSelection === "rock") {
            console.log("You win - paper beats rock!");
            playerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
            return "win";
        }
        // If computer selection is paper then draw
        else if (computerSelection === "paper") {
            console.log("Draw!");
            playerScore++;
            computerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "draw";
        }
        // If computer selection is scissors then lose as scissors beats paper
        else {
            console.log("You lose - scissors beats paper!")
            computerScore++;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        }
    }
    // Else (player selected scissors)
    else if (playerSelectionLowercase === "scissors") {
        // Change the background color of the scissors div
        scissorsSelected.style.backgroundColor = "#fc5868";
        // Change the background color of the other divs
        rockSelected.style.backgroundColor = "white";
        paperSelected.style.backgroundColor = "white";
        // If computer selection is rock then lose as rock beats scissors
        if (computerSelection === "rock") {
            console.log("You lose - rock beats scissors!")
            computerScore++;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        }
        // If computer selection is paper then win as scissors beats paper
        else if (computerSelection === "paper") {
            console.log("You win - scissors beats paper!");
            playerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
            return "win";
        }
        // If computer selection is scissors then draw
        else {
            console.log("Draw!");
            playerScore++;
            computerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "draw";
        }
    }
    else {
        console.log("Invalid entry, please try again.");
        game(playerScore, computerScore);
        return null;
    }
}

// Score tracker
function game(playerScore, computerScore) {
    // Set variable for the game update paragraph tag
    const gameUpdates = document.querySelector(".gameupdates");
    // Set variables for the user and robot win logos
    let userWinLogo = document.getElementById('userwinslogo');
    let robotWinLogo = document.getElementById('robotwinslogo');
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            let text = document.createTextNode(`YOU WIN ${playerScore}:${computerScore}!`);
            gameUpdates.appendChild(text);
            hideEndContainerShowWinner();
            playWinSound();
            userWinLogo.style.display = 'block';
        }
        else if (computerScore > playerScore) {
            let text = document.createTextNode(`COMPUTER WINS ${computerScore}:${playerScore}!`);
            gameUpdates.appendChild(text);
            hideEndContainerShowWinner();
            playLoseSound();
            robotWinLogo.style.display = 'block';
        }
        else {
            let text = document.createTextNode(`IT WAS A DRAW!`);
            gameUpdates.appendChild(text);
            hideEndContainerShowWinner();
            userWinLogo.style.display = 'block';
            robotWinLogo.style.display = 'block';
        }   
    }
}