var noOfSquares = 6;
var colorList = [];
var colorToGuess;


var colorBoxes = document.getElementsByClassName("square");
var rgbColorCode = document.getElementById("rgb-color-code");
var message = document.getElementById("message");
var upperDiv = document.getElementById("upper-div");
var newColors = document.getElementById("new-colors");
var modeSelect = document.querySelectorAll(".mode");


init();

function init(){

    // Event listeners for the mode buttons

    modeButtonsListener();

    // Event Listener for the boxes and to check the winning conditon
    
    colorBoxesListener();

    // Reset all colors

    resetGame();

}


// Function for mode buttons listeners

function modeButtonsListener(){

    for (i = 0 ; i < modeSelect.length ; i++){

        modeSelect[i].addEventListener("click" , function(){

            modeSelect[0].classList.remove("selected");
            modeSelect[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent == "Easy" ? noOfSquares = 3 : noOfSquares = 6;
            resetGame()

        })
    }

}

// Function for color boxes listeners

function colorBoxesListener(){

    for(i = 0 ; i < noOfSquares ; i++){

        colorBoxes[i].addEventListener("click" , function(){

            console.log(noOfSquares);
            console.log("Inside event listener");
            selectedColor = this.style.backgroundColor;
            console.log("Selected Color" , selectedColor);
            console.log("Color to guess", colorToGuess);

            // Winning Condition
            if(selectedColor == colorToGuess){

                changeBoxesColors(selectedColor);
                message.textContent = "Correct!";
                newColors.textContent = "Play Again?"
                upperDiv.style.backgroundColor = selectedColor;

            } 
            // Wrong Guess
            else{       
                this.style.backgroundColor = "black";
                message.textContent = "Try Again!";
            }
        
        })
    };

}



// Event listener for the New Colors or New Game button

newColors.addEventListener("click" , function(){

    resetGame();
})


// Function to Reset the game and show new colors in the boxes

function resetGame(){

    console.log(noOfSquares);
    
    colorList = generateColorForBoxes(noOfSquares);
    colorToGuess = generateColorToGuess(noOfSquares);
    console.log("New color to guess" , colorToGuess);
    rgbColorCode.textContent = colorToGuess;
    newColors.textContent = "New Colors";
    message.textContent = "";


    for (i = 0 ; i < colorBoxes.length ; i++){

        if(colorList[i]){

            colorBoxes[i].style.display = "block";
            colorBoxes[i].style.backgroundColor = colorList[i];
        }
        else{

            colorBoxes[i].style.display = "none";
        }
        
    }

    upperDiv.style.backgroundColor = "steelblue";

}

// Function to generate random RGB for the boxes
function generateRandomRGB(){

    var r = (Math.floor(Math.random() * 257));
    var g = (Math.floor(Math.random() * 257));
    var b = (Math.floor(Math.random() * 257));

    return ("rgb(" + r + ", " + g + ", " + b +")");
}


// Function to generate random color for the boxes
function generateColorForBoxes(noOfColors){

    colorList = [];
    console.log("Inside the generate random color for boxes function");
    for(i = 0 ; i < noOfColors ; i++){

        colorList.push(generateRandomRGB());
    }
    return colorList;
}


// Function to generate a random id to guess the color 
function generateColorToGuess(maxLength){     // Change name of function (maybe SelectColor....)

    console.log("Here inside the generateColorToGuess Methhod and max length =" , maxLength)
    return (colorList[Math.floor(Math.random() * maxLength)]);

}


// Function to change to color of the boxes 
function changeBoxesColors(color){

    for(i = 0 ; i < colorBoxes.length ; i++){

        colorBoxes[i].style.backgroundColor = color;

    }

}