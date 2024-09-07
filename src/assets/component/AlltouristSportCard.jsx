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
            <Link to={`/details/${_id}`}>
                <div className="max-w-lg relative shadow-md dark:bg-gray-50 dark:text-gray-800 mt-5">

                    <div className="space-y-4">

                        <div className="space-y-2">
                            <img src={Photo} alt="" className="block object-cover object-center w-full  h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2 px-5 pb-10">
                            <div className="w-48 h-10 bg-[#2195c3] ">
                                <h1 className="text-xl px-2 py-2 text-center my-8 text-white font-medium">
                                    price :  {cost}
                                </h1>
                            </div>
                            <div className=" flex justify-between items-center ">
                                <h3 className="text-xl font-semibold dark:text-violet-600 my-3">{name}</h3>
                                <h3 className="text-xl flex items-center justify-start gap-2 font-semibold"><SlLocationPin className="text-[16px] text-green-500 font-medium" /> {country}</h3>

                            </div>

                            <div>
                                <p className="leading-snug dark:text-gray-600 text-[15px]">  {description.slice(0, 180)}</p>
                            </div>


                            <div className="divider divider-start"></div>
                            <div className="flex justify-between gap-8">
                                <p className="leading-snug dark:text-gray-600 text-[15px] flex items-center gap-2"><BsCalendar2Day /> {traveltime}</p>
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