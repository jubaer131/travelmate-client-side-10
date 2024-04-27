import { useLoaderData } from "react-router-dom";
import AlltouristSportCard from "../component/AlltouristSportCard";


const AllTouristSport = () => {
    const tour = useLoaderData()
    console.log(tour)

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {
                    tour.map(item => <AlltouristSportCard item={item}></AlltouristSportCard>)
                }

            </div>
        </section>
    );
};

export default AllTouristSport;