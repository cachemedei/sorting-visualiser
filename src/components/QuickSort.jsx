const QuickSort = ({ originalArray, onUpdateArrayState }) => {

    const quickSortFunction = (arr) => {
        if (arr.length < 2) {
            return arr;
        }
        const pivot = arr[Math.floor(arr.length / 2)];

        const left = arr.filter((element) => element < pivot); // less than pivot
        const right = arr.filter((element) => element > pivot); // greater than pivot
        const equal = arr.filter((element) => element === pivot); // equal to pivot

        return [
            ...quickSortFunction(left),
            ...equal,
            ...quickSortFunction(right),
        ];
    };

    const handleQuickSort = (arr) => {
        const sortedArray = quickSortFunction(arr);
        onUpdateArrayState(sortedArray);
    };

    return (
        <button
            onClick={originalArray ? handleQuickSort(originalArray) : disabled}
            className='border-gray-500 bg-gray-200 rounded text-lg font-light hover:scale-110 duration-500 cursor-pointer py-2 px-3'
        >
            Quick Sort Comp
        </button>
    );
};
export default QuickSort;
