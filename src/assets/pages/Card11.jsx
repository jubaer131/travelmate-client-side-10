import { BiSolidStar } from "react-icons/bi";
import { LuStar } from "react-icons/lu";
import { Link } from "react-router-dom";



const Card11 = ({ data }) => {

    const { Photo, cost, country, description, email, location, seasonality, name,
        traveltime, username, visitor, _id } = data
    return (
        <Link to={`/card11/${_id}`}>

            <div className="bg-base-200    md:h-64 shadow-xl">
                <div className="md:hero-content   lg:flex-row items-start justify-start p-6 ">
                    <img
                        src={Photo}
                        className="shadow-2xl md:h-52 bg-cover bg-no-repeat md:w-[20%]" />
                    <div className='md:p-3 max-sm:mt-4 md:w-3/4 '>
                        <div>
                            <div className='flex justify-start gap-3 mb-3'>
                                <h1>
                                    <BiSolidStar className="text-orange-500 font-bold text-xl" />
                                </h1>
                                <h1>
                                    <BiSolidStar className="text-orange-500 font-bold text-xl" />
                                </h1>
                                <h1>
                                    <BiSolidStar className="text-orange-500 font-bold text-xl" />
                                </h1>
                                <h1>
                                    <BiSolidStar className="text-orange-500 font-bold text-xl" />
                                </h1>
                                <h1>
                                    <BiSolidStar className="text-orange-500 font-bold text-xl" />
                                </h1>

                            </div>

                        </div>
                        <h1 className="md:text-2xl font-bold">{name}</h1>
                        <p className="my-2">
                            {country}
                        </p>
                        <p>{description.slice(0, 170)}</p>
                    </div>
                    <div className='md:w-1/4 md:h-full bg-[#fbfbfb] shadow-sm p-6 m-8 text-center '>
                        <p>Start from :</p>
                        <h1 className="md:text-2xl font-bold text-[#d60d45] mb-3">$150</h1>
                        <button className=" bg-[#d60d45] border-0 rounded-none w-full p-2 text-white hover:bg-[#a93052]">Book Now</button>
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default Card11;