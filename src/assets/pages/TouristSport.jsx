

import { useEffect, useState } from "react";
import TouristSport2 from "./TouristSport2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import Swiper autoplay styles

import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import { SlDiamond } from "react-icons/sl";

const TouristSport = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('https://travel-mate-server-kappa.vercel.app/sport')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
            });
    }, []);

    return (
        <section className="mt-52 max-w-7xl mx-auto ">
            <h1 className="text-center text-4xl font-bold  mb-4 ">Popular Packages</h1>
            <div className="divider divider-neutral w-[40%] mx-auto"><SlDiamond className="text-6xl" /></div>
            <p className="text-center text-xl font-medium mt-8 mb-12">
                Explore our popular packages, blending adventure, relaxation, and culture. With comfortable stays, guided tours,<br /> and exclusive deals, each package is crafted for a memorable experience. Whether a romantic escape <br /> or a family trip, there's something for everyone
            </p>

            {/* Swiper Slider for Tourist Spots */}
            <Swiper
                slidesPerView={3} // Show 3 cards at a time
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
                {/* Map over the fetched data to create Swiper slides */}
                {item.map((data) => (
                    <SwiperSlide key={data.id}>
                        {/* Pass data to TouristSport2 component */}
                        <TouristSport2 data={data} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TouristSport;
