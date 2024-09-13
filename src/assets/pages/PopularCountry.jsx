import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PopularCountry = () => {
    return (
        <>
            <Helmet>
                <title>Popular Country</title>
            </Helmet>
            <div className="relative p-6  md:h-48 dark:bg-violet-600 dark:text-gray-50 bg-cover bg-no-repeat bg-[url('https://i.ibb.co.com/thYMK5Z/breadcrumb.jpg')] ">
                <div className="md:w-[450px] mx-auto py-2 lg:py-0">
                    <div className="divider divider-warning  w-20 mx-auto text-white"></div>
                    <p className="text-center md:text-3xl text-white font-Caveat">POPULAR TOURIST SPORT</p>

                </div>
                <div className="absolute md:top-[165px] top-28 max-sm:p-2 md:left-[680px] flex justify-center items-center gap-3 md:w-[550px] md:h-14 bg-white shadow-xl">
                    <Link className="hover:text-[#005294]" to="/">Home <span className="mx-2 font-semibold">/</span></Link>
                    <Link className="hover:text-[#005294]" to="/alltouristsport">All Tourist Sport <span className="mx-2 font-bold"></span>/</Link>
                    <Link className="hover:text-[#005294]" to="/popularCountry">Popular Country</Link>
                </div>
            </div>
            <div className="max-w-7xl mx-auto md:mt-20 mt-12 max-sm:p-5">
                <h1 className="text-3xl font-semibold"><span className="text-4xl font-extrabold text-[#1690c0]">|</span > Popular <span className="text-3xl font-semibold text-[#1690c0]">Country</span> </h1>
                <p className="text-[18px] mt-3 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
            </div>
            <div className="max-w-7xl mx-auto grid  gap-2 md:gap-4">
                <Link className='grid col-span-2' to="/card1">

                    <div className="hero  shadow-2xl" style={{ backgroundImage: 'url(https://i.ibb.co.com/K6QRV7P/boat-sea-surrounded-by-hills-with-sun-reflecting-water-sunset-181624-20297.jpg)' }} >
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md h-72">
                                <h1 className="mt-28 text-4xl font-bold">Bangladesh</h1>

                            </div>
                        </div>

                    </div>
                </Link>
                <Link className="grid  " to="/card2">
                    <div className="hero shadow-2xl " style={{ backgroundImage: 'url(https://i.ibb.co.com/dcsmxS2/gate-khao-na-nai-luang-dharma-park-sunrise-surat-thani-thailand-335224-832.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md h-72">
                                <h1 className="mt-28 text-4xl font-bold">Thailand </h1>

                            </div>
                        </div>
                    </div>
                </Link>

                <Link className='grid ' to="/card4">
                    <div className="hero shadow-2xl" style={{ backgroundImage: 'url(https://i.ibb.co.com/HhhLqf3/balinese-people-traditional-clothes-religious-ceremony-pura-taman-ayun-temple-bali-indonesia-335224.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md h-72">
                                <h1 className="mt-28 text-4xl font-bold">Indonesia</h1>

                            </div>
                        </div>
                    </div>
                </Link>
                <Link className='grid col-span-2' to="/card5">
                    <div className="hero shadow-2xl" style={{ backgroundImage: 'url(https://i.ibb.co.com/sKJfzj6/fresh-travel-vietnam-natural-china-stone-1417-1349.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md h-72">
                                <h1 className="mt-28 text-4xl font-bold">Vietnam </h1>

                            </div>
                        </div>
                    </div>
                </Link>
                <Link className="grid col-span-3 mb-8" to="/card6">
                    <div className="hero shadow-2xl" style={{ backgroundImage: 'url(https://i.ibb.co.com/mbv46ND/buddha-statue-wat-mahathat-temple-precinct-sukhothai-historical-park-335224-902.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md h-72">
                                <h1 className="mt-28 text-4xl font-bold">Cambodia</h1>

                            </div>
                        </div>
                    </div>
                </Link>
            </div >
        </>
    );
};

export default PopularCountry;