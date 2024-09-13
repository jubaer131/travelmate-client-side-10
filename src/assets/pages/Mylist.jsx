import { useContext, useEffect, useState } from "react";
import { authContest } from "../firebase/AutherProvider";
import MylistCard from "./MylistCard";
import { Helmet } from "react-helmet";
import { PuffLoader } from 'react-spinners';

const Mylist = () => {
    const { user, loading } = useContext(authContest)
    console.log(user)
    const [items, setitems] = useState([]);

    useEffect(() => {
        fetch(`https://travel-mate-server-kappa.vercel.app/tour/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setitems(data)
            });
    }, [user, setitems])
    console.log(items)


    if (loading) {
        return <div className="w-full h-[660px] flex items-center justify-center"> <PuffLoader color="orange" size={70}></PuffLoader> </div>
    }

    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-800 container mx-auto min-h-screen">
            <Helmet><title>My list</title></Helmet>

            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Sport Name</th>
                        <th>User Name</th>
                        <th>Delete</th>
                        <th>Update</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    items?.map(item => <MylistCard item={item} items={items} setitems={setitems}></MylistCard>)
                }
            </table>

        </section>
    );
};

export default Mylist;