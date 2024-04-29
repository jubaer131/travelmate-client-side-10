

import { useContext } from 'react';
import Swal from 'sweetalert2'
import { authContest } from '../firebase/AutherProvider';
import { useLoaderData } from 'react-router-dom';



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
            <h1 className="text-green-500 text-3xl text-center">Update the Card</h1>

            <section className="p-10 dark:bg-gray-100 dark:text-gray-900 shadow-xl">
                <form onSubmit={handleaddsport} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className=" w-full">
                                    <div className="label">
                                        <span className="label-text"> Tourist sport Name</span>

                                    </div>
                                    <input type="text" name="name" placeholder="Tourist sport Name" defaultValue={name} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">  Country Name</span>

                                    </div>
                                    <input type="text" name="country" placeholder=" Country Name" defaultValue={country} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text"> Location</span>

                                    </div>
                                    <input type="text" name="location" placeholder=" Location" defaultValue={location} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Short description </span>

                                    </div>
                                    <input type="text" name="description" placeholder="Short description" defaultValue={description} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Average cost </span>

                                    </div>
                                    <input type="text" name="cost" placeholder=" Average cost" defaultValue={cost} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text"> Seasonality </span>

                                    </div>
                                    <input type="text" name="seasonality" placeholder=" Seasonality" defaultValue={seasonality} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text"> Travel time </span>

                                    </div>
                                    <input type="text" name="traveltime" placeholder="  Travel time" defaultValue={traveltime} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Total visitor paryer </span>

                                    </div>
                                    <input type="text" name="visitor" placeholder="Total visitor paryer" defaultValue={visitor} className="input input-bordered w-full " />

                                </label>
                            </div>

                            <div className="col-span-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text"> Photo url </span>

                                    </div>
                                    <input type="url" name="Photo" placeholder="  Photo url" defaultValue={Photo} className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full">
                                <input type="submit" value="add coffee" className="btn btn-block bg-green-500" />
                            </div>



                        </div>
                    </fieldset>

                </form>
            </section>

        </div>
    );
};

export default UpdateTourCard;