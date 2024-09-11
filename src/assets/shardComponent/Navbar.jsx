
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContest } from "../firebase/AutherProvider";
import { BiLogOutCircle } from "react-icons/bi";


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
                        <button onClick={handlelogout} className="relative px-5 py-2 font-medium  group  md:inline mb-2">
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#005294] group-hover:border-[#005294] group-hover:skew-x-[18deg]"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#005294] group-hover:border-[#005294] group-hover:-skew-x-[18deg]"></span>

                            <span className="flex items-center justify-center gap-2 relative  "><BiLogOutCircle
                                className="text-xl"></BiLogOutCircle> Logout</span>
                        </button>
                    </> : <Link to="/login">  <button onClick={handlelogout} className="relative px-5 py-2 font-medium  group  md:inline mb-2">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-[18deg] border border-[#005294] group-hover:border-[#005294] group-hover:skew-x-[18deg]"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-[18deg] border border-[#005294] group-hover:border-[#005294] group-hover:-skew-x-[18deg]"></span>

                        <span className="flex items-center justify-center gap-2 relative  "><BiLogOutCircle
                            className="text-xl"></BiLogOutCircle>Signin</span>
                    </button> </Link>
                }


            </div>
        </div>

    );
};

export default Navbar;