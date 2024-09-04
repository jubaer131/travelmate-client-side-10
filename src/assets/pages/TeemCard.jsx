import React from 'react';
import { GoStarFill } from 'react-icons/go';
import { SlDiamond } from 'react-icons/sl';
import Marquee from "react-fast-marquee";

const TeemCard = () => {
    return (
        <div className='max-w-5xl mx-auto mt-36 mb-20'>
            <h1 className='text-4xl font-bold text-center'>BEST RATED TRAVEL AGENCY</h1>
            <div className="divider divider-neutral w-[40%] border-white mx-auto"><SlDiamond className="text-6xl  " /></div>
            <p className="text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>

            <div className='flex justify-center items-center gap-4'>
                <h1><GoStarFill className='text-2xl' /></h1>
                <h1><GoStarFill className='text-2xl' /></h1>
                <h1><GoStarFill className='text-2xl' /></h1>
                <h1><GoStarFill className='text-2xl' /></h1>
                <h1><GoStarFill className='text-2xl' /></h1>
            </div>
            <div>
                <Marquee>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/Jdw0nLG/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg" />
                        <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="dark:text-gray-600">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/Jdw0nLG/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg" />
                        <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="dark:text-gray-600">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/0XzNGy3/ian-dooley-d1-UPki-Fd04-A-unsplash.jpg" />
                        <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="dark:text-gray-600">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/0XzNGy3/ian-dooley-d1-UPki-Fd04-A-unsplash.jpg" />
                        <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="dark:text-gray-600">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/0XzNGy3/ian-dooley-d1-UPki-Fd04-A-unsplash.jpg" />
                        <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="dark:text-gray-600">Visual Designer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/0XzNGy3/ian-dooley-d1-UPki-Fd04-A-unsplash.jpg" />
                        <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="dark:text-gray-600">Visual Designer</p>
                    </div>



                </Marquee>
            </div>

        </div>
    );
};

export default TeemCard;