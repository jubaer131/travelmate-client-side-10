import { useEffect, useState } from "react";
import TouristSport2 from "./TouristSport2";


const TouristSport = () => {

    const [item, setitem] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/sport')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setitem(data)
            })
    }, [])

    return (
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {
                item.map(data => <TouristSport2 data={data}></TouristSport2>)
            }

        </section>
    );
};

export default TouristSport;