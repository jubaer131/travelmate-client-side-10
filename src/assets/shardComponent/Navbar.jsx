
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContest } from "../firebase/AutherProvider";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";


const Navbar = () => {

    const [theme, settheme] = useState("light");
    const { user, logout, loading } = useContext(authContest)



    const handlelogout = () => {
        logout()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleToggle = e => {


        if (e.target.checked) {
            settheme('dark')

        } else {
            settheme('light')
        }
    }





    const links = <>

        <NavLink
            to='/' className={({ isActive }) => isActive ? 'text-[16px] text-[#005294] font-medium    border-green-500 mr-6' : 'text-[16px] font-medium  border-green-500 mr-6 '}>
            Home
        </NavLink>


        <NavLink
            to="/alltouristsport" className={({ isActive }) => isActive ? 'text-[16px] text-[#005294] font-medium   border-green-500 mr-6 ' : 'text-[16px] font-medium  border-green-400 mr-6 '} >
            All Tourist Sport
        </NavLink>
        <NavLink
            to="/popularCountry" className={({ isActive }) => isActive ? 'text-[16px] text-[#005294] font-medium   border-green-500 mr-6 ' : 'text-[16px] font-medium  border-green-400 mr-6 '} >
            Popular Country
        </NavLink>


        <NavLink
            to='/addtouristsport' className={({ isActive }) => isActive ? 'text-[16px] text-[#005294] font-medium    border-green-500 mr-6 ' : 'text-[16px] font-medium  border-green-400 mr-6 '} >
            Add Tourist Sport
        </NavLink>
        <NavLink
            to='/mylist' className={({ isActive }) => isActive ? 'text-[16px] text-[#005294] font-medium    border-green-500 mr-6 ' : 'text-[16px] font-medium  border-green-400 mr-6 '} >
            My List
        </NavLink>
        <button className="">
            <label className="cursor-pointer grid place-items-center ">
                <input onChange={handleToggle} type="checkbox" value="dark" className=" toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 " />
                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                <svg className=" col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
        </button>

    </>







    return (
        <div className="navbar container mx-auto py-2  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}

                    </ul>
                </div>
                <a className=" font-bold md:text-xl flex justify-center items-center gap-1 ">  <img className="h-12 w-12 rounded-full md:ml-5 " src="https://i.ibb.co/9rP4jqp/Green-Geometric-Adventure-Logo.png" alt="" /><span className="font-Caveat">TRAVELMATE</span></a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <>
                        <div className="tooltip mr-4 tooltip-top" data-tip={user.displayName}>

                            <button className="">  <div tabIndex={0} role="button" className=" avatar">
                                <div className="w-[45px] rounded-full">
                                    <img alt="" src={user?.photoURL} />

                                </div>
                            </div>
                            </button>
                        </div>

                        {/* <button onClick={handlelogout} className="btn  bg-violet-600 text-white text-[15px]">Logout </button> */}
                        <button onClick={handlelogout} className="relative border border-[#005294] inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group mr-2">
                            <span className="h-48 w-full rounded rotate-[-40deg] bg-[#005294] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="flex items-center justify-center gap-2 relative text-center w-full text-[#005294] transition-colors duration-300 ease-in-out group-hover:text-white">
                                {" "}
                                <BiLogInCircle className="text-xl"></BiLogInCircle>{" "}
                                <span className="hidden md:inline">Logout</span>
                            </span>
                        </button>
                    </> : <Link to="/login">  <button onClick={handlelogout} className="relative border border-[#005294] inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all rounded-full hover:bg-white group mr-2">
                        <span className="h-48 w-full rounded rotate-[-40deg] bg-[#005294] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="flex items-center justify-center gap-2 relative text-center w-full text-[#005294] transition-colors duration-300 ease-in-out group-hover:text-white">
                            {" "}
                            <BiLogInCircle className="text-xl"></BiLogInCircle>{" "}
                            <span className="hidden md:inline">Sign In</span>
                        </span>
                    </button> </Link>
                }


            </div>
        </div>

    );
};

export default Navbar;