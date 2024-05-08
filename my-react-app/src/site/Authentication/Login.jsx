//Component of Login
import "./Login.css"

function Login(){
    return(
    <>
        <div className="login-box">
            <h1>Login</h1>
            <form>
                <label>Email</label>
                <input type="email" placeholder="" />
                <label>Password</label>
                <input type="password" placeholder="" />
                <button className="Submit" type="Submit" style="margin-top: 0.625rem;">Submit</button>
            <closeform></closeform></form>
        </div>

        <p className="para-2">
            Create an new account? 
            <Link to="signup.html">Sign Up Here</Link>
        </p>
    </>
    );
}

export default Login;