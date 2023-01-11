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