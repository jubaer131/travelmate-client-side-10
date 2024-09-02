import React from 'react';
import { SlDiamond } from 'react-icons/sl';

const BucketList = () => {
    return (

        <div className='container mx-auto h-80 my-20 p-10'>

            <div className='text-center space-y-4 pt-8'>
                <h1>Top up your Bucket List</h1>
                <div className="divider divider-neutral w-[40%] border-white mx-auto"><SlDiamond className="text-6xl  text-white" /></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
            </div>
            <div className='flex justify-center items-center gap-5 my-5'>
                <div>
                    <h1>Cycling</h1>
                </div>
                <div>
                    <h1>sailing</h1>
                </div>
                <div>
                    <h1>wildlife</h1>
                </div>
                <div>
                    <h1>Family</h1>
                </div>
                <div>
                    <h1>Hiking</h1>
                </div>
            </div>
        </div>

    );
};

export default BucketList;