import { quickSort } from '../algorithms/quickSort';

const QuickSort = ({ unsortedArray, updateArrayState }) => {
    const handleQuickSort = (arr) => {
        const sortedArray = quickSort(unsortedArray);
        updateArrayState(sortedArray);
    };

    return (
        <button
            onClick={unsortedArray ? handleQuickSort : disabled}
            className='border-gray-500 bg-gray-200 rounded text-lg font-light hover:scale-110 duration-500 cursor-pointer py-2 px-3'
        >
            Quick Sort
        </button>
    );
};
export default QuickSort;
