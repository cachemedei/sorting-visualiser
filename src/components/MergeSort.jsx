import { mergeSort } from "../algorithms/mergeSort";

const MergeSort = ({updateArrayState, unsortedArray}) => {

    const handleMergeSort = () => {
        const sortedArray = mergeSort(unsortedArray);
        updateArrayState(sortedArray)
    };

    return (
        <button
            className='border-gray-500 bg-gray-200 rounded text-lg font-light hover:scale-110 duration-500 cursor-pointer py-2 px-3'
            onClick={handleMergeSort}
        >
            Merge Sort
        </button>
    );
}
export default MergeSort