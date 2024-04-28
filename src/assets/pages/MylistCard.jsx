import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MylistCard = ({ item, items, setitems }) => {
    const { Photo, cost, country, description, email, location, seasonality, name,
        traveltime, username, visitor, _id } = item

    const handleDelete = _id => {

        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/tour/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Card has been deleted.',
                                'success'
                            )
                            const remaining = items.filter(card => card._id !== _id);
                            setitems(remaining);
                        }
                    })

            }
        })
    }


    return (
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5 mt-5">
            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
                <span className="block mb-2 dark:text-violet-600 text-3xl font-bold">  {name}</span>
                <h1 className="text-2xl font-semibold dark:text-gray-900">{country}</h1>
                <p className="my-8">
                    <span className="font-medium dark:text-gray-900">Description :</span>{description}
                </p>
                <div className="space-y-4">
                    <p>Location : {location}</p>
                    <p>Travel time :{traveltime}</p>
                    <p>Average Cost : {cost}</p>
                </div>
                <div className="space-y-4">
                    <h1>User name : {username}</h1>
                    <h1>Email : {email}</h1>
                    <div className="space-x-5">

                        <Link to={`/updatetour/${_id}`}>
                            <button className="btn bg-teal-400">Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-violet-500 text-white">Delete</button>
                    </div>
                </div>
            </div>
            <img src={Photo} alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500 md:h-[550px]" />
        </div>
    );
};

export default MylistCard;