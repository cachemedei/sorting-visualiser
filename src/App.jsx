import { useEffect, useState } from 'react';
import Background from './components/Background.jsx';
import MergeSort from './components/MergeSort.jsx';
import QuickSort from './components/QuickSort.jsx';

const App = () => {
    // styles
    const styles = {
        bar: `w-[12px] rounded mx-[1px] bg-indigo-300 text-sm`,
        button: 'border-gray-500 bg-gray-200 rounded text-lg font-light hover:scale-110 duration-500 cursor-pointer py-2 px-3',
        speedLabel: 'text-gray-100 font-bold text-xl',
    };

    // state
    const [array, setArray] = useState([]);
    const [sortedIndex, setSortedIndex] = useState([]);
    const [highlighted, setHighlighted] = useState([]);
    const sortSpeed = 80;

    // callback functions
    const updateArrayState = (newArray) => {
        setArray(newArray);
    };

    const updateHighlightedState = (newHighlights) => {
        setHighlighted(newHighlights);
    };
    const updateSortedIndexState = (newSortedIndex) => {
        setSortedIndex(newSortedIndex);
    };

    // generate array with 80 random integers valued between 5 - 500
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

    // populate array on app mount
    useEffect(() => {
        generateArray();
    }, []);

    // handle Bubble Sort
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
                        [newArray[j], newArray[j + 1]] = [
                            newArray[j + 1],
                            newArray[j],
                        ];
                        setArray([...newArray]);
                    }
                    setHighlighted([]);
                }
                setSortedIndex((prev) => [...prev, length - i - 1]);
            }
            setSortedIndex(newArray.map((_, idx) => idx));
    };

    return (
        <>
            <main className='w-full h-screen flex justify-center items-center bg-gray-800 relative'>
                {/* Background */}
                <Background />
                <section className='h-full flex flex-col justify-evenly w-full px-6 absolute'>
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
                                            ? '#e02121' // second compared
                                            : 'lightsalmon', // unsorted
                                    }}
                                    className={styles.bar}
                                    key={idx}
                                ></li>
                            ))
                        ) : (
                            <></>
                        )}
                    </ul>
                    <section className='flex justify-evenly w-full h-[200px] self-center items-center gap-4'>
                        <div className='flex justify-evenly w-[600px]'>
                            {/* merge sort */}
                            <MergeSort
                                updateArrayState={updateArrayState}
                                unsortedArray={array}
                            />

                            {/* bubble sort */}
                            <button
                                className={styles.button}
                                onClick={handleBubbleSort}
                            >
                                Bubble Sort
                            </button>

                            {/* quick sort */}
                            <QuickSort
                                updateArrayState={updateArrayState}
                                unsortedArray={array}
                            />

                            <button
                                className={styles.button}
                                onClick={generateArray}
                            >
                                New Array
                            </button>
                        </div>
                    </section>
                </section>
            </main>
        </>
    );
};
export default App;
