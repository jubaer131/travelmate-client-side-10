import { useLoaderData } from "react-router-dom";


const Card22Details = () => {
    const data = useLoaderData()
    console.log(data)
    const { Photo, cost, country, description, email, location, seasonality, name,
        traveltime, username, visitor, _id } = data

    return (
        <div>
            <div className=" p-4 shadow-md dark:bg-gray-50 dark:text-gray-800 ">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800"></a>
                    </div>
                    <a rel="noopener noreferrer" href="#"></a>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={Photo} alt="" className="block object-cover object-center w-full rounded-md md:h-[500px] dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>{country}</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">{name}</h3>
                        </a>
                        <p className="leading-snug dark:text-gray-600"> {description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 pt-5">
                            <div>
                                <p>Location :{location}</p>
                                <p>Traveltime : {traveltime}</p>
                                <p>seasonality : {seasonality}</p>
                            </div>
                            <div>
                                <p> Cost :{cost}</p>
                                <p> Visitors :{visitor}</p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card22Details;