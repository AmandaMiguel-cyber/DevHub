import { useAuth } from "../Conetext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectRoute() {
    const auth = useAuth()

    if (!auth?.isAuthenticade) {
        return <Navigate to="/login" />

    }
    return <Outlet />
}
export default ProtectRoute;