
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
                <h1 className="text-center text-4xl font-bold text-white mb-4 ">Popular Packages</h1>
                <div className="divider divider-neutral w-[40%] border-white mx-auto"><SlDiamond className="text-6xl  text-white" /></div>
                <p className="text-center text-xl  text-white font-medium mt-8 mb-12">
                    Explore our popular packages, blending adventure, relaxation, and culture. With comfortable stays, guided tours,<br /> and exclusive deals, each package is crafted for a memorable experience. Whether a romantic escape <br /> or a family trip, there's something for everyone
                </p>
                <Swiper

                    slidesPerView={2} // Show 3 cards at a time
                    spaceBetween={30}
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

                        <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 bg-white">
                            <img src="https://i.ibb.co/yFxQ28v/close-up-man-smiling-nature-23-2150771119.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 opacity-100 hover:opacity-70 transition duration-300" />
                            <div className="mt-6 mb-2 bg-white text-center">
                                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
                                <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                            </div>
                            <p className="dark:text-gray-800 text-center px-4">Mauris et lorem at elit tristique dignissim et ullamcorper  In sed feugiat mi. Etiam ut lacinia dui.</p>
                            <div className='text-center'>
                                <button className='bg-red-500 btn w-[50%] rounded-none text-white'>More Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 bg-white">
                            <img src="https://i.ibb.co/yFxQ28v/close-up-man-smiling-nature-23-2150771119.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500  opacity-100 hover:opacity-70 transition duration-300" />
                            <div className="mt-6 mb-2 bg-white text-center">
                                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
                                <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                            </div>
                            <p className="dark:text-gray-800 text-center px-4">Mauris et lorem at elit tristique dignissim et ullamcorper  In sed feugiat mi. Etiam ut lacinia dui.</p>
                            <div className='text-center'>
                                <button className='bg-red-500 btn w-[50%] rounded-none text-white'>More Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 bg-white">
                            <img src="https://i.ibb.co/yFxQ28v/close-up-man-smiling-nature-23-2150771119.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500  opacity-100 hover:opacity-70 transition duration-300" />
                            <div className="mt-6 mb-2 bg-white text-center">
                                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
                                <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                            </div>
                            <p className="dark:text-gray-800 text-center px-4">Mauris et lorem at elit tristique dignissim et ullamcorper  In sed feugiat mi. Etiam ut lacinia dui.</p>
                            <div className='text-center'>
                                <button className='bg-red-500 btn w-[50%] rounded-none text-white'>More Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 bg-white">
                            <img src="https://i.ibb.co/yFxQ28v/close-up-man-smiling-nature-23-2150771119.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500  opacity-100 hover:opacity-70 transition duration-300" />
                            <div className="mt-6 mb-2 bg-white text-center">
                                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
                                <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                            </div>
                            <p className="dark:text-gray-800 text-center px-4">Mauris et lorem at elit tristique dignissim et ullamcorper  In sed feugiat mi. Etiam ut lacinia dui.</p>
                            <div className='text-center'>
                                <button className='bg-red-500 btn w-[50%] rounded-none text-white'>More Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 bg-white">
                            <img src="https://i.ibb.co/yFxQ28v/close-up-man-smiling-nature-23-2150771119.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500  opacity-100 hover:opacity-70 transition duration-300" />
                            <div className="mt-6 mb-2 bg-white text-center">
                                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
                                <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                            </div>
                            <p className="dark:text-gray-800 text-center px-4">Mauris et lorem at elit tristique dignissim et ullamcorper  In sed feugiat mi. Etiam ut lacinia dui.</p>
                            <div className='text-center'>
                                <button className='bg-red-500 btn w-[50%] rounded-none text-white'>More Details</button>
                            </div>
                        </div>
                    </SwiperSlide>





                </Swiper>

            </section>
        </>
    );
};

export default LastMinuteDeals;