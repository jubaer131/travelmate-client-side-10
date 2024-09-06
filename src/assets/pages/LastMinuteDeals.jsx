
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import Swiper autoplay styles

import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import { SlDiamond } from 'react-icons/sl';

const LastMinuteDeals = () => {


    return (
        <>
            <section className="my-24 max-w-5xl mx-auto ">
                <h1 className="text-center text-4xl font-bold text-white mb-4 ">Last Minute Deals</h1>
                <div className="divider divider-neutral  w-[40%]  mx-auto "><SlDiamond className="text-6xl  text-white" /></div>
                <p className="text-center text-xl  text-white font-medium mt-8 mb-12">
                    Explore our popular packages, blending adventure, relaxation, and culture. With comfortable stays, guided tours,<br /> and exclusive deals, each package is crafted for a memorable experience. Whether a romantic escape <br /> or a family trip, there's something for everyone
                </p>
                <Swiper

                    slidesPerView={2} // Show 3 cards at a time
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    autoplay={{
                        delay: 3000, // Slide will change every 3 seconds
                        disableOnInteraction: false, // Continue autoplay after interaction
                    }}
                    modules={[Pagination, Navigation, Autoplay]} // Include Autoplay module
                    className="mySwiper py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800"
                >


                    <SwiperSlide>
                        <div className="bg-[#c6144a] relative  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]     dark:bg-gray-50 dark:text-gray-900  space-y-4 transition-all duration-400  ">
                            <div className="pb-8 px-2 pt-2  bg-gray-50 hover:bg-[#005294] hover:text-white rounded-br-[100px] rounded-bl-[100px]  group transition-all duration-400">
                                <img src="https://i.ibb.co/x2TcffL/florian-wehde-y3sid-Wv-Dxg-unsplash.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 opacity-100 hover:opacity-70 transition duration-300" />
                                <div className="mt-6 mb-2  text-center">
                                    <h2 className="text-xl font-semibold tracking-wide"> Kuala Lumpur</h2>
                                </div>
                                <p className="dark:text-gray-800 text-center px-4">The capital city, famous for its iconic Petronas Twin Towers, vibrant nightlife, shopping districts like Bukit Bintang,& cultural landmarks such as  the Sultan Abdul Samad Building.</p>
                                <div className='text-center mt-6'>
                                    <button className='btn-ghost border border-[#c6144a] btn w-[50%] rounded-none text-[#c6144a] hover:bg-[#c6144a] hover:text-white'>More Details</button>
                                </div>
                            </div>

                            <h1 className="absolute bg-orange-500 md:w-48 w-36 h-10  rounded-full  top-60 md:left-36 left-3  flex justify-center items-center text-2xl font-bold text-white">$550</h1>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#c6144a] relative  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]     dark:bg-gray-50 dark:text-gray-900  space-y-4 transition-all duration-400  ">
                            <div className="pb-8 px-2 pt-2  bg-gray-50 hover:bg-[#005294] hover:text-white rounded-br-[100px] rounded-bl-[100px]  group transition-all duration-400">
                                <img src="https://i.ibb.co/NF4FtRs/mother-son-beach-outdoors-sea-blue-sky-1249-560.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 opacity-100 hover:opacity-70 transition duration-300" />
                                <div className="mt-6 mb-2  text-center">
                                    <h2 className="text-xl font-semibold tracking-wide"> Langkawi Island</h2>
                                </div>
                                <p className="dark:text-gray-800 text-center px-4">An archipelago of 99 islands known for its pristine beaches, clear waters, and lush rainforests. It offers activities such as snorkeling, island hopping.</p>
                                <div className='text-center mt-6'>
                                    <button className='btn-ghost border border-[#c6144a] btn w-[50%] rounded-none text-[#c6144a] hover:bg-[#c6144a] hover:text-white'>More Details</button>
                                </div>
                            </div>

                            <h1 className="absolute bg-orange-500 md:w-48 w-36 h-10  rounded-full  top-60 md:left-36 left-3  flex justify-center items-center text-2xl font-bold text-white">$580</h1>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#c6144a] relative  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]     dark:bg-gray-50 dark:text-gray-900  space-y-4 transition-all duration-400  ">
                            <div className="pb-8 px-2 pt-2  bg-gray-50 hover:bg-[#005294] hover:text-white rounded-br-[100px] rounded-bl-[100px]  group transition-all duration-400">
                                <img src="https://i.ibb.co/tsrxxKK/young-man-young-woman-hiker-1150-5709.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 opacity-100 hover:opacity-70 transition duration-300" />
                                <div className="mt-6 mb-2  text-center">
                                    <h2 className="text-xl font-semibold tracking-wide"> Cameron Highlands</h2>
                                </div>
                                <p className="dark:text-gray-800 text-center px-4"> Famous for its tea plantations, strawberry farms, and cool climate. Visitors can explore the Boh Tea Plantation, trek through mossy forests, and enjoy fresh produce.</p>
                                <div className='text-center mt-6'>
                                    <button className='btn-ghost border border-[#c6144a] btn w-[50%] rounded-none text-[#c6144a] hover:bg-[#c6144a] hover:text-white'>More Details</button>
                                </div>
                            </div>

                            <h1 className="absolute bg-orange-500 md:w-48 w-36 h-10  rounded-full  top-60 md:left-36 left-3  flex justify-center items-center text-2xl font-bold text-white">$750</h1>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#c6144a] relative  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]     dark:bg-gray-50 dark:text-gray-900  space-y-4 transition-all duration-400  ">
                            <div className="pb-8 px-2 pt-2  bg-gray-50 hover:bg-[#005294] hover:text-white rounded-br-[100px] rounded-bl-[100px]  group transition-all duration-400">
                                <img src="https://i.ibb.co/SnhJ2t8/allphoto-bangkok-gt3g-K-Wob2g-unsplash.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 opacity-100 hover:opacity-70 transition duration-300" />
                                <div className="mt-6 mb-2  text-center">
                                    <h2 className="text-xl font-semibold tracking-wide"> Borobudur Temple</h2>
                                </div>
                                <p className="dark:text-gray-800 text-center px-4"> The world's largest Buddhist temple, Borobudur is a UNESCO World Heritage site. It's known for its intricate carvings and the panoramic sunrise view over the surrounding volcanoes and hills..</p>
                                <div className='text-center mt-6'>
                                    <button className='btn-ghost border border-[#c6144a] btn w-[50%] rounded-none text-[#c6144a] hover:bg-[#c6144a] hover:text-white'>More Details</button>
                                </div>
                            </div>

                            <h1 className="absolute bg-orange-500 md:w-48 w-36 h-10  rounded-full  top-60 md:left-36 left-3  flex justify-center items-center text-2xl font-bold text-white">$750</h1>

                        </div>
                    </SwiperSlide>











                </Swiper>

            </section>
        </>
    );
};

export default LastMinuteDeals;