function bubbleSort(unsortedArray) {
    let array = unsortedArray;
    let length = array.length;
    for (let i = 0; i < length - 1; i++) {
        let swapped = false;
        for (let p = 0; p < length - i - 1; p++) {
            if (array[p] > array[p + 1]) {
                // IF P > P + 1, SWAP ELEMENTS AROUND
                let tempValue = array[p];
                array[p] = array[p + 1];
                array[p + 1] = tempValue;
                swapped = true;
            }
        }
        // IF NO ELEMENTS SWAPPED, FINISH THE LOOP
        if (!swapped) {
            break;
        }
    }
    return array;
}

const animatedBubbleSort = async () => {
    const length = array.length;
    let newArray = [...array];

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            setHighlighted([j, j + 1]);

            await new Promise((resolve) => setTimeout(resolve, 100));
            if (newArray[j] > newArray[j + 1]) {
                // Swap the elements
                [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
                setArray([...newArray]); // Trigger state update for re-render
            }
            setHighlighted([]);
        }
        setSortedIndex((prev) => [...prev, length - i - 1]);
    }
    setSortedIndex(newArray.map((_, idx) => idx));
};
