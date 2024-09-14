
import { useEffect, useState } from "react";
import Card44 from '../pages/Card44'
import { Link } from "react-router-dom";



const Card4 = () => {

    const [ban, setban] = useState([])


    useEffect(() => {

        fetch('https://travel-mate-server-kappa.vercel.app/tour')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const info = data.filter(item => item.country === 'Indonesia')
                setban(info)

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>

            <div className="relative  p-6 py- h-48 dark:bg-violet-600 dark:text-gray-50 bg-cover bg-no-repeat bg-[url('https://i.ibb.co.com/thYMK5Z/breadcrumb.jpg')] ">


                <div className="md:w-[450px] mx-auto py-2 lg:py-0">
                    <div className="divider divider-warning  w-20 mx-auto text-white"></div>
                    <p className="text-center md:text-3xl text-white font-Caveat">POPULAR TOURIST SPORT</p>

                </div>
                <div className="absolute md:top-[165px] md:left-[680px] left-24 top-44 max-sm:p-2 flex justify-center items-center gap-3 md:w-[550px] md:h-14 bg-white shadow-xl">
                    <Link to={"/"}>Home <span className="mx-2 font-semibold">/</span></Link>
                    <Link to={"/popularCountry"}>Popular Country <span className="mx-2 font-bold"></span></Link>

                </div>
            </div>
            <div className="max-w-7xl mx-auto md:mt-20 mt-12 max-sm:p-5 md:mb-60">
                <h1 className="text-3xl font-semibold"><span className="text-4xl font-extrabold text-[#1690c0]">|</span > Popular <span className="text-3xl font-semibold text-[#1690c0]">Country</span> </h1>
                <p className="text-[18px] mt-3 mb-8">Here are some popular tourist country you can visit there for more Adventure.</p>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 ">
                {
                    ban.map(data => <Card44 data={data}></Card44>)
                }
            </div>

        </>
    );
};

export default Card4;
