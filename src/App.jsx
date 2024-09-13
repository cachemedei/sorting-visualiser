import { useEffect, useRef, useState } from 'react';
import { mergeSort } from './sortingAlgorithms/mergeSort.js';
import Background from './components/Background.jsx';

const App = () => {
    // Styles
    const styles = {
        bar: `w-[12px] rounded mx-[1px] bg-indigo-300 text-sm`,
        button: 'border-gray-500 bg-gray-200 shadow-md shadow-gray-400 rounded text-lg font-light w-full h-[70px] hover:scale-110 duration-500 cursor-pointer',
    };

    // State
    const [array, setArray] = useState([]);
    const [sortedIndex, setSortedIndex] = useState([]);
    const [highlighted, setHighlighted] = useState([]);
    const [sortSpeed, setSortSpeed] = useState(80); // Default speed is 80ms

    // Generate array with 80 random integers valued between 5 - 500
    const generateArray = () => {
        let randomArray = [];
        for (let value = 0; value < 80; value++) {
            let randomNumber = Math.floor(Math.random() * (500 - 5 + 1)) + 5;
            randomArray.push(randomNumber);
        }
        setArray(randomArray);
        setSortedIndex([]);
        setHighlighted([]);
    };

    // Populate array on app mount
    useEffect(() => {
        generateArray();
    }, []);

    // Handle merge
    const handleMergeSort = () => {
        const sortedArray = mergeSort(array);
        setArray([...sortedArray]);
    };

    // Handle bubble
    const handleBubbleSort = async () => {
        const length = array.length;
        let newArray = [...array];

        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                setHighlighted([j, j + 1]);

                await new Promise((resolve) =>
                    setTimeout(resolve, sortSpeed)
                );
                if (newArray[j] > newArray[j + 1]) {
                    // Swap the elements
                    [newArray[j], newArray[j + 1]] = [
                        newArray[j + 1],
                        newArray[j],
                    ];
                    setArray([...newArray]); // Trigger state update for re-render
                }
                setHighlighted([]);
            }
            setSortedIndex((prev) => [...prev, length - i - 1]);
        }
        setSortedIndex(newArray.map((_, idx) => idx));
    };

    return (
        <>
            <main className='w-full p-2 h-screen flex justify-center items-center bg-gray-200'>
                {/* Background */}
                <Background />
                <section className='h-screen flex flex-col justify-evenly w-full px-6 absolute'>
                    <ul className='flex justify-center items-end w-full'>
                        {array ? (
                            array.map((value, idx) => (
                                <li
                                    style={{
                                        height: `${value}px`,
                                        backgroundColor: sortedIndex.includes(
                                            idx
                                        )
                                            ? 'orange' // sorted elements
                                            : highlighted[0] === idx
                                            ? '#83bff4' // first compared
                                            : highlighted[1] === idx
                                            ? '#f4c68e' // second compared
                                            : 'lightslategray', // unsorted
                                    }}
                                    className={styles.bar}
                                    key={idx}
                                ></li>
                            ))
                        ) : (
                            <></>
                        )}
                    </ul>
                    <section className='flex  justify-center self-center items-center gap-4'>
                        <button
                            className={styles.button}
                            onClick={handleMergeSort}
                        >
                            Merge Sort
                        </button>
                        <button
                            className={styles.button}
                            onClick={handleBubbleSort}
                        >
                            Bubble Sort
                        </button>
                        <button
                            className={styles.button}
                            onClick={generateArray}
                        >
                            New Array
                        </button>
                        <label htmlFor='speed-toggle'>Faster</label>
                        <input
                            id='speed-toggle'
                            name='speed-toggle'
                            type='range'
                            min='2'
                            max='500'
                            value={sortSpeed}
                            onChange={(e) =>
                                setSortSpeed(Number(e.target.value))
                            }
                        />
                        <label htmlFor='speed-toggle'>Slower</label>
                    </section>
                </section>
            </main>
        </>
    );
};
export default App;
