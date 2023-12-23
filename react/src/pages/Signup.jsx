import { Link } from "react-router-dom";

const Signup = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit");
    }

  return (
    <form onSubmit={onSubmit}>
                <h1 className="title">Create your new account</h1>
                <input
                    type="text"
                    id='name'
                    className='name'
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    id='username'
                    className='username'
                    placeholder="Username"
                />
                <input
                    type="email"
                    id='email'
                    className='email'
                    placeholder="Email"
                />
                <input
                    type="password"
                    id='password'
                    className='password'
                    placeholder="Password"
                />
                <input
                    type="password"
                    id='password_confirmation'
                    className='password_confirmation'
                    placeholder="Password Confirmation"
                />
                <button className="btn btn-block">Signup</button>
                <p className="message">Already registered? <Link to="/login">Login</Link></p>
            </form>
  )
}
export default Signup
