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

            <div className="p-6 py-12 dark:bg-violet-600 dark:text-gray-50 bg-[url('https://i.ibb.co.com/swS6RfY/sad-contemplative-person-near-lake.jpg">
                <div className="container mx-auto">
                    <div className="flex  items-center justify-center">

                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Plus free shipping! Use code:</span>
                            <span className="font-bold text-lg">MAMBA</span>
                        </div>

                    </div>
                </div>
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

