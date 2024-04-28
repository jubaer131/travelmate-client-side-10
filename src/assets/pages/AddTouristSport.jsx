import { useContext } from 'react';
import Swal from 'sweetalert2'
import { authContest } from '../firebase/AutherProvider';

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

        fetch('http://localhost:5000/tour', {
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
                        text: 'user added succeesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })

                }
            })
    }
    return (
        <div>
            <h1 className="text-violet-500 text-4xl font-semibold text-center mt-8">Add tourist sport</h1>
            <div className="space-y-3 max-w-96 mx-auto text-center ">
                <p className="font-medium text-xl">Welcome to the Travelmate agency </p>
                <p className="text-xm">This feature allows you to contribute to our growing database of tourist destinations!</p>
            </div>
            <section className="p-8 dark:bg-gray-100 dark:text-gray-900 shadow-xl">
                <form onSubmit={handleaddCoffee} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">

                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label className=" w-full">
                                    <div className="label">
                                        <span className="label-text"> Tourist sport Name</span>

                                    </div>
                                    <input type="text" name="name" placeholder="Tourist sport Name" className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">  Country Name</span>

                                    </div>
                                    <input type="text" name="country" placeholder=" Country Name  " className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text"> Location</span>

                                    </div>
                                    <input type="text" name="location" placeholder=" Location" className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Short description </span>

                                    </div>
                                    <input type="text" name="description" placeholder="Short description  " className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Average cost </span>

                                    </div>
                                    <input type="text" name="cost" placeholder=" Average cost" className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text"> Seasonality </span>

                                    </div>
                                    <input type="text" name="seasonality" placeholder=" Seasonality" className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text"> Travel time </span>

                                    </div>
                                    <input type="text" name="traveltime" placeholder="  Travel time " className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text">Total visitor paryer </span>

                                    </div>
                                    <input type="text" name="visitor" placeholder="Total visitor paryer" className="input input-bordered w-full " />

                                </label>
                            </div>

                            <div className="col-span-full">
                                <label className="form-control w-full ">
                                    <div className="label">
                                        <span className="label-text"> Photo url </span>

                                    </div>
                                    <input type="url" name="Photo" placeholder="  Photo url" className="input input-bordered w-full " />

                                </label>
                            </div>
                            <div className="col-span-full">
                                <input type="submit" value="add coffee" className="btn btn-block bg-violet-500 text-white" />
                            </div>



                        </div>
                    </fieldset>

                </form>
            </section>

        </div>
    );
};

export default AddTouristSport;