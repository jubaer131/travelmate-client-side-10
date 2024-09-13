import { BsCalendar2Day } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";


const AlltouristSportCard = ({ item }) => {
    const { Photo, cost, country, description, email, location, seasonality, name,
        traveltime, username, visitor, _id } = item

    return (
        <>
            <Link className="max-sm:mx-4" to={`/details/${_id}`}>
                <div className="lg:max-w-lg relative shadow-md dark:bg-gray-50 dark:text-gray-800 mt-5 lg:h-[570px]">

                    <div className="space-y-4">

                        <div className="space-y-2">
                            <img src={Photo} alt="" className="block object-cover object-center lg:w-full  md:h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2 md:px-5 md:pb-10 px-8 ">
                            <div className="lg:w-48 lg:h-10 bg-[#2195c3] ">
                                <h1 className="md:text-xl px-2 py-2 text-center my-8 text-white font-medium">
                                    Price :  {cost}
                                </h1>
                            </div>
                            <div className=" flex justify-between items-center ">
                                <h3 className="md:text-xl font-semibold dark:text-violet-600 my-3">{name}</h3>
                                <h3 className="md:text-xl flex items-center justify-start gap-2 font-semibold"><SlLocationPin className="text-[16px] text-[#005294] font-medium" /> {country}</h3>

                            </div>

                            <div>
                                <p className="leading-snug dark:text-gray-600 text-[15px]">  {description.slice(0, 180)}</p>
                            </div>


                            <div className="divider divider-start"></div>
                            <div className="flex justify-between items-center gap-8 max-sm:p-3">
                                <p className="leading-snug dark:text-gray-600 text-[15px] flex items-center gap-2 "><BsCalendar2Day className="text-[#005294]" /> {traveltime}</p>
                                <div className="flex justify-center items-center gap-3">
                                    <p className="leading-snug dark:text-gray-600 text-[15px]"><IoIosStar className="text-orange-500 text-xl" /></p>
                                    <p className="leading-snug dark:text-gray-600 text-[15px]"><IoIosStar className="text-orange-500 text-xl" /></p>
                                    <p className="leading-snug dark:text-gray-600 text-[15px]"><IoIosStar className="text-orange-500 text-xl" /></p>
                                    <p className="leading-snug dark:text-gray-600 text-[15px]"><IoIosStar className="text-orange-500 text-xl" /></p>
                                    <p className="leading-snug dark:text-gray-600 text-[15px]"><IoIosStar className="text-orange-500 text-xl" /></p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div >

            </Link>

        </>
    );
};

export default AlltouristSportCard;