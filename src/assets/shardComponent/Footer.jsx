import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { authContest } from "../firebase/AutherProvider";



const Footer = () => {



    return (


        <>

            <footer className="footer bg-black text-base-content p-20 relative z-10">

                <aside>
                    <a className="font-bold md:text-xl flex justify-center items-center gap-1">
                        <img className="h-12 w-12 rounded-full md:ml-5" src="https://i.ibb.co/9rP4jqp/Green-Geometric-Adventure-Logo.png" alt="" />
                        <span className="text-white">TRAVELMATE</span>
                    </a>
                    <p className="text-white">
                        TRAVELMATE Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav className="text-white">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="text-white">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="text-white">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
        </>
    );
};

export default Footer;

