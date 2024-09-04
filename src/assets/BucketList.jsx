import React from 'react';
import { FaHiking } from 'react-icons/fa';
import { GiAnimalSkull, GiCycling } from 'react-icons/gi';
import { MdFamilyRestroom, MdSailing } from 'react-icons/md';
import { SlDiamond } from 'react-icons/sl';

const BucketList = () => {
    return (

        <div className='container mx-auto lg:h-80 mb-20 p-10'>

            <div className='text-center space-y-8 pt-8'>
                <h1 className='text-4xl font-bold'>Top up your Bucket List</h1>
                <div className="divider divider-neutral w-[40%] border-white mx-auto"><SlDiamond className="text-6xl  " /></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
            </div>
            <div className='lg:flex justify-center items-center gap-5 mt-8 mb-6 max-sm:flex-1'>
                <div className=''>
                    <h1 className='flex items-center gap-2 bg-[#005294] text-white p-3 font-semibold'><GiCycling className='text-white text-4xl ' /> CYCLING</h1>
                </div>
                <div>
                    <h1 className='flex items-center gap-2 hover:bg-[#005294] hover:text-white p-3 font-semibold shadow-md'><MdSailing className='text-4xl hover:text-white' />SAILING</h1>
                </div>
                <div>
                    <h1 className='flex items-center gap-2 hover:bg-[#005294] hover:text-white p-3 font-semibold shadow-md'><GiAnimalSkull className='text-4xl hover:text-white' />WILDLIFE</h1>
                </div>
                <div>
                    <h1 className='flex items-center gap-2 hover:bg-[#005294] hover:text-white p-3 font-semibold shadow-md'><MdFamilyRestroom className='text-4xl hover:text-white' />FAMILY</h1>
                </div>
                <div>
                    <h1 className='flex items-center gap-2 hover:bg-[#005294] hover:text-white p-3 font-semibold shadow-md'><FaHiking className='text-4xl hover:text-white' />HIKING</h1>
                </div>
            </div>
        </div>

    );
};

export default BucketList;