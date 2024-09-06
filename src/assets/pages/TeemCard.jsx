import React from 'react';
import { GoStarFill } from 'react-icons/go';
import { SlDiamond } from 'react-icons/sl';
import Marquee from "react-fast-marquee";

const TeemCard = () => {
    return (
        <div className='max-w-5xl mx-auto mb-52 mt-40'>
            <h1 className='text-4xl font-bold text-center'>BEST RATED TRAVEL AGENCY</h1>
            <div className="divider divider-neutral w-[40%] border-white mx-auto"><SlDiamond className="text-6xl  " /></div>
            <p className="text-center mb-8">The best-rated travel agency excels in exceptional service and personalized itineraries. It offers expert advice, exclusive deals, and a network of trusted partners, ensuring seamless and memorable travel experiences. Known for attention to detail and responsive support, it provides tailored solutions for both leisure and business travelers..</p>

            <div className='flex justify-center items-center gap-4'>
                <h1><GoStarFill className='text-2xl text-orange-500' /></h1>
                <h1><GoStarFill className='text-2xl text-orange-500' /></h1>
                <h1><GoStarFill className='text-2xl text-orange-500' /></h1>
                <h1><GoStarFill className='text-2xl text-orange-500' /></h1>
                <h1><GoStarFill className='text-2xl text-orange-500' /></h1>
            </div>
            <div className='py-8'>
                <Marquee>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/K6rCqGz/pexels-karolina-grabowska-6333501.jpg" />
                        <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                        <p className="dark:text-gray-600">Travel Consultant</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/Jdw0nLG/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg" />
                        <p className="text-xl font-semibold leading-tight">Raj Patel</p>
                        <p className="dark:text-gray-600">Travel Agent</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/0XzNGy3/ian-dooley-d1-UPki-Fd04-A-unsplash.jpg" />
                        <p className="text-xl font-semibold leading-tight">Alex Reed</p>
                        <p className="dark:text-gray-600">Travel Planner</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/MSHyTcP/itay-verchik-Ym-Q8-Trsie-E4-unsplash.jpg" />
                        <p className="text-xl font-semibold leading-tight">Oliver Brooks </p>
                        <p className="dark:text-gray-600"> Travel Marketing Specialist</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/dLGsyDk/ludovic-migneault-EZ4-TYg-XPNWk-unsplash.jpg" />
                        <p className="text-xl font-semibold leading-tight">Zane Thompson</p>
                        <p className="dark:text-gray-600"> Travel Manager</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/mDVMmpt/jack-finnigan-rri-AI0nhcbc-unsplash.jpg" />
                        <p className="text-xl font-semibold leading-tight">washim khan </p>
                        <p className="dark:text-gray-600"> Corporate Travel Manager</p>
                    </div>



                </Marquee>
            </div>

        </div>
    );
};

export default TeemCard;