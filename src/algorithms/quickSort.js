let array = [
    280, 347, 306, 86, 213, 48, 19, 297, 162, 353, 275, 462, 267, 409, 37, 327,
    24, 298, 331, 128, 194, 113, 18, 59, 390, 337, 79, 375, 291, 195,
];

//array[14] = 37

const quickSort = (arr) => {
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

const sortedArray = quickSort(array);
console.log(array);
console.log(sortedArray);

const quickSortFunction = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[Math.floor(arr.length / 2)];

    const left = arr.filter((element) => element < pivot); // less than pivot
    const right = arr.filter((element) => element > pivot); // greater than pivot
    const equal = arr.filter((element) => element === pivot); // equal to pivot

    return [...quickSortFunction(left), ...equal, ...quickSortFunction(right)];
};

const handleQuickSort = () => {
    const sortedArray = quickSortFunction(array);
    setArray(sortedArray);
};
