// function fractions(){

//     let array = [-4, 3, -9, 0, 4, 1, -0 , 1, -12, 123, -123, 0, 'a']
//     let i = 0

//     let positiveIntCount = 0
//     let neagtiveIntCount = 0
//     let zeroCount = 0
//     let positiveFraction = 0
//     let neagtiveFraction = 0
//     let zeroFraction = 0

//     for(let i = 0; i < array.length; i++){

//         if (array[i] > 0){
//             positiveIntCount++
//             continue
//         }
//         if (array[i] < 0){
//             neagtiveIntCount++
//             continue
//         }
//         if (array[i] == 0){
//             zeroCount++
//         }
        
//     }
//     console.log(positiveIntCount, neagtiveIntCount, zeroCount)
//     positiveFraction = positiveIntCount / array.length
//     positiveFraction = positiveFraction.toFixed(6)
//     // console.log(positiveFraction)
// }

// fractions()



// function rigthAlignedStaircase(){

//     let length = 6
//     let whiteSpace = ' '
//     let hashSign = '#'

//     for(let i = 1; i <= length; i++){

//         let whiteSpaceCount = length - i

//         console.log(whiteSpace.repeat(whiteSpaceCount) + hashSign.repeat(i))
//     }
// }

// rigthAlignedStaircase()



// function miniMaxSum(){

//     let givenArray = [596, 753, 23, 53, 656]
//     let minSum
//     let maxSum
//     let allSums = []
//     let currentSum

//     for (let i = 0; i < givenArray.length; i++){

//         currentSum = 0
//         for(let j = 0; j < givenArray.length; j++){

//             if (j != i){
//                 currentSum = currentSum + givenArray[j]
//             }
//         }
//         allSums.push(currentSum)
//     }

//     minSum = allSums[0]
//     maxSum = allSums[0]

//     for (let i = 1; i < allSums.length; i++){

//         if(allSums[i] < minSum){
//             minSum = allSums[i]
//         }
//         if(allSums[i] > maxSum){
//             maxSum = allSums[i]
//         }
//     }
//     console.log(minSum, maxSum)
// }

// miniMaxSum()


// function minMaxSumRefactored(){

//     let givenArray = [596, 753, 23, 53, 656]
//     let minSum
//     let maxSum
//     let totalSum = 0
//     let minNumber
//     let maxNumber

//     minNumber = givenArray[0]
//     maxNumber = givenArray[0]

//     for (let i = 0; i < givenArray.length; i++){

//         if(givenArray[i] < minNumber){
//             minNumber = givenArray[i]
//         }
//         if(givenArray[i] > maxNumber){
//             maxNumber = givenArray[i]
//         }

//         totalSum = totalSum + givenArray[i]
//     }

//     minSum = totalSum - maxNumber
//     maxSum = totalSum - minNumber

//     console.log(minSum, maxSum)
// }

// minMaxSumRefactored()

// function birthdayCakeCandle(){

//     let givenArray = [6, 2, 1, 3, 3, 4, 5, 6, 0, 1, 4, 6]
//     let tallestCandle = givenArray[0]
//     let tallestCandleCount = 1

//     for (let i = 1; i < givenArray.length; i++){

//         if (givenArray[i] > tallestCandle){
//             tallestCandle = givenArray[i]
//             tallestCandleCount = 1
//             continue
//         }
//         if (givenArray[i] == tallestCandle){
//             tallestCandleCount++
//         }
//         console.log(tallestCandle, tallestCandleCount)
//     }
// }

// birthdayCakeCandle()


// function timeConversion(){

//     let givenTime = '12:21:00PM'
//     let newTimeFormat
//     let newHour

//     let splitValue = givenTime.split(':')
//     console.log(splitValue)

//     let currentHour = splitValue[0]
//     let currentMinutes = splitValue[1]
//     let currentSeconds = splitValue[2].substring(0,2)
//     let currentFormat = splitValue[2].substring(2,4)

//     let isHourValueCorrect = parseInt(currentHour, 10) >= 1 && parseInt(currentHour, 10) <= 12
//     let isMinuteValueCorrect = parseInt(currentMinutes, 10) >= 0 && parseInt(currentMinutes, 10) <= 59
//     let isSecondsValueCorrect = parseInt(currentSeconds, 10) >= 0 && parseInt(currentSeconds, 10) <= 59

//     console.log('Hour:' , isHourValueCorrect, 'Minute:', isMinuteValueCorrect, 'Second:', isSecondsValueCorrect)

//     if(isHourValueCorrect && isMinuteValueCorrect && isSecondsValueCorrect){

//         console.log('Inside loop')

//         if (currentFormat === 'AM'){
        
//             if(currentHour === '12'){
//                 newHour = '00'
//             }
//             else
//                 newHour = currentHour
//         }
    
//         if (currentFormat === 'PM'){
    
//             if(currentHour === '12'){
//                 newHour = currentHour
//             }
//             else
//                 newHour = parseInt(currentHour) + 12
//         }

//         newTimeFormat = newHour.toString() + ':' + currentMinutes.toString() + ':' + currentSeconds.toString()
//     }
//     console.log(newTimeFormat)
// }

// timeConversion()


// function twoKangaroo(){

//     let x1 = 0
//     let v1 = 3
//     let x2 = 1
//     let v2 = 2
//     let isLocationSame


//     if (v2 >= v1){
//         isLocationSame = false
//         return isLocationSame
//     }

//     while(!isLocationSame){

//         x1 = x1 + v1
//         x2 = x2 + v2

//         console.log('First position:', x1)
//         console.log('Second position:', x2)
//         console.log('  ')

//         if(x1 === x2){
//             console.log('MATCHED')
//             isLocationSame = true
//             return isLocationSame
//         }

//         if(x1 > x2){
//             console.log('Crossed')
//             isLocationSame = false
//             return isLocationSame
//         }

//     }
// }

// let value = twoKangaroo()
// console.log(value)


// function dayOfTheProgrammer(){

//     let currentYear = 1918
//     let programmersDay = 256

//     let nonLeapYearDaysSum = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31
//     let leapYearDaysSum = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31

//     let programmerDayInSept

//     let isJulianYear = currentYear >= 1700 && currentYear <= 1917
//     let isJulianLeapYear = currentYear % 4 == 0

//     let isGregorianYear = currentYear > 1918 && currentYear <= 2700
//     let isGregorianLeapYear

//     isGregorianLeapYear = (currentYear % 400 == 0) || (currentYear % 4 == 0 && currentYear % 100 != 0)

//     if(currentYear === 1918){
        
//         programmerDayInSept = programmersDay - nonLeapYearDaysSum + 13
//     }

//     if((isJulianYear && isJulianLeapYear) || (isGregorianYear && isGregorianLeapYear)){
//         console.log('Leap Year')
//         programmerDayInSept = programmersDay - leapYearDaysSum
//     }
//     if((isJulianYear && !isJulianLeapYear) || (isGregorianYear && !isGregorianLeapYear)){
//         programmerDayInSept = programmersDay - nonLeapYearDaysSum
//     }

//     console.log('Programmers Day is on:', programmerDayInSept)

//     console.log(programmerDayInSept + '.' + '09.' + currentYear)
// }

// dayOfTheProgrammer()












// function magicSquareFormation(){

//     let givenSquareMatrix =
//         [[4, 9, 2],
//         [3, 5, 7],
//         [8, 1, 5]];

//     let possibleMagicSquareSolutions = [
//         [[8, 3, 4], 
//         [1, 5, 9],
//         [6, 7, 2]],

//         [[4, 3, 8], 
//         [9, 5, 1],
//         [2, 7, 6]],

//         [[6, 7, 2],
//         [1, 5, 9],
//         [8, 3, 4]],

//         [[2, 7, 6], 
//         [9, 5, 1],
//         [4, 3, 8]],

//         [[8, 1, 6],
//         [3, 5, 7],
//         [4, 9, 2]],

//         [[6, 1, 8],
//         [7, 5, 3],
//         [2, 9, 4]],

//         [[4, 9, 2],
//         [3, 5, 7],
//         [8, 1, 6]],

//         [[2, 9, 4],
//         [7, 5, 3],
//         [6, 1, 8]]
//     ];

//     // This is cost of solving a Magic Square with all Zeros (Given the Matrix satisfies the Constraints for each value being between 0 and 9)
//     let minimumSolutionCost = 45;

//     for(let i = 0; i < possibleMagicSquareSolutions.length; i++){

//         let costForCurrentSolution = 0;
//         for(let j = 0; j < possibleMagicSquareSolutions[i].length; j++){

//             for(let k = 0; k < possibleMagicSquareSolutions[i][j].length; k++){

//                 let elementValueDifference = Math.abs(givenSquareMatrix[j][k] - possibleMagicSquareSolutions[i][j][k])
//                 costForCurrentSolution = costForCurrentSolution + elementValueDifference;
//             }
//         }
//         console.log(costForCurrentSolution);
//         if(costForCurrentSolution < minimumSolutionCost){
//             minimumSolutionCost = costForCurrentSolution;
//         }
//     }

//     console.log("Minimum Cost of Solving the Magic Square", minimumSolutionCost)
// }

// magicSquareFormation()







// Climbing the Leaderboard


let scores = [100, 90, 90, 80, 75, 60];
let alice = [50, 65, 77, 90, 102]

6, 5, 3,2 ,1

function getInsertionIndex(array, value){

    // console.log("Inside getInsertionIndex");
    let low = 0;
    let high = array.length;

    while (low < high) {
        let mid = (low + high) >>> 1;
        if (array[mid] > value) low = mid + 1;
        else high = mid;
    }
    return low;
}

function getScoreRanking(array, currentScoreIndex){
    
    // console.log("Inside getScoreRanking");
    // console.log(array, currentScore);
    let ranking = 1;
    console.log("Score index is:", currentScoreIndex);

    for(let i = 0; i < currentScoreIndex; i++){

        if(array[i+1] < array[i]){
            ranking++
        }
    }

    console.log("Ranking is", ranking);
    return ranking;
}

function climbingLeaderboard(scores){

    console.log("Inside climbingLeaderboard")
    for(let i = 0; i < alice.length; i++){

        let insertionIndex = getInsertionIndex(scores, alice[i])
        scores.splice(insertionIndex, 0, alice[i]);
        getScoreRanking(scores, insertionIndex);
        scores.splice(insertionIndex, 1);
        // console.log(scores)
    }
};

climbingLeaderboard(scores);







// Climbing the Leaderboard Optimized

let scores = [100, 90, 90, 80, 75, 60];
let alice = [50, 65, 77, 88, 102];

function getInsertionIndex(array, value){

    let low = 0;
    let high = array.length;
    
    while(low < high){

        let mid = (low + high) >>> 1;
        if(array[mid] === value){
            return mid;
        }
        else if(value > array[mid] && value < array[mid - 1]){
            return mid;
        }
        else if(value < array[mid] && value >= array[mid + 1]){
            return mid + 1;
        }
        else if(value > array[mid]){
            high = mid - 1;
        }
        else
            low = mid + 1;
    }
}

// console.log(getInsertionIndex(scores, value));

function climbingLeaderboard(scores, alice){
    
    let rankings = [];
    let results = [];
    rankings[0] = 1;

    for(let i = 1; i < scores.length; i++){

        if(scores[i] === scores[i-1]){
            rankings[i] = rankings[i-1];
        }
        else
            rankings[i] = rankings[i-1] + 1;
    }
    console.log(scores)
    console.log(rankings);

    for(let i = 0; i < alice.length; i++){

        let currentScore = alice[i];
        if(currentScore > scores[0]){
            results[i] = 1;
        }
        else if(currentScore < scores[scores.length - 1]){
            results[i] = rankings[scores.length - 1] + 1;
        }
        else{
            let index = getInsertionIndex(scores, currentScore);
            results[i] = rankings[index];
        }
    }
};

climbingLeaderboard(scores, alice);







