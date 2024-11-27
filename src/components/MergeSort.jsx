const MergeSort = ({updateArrayState, unsortedArray}) => {

    // MERGE FUNCTION: MERGES 2 SORTED ARRAYS INTO 1 SORTED ARRAY
    function merge(left, right) {
        let resultArray = [],
            leftIndex = 0,
            rightIndex = 0;

        // LOOP THROUGH BOTH ARRAYS, COMPARE ELEMENTS, ADD SMALLER ONE
        // TO resultArray
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++; // MOVE TO NEXT ELEMENT IN LEFT ARRAY
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++; // MOVE TO NEXT ELEMENT IN RIGHT ARRAY
            }
        }

        // CONCATENATE REMAINING ELEMENTS FROM EITHER LEFT OR RIGHT (IF ANY)
        return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
    }

    // MERGE SORT FUNCTION
    function mergeSort(array) {
        // BASE CASE: IF ARRAY HAS 1 ELEMENT, RETURN IT
        if (array.length === 1) {
            return array;
        }

        // DIVIDE ARRAY INTO 2 HALVES
        const middle = Math.floor(array.length / 2); // MIDDLE IDX
        const left = array.slice(0, middle); // SPLITS ARRAY FROM START TO MIDDLE
        const right = array.slice(middle); // SPLITS ARRAY FROM MIDDLE TO END

        // RECURSIVELY CALL mergeSort ON THE LEFT & RIGHT HALVES
        return merge(mergeSort(left), mergeSort(right));
    }

    // Handle Merge Sort
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