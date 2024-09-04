
import { BiSolidStar } from 'react-icons/bi';
import { LuStar } from 'react-icons/lu';
import { Link } from 'react-router-dom';




const TouristSport2 = ({ data }) => {


    console.log(data)
    const { Photo, cost, country, description, email, location, seasonality, name,
        traveltime, username, visitor, _id } = data


    return (
        <>


            <div className="rounded-md shadow-2xl sm:w-96 dark:bg-gray-50 dark:text-gray-800  hover:text-neutral-800
    transition
    cursor-pointer">


                <img src={Photo} alt="" className="object-cover object-center transform transition-transform duration-300 hover:scale-105 w-full h-72 dark:bg-gray-500" />
                <div className="p-3 flex justify-center items-center gap-16 bg-gradient-to-r from-[#bc184d] to-[#a82877]">
                    <div className='flex justify-center items-center gap-3'>
                        <h1><BiSolidStar className='text-orange-500 font-bold text-xl' /></h1>
                        <h1><BiSolidStar className='text-orange-500 font-bold text-xl' /></h1>
                        <h1><BiSolidStar className='text-orange-500 font-bold text-xl' /></h1>
                        <h1><LuStar className='text-orange-500 font-bold text-xl' /></h1>
                        <h1><LuStar className='text-orange-500 font-bold text-xl' /></h1>
                    </div>
                    <div>
                        <h1 className='text-white'> {cost} / PER </h1>
                    </div>
                </div>
                <div className='px-8'>
                    <div className='flex justify-between items-center my-5 '>
                        <h1 className='font-bold text-xl'>{name}</h1>
                        <h1 className='text-blue-300'>{traveltime}</h1>
                    </div>
                    <div className=''>
                        <h1>{description.slice(0, 80)}</h1>
                    </div>
                    <div className="flex justify-center mb-10">
                        <button className='btn text-center bg-[#cd1249]  p-4 text-white hover:bg-white hover:text-[#cd1249] my-8 w-[60%] rounded-none text-[15px]'>View more details</button>
                    </div>
                </div>

            </div>


        </>




    );
};

export default TouristSport2;