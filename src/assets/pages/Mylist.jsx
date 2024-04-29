import { useContext, useEffect, useState } from "react";
import { authContest } from "../firebase/AutherProvider";
import MylistCard from "./MylistCard";


const Mylist = () => {
    const { user } = useContext(authContest)
    console.log(user)
    const [items, setitems] = useState([]);

    useEffect(() => {
        fetch(`https://travel-mate-server-kappa.vercel.app/tour/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setitems(data)
            });
    }, [user])
    console.log(items)


    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
            {
                items?.map(item => <MylistCard item={item} items={items} setitems={setitems}></MylistCard>)
            }
        </section>
    );
};

export default Mylist;