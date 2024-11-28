function bubbleSort(unsortedArray) {
    let array = unsortedArray;
    let length = array.length;
    for (let i = 0; i < length - 1; i++) {
        let swapped = false;
        for (let p = 0; p < length - i - 1; p++) {
            if (array[p] > array[p + 1]) {
                // if p > p + 1, swap elements
                let tempValue = array[p];
                array[p] = array[p + 1];
                array[p + 1] = tempValue;
                swapped = true;
            }
        }
        // if no elements swapped, exit
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
                // swap elements
                [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
                setArray([...newArray]); // trigger state update for re-render
            }
            setHighlighted([]);
        }
        setSortedIndex((prev) => [...prev, length - i - 1]);
    }
    setSortedIndex(newArray.map((_, idx) => idx));
};
