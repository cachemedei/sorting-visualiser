export function quickSort (arr) {
    // base case for arrays with less than 2 elements
    if (arr.length < 2) {
        return arr;
    }
    // pivot point i.e center element of the array
    const pivot = arr[Math.floor(arr.length / 2)];

    // split array into 3 parts
    const left = arr.filter((element) => element < pivot); // less than pivot
    const right = arr.filter((element) => element > pivot); // greater than pivot
    const equal = arr.filter((element) => element === pivot); // equal to pivot

    // recursively sort left and right array and concatenate results
    return [...quickSort(left), ...equal, ...quickSort(right)];
};
