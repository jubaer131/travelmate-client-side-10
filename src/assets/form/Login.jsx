import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { authContest } from "../firebase/AutherProvider";
import { Helmet } from "react-helmet";
import { BiLogInCircle } from "react-icons/bi";
import { RiEyeCloseFill } from "react-icons/ri";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { creatUser, googleSignin, githubSignin } = useContext(authContest)
    console.log(githubSignin)

    const navigate = useNavigate();

    const handlelogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        creatUser(email, password)
            .then((result) => {
                // Signed in 
                console.log(result.user);
                e.target.reset()
                navigate("/");

            })
            .catch((error) => {
                console.log(error);
                toast.error("Invalid email or password");

            });
    }
    const handlegoogle = (e) => {
        e.preventDefault();
        googleSignin()
            .then((result) => {
                console.log(result.user)

                navigate("/");
            }).catch((error) => {
                console.log(error)
            });

    }

    const handlegithub = e => {
        e.preventDefault();
        githubSignin()
            .then((result) => {
                console.log(result.user)

                navigate("/");
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className="max-w-5xl mx-auto  ">
            <Helmet><title>Login </title></Helmet>


            <div className="lg:flex items-center lg:my-32 my-5">
                <div className="w-1/2 border-4 border-base-200 max-sm:hidden">
                    <img src="https://i.ibb.co.com/8xXKSnk/mobile-login-concept-illustration-114360-83.jpg" alt="" className="bg-cover bg-center w-full h-full" />
                </div>
                <div className=" flex-col lg:w-1/2 bg-base-200  px-8 py-4">

                    <div className=" shrink-0      ">
                        <div className="space-y-2 text-center mb-3">
                            <h1 className="text-3xl font-bold">Login </h1>
                            <p className="text-[16px] font-normal">Inter your information to login</p>
                        </div>
                        <form onSubmit={handlelogin} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="jubayerahmad131@gmail.com" className="input input-bordered rounded-none " required />
                            </div>

                            <div className="form-control relative pt-4">
                                <label className="label">
                                    <span className="label-text"> Password</span>
                                </label>

                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Inter your password"
                                    className="input input-bordered  rounded-none "
                                    required

                                />
                                <span className="absolute right-5 bottom-5" onClick={() => setShowPassword(!showPassword)}>

                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>

                            </div>


                            <div className="form-control w-[80%] mx-auto my-6">
                                <button className="btn bg-[#d91f53] text-white hover:bg-white hover:text-[#d91f53] text-xl  rounded-none">Login</button>
                            </div>
                            <ToastContainer />
                        </form>


                        <div className="divider ">Login with social accounts</div>
                        <div className="flex justify-center  gap-5 px-8">
                            <button onClick={handlegoogle} className=" text-black  mask mask-circle "><FaGoogle></FaGoogle>  </button>
                            <button onClick={handlegithub} className=" text-black "><FaGithub></FaGithub>   </button>
                        </div>
                        <p className='text-center  my-6 px-5'>Don't have an account please  <Link className='text-[#dd6199]' to="/register">Register now</Link></p>
                    </div>

                </div>

            </div>


        </div>

    );
};

export default Login;
