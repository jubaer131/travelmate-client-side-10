import React from 'react';

const Explore = () => {
    return (
        <div className='container mx-auto flex justify-center items-center gap-5 h-[500px] '>
            <div className='text-start w-1/2 p-5 space-y-4'>
                <h3 className='text-2xl font-semibold'>EXPLORE THE</h3>
                <h1 className='text-4xl font-bold text-[#005294]'>THAILAND TRIP</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismody tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim adi minim veniam, qu nostrud exerci tation dolore magna aliquam erat volutpat.

                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismody tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim adi minim veniam, qu nostrud exerci tation dolore magna aliquam erat volutpat.</p>
                <button className='btn bg-[#99062f] text-white rounded-none'>Book now</button>
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