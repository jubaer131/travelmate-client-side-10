import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
            <Helmet>
                <title>Error page</title>
            </Helmet>

            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-[#005294]">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to='/'><button className="btn rounded-none text-white bg-[#db2f73] hover:text-[#b61c59] hover:bg-white">Back to home</button></Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;