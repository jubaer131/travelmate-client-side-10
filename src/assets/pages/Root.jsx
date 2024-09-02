import { Outlet } from "react-router-dom";
import Navbar from "../shardComponent/Navbar";
import Footer from "../shardComponent/Footer";
import Header from "../component/Header";

const Root = () => {
    return (
        <div>
            <div className="w-full bg-[#005294]">
                <Header></Header>
            </div>

            <div className="w-full ">
                <Navbar></Navbar>
            </div>

            <div >
                <Outlet></Outlet>

            </div>

            <Footer></Footer>
        </div>

    );
};

export default Root;