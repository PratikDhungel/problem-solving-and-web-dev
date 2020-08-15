let s = "ifmanwasmeanttostayonthegroundgodwouldhavegivenusroots";
let lengthOfString = s.length;
let squareRootOfLength = Math.sqrt(lengthOfString);
let gridRows = Math.floor(squareRootOfLength);
let gridColumns = Math.ceil(squareRootOfLength);

// if gridRows * gridColumns is less than lengthOfString, increase the smaller of the two value by 1
if(gridRows * gridColumns < lengthOfString){
    
    if(gridRows < gridColumns){
        gridRows++;
    }
    else{
        gridColumns++;
    }
}

let outputString = '';
let i;
let counter;
let resetVariable = 0;
counter = resetVariable;

for(i=0; i<(gridRows * gridColumns); i++){

    if(s[counter]){
        outputString = outputString + s[counter];
    }
    if(counter / gridColumns >= gridRows-1){
        resetVariable++;
        counter = resetVariable;
        // Subtract gridColumns from counter so that counter is set to the next element after gridColumns is added again
        counter = counter - gridColumns;
        outputString = outputString + ' ';
    }
    counter = counter + gridColumns;
}

console.log('Output String:', outputString);