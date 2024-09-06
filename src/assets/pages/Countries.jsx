import { SlDiamond } from "react-icons/sl";
import { Link } from "react-router-dom";


const Countries = () => {
    return (

        <div className="max-w-7xl mx-auto mt-40">
            <h1 className='text-4xl font-bold text-center'>Top Destinations</h1>
            <div className="divider divider-neutral w-[40%] border-white mx-auto"><SlDiamond className="text-6xl  " /></div>
            <p className="text-center mb-20">Explore some of the world's top destinations that offer unique experiences and unforgettable memories. Start with Paris,<br /> France, where the iconic Eiffel Tower, charming streets, and world-class art museums await</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2">
                <Link to="/card1">

                    <div className="hero  shadow-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/QrjvjQC/manzur-alam-jxz7-Fe1btc-unsplash.jpg)' }} >
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md h-72">
                                <h1 className="mt-28 text-4xl font-bold">Bangladesh</h1>

                            </div>
                        </div>

                    </div>
                </Link>
                <Link className="grid  row-span-2" to="/card2">
                    <div className="hero shadow-2xl " style={{ backgroundImage: 'url(https://i.ibb.co/KVqpHXK/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md h-72">
                                <h1 className="mt-28 text-4xl font-bold">Thailand </h1>

                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/card4">
                    <div className="hero shadow-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/8bW9Fh9/tran-phu-y-PP08-FAft7-I-unsplash.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md h-72">
                                <h1 className="mt-28 text-4xl font-bold">Indonesia</h1>

                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/card5">
                    <div className="hero shadow-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/nzCThJg/roberto-carlos-roman-don-wt3dis-ORDAg-unsplash.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md h-72">
                                <h1 className="mt-28 text-4xl font-bold">Vietnam </h1>

                            </div>
                        </div>
                    </div>
                </Link>
                <Link className="" to="/card6">
                    <div className="hero shadow-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/Kz2ZrJg/george-bakos-Ov-Er7-Bw-Xxxg-unsplash.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md h-72">
                                <h1 className="mt-28 text-4xl font-bold">Cambodia</h1>

                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </div >

    );
};

export default Countries;