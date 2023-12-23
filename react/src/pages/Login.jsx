import { Link } from "react-router-dom";

const Login = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit");
    }

  return (
    <form onSubmit={onSubmit}>
        <h1 className="title">Login</h1>
        <input
            type="text"
            id='username'
            className='username'
            placeholder="Username"
        />
        <input
            type="password"
            id='password'
            className='password'
            placeholder="Password"
        />
        <button className="btn btn-block">Login</button>
        <p className="message">Not registered? <Link to="/signup">Create an account</Link></p>
    </form>
  )
}
export default Login
