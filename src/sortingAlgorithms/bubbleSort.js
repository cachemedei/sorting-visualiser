export function bubbleSort(unsortedArray) {
    let array = unsortedArray
    let length = array.length
    for (let i = 0; i < length - 1; i++) {
        let swapped = false;
        for (let p = 0; p < length - i - 1; p++) {
            if (array[p] > array[p + 1]) {
                // IF P > P + 1, SWAP ELEMENTS AROUND
                let tempValue = array[p]
                array[p] = array[p + 1]
                array[p + 1] = tempValue
                swapped = true
            } 
        }
        // IF NO ELEMENTS SWAPPED, FINISH THE LOOP
        if (!swapped) {
            break
        }
    }
    return array;
}