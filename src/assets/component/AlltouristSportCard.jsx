import { Link } from "react-router-dom";


const AlltouristSportCard = ({ item }) => {
    const { Photo, cost, country, description, email, location, seasonality, name,
        traveltime, username, visitor, _id } = item

    return (
        <div>

            <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-800">Photography</a>
                    </div>
                    <a rel="noopener noreferrer" href="#">See All</a>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={Photo} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span> </span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600 mb-6">{name}</h3>
                        </a>
                        <div className="flex gap-8">
                            <p className="leading-snug dark:text-gray-600"> Total Cost : {cost}</p>
                            <p className="leading-snug dark:text-gray-600">Total visitor : {visitor}</p>
                        </div>
                        <div className="flex gap-8">
                            <p className="leading-snug dark:text-gray-600">Travel time : {traveltime}</p>
                            <p className="leading-snug dark:text-gray-600">Seasonality : {seasonality}</p>
                        </div>
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-primary">View details</button>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AlltouristSportCard;