import { useLoaderData } from "react-router-dom";


const TouristSportDetailsCard = () => {
    const details = useLoaderData()
    console.log(details)
    const { Photo, cost, country, description, email, location, seasonality, name,
        traveltime, username, visitor, _id } = details
    return (
        <div className="flex flex-col  p-6 md:p-12 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="flex space-x-4">

                <div className="flex flex-col space-y-1">
                    <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{name}</a>

                </div>
            </div>
            <div>
                <img src={Photo} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                <h2 className="mb-1 text-xl font-semibold">{country}</h2>
                <p className="text-sm dark:text-gray-600">{description}</p>
                <p className="text-sm dark:text-gray-600">{traveltime}</p>
                <p className="text-sm dark:text-gray-600">{cost}</p>
            </div>

        </div>
    );
};

export default TouristSportDetailsCard;