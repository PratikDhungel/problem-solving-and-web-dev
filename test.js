// let gameData = [
//     [2, 4, 16, 8],
//     [4, 8, 4, 2],
//     [8, 16, 2, 8],
//     [256, 128, 2, 2]]
// console.log("Inital Array:::")
// console.log(gameData)
// let i;

// for(i=0; i<firstRow.length; i++){

//     if(firstRow[i] == null){
//         nullArray.push(firstRow[i])
//     }
//     else{
//         if(firstRow[i] == firstRow[i+1]){
//             valueArray.push(firstRow[i]+firstRow[i+1])
//             firstRow[i+1] = null
//         }
//         else{
//             valueArray.push(firstRow[i])
//         }
//     }
// }

// firstRow = []
// firstRow = firstRow.concat(valueArray, nullArray)
// console.log(firstRow)

// let rearrangeListElements = (numberList) =>{

//     let valueArray = []
//     let nullArray = []
//     let i = 0

//     while(i < numberList.length){
//         if(numberList[i] == null){
//             nullArray.push(numberList[i])
//         }
//         else{
//             valueArray.push(numberList[i])
//         }
//         i++
//     }
//     // for(i=0; i<numberList.length; i++){

//     //     if(numberList[i] == null){
//     //         nullArray.push(numberList[i])
//     //     }
//     //     else{
//     //         valueArray.push(numberList[i])
//     //     }
//     // }
//     numberList = []
//     numberList = numberList.concat(valueArray, nullArray)
//     return numberList
// }

// let addAdjacentListElements = (numberList) =>{

//     let i = 0
//     while(i < numberList.length){
//         if(numberList[i+1] == numberList[i] && numberList[i] != null){
//             numberList[i] = numberList[i] + numberList[i+1]
//             numberList[i+1] = null
//         }
//         i++
//     }
//     return numberList
// }

// function handleRearrangeAndAddition(numberList){

//     numberList = rearrangeListElements(numberList)
//     numberList = addAdjacentListElements(numberList)
//     numberList = rearrangeListElements(numberList)
//     return numberList
// }


// To handle Up Arrow Click
// i = 0
// while(i < gameData[0].length){

//     let j = 0
//     let newList = []
//     // console.log(i)
//     // console.log(" ")
//     // console.log("Inside the loop")

    
//     while(j < gameData.length){
//         newList.push(gameData[j][i])
//         j++
//     }
    
//     // for (j = 0; j< gameData.length; j++){
        
//     // }
//     // console.log(newList)
//     newList = handleRearrangeAndAddition(newList)
//     // console.log("'After rearrangement and addition")
//     // console.log(newList)
//     // console.log("Assign changed list to the existing data set")
//     j = 0
//     while(j < gameData.length){
//         gameData[j][i] = newList[j]
//         j++
//     }

//     i++
// }

// console.log("Changed Array")
// console.log(gameData)


// To Handle Left Arrow Click

// console.log(" ")
// let initalList = gameData.slice()
// // let initalList = gameData
// let flag = true
// console.log("Game data", gameData)
// console.log("Inital List", initalList)

// i = 0

// gameData[0] = handleRearrangeAndAddition(gameData[0])

// console.log(" ")
// console.log(" ")
// console.log("After rearrangement")
// console.log("Game data", gameData[0])
// console.log("Inital List", initalList)

// for(i=0; i<gameData.length;i++){

// while(i < gameData.length){
//     gameData[i] = handleRearrangeAndAddition(gameData[i])
//     i++
// }

// console.log(" ")
// console.log(" ")
// console.log("After rearrangement")
// console.log("Game data", gameData)
// console.log("Inital List", initalList)



// i = 0
// while(i < gameData.length){
    
//     let j = 0
//     while(j < gameData[i].length){

//         if(gameData[i][j] != initalList[i][j]){
//             flag = false
//         }
//         j++
//     }
    
//     i++
// }

// if (flag == false){
//     console.log("List has changed")
//     generateRandomNumberAtEmptyPosition()
// }
// else{
//     console.log("Same List")
// }

// console.log(" ")
// console.log(" ")
// console.log("After random value assignement")
// console.log("Game data", gameData)
// console.log("Inital List", initalList)



// To Handle Right Arrow Click
// console.log(" ")
// console.log(gameData[0])
// gameData[0].reverse()
// gameData[0] = handleRearrangeAndAddition(gameData[0])
// gameData[0].reverse()
// console.log(gameData[0])

// function getRandomNumberOfGivenLength(length){

//     return (Math.floor(Math.random() * length))
// }


// function generateRandomNumberAtEmptyPosition(){
    
//     let randomNumberOne
//     let numberGeneratorOne = getRandomNumberOfGivenLength(2)
//     let xPositionOne = getRandomNumberOfGivenLength(4)
//     let yPositionOne = getRandomNumberOfGivenLength(4)

//     if(numberGeneratorOne == 0){
//         randomNumberOne = 2
//     }
//     else{
//         randomNumberOne = 4
//     }

//     while(gameData[xPositionOne][yPositionOne] != null){
//         console.log(xPositionOne, yPositionOne)
//         console.log("Already exists")
//         xPositionOne = getRandomNumberOfGivenLength(4)
//         yPositionOne = getRandomNumberOfGivenLength(4)
//     }

//     console.log(xPositionOne, yPositionOne)
//     console.log(gameData[xPositionOne][yPositionOne])
//     console.log(randomNumberOne)

//     gameData[xPositionOne][yPositionOne] = randomNumberOne
// }

// generateRandomNumberAtEmptyPosition()

// Arrange
// Adjacent Add
// Arrange





// function addAdjacentAndRerrange(rearrangeList){

//     let i = 0

//     while(i < rearrangeList.length){

//         console.log("Inside loop", i)
//         let j = i + 1

//         if(rearrangeList[i] == rearrangeList[j] && rearrangeList[i] != null){
//             rearrangeList[i] = rearrangeList[i] + rearrangeList[j]
//             rearrangeList[j] = null
//         }
//         else if(rearrangeList[i] == null && rearrangeList[j] != null){
//             rearrangeList[i] = rearrangeList[j]
//             rearrangeList[j] = null
//         }

//         console.log("Step::" , i+1 , "::", rearrangeList)
//         i++
//     }
//     return rearrangeList
// }

// let testList = [2, 2, 2, 4, 4, 9, 8, 4, 4]
// console.log(testList)
// newList = addAdjacentAndRerrange(testList)
// console.log("New List:::", newList)

// console.log(gameData)

// function checkAdjacentElementsInRows(){
//     i = 0
//     hasGameEnded = true
//     outer_loop:
//     while (i < gameData.length){
//         let j = 0
//         while (j+1 < gameData.length){
//             console.log("Compairing", gameData[i][j] , "and" , gameData[i][j+1])
    
//             if(gameData[i][j] == gameData[i][j+1] || gameData[i][j] == null){
//                 hasGameEnded = false
//                 break outer_loop
//             }
//             console.log(hasGameEnded)
//             j++
//         }
//         i++
//     }
// }

// checkAdjacentElementsInRows()
// console.log("Final value for rows:::", hasGameEnded)


// function checkAdjacentElementsInColumns(){
//     i = 0
//     hasGameEnded = true
//     outer_loop:
//     while (i < gameData.length){
//         let j = 0
//         while (j+1 < gameData.length){
//             console.log("j, i = ", j , i)
//             console.log("j+1, i = ", j+1 , i)
//             console.log("Compairing", gameData[j][i] , "and" , gameData[j+1][i])
    
//             if(gameData[j][i] == gameData[j+1][i] || gameData[j][i] == null){
//                 hasGameEnded = false
//                 break outer_loop
//             }
//             console.log(hasGameEnded)
//             j++
//         }
//         i++
//     }

// }

// checkAdjacentElementsInColumns()
// console.log("Final value for rows:::", hasGameEnded)

// function handleBoxWithBombTest(box){

//     box.classList.add('bomb-image')
//     alert("Game Over!!! Starting a new Game.")
// }

// function handleEmptyBoxTest(box){

//     box.innerHTML = ''
//     box.classList.add('safe-box')
// }

// function handleBoxWithNumberTest(box){

//     box.innerText = gameSquareValue
//     box.classList.add('numbered-box')
// }



// let testArray = 
// [["B", 1, 1, 1, 2, 1, 1, 1, "B", 1, 1, 1, 2, "B", 1],
// [2, 2, 2, 1, "B", 2, "B", 2, 2, 2, 1, 1, "B", 2, 1, 1],
// [1, "B", 1, 1, 1, 3, 2, 3, "B", 1, 0, 1, 2, 2, 1, 0],
// [1, 1, 1, 0, 0, 1, "B", 2, 2, 2, 1, 0, 1, "B", 1, 0],
// [0, 0, 0, 0, 0, 2, 2, 2, 1, "B", 1, 1, 2, 2, 1, 0],
// [1, 1, 1, 1, 1, 1, "B", 1, 1, 2, 2, 2, "B", 1, 0, 0]]


// let testArray = 
// [[2, 2, 2, 1, "B", 2, "B"],
// [1, "B", 1, 1, 1, 3, 2],
// [1, 1, 1, 1, 1, 1, "B"],
// [1, 0, 1, 1, 1, 2, 2],
// [1, 1, 1, 1, 1, 1, "B"],
// [1, 1, 1, 1, 1, 1, "B"],
// [1, 1, 1, 1, 1, 1, "B"]]

// let testArray = 
// [[0, 0, 1],
// [0, 0, 2],
// [1, 1, 1]]

// let isChecked =
// [[false, false, false, false, false, false, false],
// [false, false, false, false, false, false, false],
// [false, false, false, false, false, false, false],
// [false, false, false, false, false, false, false],
// [false, false, false, false, false, false, false]]

// let isChecked =
// [[false, false, false],
// [false, false, false],
// [false, false, false]]



// let gridLength = testArray.length

// let expandingBoxes = []

// function getPossiblePositionAtGivenIndex(i, j){

//     let possiblePositions = [[i-1, j-1], [i, j-1], [i+1, j-1],
//     [i-1, j], [i+1, j],
//     [i-1, j+1], [i, j+1], [i+1, j+1]]

//     return possiblePositions
// }

// function handleExpansionAtGivenPosition(i, j){

//     console.log('Checking neighbouring boxes at the position', i, j)
//     console.log('Value at the position is', testArray[i][j])
//     isChecked[i][j] = true
//     let possiblePositions = []
//     possiblePositions = getPossiblePositionAtGivenIndex(i, j)
//     console.log('Possible positions at position', i, j, 'are::', possiblePositions)
//     let k = 0

//     while(k < possiblePositions.length){

//         xPosition = possiblePositions[k][0]
//         yPosition = possiblePositions[k][1]

//         let isPositionNotOutOfBound = xPosition >= 0 && xPosition < gridLength && yPosition >= 0 && yPosition < gridLength
//         console.log('Checking is not Out of Bound at Position', xPosition, yPosition, isPositionNotOutOfBound)
//         console.log('Checking is Checked for that Position', isChecked[xPosition][yPosition])
//         if( isPositionNotOutOfBound && isChecked[xPosition][yPosition] === false){

//             // if(testArray[xPosition][yPosition] === 'B'){
//             //     console.log()
//             // }
//             console.log('Check is True')
//             console.log('Checking value at the position', xPosition, yPosition)
//             if(testArray[xPosition][yPosition] === 0){
//                 console.log('Found EMPTY BOX at position', xPosition, yPosition)
//                 console.log('Adding the box to the array')
//                 console.log('Sending the position to the handleExpansion... ... method')
//                 expandingBoxes.push([xPosition, yPosition])
//                 handleExpansionAtGivenPosition(xPosition, yPosition)
//             }
//             else{
//                 console.log('Found NUMBERED BOX at position', xPosition, yPosition)
//                 console.log('Adding the box to the array')
//                 expandingBoxes.push([xPosition, yPosition])
//             }
//             isChecked[xPosition][yPosition] = true
//         }
//         k++
//     }
//     console.log('Exiting the method.......')

// }


// console.log('Starting at position (3,1)')
// handleExpansionAtGivenPosition(3,1)
// console.log('The possible positions to expand are', expandingBoxes)











function createMainPlayer(){

    let mainPlayerClass = "player-one";
    // Starting Positions: 0 = left, 1 = middle and 2 = right;
    let startingPosition = 1;
    mainPlayer = new Player($slideWindow, mainPlayerClass, startingPosition);
    mainPlayer.positionMainPlayer();
}



function generateEnemy(){

    let enemyCSSClass = "enemy";
    let newEnemy = new Enemy($slideWindow, enemyCSSClass);
    let randomPositionXIndex = generateRandomNumber();
    newEnemy.positionEnemy(randomPositionXIndex);
    newEnemy.setEnemyActive();
    enemies.push(newEnemy);
}

