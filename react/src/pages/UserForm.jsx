import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

const UserForm = () => {
    const navigate = useNavigate();

    const {id} = useParams();

    const {setNotification} = useStateContext();

    const[user, setUser] = useState({
        id: null,
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [errors, setErrors] = useState(null);

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

    const onSubmit = (e) => {
        e.preventDefault();
        setErrors(null);
        if (user.id) {
            axiosClient.put(`/users/${user.id}`, user)
            .then(() => {
                setNotification('User was successfully updated');
                navigate('/users');
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            })
        } else {
            axiosClient.post(`/users`, user)
            .then(() => {
                setNotification('User was successfully created');
                navigate('/users');
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            })
        }
    }

  return (
    <>
        {user.id && <h1>Update User: {user.name}</h1>}
        {!user.id && <h1>Create User</h1>}

        <div className="card">
            {
                errors && <div className="alert">
                    {
                        Object.keys(errors).map(key => (
                            <p key={key}>{errors[key][0]}</p>
                        ))
                    }
                </div>
            }

            <form onSubmit={onSubmit}>
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
                {user.id && <button className="btn btn-block">Update</button>}
                {!user.id && <button className="btn btn-block">Save</button>}
            </form>

        </div>
    </>
  )
}
export default UserForm
