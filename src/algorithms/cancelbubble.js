// Handle bubble sort with a while loop and cancel flag
const handleBubbleSort = async () => {
    cancelSortingRef.current = false; // Ensure the flag is reset when sorting begins

    const length = array.length;
    let newArray = [...array];
    let i = 0;

    // Use a while loop to allow sorting to be cancelled mid-process
    while (i < length - 1 && !cancelSortingRef.current) {
        for (let j = 0; j < length - i - 1; j++) {
            if (cancelSortingRef.current) {
                return;
            }

            setHighlighted([j, j + 1]);

            await new Promise((resolve) => setTimeout(resolve, 40));

            if (newArray[j] > newArray[j + 1]) {
                // Swap the elements
                [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
                setArray([...newArray]); // Trigger state update for re-render
            }

            setHighlighted([]);
        }
        setSortedIndex((prev) => [...prev, length - i - 1]);
        i++; // Increment the outer loop
    }

    setSortedIndex(newArray.map((_, idx) => idx)); // Mark all as sorted
};
