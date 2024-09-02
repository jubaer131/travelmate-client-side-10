import { useLoaderData } from "react-router-dom";
import AlltouristSportCard from "../component/AlltouristSportCard";
import { Helmet } from "react-helmet";


const AllTouristSport = () => {
    const tour = useLoaderData()
    console.log(tour)

    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <Helmet>
                <title>All tourist sport</title>
            </Helmet>
            <div className="text-center">
                <details className="dropdown ">
                    <summary className="m-1 btn">Sort by</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Bangladesh</a></li>
                        <li><a>Malaysia</a></li>
                        <li><a> Indonesia</a></li>
                        <li><a>Vietnam</a></li>
                        <li><a>Combodia</a></li>
                        <li><a>Thailand:</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {
                    tour.map(item => <AlltouristSportCard item={item}></AlltouristSportCard>)
                }

            </div>
        </section>
    );
};

export default AllTouristSport;

