import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../axios-client";

const UserForm = () => {
    const {id} = useParams();
    const[user, setUser] = useState({
        id: null,
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [loading,setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    if (id) {
        useEffect(() => {
            setLoading(true);
            axiosClient.get(`/users/${id}`)
            .then(({data}) => {
                setLoading(false);
                setUser(data);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            })
        }, [])
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit");
    }

  return (
    <>
        {user.id && <h1>Update User: {user.name}</h1>}
        {!user.id && <h1>Create User</h1>}

        <div className="card">
            {
                loading && (
                    <div className="text-center">Loading...</div>
                )
            }

            {
                errors && <div className="alert">
                    {
                        Object.keys(errors).map(key => (
                            <p key={key}>{errors[key][0]}</p>
                        ))
                    }
                </div>
            }

            {
                !loading &&
                    <form>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={user.name}
                            onChange={e => setUser({...user, name:e.target.value})}
                        />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={user.username}
                            onChange={e => setUser({...user, username:e.target.value})}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={user.email}
                            onChange={e => setUser({...user, email:e.target.value})}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={e => setUser({...user, password:e.target.value})}
                        />
                        <input
                            type="password"
                            name="password_confirmation"
                            placeholder="Password Confirmation"
                            onChange={e => setUser({...user, password_confirmation:e.target.value})}
                        />
                        <button className="btn btn-block">Update</button>
                    </form>
            }

        </div>
    </>
  )
}
export default UserForm
