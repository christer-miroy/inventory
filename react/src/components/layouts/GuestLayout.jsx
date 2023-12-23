import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../../contexts/ContextProvider";

const GuestLayout = () => {
    const {token} =useStateContext();

    if (token) {
        return <Navigate to="/dashboard" />
    }

  return (
    <div className="login-signup-form">
        <div className="form">
            <Outlet />
        </div>
    </div>
  )
}
export default GuestLayout
