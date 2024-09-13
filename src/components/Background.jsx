const Background = () => {
    let stars = [];

    for (let value = 0; value < 500; value++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 5 + 1)) + 5;
        stars.push(randomNumber);
    }

    return (
        <div className='relative w-full h-screen grid grid-cols-10 sm:grid-cols-12 md:grid-cols-15 lg:grid-cols-large xl:grid-cols-xlarge gap-10 p-2'>
            {stars.map((star, i) => {
                const delay = i % 2 === 0 ? '1s' : '4s';
                const marginStagger = i % 2 === 0 ? '20' : '0';
                return (
                    <p
                        key={i}
                        className='w-[2px] h-[2px] bg-gray-50 rounded-full animate-pulse'
                        style={{
                            marginTop: `${marginStagger}px`,
                            marginBottom: `${marginStagger}px`,
                            animationDelay: delay,
                        }}
                    ></p>
                );
            })}
        </div>
    );
};
export default Background;
