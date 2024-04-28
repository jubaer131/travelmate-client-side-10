

const FirstFlight = () => {
    return (
        <section className="  dark:bg-gray-100 dark:text-gray-800 mb-8">
            <h1 className="text-4xl font-bold my-3">TravelMate agency</h1>
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://i.ibb.co/Zhr9LBT/american-green-travel-tqebos-EJPt-U-unsplash.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                        <span className="text-xs uppercase dark:text-gray-600"></span>
                        <h2 className="text-4xl font-bold">20% off your first flight</h2>
                        <p className="my-6 dark:text-gray-600 text-xl">For more information <br />Contract us : + 012345678 <br /> www.travelmate@gmail.com</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FirstFlight;