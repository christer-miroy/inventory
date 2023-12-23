import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";

const Login = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const [errors, setErrors] = useState(null);

    const {setUser, setToken} = useStateContext();

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }
        
        setErrors(null);
        axiosClient.post('/login', payload)
        .then(({data}) => {
            setUser(data.user);
            setToken(data.token);
        })
        .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
                if (response.data.errors){
                    setErrors(response.data.errors);
                } else {
                    setErrors({
                        username: [response.data.message]
                    });
                }
            }
        })
    }

  return (
    <form onSubmit={onSubmit}>
        <h1 className="title">Login</h1>

        {
            errors && <div className="alert">
                {
                    Object.keys(errors).map(key => (
                        <p key={key}>{errors[key][0]}</p>
                    ))
                }
            </div>
        }

        <input
            type="text"
            id='username'
            className='username'
            placeholder="Username"
            ref={usernameRef}
        />
        <input
            type="password"
            id='password'
            className='password'
            placeholder="Password"
            ref={passwordRef}
        />
        <button className="btn btn-block">Login</button>
        <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
    </form>
  )
}
export default Login
