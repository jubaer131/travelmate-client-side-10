import { Link } from "react-router-dom";


const Countries = () => {
    return (

        <div className="">
            <h1 className="text-center text-4xl font-bold mt-10 mb-2">Countries</h1>
            <p className="text-2xl text-center font-normal mb-10">Now is the moment to choose your preferred travel destination.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
                <Link to="/card1">

                    <div className="hero  shadow-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/QrjvjQC/manzur-alam-jxz7-Fe1btc-unsplash.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md h-72">
                                <h1 className="mt-28 text-4xl font-bold">Bangladesh</h1>

                            </div>
                        </div>

                    </div>
                </Link>
                <Link to="/card2">
                    <div className="hero shadow-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/KVqpHXK/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md h-72">
                                <h1 className="mt-28 text-4xl font-bold">Thailand </h1>

                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/card3">
                    <div className="hero shadow-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/Y8pmfjS/meric-dagli-Hx-Jv-FZGf-SHM-unsplash.jpg)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md h-72">
                                <h1 className="mt-28 text-4xl font-bold"> Malaysia</h1>

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
                <Link to="/card6">
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