let gameBoxes = document.querySelectorAll(".number-boxes")

// let gameData = [
//     [2, 2, 4, null],
//     [null, null, 4, 2],
//     [null, 4, 64, null],
//     [8, 8, 64, 2]
// ]
let gameData = [[null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]]

// let gameData = [[null, null],
// [null, null]]

// let gameData = [[null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null],
// [null, null, null, null, null, null, null, null]]
    

let gridLength = gameData.length
let newBox = document.getElementById("game-box");
let hasGameEnded = false



function generateView (){

    gameData.forEach(row =>{

        let rowView = document.createElement('div')
        rowView.className = 'row-view'
    
        row.forEach(element =>{
    
            let tileBox = document.createElement('span')
            tileBox.className = 'number-boxes'
    
            let text = element === null ? '': element
            let textNode = document.createTextNode(text)

            tileBox.appendChild(textNode)
            rowView.appendChild(tileBox)
            
            if(text == 2){
                tileBox.classList.add('number-two')
            }
            else if (text == 4){
                tileBox.classList.add('number-four')
            }
            else if (text == 8){
                tileBox.classList.add('number-eight')
            }
            else if (text == 16){
                tileBox.classList.add('number-sixteen')
            }
            else if (text == 32){
                tileBox.classList.add('number-thirty-two')
            }
            else if (text == 64){
                tileBox.classList.add('number-sixty-four')
            }
            else if (text == 128){
                tileBox.classList.add('number-hundred-twenty-eight')
            }
            else if (text == 256){
                tileBox.classList.add('number-two-hundred-fifty-six')
            }
            else if (text == 512){
                tileBox.classList.add('number-five-hundred-twelve')
            }
            else if (text == 1024){
                tileBox.classList.add('number-thousand-twenty-four')
            }
            else if (text == 2048){
                tileBox.classList.add('number-two-thousand-forty-eight')
            }
            else if (text > 2048){
                tileBox.classList.add('higher-numbers')
            }
            
        })     
        newBox.appendChild(rowView)
    
    })
}

function renderView(){
    newBox.innerHTML = '';
    generateView()
}

function getRandomNumberOfGivenLength(length){

    return (Math.floor(Math.random() * length))
}

function initializeGame(xPositionOne, yPositionOne, xPositionTwo, yPositionTwo, randomNumberOne, randomNumberTwo){

    for(i=0; i<gameData.length; i++){
        for(j=0; j<gameData[0].length; j++){
            gameData[xPositionOne][yPositionOne] = randomNumberOne
            gameData[xPositionTwo][yPositionTwo] = randomNumberTwo
        }
    }
    renderView()
}

function generateInitailRandomNumbers(){

    let xPositionOne = getRandomNumberOfGivenLength(gridLength)
    let yPositionOne = getRandomNumberOfGivenLength(gridLength)

    let xPositionTwo = getRandomNumberOfGivenLength(gridLength)
    let yPositionTwo = getRandomNumberOfGivenLength(gridLength)
    
    while(xPositionOne === xPositionTwo && yPositionOne === yPositionTwo){
        xPositionTwo = getRandomNumberOfGivenLength(gridLength)
        yPositionTwo = getRandomNumberOfGivenLength(gridLength)
    }

    let numberGeneratorOne = getRandomNumberOfGivenLength(100)
    let numberGeneratorTwo = getRandomNumberOfGivenLength(100)
    let randomNumberOne
    let randomNumberTwo

    if(numberGeneratorOne <= 70){
        randomNumberOne = 2
    }
    else{
        randomNumberOne = 4
    }

    if(numberGeneratorTwo <=60){
        randomNumberTwo = 4
    }
    else{
        randomNumberTwo = 2
    }

    console.log('('+ xPositionOne + ',' + yPositionOne +')')
    console.log('('+ xPositionTwo + ',' + yPositionTwo +')')
    // initializeGame(xPositionOne = 0, yPositionOne = 3, xPositionTwo = 1, yPositionTwo = 0, randomNumberOne = 2, randomNumberTwo = 4)
    initializeGame(xPositionOne, yPositionOne, xPositionTwo, yPositionTwo, randomNumberOne, randomNumberTwo)
}

function rearrangeListElements(numberList){

    let valueArray = []
    let nullArray = []
    // let numberList = numberList
    let i = 0

    while(i < numberList.length){
        if(numberList[i] == null){
            nullArray.push(numberList[i])
        }
        else{
            valueArray.push(numberList[i])
        }
        i++
    }

    numberList = []
    numberList = numberList.concat(valueArray, nullArray)
    return numberList
}

function addAdjacentListElements(numberList){

    // let numberList = numberList
    let i = 0
    while(i < numberList.length){
        if(numberList[i+1] == numberList[i] && numberList[i] != null){
            numberList[i] = numberList[i] + numberList[i+1]
            numberList[i+1] = null
        }
        i++
    }
    return numberList
}

function handleListElementsAdditionAndArrangement (numberList){

    // let numberList = numberList
    numberList = rearrangeListElements(numberList)
    numberList = addAdjacentListElements(numberList)
    numberList = rearrangeListElements(numberList)
    return numberList
}

function generateRandomNumberAtEmptyPosition(){
    
    console.log("Inside generate a random number method")
    let randomNumber
    let numberGenerator = getRandomNumberOfGivenLength(100)
    let xPosition = getRandomNumberOfGivenLength(gridLength)
    let yPosition = getRandomNumberOfGivenLength(gridLength)

    if(numberGenerator <= 70){
        randomNumber = 2
    }
    else{
        randomNumber = 4
    }

    while(gameData[xPosition][yPosition] != null){
        console.log(xPosition, yPosition)
        console.log("Already exists")
        xPosition = getRandomNumberOfGivenLength(gridLength)
        yPosition = getRandomNumberOfGivenLength(gridLength)
    }

    console.log("Generating " + randomNumber + " at position (" + xPosition + "," + yPosition + ")" )
    gameData[xPosition][yPosition] = randomNumber
}

function compareListWithGameData(initialList, gameDataCompareList){

    // console.log("Inside compare with game data method")
    // console.log("Intital List", initialList)
    // console.log("Game Data Comparision List", gameDataCompareList)

    let isListDifferent = false
    let i = 0
    while(i < gameDataCompareList.length){
        // let j = 0
        // while(j < gameData[i].length){

            
            // j++
        // }
        if(gameDataCompareList[i] != initialList[i]){
            isListDifferent = true
        }
    i++
    }

    if (isListDifferent == true){
        console.log("List has changed")
    }
    else{
        console.log("Same List")
    }

    return isListDifferent
}


function handleLeftArrowEvent() {

    console.log("Inside handleLeftArrowEvent method")
    let isRandomNumberRequired = false
    let isListDifferent
    let i = 0
    let initialList
    // initialList = gameData.slice()
    // for(i=0; i<gameData.length;i++){

    while(i < gameData.length){

        initialList = []
        initialList = gameData[i].slice()
        // console.log("Inital List after left arrow click", initialList)
        gameData[i] = handleListElementsAdditionAndArrangement(gameData[i])

        // console.log("Game data list after change", gameData[i])

        // isListDifferent = compareListWithGameData(initialList, gameData[i])

        isListDifferent = !isRandomNumberRequired && compareListWithGameData(initialList, gameData[i])

        if (isListDifferent == true){
            isRandomNumberRequired = true
        }

        i++
    }

    return isRandomNumberRequired
}

function handleUpArrowEvent(){

    console.log("Inside handleUpArrowEvent method")
    // console.log("Game data in up arrow method", gameData)
    let isRandomNumberRequired = false
    let isListDifferent
    let initialList
    let i = 0
    

    while(i < gameData[0].length){

        let j = 0
        let newList = []
        initialList = []

        while(j < gameData.length){
            newList.push(gameData[j][i])
            // initialList.push(gameData[j][i])
            j++
        }

        initialList = newList.slice()

        newList = handleListElementsAdditionAndArrangement(newList)
        j = 0

        while(j < gameData.length){
            gameData[j][i] = newList[j]
            j++ 
        }

        isListDifferent = !isRandomNumberRequired && compareListWithGameData(initialList, newList)

        if (isListDifferent == true){
            isRandomNumberRequired = true
        }

        i++
    }
    
    return isRandomNumberRequired
}

function handleRightArrowEvent(){

    console.log("Inside handleRightArrowEvent method")
    let isRandomNumberRequired = false
    let initialList = []
    let i = 0

    // for(i=0; i<gameData.length;i++){
    while(i < gameData.length){

        initialList = gameData[i].slice()

        gameData[i].reverse()
        gameData[i] =  handleListElementsAdditionAndArrangement(gameData[i])
        gameData[i].reverse()

        isListDifferent = !isRandomNumberRequired && compareListWithGameData(initialList, gameData[i])

        if (isListDifferent == true){
            isRandomNumberRequired = true
        }

        i++
    }

    return isRandomNumberRequired
    
}

function handleDownArrowEvent(){

    console.log("Inside handleDownArrowEvent method")
    let isRandomNumberRequired = false
    let initialList = []
    let i = 0
    while(i < gameData[0].length){

        let j = 0
        let newList = []
        initialList = []
      
        while(j < gameData.length){
            newList.push(gameData[j][i])
            j++
        }
        
        initialList = newList.slice()

        newList.reverse()
        newList = handleListElementsAdditionAndArrangement(newList)
        newList.reverse()
        j = 0

        while(j < gameData.length){
            gameData[j][i] = newList[j]
            j++ 
        }

        isListDifferent = !isRandomNumberRequired && compareListWithGameData(initialList, newList)

        if (isListDifferent == true){
            isRandomNumberRequired = true
        }

        i++
    }

    if(isRandomNumberRequired){
        newBox.style.marginTop = 200 + "px";
    }
    return isRandomNumberRequired
}

function checkAdjacentElementsInRows(){

    i = 0
    isGameEndCaseInRowData = true
    outer_loop:
    while (i < gameData.length){
        let j = 0
        while (j+1 < gameData.length){
    
            if(gameData[i][j] == null || gameData[i][j+1] == null || gameData[i][j] == gameData[i][j+1]){
                isGameEndCaseInRowData = false
                break outer_loop
            }
            // console.log(isGameEndCaseInRowData)
            j++
        }
        i++
    }
    console.log("Row check for end game:", isGameEndCaseInRowData)
    return isGameEndCaseInRowData
}

function checkAdjacentElementsInColumns(){
    i = 0
    isGameEndCaseInColumnData = true
    outer_loop:
    while (i < gameData.length){
        let j = 0
        while (j+1 < gameData.length){
    
            if(gameData[j][i] == null || gameData[j+1][i] == null || gameData[j][i] == gameData[j+1][i]){
                isGameEndCaseInColumnData = false
                break outer_loop
            }
            // console.log(isGameEndCaseInColumnData)
            j++
        }
        i++
    }
    console.log("Column check for end game:", isGameEndCaseInColumnData)
    return isGameEndCaseInColumnData

}

function checkEndGame(){

    hasGameEnded = checkAdjacentElementsInRows() && checkAdjacentElementsInColumns()
    console.log("Has game ended?", hasGameEnded)

    if(hasGameEnded == true){
        alert("GAME OVER!!")
    }
}

function handleKeyboardEvents(){

    window.addEventListener("keydown", function(event){

        let isRandomNumberRequired

        // left
        if(event.keyCode == 37){
            isRandomNumberRequired = handleLeftArrowEvent()
            // console.log(isRandomNumberRequired)

            if(isRandomNumberRequired == true){
                // console.log("Flag is true so generating a new number")
                generateRandomNumberAtEmptyPosition()
            }
            renderView()
            checkEndGame()
        }

        // top
        if(event.keyCode == 38){
            
            isRandomNumberRequired = handleUpArrowEvent()
            // console.log("Is new Random Number required:", isRandomNumberRequired)

            if(isRandomNumberRequired == true){
                // console.log("Flag is true so generating a new number")
                generateRandomNumberAtEmptyPosition()
            }
            renderView()
            checkEndGame()
        }

        // right
        if(event.keyCode == 39){

            isRandomNumberRequired = handleRightArrowEvent()
            // console.log("Is new Random Number required:", isRandomNumberRequired)

            if(isRandomNumberRequired == true){
                // console.log("Flag is true so generating a new number")
                generateRandomNumberAtEmptyPosition()
            }
            renderView()
            checkEndGame()
        }

        // bottom
        if(event.keyCode == 40){

            isRandomNumberRequired = handleDownArrowEvent()
            newBox.style.marginTop = 0 + "px";
            // console.log("Is new Random Number required:", isRandomNumberRequired)
            
            if(isRandomNumberRequired == true){
                // console.log("Flag is true so generating a new number")
                generateRandomNumberAtEmptyPosition()
            }
            renderView()
            checkEndGame()
        }
    })

}
generateView()
generateInitailRandomNumbers()
handleKeyboardEvents()
