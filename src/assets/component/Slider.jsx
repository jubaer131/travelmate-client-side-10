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
import { LuFileType } from 'react-icons/lu';
import { FaLocationDot } from 'react-icons/fa6';
import { BsCalendar2Date } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';



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
                    <div className='flex justify-center items-center h-[650px] font-f text-red-50 bg-black bg-opacity-50 pt-20'>
                        <div className=' text-center'>
                            <h3 className='font-light font-Caveat text-[#a3d8f1]
 text-[30px]  mb-2 '>Book a Ticket & Just Leave</h3>
                            <h1 className='md:text-5xl text-3xl px-5 font-Caveat font-semibold text-[#dbd9d9]'> SEARCH YOUR NEXT DESTINATION</h1>

                            <button className='btn p-0 m-0 my-[6px] mt-6 md:w-[20%] btn-ghost border border-white text-[16px] max-sm:font-light max-sm:p-4 rounded-none text-white hover:bg-[#d91f53] hover:text-white'>View Our Tour</button>


                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url(https://i.ibb.co/Zg0BqXm/Green-Photo-Nature-Traveling-You-Tube-Banner.png)' }}>
                    <div className='flex justify-center items-center h-[650px] text-red-50 bg-black bg-opacity-50 pt-20 relative'>
                        <div className=' text-center'>
                            <h3 className='font-light font-Caveat text-[#a3d8f1]
 text-[30px]  mb-2'>Cost Friendly Pakage </h3>
                            <h1 className='md:text-5xl text-3xl px-5 font-Caveat font-semibold text-[#dbd9d9]'>WE OFFER YOU BETTER DEALS</h1>



                            <button className='btn p-0 m-0 my-[6px] mt-6 md:w-[20%] btn-ghost border border-white text-[16px] rounded-none text-white hover:bg-[#d91f53] hover:text-white  max-sm:font-light max-sm:p-4 '>View Our Tour</button>

                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide
                    className='bg-no-repeat bg-cover bg-center' style={{ backgroundImage: 'url(https://i.ibb.co/rbTX9sF/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg)' }}>
                    <div className='flex justify-center items-center h-[650px] text-red-50 bg-black bg-opacity-50 pt-20'>
                        <div className=' text-center'>
                            <h1 className='font-light font-Caveat text-[#a3d8f1]
 text-[30px]  mb-2 '>Exciting Schemes Just a Click Away</h1>
                            <h1 className='md:text-5xl text-3xl px-5 font-Caveat font-semibold text-[#dbd9d9]'> AMAZING SENTORINI 7 DAYS TOUR</h1>



                            <button className='btn p-0 m-0 my-[6px] mt-6 md:w-[20%] btn-ghost border border-white text-[16px] rounded-none text-white hover:bg-[#d91f53] hover:text-white  max-sm:font-light max-sm:p-4 '>View Our Tour</button>

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
                        <div className='relative'>

                            <select className="select select-bordered rounded-none  pl-8 max-sm:w-full w-[250px] 
">
                                <option disabled selected > Destination</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <h1 className='absolute top-3 left-2'><SlLocationPin className='text-xl' /> </h1>
                        </div>
                        <div className='relative'>
                            <select className="select select-bordered rounded-none max-sm:w-full  pl-8  w-[250px]  ">

                                <option disabled selected >Type</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <h1 className='absolute top-3 left-2'><LuFileType className='text-xl' /></h1>

                        </div>

                    </div>
                    <div className='space-y-2 m-0'>
                        <div className="relative">

                            <input type="date" id="date" className=" block  rounded-none max-sm:w-full w-[250px] pl-10 p-[12px] border border-gray-300  shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
                            <h1 className='absolute top-3 left-2'><BsCalendar2Date className="text-[18px]" /></h1>
                        </div>
                        <div className="relative">

                            <input type="date" id="date" className=" block  max-sm:w-full w-[250px] p-[12px] pl-10 border border-gray-300 rounded-none shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
                            <h1 className='absolute top-3 left-2'><BsCalendar2Date className="text-[18px]" /></h1>
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
                        <div className=' text-gray-700 flex justify-between items-center text-sm'>
                            <p> ${price}</p>
                            <p>$200</p>
                        </div>

                        <button className='btn p-0 m-0 my-[8px] w-full bg-[#d91f53] text-[16px] rounded-none text-white hover:bg-white hover:text-[#d91f53]'>SEARCH</button>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Slider;

