import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import useStateContext from "../contexts/ContextProvider";

const Signup = () => {
    const nameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const password_confirmationRef = useRef();

    const {setUser, setToken} = useStateContext();

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: password_confirmationRef.current.value
        }

        axiosClient.post('/signup', payload)
        .then(({data}) => {
            setUser(data.user);
            setToken(data.token);
        })
        .catch(err => {
            const response = err.response;
            if (response && response.status === 422) {
                console.log(response.data.errors);
            }
        })
    }

  return (
    <form onSubmit={onSubmit}>
                <h1 className="title">Create your new account</h1>
                <input
                    type="text"
                    id='name'
                    className='name'
                    placeholder="Full Name"
                    ref={nameRef}
                />
                <input
                    type="text"
                    id='username'
                    className='username'
                    placeholder="Username"
                    ref={usernameRef}
                />
                <input
                    type="email"
                    id='email'
                    className='email'
                    placeholder="Email"
                    ref={emailRef}
                />
                <input
                    type="password"
                    id='password'
                    className='password'
                    placeholder="Password"
                    ref={passwordRef}
                />
                <input
                    type="password"
                    id='password_confirmation'
                    className='password_confirmation'
                    placeholder="Password Confirmation"
                    ref={password_confirmationRef}
                />
                <button className="btn btn-block">Signup</button>
                <p className="message">Already registered? <Link to="/login">Login</Link></p>
            </form>
  )
}
export default Signup
