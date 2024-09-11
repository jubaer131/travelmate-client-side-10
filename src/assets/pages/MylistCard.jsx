import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MylistCard = ({ item, items, setitems }) => {

    const { Photo, cost, country, description, email, location, seasonality, name,
        traveltime, username, visitor, _id } = item

    const handleDelete = (_id) => {

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
        <>

            <tbody>
                {/* row 1 */}
                <tr>

                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                        src={Photo}
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold"> {name}</div>
                                <div className="text-sm opacity-50">{country}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span className="badge badge-ghost badge-sm">{username}</span>
                    </td>

                    <th>
                        <button onClick={() => handleDelete(_id)} className="btn bg-[#005294] text-white">Delete</button>
                    </th>
                    <th>
                        <Link to={`/updatetour/${_id}`}>
                            <button className="btn bg-[#005294] text-white">Update</button>
                        </Link>
                    </th>
                </tr>

            </tbody>


            {/* <div className="container grid gap-6 mx-auto  lg:grid-cols-2 xl:grid-cols-5 mt-5 ">
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50 ">
                    <span className="block mb-2 dark:text-violet-600 text-3xl font-bold ">  {name}</span>
                    <h1 className="text-2xl font-semibold dark:text-gray-900 ">{country}</h1>
                    <p className="my-8">
                        <span className="font-medium dark:text-gray-900">Description :</span>{description}
                    </p>
                    <div className="space-y-4 text-start">
                        <p>Location : {location}</p>
                        <p>Travel time :{traveltime}</p>
                        <p>Average Cost : {cost}</p>
                    </div>
                    <div className="space-y-4 text-start">
                        <h1>User name : {username}</h1>

                        <div className="space-x-5">

                            <Link to={`/updatetour/${_id}`}>
                                <button className="btn bg-teal-500 text-white">Update</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn bg-violet-500 text-white">Delete</button>
                        </div>
                    </div>
                </div>
                <img src={Photo} alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500 md:h-[550px]" />
            </div> */}
        </>

    );
};

export default MylistCard;