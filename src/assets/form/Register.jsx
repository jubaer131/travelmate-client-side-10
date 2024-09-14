import { Link } from "react-router-dom";
import Navbar from "../shardComponent/Navbar";
import { useContext, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { authContest } from "../firebase/AutherProvider";
import { Helmet } from "react-helmet";



const Register = () => {

    const navigate = useNavigate()
    const { creatregistation, updateProfilePicture } = useContext(authContest)



    const [showPassword, setShowPassword] = useState(false);

    const handleregistation = e => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        if (password.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return
        }


        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter.");
            return
        }


        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter.");
            return
        }


        if (!/\d/.test(password)) {
            toast.error("Password must contain at least one digit.");
            return
        }


        if (!/[^a-zA-Z0-9]/.test(password)) {
            toast.error("Password must contain at least one special character.");
            return
        }




        const name = e.target.name.value;
        const photo = e.target.photo.value;


        creatregistation(email, password)
            .then((result) => {
                // Signed up 
                console.log(result.user)
                toast.success('successfully registation') // Call notify function here
                // e.target.reset()
                // navigate('/login')

                updateProfilePicture(name, photo)
                    .then((result) => {

                        // e.target.reset()
                    })
                    .catch((error) => {
                        console.log(error)
                    })


                // e.target.reset()

            })
            .catch((error) => {
                console.log(error)
            });

    }

    return (
        <div className="max-w-6xl mx-auto md:flex items-center  lg:my-32 my-5 ">
            <Helmet><title>Register</title></Helmet>

            <div className="w-1/2 border-4 border-base-200 max-sm:hidden">
                <img src="https://i.ibb.co.com/4W7BhtN/two-factor-authentication-concept-illustration-114360-5598.jpg" alt="" className="bg-cover bg-center w-full h-full " />
            </div>
            <div className="lg:flex-col lg:w-1/2 bg-base-200  px-4 py-5">
                <div className=" shrink-0 ">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold ">Register now</h1>
                        <p className="text-[16px] font-normal">Inter your information for registation</p>
                    </div>
                    <form onSubmit={handleregistation} className="px-8 w-full  py-[14px]">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" name="photo" placeholder="photo" className="input input-bordered rounded-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered rounded-none" required />
                        </div>



                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="password"
                                className="input input-bordered rounded-none "
                                required

                            />
                            <span className="absolute right-5 bottom-5" onClick={() => setShowPassword(!showPassword)}>

                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>

                        </div>



                        <div className="form-control  w-[80%] mx-auto mt-5">
                            <button className="btn  bg-[#d91f53] text-white hover:bg-white hover:text-[#d91f53] text-xl rounded-none ">Register</button>
                        </div>
                        <ToastContainer />
                    </form>

                    <p className='text-center mt-5'>You have an account please  <Link className='text-[#dd6199]' to="/login"> Login</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Register;
