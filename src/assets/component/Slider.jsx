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
                <div class="bg-[url('https://i.ibb.co/wWjds2H/3d-render-house-countryside.jpg')] bg-cover min-h-[400px] md:min-h-[650px]">
                    <h1 className='text-center pt-28 md:text-4xl'>Welcome to travelmate  </h1>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div class="bg-[url('https://i.ibb.co/wWjds2H/3d-render-house-countryside.jpg')] bg-cover min-h-[400px] md:min-h-[650px]">
                    <h1 className='text-center pt-28 md:text-4xl'>Welcome to travelmate  </h1>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div class="bg-[url('https://i.ibb.co/wWjds2H/3d-render-house-countryside.jpg')] bg-cover min-h-[400px] md:min-h-[650px]">
                    <h1 className='text-center pt-28 md:text-4xl'>Welcome to travelmate  </h1>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div class="bg-[url('https://i.ibb.co/ZKt1zy1/victor-rutka-4-Fujjkc-I40g-unsplash.jpg')] bg-cover min-h-[400px] md:min-h-[650px]">
                    <h1 className='text-center pt-28 md:text-4xl'>Welcome to travelmate  </h1>
                </div>

            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;