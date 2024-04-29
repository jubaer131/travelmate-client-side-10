
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContest } from "../firebase/AutherProvider";


const Navbar = () => {

    const [theme, settheme] = useState("light");


    const handleToggle = e => {
        if (e.target.checked) {
            settheme('dark')

        } else {
            settheme('light')
        }
    }

    const links = <>

        <NavLink
            to='/' className={({ isActive }) => isActive ? 'text-[16px] text-violet-500 font-medium    border-green-500 mr-5' : 'text-[16px] font-medium  border-green-500 mr-5 '}>
            Home
        </NavLink>


        <NavLink
            to="/alltouristsport" className={({ isActive }) => isActive ? 'text-[16px] text-violet-500 font-medium   border-green-500 mr-5 ' : 'text-[16px] font-medium  border-green-400 mr-5 '} >
            All Tourist Sport
        </NavLink>


        <NavLink
            to='/addtouristsport' className={({ isActive }) => isActive ? 'text-[16px] text-violet-500 font-medium    border-green-500 mr-5 ' : 'text-[16px] font-medium  border-green-400 mr-5 '} >
            Add Tourist Sport
        </NavLink>
        <NavLink
            to='/mylist' className={({ isActive }) => isActive ? 'text-[16px] text-violet-500 font-medium    border-green-500 mr-5 ' : 'text-[16px] font-medium  border-green-400 mr-5 '} >
            My List
        </NavLink>
        <button className="">
            <label className="cursor-pointer grid place-items-center ">
                <input onChange={handleToggle} type="checkbox" value="retro" className=" toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 " />
                <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                <svg className=" col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
        </button>

    </>
    const { user, logout } = useContext(authContest)


    const handlelogout = () => {
        logout()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <div className="navbar  rounded-t-lg md:shadow-xl mt-8 mb-3 rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}

                    </ul>
                </div>
                <a className=" font-bold text-3xl ">Travelmate<span className="font-bold text-3xl text-white animate__animated animate__fadeInRightBig"></span></a>

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

                        <button onClick={handlelogout} className="btn bg-white text-[15px]">Logout </button>
                    </> : <Link to="/login">  <a className="btn bg-white text-[15px]">Login</a> </Link>
                }


            </div>
        </div>
    );
};

export default Navbar;