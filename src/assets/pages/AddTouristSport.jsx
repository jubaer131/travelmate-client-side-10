import { useContext } from 'react';
import Swal from 'sweetalert2'
import { authContest } from '../firebase/AutherProvider';
import { Helmet } from 'react-helmet';
import { Parallax } from 'react-parallax';

const AddTouristSport = () => {



    const { user } = useContext(authContest)
    console.log(user)

    const handleaddCoffee = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const traveltime = form.traveltime.value;
        const visitor = form.visitor.value;
        const email = user.email;
        const username = user.displayName;
        const Photo = form.Photo.value;
        const newtour = { name, country, location, description, cost, seasonality, traveltime, email, username, visitor, Photo }
        console.log(newtour)

        fetch('https://travel-mate-server-kappa.vercel.app/tour', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newtour),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Card added succeesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })

                }
            })
    }
    return (


        <Parallax blur={0} bgImage="https://i.ibb.co.com/F6PQqhM/mother-son-beach-outdoors-sea-blue-sky-1249-560.jpg" bgImageAlt="the cat" strength={500}>
            <div>
                <Helmet>
                    <title>Add tourist sport</title>
                </Helmet>
                <h1 className="text-white md:text-4xl font-semibold text-center mt-8 font-Caveat">Add tourist sport</h1>
                <div className="space-y-3 md:w-full mx-auto text-center ">
                    <p className="md:text-xl text-white max-sm:p-4">This feature allows you to contribute to our growing database of tourist destinations!</p>
                </div>
                <section className="shadow-xl md:max-w-5xl px-4 mx-auto pt-5 md:mt-5 md:mb-10 max-sm:mx-5  bg-gray-100  ">

                    <form onSubmit={handleaddCoffee} className=" flex flex-col space-y-12">
                        <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label className=" w-full">
                                        <div className="label">
                                            <span className="label-text"> Tourist sport Name</span>

                                        </div>
                                        <input type="text" name="name" placeholder="Tourist sport Name" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text"> Country </span>

                                        </div>
                                        <input type="text" name="country" placeholder=" Country Name  " className="border-b-2 rounded-lg border-b-[#c6144a] input input-bordered w-full " />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Location </span>

                                        </div>
                                        <input type="text" name="location" placeholder=" Location" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text">Short description </span>

                                        </div>
                                        <input type="text" name="description" placeholder="Short description" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text">Average Cost </span>

                                        </div>
                                        <input type="text" name="cost" placeholder=" Average cost" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text"> Seasonality </span>

                                        </div>
                                        <input type="text" name="seasonality" placeholder=" Seasonality" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text"> Travel Time </span>

                                        </div>
                                        <input type="text" name="traveltime" placeholder="  Travel time " className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg " />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text">Total visitor par yer </span>

                                        </div>
                                        <input type="text" name="visitor" placeholder="Total visitor paryer" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>

                                <div className="col-span-full">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text"> Photo Url </span>

                                        </div>
                                        <input type="url" name="Photo" placeholder="  Photo url" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>
                                <div className="col-span-full">
                                    <input type="submit" value="Send" className="btn border-b-2 border-b-[#c6144a] btn-block bg-[#c6144a]  text-white rounded-lg hover:bg-white hover:text-[#c6144a] border-0" />
                                </div>



                            </div>
                        </fieldset>

                    </form>
                </section>

            </div>
        </Parallax>
        // <div>
        //     <Helmet><title>Add tourist sport</title></Helmet>
        //     <h1 className="text-violet-500 text-4xl font-semibold text-center mt-8">Add tourist sport</h1>
        //     <div className="space-y-3 max-w-96 mx-auto text-center ">
        //         <p className="font-medium text-xl">Welcome to the Travelmate agency </p>
        //         <p className="text-xm">This feature allows you to contribute to our growing database of tourist destinations!</p>
        //     </div>
        //     <section className="p-8 dark:bg-gray-100 dark:text-gray-900 shadow-xl flex items-center">
        //         {/* <div className='w-1/2'>
        //             <img className='' src="https://i.ibb.co.com/swS6RfY/sad-contemplative-person-near-lake.jpg" alt="" />
        //         </div> */}
        //         <form onSubmit={handleaddCoffee} className="container flex flex-col w-1/2 mx-auto space-y-12">
        //             <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

        //                 <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label className=" w-full">
        //                             <div className="label">
        //                                 <span className="label-text"> Tourist sport Name</span>

        //                             </div>
        //                             <input type="text" name="name" placeholder="Tourist sport Name" className="input input-bordered w-full " />

        //                         </label>
        //                     </div>
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label className="form-control w-full ">
        //                             <div className="label">
        //                                 <span className="label-text">  Country Name</span>

        //                             </div>
        //                             <input type="text" name="country" placeholder=" Country Name  " className="input input-bordered w-full " />

        //                         </label>
        //                     </div>
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label className="form-control w-full">
        //                             <div className="label">
        //                                 <span className="label-text"> Location</span>

        //                             </div>
        //                             <input type="text" name="location" placeholder=" Location" className="input input-bordered w-full " />

        //                         </label>
        //                     </div>
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label className="form-control w-full ">
        //                             <div className="label">
        //                                 <span className="label-text">Short description </span>

        //                             </div>
        //                             <input type="text" name="description" placeholder="Short description  " className="input input-bordered w-full " />

        //                         </label>
        //                     </div>
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label className="form-control w-full ">
        //                             <div className="label">
        //                                 <span className="label-text">Average cost </span>

        //                             </div>
        //                             <input type="text" name="cost" placeholder=" Average cost" className="input input-bordered w-full " />

        //                         </label>
        //                     </div>
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label className="form-control w-full ">
        //                             <div className="label">
        //                                 <span className="label-text"> Seasonality </span>

        //                             </div>
        //                             <input type="text" name="seasonality" placeholder=" Seasonality" className="input input-bordered w-full " />

        //                         </label>
        //                     </div>
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label className="form-control w-full ">
        //                             <div className="label">
        //                                 <span className="label-text"> Travel time </span>

        //                             </div>
        //                             <input type="text" name="traveltime" placeholder="  Travel time " className="input input-bordered w-full " />

        //                         </label>
        //                     </div>
        //                     <div className="col-span-full sm:col-span-3">
        //                         <label className="form-control w-full ">
        //                             <div className="label">
        //                                 <span className="label-text">Total visitor paryer </span>

        //                             </div>
        //                             <input type="text" name="visitor" placeholder="Total visitor paryer" className="input input-bordered w-full " />

        //                         </label>
        //                     </div>

        //                     <div className="col-span-full">
        //                         <label className="form-control w-full ">
        //                             <div className="label">
        //                                 <span className="label-text"> Photo url </span>

        //                             </div>
        //                             <input type="url" name="Photo" placeholder="  Photo url" className="input input-bordered w-full " />

        //                         </label>
        //                     </div>
        //                     <div className="col-span-full">
        //                         <input type="submit" value="add coffee" className="btn btn-block bg-violet-500 text-white" />
        //                     </div>



        //                 </div>
        //             </fieldset>

        //         </form>
        //     </section>

        // </div>
    );
};

export default AddTouristSport;