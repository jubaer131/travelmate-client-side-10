
import { BiSolidStar } from 'react-icons/bi';
import { LuStar } from 'react-icons/lu';
import { Link } from 'react-router-dom';




const TouristSport2 = ({ data }) => {


    console.log(data)
    const { Photo, cost, country, description, email, location, seasonality, name,
        traveltime, username, visitor, _id } = data


    return (
        <>
            {/* <div className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">

                <img src={Photo} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold tracking-wide"> {name}</h2>
                        <p className="dark:text-gray-800 pb-2"> {country}</p>
                        <Link to={`/touristsport/${_id}`}>
                            <button type="button" className="flex items-start justify-start w-28 p-3 font-semibold tracking-wide rounded-md  text-white btn bg-cyan-600">View details</button>
                        </Link>

                    </div>

                </div>
            </div> */}

            <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-800 cursor-zoom-out">

                <img src={Photo} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                <div className="p-3 flex justify-between items-center bg-red-500">
                    <div className='flex justify-center items-center gap-3'>
                        <h1><BiSolidStar /></h1>
                        <h1><BiSolidStar /></h1>
                        <h1><BiSolidStar /></h1>
                        <h1><LuStar /></h1>
                        <h1><LuStar /></h1>
                    </div>
                    <div>
                        <h1 className='text-white'> {cost} / PER </h1>
                    </div>
                </div>
                <div className='flex justify-between items-center my-5 px-4'>
                    <h1 className='font-bold text-xl'>{name}</h1>
                    <h1 className='text-blue-300'>{traveltime}</h1>
                </div>
                <div className='px-4'>
                    <h1>{description.slice(0, 90)}</h1>
                </div>
                <div className="flex justify-center mb-10">
                    <button className='btn text-center bg-red-500 text-white my-8 w-[50%] rounded-none'>View more details</button>
                </div>

            </div>


        </>




    );
};

export default TouristSport2;