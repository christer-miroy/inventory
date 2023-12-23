import { useStateContext } from "../../contexts/ContextProvider";
import { Navigate, Outlet } from "react-router-dom"

const DefaultLayout = () => {
    const { user, token } =useStateContext();

    if (!token) {
        return <Navigate to="/login" />
    }

  return (
    <div>
        <Outlet />
    </div>
  )
}
export default DefaultLayout
