import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div class="bg-[url('https://i.ibb.co/Zhzs9R0/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg')] bg-cover min-h-[400px] md:min-h-[650px] rounded-2xl">
                    <h1 className='text-center pt-28 md:text-4xl font-bold text-violet-500'>Welcome to travelmate  </h1>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div class="bg-[url('https://i.ibb.co/Bq96kvZ/simon-english-48ner-ZQCHgo-unsplash-1.jpg')] bg-cover min-h-[400px] md:min-h-[650px] rounded-2xl">
                    <h1 className='text-center pt-28 md:text-4xl font-bold'>Welcome to travelmate  </h1>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div class="bg-[url('https://i.ibb.co/vQxQffv/samuel-ferrara-u-Nvgvo2cs7k-unsplash.jpg')] bg-cover min-h-[400px] md:min-h-[650px] rounded-2xl ">
                    <h1 className='text-center pt-28 md:text-4xl font-bold'>Welcome to travelmate  </h1>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div class="bg-[url('https://i.ibb.co/m9dYkGY/scott-carroll-fav-Qn8-Wg-Ryk-unsplash.jpg')] bg-cover min-h-[400px] md:min-h-[650px] rounded-2xl">
                    <h1 className='text-center pt-28 md:text-4xl font-bold'>Welcome to travelmate  </h1>
                </div>

            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;