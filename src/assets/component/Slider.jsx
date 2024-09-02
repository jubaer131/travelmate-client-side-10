import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { FaUmbrellaBeach } from 'react-icons/fa';



const Slider = () => {

    const [price, setPrice] = useState(50);

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide
                    className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url(https://i.ibb.co/b7cndXd/close-up-man-smiling-nature-23-2150771119.jpg)' }}>
                    <div className='flex justify-center items-center h-[650px] text-red-50 bg-black bg-opacity-50 pt-20'>
                        <div className=' text-center'>
                            <h1 className='font-medium text-[18px] mb-2'>WELCOME TO MEDTRAIL CAMP</h1>
                            <h1 className='text-5xl px-5 font-semibold text-emerald-500'> YOUR HEALTH, OUR PRIORITY</h1>
                            <p className='w-[70%] mx-auto mt-4 mb-7'>Providing expert care and medical services to ensure a healthier community.
                                Join us in our mission to make healthcare accessible for everyone.</p>


                            <a href='/aboutUs' class="relative px-5 py-2 font-medium text-white group ">

                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:skew-x-12"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:-skew-x-12"></span>
                                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-emerald-400 -rotate-12"></span>
                                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-emerald-400 -rotate-12"></span>
                                <span class="relative ">About Us</span>

                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url(https://i.ibb.co/Zg0BqXm/Green-Photo-Nature-Traveling-You-Tube-Banner.png)' }}>
                    <div className='flex justify-center items-center h-[650px] text-red-50 bg-black bg-opacity-50 pt-20 relative'>
                        <div className=' text-center'>
                            <h1 className='font-medium text-[18px] mb-2'>WELCOME TO MEDTRAIL CAMP</h1>
                            <h1 className='text-5xl px-5 font-semibold text-emerald-500'> YOUR HEALTH, OUR PRIORITY</h1>
                            <p className='w-[70%] mx-auto mt-4 mb-7'>Providing expert care and medical services to ensure a healthier community.
                                Join us in our mission to make healthcare accessible for everyone.</p>


                            <a href='/aboutUs' class="relative px-5 py-2 font-medium text-white group ">

                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:skew-x-12"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:-skew-x-12"></span>
                                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-emerald-400 -rotate-12"></span>
                                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-emerald-400 -rotate-12"></span>
                                <span class="relative ">About Us</span>

                            </a>
                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide
                    className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url(https://i.ibb.co/rbTX9sF/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg)' }}>
                    <div className='flex justify-center items-center h-[650px] text-red-50 bg-black bg-opacity-50 pt-20'>
                        <div className=' text-center'>
                            <h1 className='font-medium text-[18px] mb-2'>WELCOME TO MEDTRAIL CAMP</h1>
                            <h1 className='text-5xl px-5 font-semibold text-emerald-500'> YOUR HEALTH, OUR PRIORITY</h1>
                            <p className='w-[70%] mx-auto mt-4 mb-7'>Providing expert care and medical services to ensure a healthier community.
                                Join us in our mission to make healthcare accessible for everyone.</p>


                            <a href='/aboutUs' class="relative px-5 py-2 font-medium text-white group ">

                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:skew-x-12"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-emerald-500 group-hover:bg-emerald-700 group-hover:-skew-x-12"></span>
                                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-emerald-400 -rotate-12"></span>
                                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-emerald-400 -rotate-12"></span>
                                <span class="relative ">About Us</span>

                            </a>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div className='absolute lg:top-[670px]  lg:left-[350px] lg:flex items-center justify-center  z-50 shadow-2xl lg:w-[1170px] lg:h-40 max-sm:w-full'>
                <div className='lg:w-1/3 h-full bg-[#005294] flex justify-center items-center gap-6 p-8'>
                    <div>
                        <h4 className='text-xl text-white'>Find your</h4>
                        <h1 className='text-5xl  text-white'>holiday</h1>
                    </div>
                    <div>
                        <FaUmbrellaBeach className='text-5xl text-white' />
                    </div>

                </div>
                <div className='w-full h-full  lg:flex justify-start items-center gap-5  bg-white p-6'>

                    <div className='py-5 space-y-2'>
                        <div>
                            <select className="select select-bordered rounded-none  max-sm:w-full w-[250px] 
">
                                <option disabled selected>Normal</option>
                                <option>Normal Apple</option>
                                <option>Normal Orange</option>
                                <option>Normal Tomato</option>
                            </select>
                        </div>
                        <div>
                            <select className="select select-bordered rounded-none max-sm:w-full  w-[250px]  ">
                                <option disabled selected>Normal</option>
                                <option>Normal Apple</option>
                                <option>Normal Orange</option>
                                <option>Normal Tomato</option>
                            </select>
                        </div>

                    </div>
                    <div className='space-y-2 m-0'>
                        <div className="">
                            {/* <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date</label> */}
                            <input type="date" id="date" className=" block  rounded-none max-sm:w-full w-[250px] p-[12px] border border-gray-300  shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
                        </div>
                        <div className="">
                            {/* <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date</label> */}
                            <input type="date" id="date" className=" block  max-sm:w-full w-[250px] p-[12px] border border-gray-300 rounded-none shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
                        </div>
                    </div>
                    <div className='lg:w-full lg:py-12 my-5'>
                        <h2 className='text-lg font-medium text-gray-700'>Select Price Range</h2>
                        <input
                            type="range"
                            min="0"
                            max="200"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full "
                        />
                        <div className=' text-gray-700 flex justify-between items-center'>
                            <p> ${price}</p>
                            <p>$200</p>
                        </div>
                        <button className='btn  w-full bg-red-400'>Search</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Slider;

