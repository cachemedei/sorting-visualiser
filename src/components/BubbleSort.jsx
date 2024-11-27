const BubbleSort = ({
    updateArrayState,
    unsortedArray,
    updateHighlightedState,
    updateSortedIndexState,
    sortSpeed,
}) => {
    let array = unsortedArray;

    const handleBubbleSort = async () => {
        const length = array.length;
        let newArray = [...array];

        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                let highlights = [j, j + 1]
                updateHighlightedState(highlights);

                await new Promise((resolve) => setTimeout(resolve, sortSpeed));
                if (newArray[j] > newArray[j + 1]) {
                    // Swap the elements
                    [newArray[j], newArray[j + 1]] = [
                        newArray[j + 1],
                        newArray[j],
                    ];
                    updateArrayState([...newArray]); // Trigger state update for re-render
                }
                updateHighlightedState([]);
            }
            updateSortedIndexState((prev) => [...prev, length - i - 1]);
        }
        updateSortedIndexState(newArray.map((_, idx) => idx));
    };

    return (
        <button onClick={handleBubbleSort} className='border-gray-500 bg-gray-200 rounded text-lg font-light hover:scale-110 duration-500 cursor-pointer py-2 px-3'>
            BubbleSort 2
        </button>
    );
};
export default BubbleSort;
