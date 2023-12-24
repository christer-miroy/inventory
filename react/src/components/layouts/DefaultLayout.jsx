import { useStateContext } from "../../contexts/ContextProvider";
import { Link, Navigate, Outlet } from "react-router-dom"
import { useEffect } from 'react';
import axiosClient from '../../axios-client';

const DefaultLayout = () => {
    const { user, token, notification, setUser, setToken } =useStateContext();

    if (!token) {
        return <Navigate to="/login" />
    }

    const onLogout = (e) => {
        e.preventDefault();

        axiosClient.post('/logout')
        .then(() => {
            setUser({})
            setToken(null)
        })
    }

    useEffect(() => {
        axiosClient.get('/user')
        .then(({data}) => {
            setUser(data);
        })
    }, [])

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
                    Hello, {user.name}!
                    <a href="#" className="btn-logout" onClick={onLogout}>Logout</a>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            {notification && <div className="notification">{notification}</div>}
        </div>
    </div>
  )
}
export default DefaultLayout
