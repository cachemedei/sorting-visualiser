import { useEffect, useState } from 'react';
import { mergeSort } from './sortingAlgorithms/mergeSort.js';
import { bubbleSort } from './sortingAlgorithms/bubbleSort.js';

const App = () => {
    const [barColor, setBarColor] = useState('bg-purple-300');
    const styles = {
        bar: `w-[10px] mx-[1px] ${barColor} text-sm`,
        button: 'border-2 border-gray-500 bg-gray-300 shadow-md shadow-gray-400 rounded text-lg font-light w-full h-[70px] hover:scale-110 duration-500 cursor-pointer',
    };

    const [array, setArray] = useState([]);

    // GENERATE ARRAY WITH RANDOM INTEGERS VALUED BETWEEN 5 - 1000
    const generateArray = () => {
        setBarColor('bg-purple-300');
        let randomArray = [];
        for (let value = 0; value < 80; value++) {
            let randomNumber = Math.floor(Math.random() * (1000 - 5 + 1)) + 5;
            randomArray.push(randomNumber);
        }
        setArray(randomArray);
    };

    // POPULATE ARRAY ON PAGE MOUNT
    useEffect(() => {
        generateArray();
    }, []);

    // HANDLE MERGE SORT
    const handleMergeSort = () => {
        const sortedArray = mergeSort(array);
        setArray([...sortedArray]);
        //setBarColor('bg-green-200');
    };

    // HANDLE BUBBLE SORT
    const handleBubbleSort = () => {
        const sortedArray = bubbleSort(array);
        setArray([...sortedArray]);
    };

    return (
        <>
            <main className='w-full h-screen flex justify-center items-center'>
                <section className='flex justify-between w-full px-6'>
                    <ul className='flex justify-center items-end w-full'>
                        {array ? (
                            array.map((value, idx) => (
                                <li
                                    style={{ height: `${value}px` }}
                                    className={styles.bar}
                                    key={idx}
                                ></li>
                            ))
                        ) : (
                            <></>
                        )}
                    </ul>
                    <section className='flex flex-col w-[150px] justify-center items-center gap-4'>
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
                            Generate New Array
                        </button>
                    </section>
                </section>
            </main>
        </>
    );
};
export default App;
