
import { Link } from "react-router-dom";



const Card22 = ({ data }) => {

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
                        <p className="leading-snug dark:text-gray-600">{description.slice(0, 180)}</p>

                    </div>
                    <Link to={`/card22/${_id}`}><button className="btn btn-primary mt-5">View details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card22;