
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { authContest } from "../firebase/AutherProvider";

const Footer = () => {
    const { googleSignin, githubSignin } = useContext(authContest)
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
        <footer className="footer footer-center p-10 bg-teal-300 text-base-content rounded mb-6 w-full">
            <nav className="flex flex-wrap px-8 md:flex gap-6">
                <Link className="text-sky-700 text-[16px]" to="/">Home</Link>
                <Link className="text-sky-700 text-[16px]" to="/alltouristsport">All_tourist_sport</Link>
                <Link className="text-sky-700 text-[16px]" to="/register">Register</Link>
                <Link className="text-sky-700 text-[16px]" to="/addtouristsport">Add_tourist_sport</Link>
                <Link className="text-sky-700 text-[16px]" to="/mylist">My-list</Link>


            </nav>
            <nav>
                <div className="md:grid grid-flow-col gap-4">
                    <button onClick={handlegoogle} className="btn btn-accent"><FaGoogle></FaGoogle> Google  </button>
                    <button onClick={handlegithub} className="btn btn-accent"><FaGithub></FaGithub> github  </button>


                </div>
            </nav>
            <aside>
                <p className="text-black text-[16px]">Copyright © 2024 - All right reserved by Dreams Home Industries Ltd</p>

            </aside>
        </footer>
    );
};

export default Footer;