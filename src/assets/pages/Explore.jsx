import React from 'react';

const Explore = () => {
    return (
        <div className='max-w-7xl mx-auto flex justify-center items-center gap-5 h-[500px] '>
            <div className='text-start w-1/2 max-sm:px-5 space-y-4'>
                <h3 className='text-2xl font-semibold'>EXPLORE THE</h3>
                <h1 className='text-4xl font-bold text-[#005294]'>THAILAND TRIP</h1>
                <p>A trip to Thailand offers a captivating blend of culture, adventure, and relaxation. Start in Bangkok to explore grand temples and vibrant markets. Discover the charm of Chiang Mai with its serene temples and lantern festivals. Unwind on the beautiful beaches of Phuket or Koh Samui. Visit the ancient ruins of Ayutthaya for a glimpse into Thailand's rich history.</p>
                <button className="btn text-center bg-[#cd1249] p-4 text-white hover:bg-white hover:text-[#cd1249] my-8 w-[25%] rounded-none text-[15px]">
                    View more details
                </button>
            </div>
            <div className='w-1/2  flex justify-center items-center'>
                <div className='rounded-full w-48 h-48 bg-[#99062f] text-white flex flex-col justify-center items-center border-2 border-dotted  border-white '>
                    <h4 className='text-2xl font-medium '>Starting at</h4>
                    <h1 className='text-5xl font-bold'>$300</h1>
                </div>

            </div>
        </div>
    );
};

export default Explore;