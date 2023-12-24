import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import axiosClient from "../axios-client";


const UserProfile = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    if (id) {
        useEffect(() => {
          axiosClient.get(`/users/${id}`)
            .then(({data}) => {
              setUser(data)
            })
            .catch(() => {
              navigate('/users');
            })
        }, [])
    }

  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1>User Profile: {user.name}</h1>
            <Link to="/users" className="btn-add">Back</Link>
        </div>

        <div className="card">
            <div className="card-body">
                <div className="details">
                    <table className="profile-table">
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>{user.name}</td>
                            </tr>
                            <tr>
                                <td>Username:</td>
                                <td>{user.username}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr>
                                <td>Date Created:</td>
                                <td>{user.created_at}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
  )
}
export default UserProfile
