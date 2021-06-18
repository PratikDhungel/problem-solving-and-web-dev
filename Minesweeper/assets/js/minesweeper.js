let gameBox = document.querySelector('#game-box');
let gridSelector = document.querySelector('#grid-length');
let gameBoxes;
let allSpans;
let isChecked;
let isFlagged;
let gridLength;
let expandingBoxes = [];
let minesLocated;
let isGameOver;

// Return the index of surrounding boxes which are not out of bound
function getPossiblePositionAtGivenIndex(i, j) {
  // topLeft,s topMiddle, topRight
  // leftMiddle, rightMiddle
  // bottomLeft, bottomMiddle, bottomRight
  let allPossiblePositions = [
    [i - 1, j - 1],
    [i, j - 1],
    [i + 1, j - 1],
    [i - 1, j],
    [i + 1, j],
    [i - 1, j + 1],
    [i, j + 1],
    [i + 1, j + 1],
  ];
  let possiblePositionsAtGivenIndex = [];

  let k = 0;
  while (k < allPossiblePositions.length) {
    // Check if the position is not out of bound
    if (
      allPossiblePositions[k][0] >= 0 &&
      allPossiblePositions[k][0] < gridLength &&
      allPossiblePositions[k][1] >= 0 &&
      allPossiblePositions[k][1] < gridLength
    ) {
      possiblePositionsAtGivenIndex.push(allPossiblePositions[k]);
    }
    k++;
  }

  return possiblePositionsAtGivenIndex;
}

// Update the bomb count for bomb surrounding boxes each time a bomb in generated
function updateAdjacentBoxesBombCount(i, j) {
  let possiblePositions = [];
  let k = 0;

  possiblePositions = getPossiblePositionAtGivenIndex(i, j);

  while (k < possiblePositions.length) {
    xPosition = possiblePositions[k][0];
    yPosition = possiblePositions[k][1];
    gameBoxes[xPosition][yPosition]++;
    k++;
  }
}

// Handle Left Click event for box with bomb
function handleBoxWithBomb(box) {
  box.classList.add('bomb-image');
  alert('Game Over!!! Starting a new Game.');
}

// Handle Left Click event for empty box
function handleEmptyBox(box) {
  box.innerHTML = '';
  box.classList.add('safe-box');
}

// Handle Left Click event for box with number or bomb count
function handleBoxWithNumber(box, value) {
  box.innerText = value;
  box.classList.add('numbered-box');

  if (value === 1) {
    box.classList.add('number-one-box');
    return;
  }
  if (value === 2) {
    box.classList.add('number-two-box');
    return;
  }
  if (value === 3) {
    box.classList.add('number-three-box');
    return;
  }
  box.classList.add('higher-number-box');
}

// Handle Right Click event for any box
function handleBoxWithFlag(box) {
  box.classList.toggle('flag-image');
}

// Return all the boxes that neeed to be expanded or revealed when an empty box is clicked
function handleExpansionAtGivenPosition(i, j) {
  let possiblePositions = [];
  possiblePositions = getPossiblePositionAtGivenIndex(i, j);
  let k = 0;

  while (k < possiblePositions.length) {
    xPosition = possiblePositions[k][0];
    yPosition = possiblePositions[k][1];

    isPositionChecked = isChecked[xPosition][yPosition];
    isPositionFlagged = isFlagged[xPosition][yPosition];

    if (!isPositionChecked && !isPositionFlagged) {
      isChecked[xPosition][yPosition] = true;
      console.log('Setting isChecked at', xPosition, yPosition, 'to true');
      expandingBoxes.push([xPosition, yPosition]);

      if (gameBoxes[xPosition][yPosition] === 0) {
        handleExpansionAtGivenPosition(xPosition, yPosition);
      }
    }
    k++;
  }
}

// Initialize the game boxes, generate mines and update bomb surrounding boxes count
function initializeBoxesAndGenerateMines(gridLength, numberOfMines) {
  let gameRows;
  let isCheckedRows;
  let isFlaggedRows;
  gameBoxes = [];
  isChecked = [];
  isFlagged = [];
  for (let i = 0; i < gridLength; i++) {
    gameRows = [];
    isCheckedRows = [];
    isClickedRows = [];
    isFlaggedRows = [];
    for (let j = 0; j < gridLength; j++) {
      gameRows.push(0);
      isCheckedRows.push(false);
      isFlaggedRows.push(false);
    }
    gameBoxes.push(gameRows);
    isChecked.push(isCheckedRows);
    isFlagged.push(isFlaggedRows);
  }

  i = 0;

  while (i < numberOfMines) {
    xPosition = Math.floor(Math.random() * gridLength);
    yPosition = Math.floor(Math.random() * gridLength);

    if (gameBoxes[xPosition][yPosition] === 0) {
      gameBoxes[xPosition][yPosition] = 'B';
      updateAdjacentBoxesBombCount(xPosition, yPosition);
      i++;
    }
  }
}

// Return the value at the given box
function getGameBoxValueFromXPosAndYPos(xPosition, yPosition) {
  console.log('Returning', gameBoxes[xPosition][yPosition], 'for the position', xPosition, yPosition);
  return gameBoxes[xPosition][yPosition];
}

// Return current span from the span of arrays
function getSpanFromXPosAndYPos(xPosition, yPosition) {
  // Map 2-dimensional array index to 1-dimensional array index
  let mappedValue = xPosition * gridLength + yPosition;
  return allSpans[mappedValue];
}

// Check is the game has ended
function checkIfGameHasEnded() {
  if (minesLocated === 0) {
    alert('Winner Winner Chicken Dinner');
    isGameOver = true;
  }
}

// Generate game view
function generateView() {
  gameBoxes.forEach((row, rowIndex) => {
    let rowView = document.createElement('div');
    rowView.classList.add('row-view');

    row.forEach((element, columnIndex) => {
      // Create span for each box
      let singleBox = document.createElement('span');
      singleBox.classList.add('zone-box');
      text = '';
      let zoneValue = document.createTextNode(text);
      singleBox.appendChild(zoneValue);

      // Check Mouse Down event at each box
      singleBox.addEventListener('mousedown', function (event) {
        // Return if box is already checked or game is over
        if (isChecked[rowIndex][columnIndex] || isGameOver) return;

        // Get current mouse event
        currentMouseEvent = event.which;
        console.log('Mouse event is:', event.which);

        switch (currentMouseEvent) {
          case 1:
            // Left click event
            // Return if the box is already flagged
            if (isFlagged[rowIndex][columnIndex]) return;

            console.log('Inside Case 1');
            // Set isChecked flag at given position to True
            isChecked[rowIndex][columnIndex] = true;
            gameBoxValue = getGameBoxValueFromXPosAndYPos(rowIndex, columnIndex);

            console.log('Value in the square is equal to', gameBoxValue);
            if (gameBoxValue === 'B') {
              handleBoxWithBomb(singleBox);
              isGameOver = true;
              // setTimeout(function(){
              //     startNewGame()
              // }, 2000)
              break;
            }
            if (gameBoxValue === 0) {
              handleEmptyBox(singleBox);

              // Expand surrounding boxes starting from the given Index
              handleExpansionAtGivenPosition(rowIndex, columnIndex);
              console.log('Expanding boxes at', rowIndex, columnIndex, 'are::', expandingBoxes);
              let k = 0;

              // Generate view for each expanding box based on the gameBox Value
              while (k < expandingBoxes.length) {
                let xPosition = expandingBoxes[k][0];
                let yPosition = expandingBoxes[k][1];

                let currentSpan = getSpanFromXPosAndYPos(xPosition, yPosition);
                let spanValue = getGameBoxValueFromXPosAndYPos(xPosition, yPosition);
                if (spanValue === 0) {
                  handleEmptyBox(currentSpan);
                } else {
                  handleBoxWithNumber(currentSpan, spanValue);
                }
                k++;
              }
              // Set expandingBoxes to empty
              expandingBoxes = [];
              break;
            }

            handleBoxWithNumber(singleBox, gameBoxValue);
            break;

          case 3:
            console.log('Inside Case 3');
            console.log('Right Click!!');
            gameBoxValue = getGameBoxValueFromXPosAndYPos(rowIndex, columnIndex);
            isFlagged[rowIndex][columnIndex] = !isFlagged[rowIndex][columnIndex];

            handleBoxWithFlag(singleBox);

            if (isFlagged[rowIndex][columnIndex] && gameBoxValue === 'B') {
              minesLocated--;
              checkIfGameHasEnded();
              console.log('Box has bomb');
              console.log(minesLocated);
              break;
            }
            // minesLocated++
            break;
        }
      });

      rowView.appendChild(singleBox);
    });
    gameBox.appendChild(rowView);
  });
}

function startNewGame() {
  console.log('Inside the start new game function');
  isGameOver = false;
  gridLength = gridSelector.value;
  numberOfMines = Math.round(gridLength * gridLength * 0.15);
  minesLocated = numberOfMines;

  initializeBoxesAndGenerateMines(gridLength, numberOfMines);
  gameBox.innerHTML = '';
  console.table(gameBoxes);
  generateView();
  allSpans = document.getElementsByClassName('zone-box');
}

startNewGame();
gridSelector.addEventListener('change', startNewGame);
