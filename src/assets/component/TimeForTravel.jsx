

const TimeForTravel = () => {
    return (
        <section>


            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-stretch  mx-auto sm:py-12 lg:py-24 lg:flex-row ">
                    <div className="flex items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://i.ibb.co/G5sfjwv/dino-reichmuth-A5r-CN8626-Ck-unsplash.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 w-[150%]" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Time
                            <span className="dark:text-violet-600">For</span>Travel
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Choosing the right time for travel is paramount as it significantly influences the quality, cost, and overall experience of your journey.  <br className="hidden md:inline lg:hidden" /> Firstly, weather conditions greatly impact your travel experience.

                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 ">See more</a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default TimeForTravel;