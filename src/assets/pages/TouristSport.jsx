import { useEffect, useState } from "react";
import TouristSport2 from "./TouristSport2";


const TouristSport = () => {

    const [item, setitem] = useState([])

    useEffect(() => {
        fetch('https://travel-mate-server-kappa.vercel.app/sport')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setitem(data)
            })
    }, [])

    return (
        <section >

            <h1 className="text-center text-4xl font-bold md:mt-20 mb-4">Popular tourist sport</h1>
            <p className="text-center text-xl font-medium">Popular tourist spots vary greatly depending on the region and the interests of travelers.Find your destinations</p>
            <div className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {
                    item.map(data => <TouristSport2 data={data}></TouristSport2>)
                }
            </div>




        </section>
    );
};

export default TouristSport;