import { useContext } from "react";
import { authContest } from "./AutherProvider";
import { Navigate } from "react-router-dom";
import { PuffLoader } from 'react-spinners';

const PrivateRout3 = ({ children }) => {
    const { user, loading } = useContext(authContest)

    if (loading) {
        return <div className="w-full h-[660px] flex items-center justify-center"> <PuffLoader color="orange" size={70}></PuffLoader></div>
    }

    if (user) {
        return children
    } else {
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRout3;