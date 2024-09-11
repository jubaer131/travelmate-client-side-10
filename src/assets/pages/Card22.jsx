import { BiSolidStar } from "react-icons/bi";
import { Link } from "react-router-dom";





const Card22 = ({ data }) => {

    const { Photo, cost, country, description, email, location, seasonality, name,
        traveltime, username, visitor, _id } = data
    return (
        // <div>
        //     <div className=" p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 ">
        //         <div className="flex justify-between pb-4 border-bottom">
        //             <div className="flex items-center">
        //                 <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800"></a>
        //             </div>
        //             <a rel="noopener noreferrer" href="#"></a>
        //         </div>
        //         <div className="space-y-4">
        //             <div className="space-y-2">
        //                 <img src={Photo} alt="" className="block object-cover object-center w-full rounded-md md:h-[500px] dark:bg-gray-500" />
        //                 <div className="flex items-center text-xs">
        //                     <span>{country}</span>
        //                 </div>
        //             </div>
        //             <div className="space-y-2">
        //                 <a rel="noopener noreferrer" href="#" className="block">
        //                     <h3 className="text-xl font-semibold dark:text-violet-600">{name}</h3>
        //                 </a>
        //                 <p className="leading-snug dark:text-gray-600">{description.slice(0, 180)}</p>

        //             </div>
        //             <Link to={`/card22/${_id}`}><button className="btn btn-primary mt-5">View details</button></Link>
        //         </div>
        //     </div>
        // </div>
        <Link to={`/card22/${_id}`}>

            <div className="bg-base-200    md:h-64 shadow-xl">
                <div className="md:hero-content   lg:flex-row items-start justify-start p-6 ">
                    <img
                        src={Photo}
                        className="shadow-2xl md:h-52 md:w-[25%]" />
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

export default Card22;