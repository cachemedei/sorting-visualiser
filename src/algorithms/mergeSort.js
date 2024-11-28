// merge(): merges 2 sorted arrays into 1 sorted array
function merge(left, right) {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    // loop through both arrays, compare elements, add smallest to resultArray
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move to next element in left array
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move to next element in right array
        }
    }

    // concatenate remaining elements from either left or right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// mergeSort():
// completely divdes unsorted arrays and then recursively calls 
// merge function to return a single, sorted array 
export function mergeSort(array) {
    // base case: if array has 1 element, return it
    if (array.length === 1) {
        return array;
    }

    // divide array into 2 halves
    const middle = Math.floor(array.length / 2); // MIDDLE IDX
    const left = array.slice(0, middle); // SPLITS ARRAY FROM START TO MIDDLE
    const right = array.slice(middle); // SPLITS ARRAY FROM MIDDLE TO END

    // recursively call mergeSort on left and right arrays
    return merge(mergeSort(left), mergeSort(right));
};