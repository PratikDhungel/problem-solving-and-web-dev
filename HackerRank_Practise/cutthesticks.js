function cutTheSticks(){
    
    array = [1, 8, 3, 4, 3, 7, 6, 5];
    let sortedArray = [];
    sortedArray = quickSortArray(array, 0, array.length - 1);
    console.log(sortedArray);
    
    while(sortedArray.length > 0){

        console.log(sortedArray.length)
        i = 0;

        while(sortedArray[i] === sortedArray[i+1]){

            sortedArray.splice(i, 1);
        }
        sortedArray.splice(i, 1)
    }
}

function quickSortArray(array, low, high){

    if(low < high){

        partitionIndex = getPartitionElementIndex(array, low, high);

        quickSortArray(array, low, partitionIndex-1);
        quickSortArray(array, partitionIndex+1, high);
    }
    return array
}

function getPartitionElementIndex(array, low, high){

    let pivotElement = array[high];
    let i = low-1;
    let temp;
    let j;

    for(j=low; j<high; j++){
        if(array[j] <= pivotElement){
            i++;

            if(i === j){
                continue;
            }
            console.log('Compairing', array[i], array[j]);
            array[i] = array[i] + array[j]
            array[j] = array[i] - array[j]
            array[i] = array[i] - array[j]
            // temp = array[j];
            // array[j] = array[i];
            // array[i] = temp;
        }
    }

    // array[i+1] = array[i+1] + array[high]
    // array[high] = array[i+1] - array[high]
    // array[i+1] = array[i+1] - array[high]

    console.log('pivotElement Index', i+1)
    temp = array[i+1];
    array[i+1] = array[high];
    array[high] = temp;

    return (i+1);
}

cutTheSticks();