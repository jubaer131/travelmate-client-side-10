

import { useContext } from 'react';
import Swal from 'sweetalert2'
import { authContest } from '../firebase/AutherProvider';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';



const UpdateTourCard = () => {
    const { user } = useContext(authContest)
    const updatecard = useLoaderData()
    console.log(updatecard)
    const { name, country, location, description, cost, seasonality, traveltime, email, username, visitor, Photo, _id } = updatecard

    const handleaddsport = event => {
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
        const newsport = { name, country, location, description, cost, seasonality, traveltime, email, username, visitor, Photo, }
        console.log(newsport)

        fetch(`https://travel-mate-server-kappa.vercel.app/updatetour/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newsport)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Card Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <div>
                <Helmet>
                    <title>Update tour card</title>
                </Helmet>

                <div className="space-y-3 md:w-full mx-auto text-center max-sm:p-5  md:my-8">
                    <h1 className=" md:text-3xl font-semibold text-center text-black  font-Caveat">Update tour card</h1>
                    <p className="md:text-xl text-black max-sm:p-4">This feature allows you to update tour card Which you have added before</p>
                </div>
                <section className="shadow-xl md:max-w-5xl px-4 mx-auto pt-5 md:mt-5 md:mb-10 max-sm:mx-5  bg-gray-100  ">

                    <form onSubmit={handleaddsport} className=" flex flex-col space-y-12">
                        <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label className=" w-full">
                                        <div className="label">
                                            <span className="label-text"> Tourist sport Name</span>

                                        </div>
                                        <input type="text" name="name" defaultValue={name} placeholder="Tourist sport Name" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text"> Country </span>

                                        </div>
                                        <input type="text" name="country" defaultValue={country} placeholder=" Country Name  " className="border-b-2 rounded-lg border-b-[#c6144a] input input-bordered w-full " />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text">Location </span>

                                        </div>
                                        <input type="text" name="location" defaultValue={location} placeholder=" Location" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text">Short description </span>

                                        </div>
                                        <input type="text" name="description" defaultValue={description} placeholder="Short description" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text">Average Cost </span>

                                        </div>
                                        <input type="text" name="cost" defaultValue={cost} placeholder=" Average cost" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text"> Seasonality </span>

                                        </div>
                                        <input type="text" name="seasonality" defaultValue={seasonality} placeholder=" Seasonality" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text"> Travel Time </span>

                                        </div>
                                        <input type="text" name="traveltime" defaultValue={traveltime} placeholder="  Travel time " className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg " />

                                    </label>
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text">Total visitor par yer </span>

                                        </div>
                                        <input type="text" name="visitor" defaultValue={visitor} placeholder="Total visitor paryer" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>

                                <div className="col-span-full">
                                    <label className="form-control w-full ">
                                        <div className="label">
                                            <span className="label-text"> Photo Url </span>

                                        </div>
                                        <input type="url" name="Photo" defaultValue={Photo} placeholder="  Photo url" className="border-b-2 border-b-[#c6144a] input input-bordered w-full rounded-lg" />

                                    </label>
                                </div>
                                <div className="col-span-full">
                                    <input type="submit" value="send" className="btn border-b-2 border-b-[#c6144a] btn-block bg-[#c6144a]  text-white rounded-lg hover:bg-white hover:text-[#c6144a] border-0" />
                                </div>



                            </div>
                        </fieldset>

                    </form>
                </section>

            </div>

        </div>
    );
};

export default UpdateTourCard;