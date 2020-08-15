var playerOneScore = document.getElementById("player-one-score");
var playerTwoScore = document.getElementById("player-two-score");

var playingToInput = document.getElementById("playing-to-input");
var playingToCount = document.getElementById("playing-to-count");

var playerOneCounter = document.getElementById("player-one-counter");
var playerTwoCounter = document.getElementById("player-two-counter");``

var resetButton = document.getElementById("reset-button");

var counterOne = 0;
var counterTwo = 0;
var playingTo = 3;
var isGameOver = false;

// playerOneCounter.addEventListener("click" , increasePlayerCount);

document.getElementById("playing-to-count").innerHTML = playingTo;

playerOneCounter.addEventListener("click" , function(){

    console.log("Inside player one counter listener");

    if(isGameOver == false){
        counterOne++;
        playerOneScore.innerHTML = counterOne;

        if(counterOne == playingTo){

            playerOneScore.classList.toggle("green");
            isGameOver = true;
            console.log("Game Over!! Player One is the winner");
            
        }
    }
    

})

playerTwoCounter.addEventListener("click" , function(){

    console.log("Inside player two counter listener");
    if(isGameOver == false){
        counterTwo++;
        playerTwoScore.innerHTML = counterTwo;

        if(counterTwo == playingTo){

            playerTwoScore.classList.toggle("green");
            isGameOver = true;
            console.log("Game Over!! Player Two is the winner");
        }
    }

})

resetButton.addEventListener("click" , function(){

    console.log("Inside reset counter method");
    playerOneScore.classList.remove("green");
    playerTwoScore.classList.remove("green");
    counterOne = 0;
    counterTwo = 0;
    playerOneScore.innerHTML = 0;
    playerTwoScore.innerHTML = 0;
    isGameOver = false;
})


playingToInput.addEventListener("change" , function(){

    console.log("Inside winning value input changer method");
    if(playingToInput.value > 0){

        playingToCount.innerHTML = playingToInput.value;
        playingTo = playingToInput.value;
        console.log(playingTo);
    
    }
    else{

        alert("Invalid Input!! Please try again!!");
    }
    
})