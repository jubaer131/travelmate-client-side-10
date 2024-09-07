import { useLoaderData } from "react-router-dom";
import AlltouristSportCard from "../component/AlltouristSportCard";
import { Helmet } from "react-helmet";
import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { CiCalendarDate, CiUser } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa6";

const AllTouristSport = () => {
    const tour = useLoaderData()
    console.log(tour)

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 ">
            <Helmet>
                <title>Popular tourist sport</title>
            </Helmet>

            <div className="relative p-6 py- h-48 dark:bg-violet-600 dark:text-gray-50 bg-cover bg-no-repeat bg-[url('https://i.ibb.co.com/f0sgsW8/Blue-Orange-Aesthetic-Typography-Piano-Covers-Mix-Playlist-Music-Thumbnail-1.png')] ">


                <div className="w-[450px] mx-auto py-2 lg:py-0">
                    <div className="divider divider-warning  w-20 mx-auto text-white"></div>
                    <p className="text-center text-3xl text-white font-Caveat">POPULAR TOURIST SPORT</p>

                </div>
                <div className="absolute top-[165px] left-[680px] flex justify-center items-center gap-3 w-[550px] h-14 bg-white shadow-xl">
                    <Link>Home <span className="mx-2 font-semibold">/</span></Link>
                    <Link>Popular Tourist Sport <span className="mx-2 font-bold">/</span></Link>
                    <Link>My List</Link>
                </div>
            </div>


            <div className="flex justify-center gap-5   max-w-7xl mx-auto mt-12 ">


                <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 ">
                    {
                        tour.map(item => <AlltouristSportCard item={item}></AlltouristSportCard>)
                    }
                </div>


                <div className="relative lg:w-[33.33%]">
                    <div className=" sticky top-0 p-6">
                        <div className="bg-[#333333] h-48 space-y-2 p-3">
                            <div>

                                <div className="divider divider-start"><span className="text-xl font-bold bg-[#005294] text-white px-5 py-1">Search</span></div>
                            </div>
                            <input type="text" placeholder="Inter the place you want search" className="input rounded-none input-bordered w-full " />
                            <div>
                                <button className="btn w-full rounded-none bg-[#de3b68] text-white hover:bg-white hover:text-[#de3b68] border-0">Search Now</button>
                            </div>

                        </div>
                        <div className="mt-10 p-5 shadow-md">
                            <div>

                                <div className="divider divider-start"><span className="text-xl font-bold bg-gray-50 border border-gray-200 text-black px-5 py-2 mb-2">Categories</span></div>
                            </div>
                            <Link className="">Adventure Tours</Link>
                            <hr className="my-3" />
                            <Link>Cultural Tours</Link>
                            <hr className="my-3" />
                            <Link>Beach Holidays</Link>
                            <hr className="my-3" />
                            <Link>City Breaks</Link>
                            <hr className="my-3" />
                            <Link>Food and Wine Tours</Link>
                            <hr className="my-3" />
                            <Link>Family Tours</Link>

                        </div>
                        <div className="p-5 shadow-md mt-5">
                            <div className="">
                                <div className="divider divider-start"><span className="text-xl font-bold bg-gray-50 border border-gray-200 text-black px-5 py-2 ">Popular Tags</span></div>
                            </div>
                            <div className="space-y-3 pt-5 ">
                                <div className="space-x-1">
                                    <button className="h-10 w-20 hover:bg-[#005294] hover:text-white font-bold bg-gray-50 border border-gray-200 text-black px-5 py-2  rounded-none">Flight </button>
                                    <button className="h-10 w-20 hover:bg-[#005294] hover:text-white font-bold bg-gray-50 border border-gray-200 text-black px-5 py-2  rounded-none">Trek</button>
                                    <button className="h-10 w-24 hover:bg-[#005294] hover:text-white font-bold bg-gray-50 border border-gray-200 text-black px-2 py-2  rounded-none">Travelling</button>
                                </div>
                                <div className="space-x-1">
                                    <button className="h-10 w-20 hover:bg-[#005294] hover:text-white font-bold bg-gray-50 border border-gray-200 text-black px-2 py-2  rounded-none">Cruises</button>
                                    <button className="h-10 w-20 hover:bg-[#005294] hover:text-white font-bold bg-gray-50 border border-gray-200 text-black px-5 py-2  rounded-none">Sale</button>
                                    <button className="h-10 w-24 hover:bg-[#005294] hover:text-white font-bold bg-gray-50 border border-gray-200 text-black px-2 py-2  rounded-none">Hotels</button>
                                </div>
                                <button className="h-10 w-28 hover:bg-[#005294] hover:text-white font-bold bg-gray-50 border border-gray-200 text-black px-2 py-2  rounded-none">Restaurant</button>
                            </div>
                        </div>
                        <div className="px-3 py-5 shadow-md mt-4">
                            <div>
                                <div className="divider divider-start"><span className="text-xl font-bold bg-gray-50 border border-gray-200 text-black px-5 py-2 ">Weekend Getaways</span></div>
                            </div>
                            <div className="flex justify-start pt-4 hover:text-[#005294]">
                                <div className="w-20 text-2xl font-bold text-[#d60d45]">
                                    <h1>01</h1>
                                </div>

                                <Link>
                                    <h1 className="text-xl font-medium"> Weekend Getaways Near New York City</h1>
                                    <div className="flex text-[11px] gap-2 mt-1">
                                        <p className="flex items-center gap-1"> <CiUser />David Miller</p>
                                        <p className="flex items-center gap-1"><CiCalendarDate />28 February</p>
                                        <p className="flex items-center gap-1"> <FaRegCommentDots />6 comments</p>
                                    </div>

                                </Link>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-start  pt-3 hover:text-[#005294]">
                                <div className="w-20 text-2xl font-bold text-[#d60d45]">
                                    <h1>02</h1>
                                </div>

                                <Link>
                                    <h1 className="text-xl font-medium">A Cultural Escape to Santa Fe, New Mexico</h1>
                                    <div className="flex text-[11px] gap-2 mt-1">
                                        <p className="flex items-center gap-1"> <CiUser />Lucas Martin</p>
                                        <p className="flex items-center gap-1"><CiCalendarDate />30 September </p>
                                        <p className="flex items-center gap-1"> <FaRegCommentDots />62 comments</p>
                                    </div>

                                </Link>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-start  pt-3 hover:text-[#005294]">
                                <div className="w-20 text-2xl font-bold text-[#d60d45]">
                                    <h1>03</h1>
                                </div>

                                <Link>
                                    <h1 className="text-xl  font-medium"> A Tranquil Weekend in the Lake District, UK</h1>
                                    <div className="flex text-[11px] gap-2 mt-1">
                                        <p className="flex items-center gap-1"> <CiUser />Emma Roberts</p>
                                        <p className="flex items-center gap-1"><CiCalendarDate />10 April</p>
                                        <p className="flex items-center gap-1"> <FaRegCommentDots />3 comments</p>
                                    </div>

                                </Link>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-start  pt-3 hover:text-[#005294]">
                                <div className="w-20 text-2xl font-bold text-[#d60d45]">
                                    <h1>04</h1>
                                </div>

                                <Link>
                                    <h1 className="text-xl  font-medium "> Romantic Getaways: Exploring Napa Valley Wineries</h1>
                                    <div className="flex text-[11px] gap-2 mt-1">
                                        <p className="flex items-center gap-1"> <CiUser />Sophia Lee</p>
                                        <p className="flex items-center gap-1"><CiCalendarDate />12 June</p>
                                        <p className="flex items-center gap-1"> <FaRegCommentDots />8 comments</p>
                                    </div>

                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AllTouristSport;

