import { useContext } from "react";
import { authContest } from "./AutherProvider";
import { Navigate } from "react-router-dom";

const PrivateRout3 = ({ children }) => {
    const { user, loading } = useContext(authContest)

    if (loading) {
        return <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin dark:border-violet-600 ml-48">loading</div>
    }

    if (user) {
        return children
    } else {
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRout3;