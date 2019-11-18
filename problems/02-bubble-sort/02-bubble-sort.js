/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
let x;

let y;

function bubbleSort(numArray) {
    for(let i = 0; i < numArray.length; i++){
        let max = -Infinity;

        for(let j = 0; j < numArray.length - i; j++){
            if(numArray[j] > max){

                max = numArray[j]

                y = j
            }
        }

        x = numArray[numArray.length - 1 - i]

        numArray[numArray.length - 1 - i] = max

        numArray[y] = x
    }
    return numArray
}

console.log(bubbleSort([20, 5, 6, 4, 9, 52]));