import { useLoaderData } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoIosPricetag } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { Helmet } from "react-helmet";

const AlltouristsportDetails = () => {

    const details = useLoaderData()
    const { Photo, cost, country, description, location, seasonality, name,
        traveltime, visitor, } = details
    console.log(details)
    return (
        <div>
            <Helmet><title>All tourist sport details</title></Helmet>
            <div className="card lg:card-side bg-base-100 shadow-xl gap-6 px-8 mt-10 container mx-auto">
                <div className="lg:w-6/12 ">
                    <figure><img className="w-full md:h-[650px] bg-cover bg-no-repeat rounded-3xl" src={Photo} alt="Album" /></figure>
                </div>

                <div className=" lg:w-6/12 p-6">
                    <div className="  mx-auto space-y-16 ">
                        <article className="space-y-4  ">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl"></h1>
                                <h2 className="text-[20px] font-medium">Tourist sport name : {name}</h2>
                            </div>

                            <hr className=" border-t border-dashed border-gray-400" />
                            <p > <span className="text-[20px] font-medium"> Country : </span> {country}</p>
                            {/* <hr className=" border-b border-dashed border-gray-400" /> */}
                            <p >  <span className="text-[20px] font-medium"> Description :  </span> {description}</p>

                        </article>
                        <div>
                            <div className="flex flex-wrap items-center justify-start md:gap-24 mb-5">
                                <h2 className="flex items-center gap-4">  <FaDollarSign></FaDollarSign> <span className="text-[20px] font-medium">Total cost :  </span>  {cost}</h2>
                                <h2 className="flex items-center gap-4"> <IoIosPricetag></IoIosPricetag> <span className="text-[20px] font-medium"> Travel time  :  </span>  {traveltime}</h2>

                            </div>
                            <div className="space-y-5 ">
                                <hr className=" border-t border-dashed border-gray-400" />

                                <p className="flex  items-center gap-4">   <IoLocationSharp className="text-green-500"></IoLocationSharp> <span className="text-[20px] font-medium"> Location :   </span> {location}</p>
                                <p className="flex  items-center gap-4"><SlCalender /> <span className="text-[20px] font-medium"> seasonality :   </span> {seasonality}</p>
                                <p className=""> <span> <span></span> <span className="text-[20px] font-medium"> Total visitore par year : </span></span> <span> {visitor}</span> </p>


                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AlltouristsportDetails;