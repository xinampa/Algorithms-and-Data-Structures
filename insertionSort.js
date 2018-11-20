/* Start by picking the second element in the array*/
/* Now Compare the second element with the one before it and swap if necessary*/
/* Continue to the next element and if it is in the correct order, iterate through
    the sorted portion(i.e the left side) to place the element in the correct place*/
/* Repat unitl the array is sorted*/
// Big O Complexity O(1) 
function insertionSort(arr){
    var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}
console.log(insertionSort([2,1,9,76,4]))
