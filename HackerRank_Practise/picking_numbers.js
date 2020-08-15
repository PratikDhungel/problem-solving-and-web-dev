let a = [1, 1, 4, 4, 2, 2, 5, 5, 5, 3, 3]

let sortedArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5]

let i = 0;
let counterOne = 1
let counterTwo;
let comparingPosition = 0;
let j = 1;
let usingCounterOne = true;

while((comparingPosition + j) < sortedArray.length){

    if(sortedArray[comparingPosition] === sortedArray[comparingPosition + j]){
        
        if(usingCounterOne){
            counterOne++;
        }
        else
            counterTwo++;
    }

    if(sortedArray[comparingPosition] + 1 === sortedArray[comparingPosition + j]){
        
        if(usingCounterOne){
            counterOne++;
        }
        else
            counterTwo++;
            
        positionMarker = comparingPosition + j;
    }

    if(sortedArray[i+1] > sortedArray[i] + 1){
        
    }
    j++;
    i++;
}