import './defaultLayout.css';
import { useStateContext } from "../../contexts/ContextProvider";
import { Link, Navigate, Outlet } from "react-router-dom"

const DefaultLayout = () => {
    const { user, token } =useStateContext();

    if (!token) {
        return <Navigate to="/login" />
    }

    const onLogout = (e) => {
        e.preventDefault();
        console.log("onLogout");
    }

  return (
    <div id="defaultLayout">
        <aside>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/users">Users</Link>
        </aside>
        <div className="content">
            <header>
                <div>Header</div>
                <div>
                    Hello, {user.username}!
                    <a href="#" className="btn-logout" onClick={onLogout}>Logout</a>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    </div>
  )
}
export default DefaultLayout
