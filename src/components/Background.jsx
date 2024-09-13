const Background = () => {
    const styles = {
        purpleBubble:
            'bg-purple-300 w-[300px] h-[300px] mix-blend-multiply filter blur-xl opacity-60 rounded-full animate-blob',
        yellowBubble:
            'bg-yellow-300 w-[150px] h-[150px] mix-blend-multiply filter blur-xl opacity-60 rounded-full animate-blob animation-delay-4000',
        pinkBubble:
            'bg-pink-300 w-[280px] h-[280px] mix-blend-multiply filter blur-xl opacity-60 rounded-full animate-blob animation-delay-2000',
    };
    return (
        <main className='w-full h-full relative grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>
            <div className={styles.purpleBubble}></div>
            <div className={styles.yellowBubble}></div>
            <div className={styles.pinkBubble}></div>
            <div className={styles.yellowBubble}></div>
            <div className={styles.purpleBubble}></div>
            <div className={styles.pinkBubble}></div>
            <div className={styles.purpleBubble}></div>
            <div className={styles.yellowBubble}></div>
            <div className={styles.pinkBubble}></div>
            <div className={styles.yellowBubble}></div>
            <div className={styles.purpleBubble}></div>
            <div className={styles.pinkBubble}></div>
            <div className={styles.purpleBubble}></div>
            <div className={styles.yellowBubble}></div>
            <div className={styles.pinkBubble}></div>
            <div className={styles.yellowBubble}></div>
            <div className={styles.purpleBubble}></div>
            <div className={styles.pinkBubble}></div>
            <div className={styles.purpleBubble}></div>
        </main>
    );
};
export default Background;
