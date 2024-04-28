import { Link } from "react-router-dom";


const TouristSport2 = ({ data }) => {

    console.log(data)
    const { Photo, cost, country, description, email, location, seasonality, name,
        traveltime, username, visitor, _id } = data
    return (
        <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">

            <img src={Photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide"> {name}</h2>
                    <p className="dark:text-gray-800 pb-2"> {country}</p>
                    <Link to={`/touristsport/${_id}`}>
                        <button type="button" className="flex items-start justify-start w-28 p-3 font-semibold tracking-wide rounded-md  text-white btn bg-cyan-600">View details</button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default TouristSport2;