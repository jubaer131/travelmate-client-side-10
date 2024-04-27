import { useContext, useEffect, useState } from "react";
import { authContest } from "../firebase/AutherProvider";
import MylistCard from "./MylistCard";


const Mylist = () => {
    const { user } = useContext(authContest)
    console.log(user)
    const [user1, setuser1] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tour/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setuser1(data)
            });
    }, [user])
    console.log(user1)


    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
            {
                user1?.map(item => <MylistCard item={item}></MylistCard>)
            }
        </section>
    );
};

export default Mylist;