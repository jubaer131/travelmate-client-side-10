import { SlLocationPin } from "react-icons/sl";
import { useLoaderData } from "react-router-dom";


const Card11Details = () => {
    const data = useLoaderData()
    console.log(data)
    const { Photo, cost, country, description, email, location, seasonality, name,
        traveltime, username, visitor, _id } = data

    return (
        <div>
            <div className="card lg:card-side bg-base-100  gap-6 px-8 mt-10 container mx-auto my-8 shadow-2xl shadow-[#005294]">
                <div className="lg:w-6/12 ">
                    <figure><img className="w-full lg:h-[650px] bg-cover py-8 mask mask-squircle bg-no-repeat " src={Photo} alt="Album" /></figure>
                </div>

                <div className=" lg:w-6/12 p-6">
                    <div className="  mx-auto lg:space-y-16 ">
                        <article className="space-y-4  ">
                            <div className="space-y-6">
                                <h1 className="text-3xl font-semibold md:tracking-tight md:text-4xl">{name}</h1>
                                <h2 className="text-[20px] font-medium flex items-center gap-4"><SlLocationPin className="text-[#005294]" />  {location}</h2>
                            </div>

                            <hr className=" border-t border-dashed border-[#005294] " />
                            <p className="text-[20px] font-medium flex items-center gap-4 ">Travel Time :  {traveltime} </p>

                            <p >  <span className="text-[20px] font-medium">  </span></p>

                        </article>
                        <div>
                            <div className="flex flex-wrap items-center justify-start md:gap-10 mb-5">
                                <h2 className="flex items-center gap-4"> <span className="text-[20px] font-medium">  Cost :{cost} </span>  </h2>
                                <h2 className="flex items-center gap-4 text-[20px] font-medium">Seasonality :  {seasonality}</h2>

                            </div>
                            <div className="space-y-5">
                                <hr className=" border-t border-dashed border-[#005294]" />

                                <p className="flex items-center gap-4">  Description : {description.slice(0, 350)}   </p>

                            </div>


                            <div className="mt-6">
                                <h2 className="text-[20px] font-medium flex justify-start items-center gap-4">   Visitor : <div className="badge badge-lg text-[#005294]">{visitor}</div>  </h2>

                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card11Details;