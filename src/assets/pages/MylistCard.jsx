

const MylistCard = ({ item }) => {
    const { Photo, cost, country, description, email, location, seasonality, name,
        traveltime, username, visitor, _id } = item
    return (
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                <span className="block mb-2 dark:text-violet-600">Tourist sport name : {name}</span>
                <h1 className="text-5xl font-extrabold dark:text-gray-900">Country name :{country}</h1>
                <p className="my-8">
                    <span className="font-medium dark:text-gray-900">Description :</span>{description}
                </p>
                <div>
                    <p>Location : {location}</p>
                    <p>Travel time :{traveltime}</p>
                    <p>Average Cost : {cost}</p>
                </div>
                <div>
                    <h1>User name : {username}</h1>
                    <h1>email : {email}</h1>
                </div>
            </div>
            <img src={Photo} alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
        </div>
    );
};

export default MylistCard;