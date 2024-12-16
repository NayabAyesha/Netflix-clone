import React, { useState } from 'react';
import './Login.css';
import LOGO from '../../assets/netflix_logo_icon.png';

const Login = () => {
    const [signState, setSignState] = useState("Sign In");

   

    return (
        <div className="login">
            <img src={LOGO} alt="LOGO" className="login-logo" />
            <div className="login-container">
                <div className="form-wrapper">
                    <h1>{signState}</h1>
                    <form>
                        {signState === "Sign Up" && <input type="text" placeholder="Your Name" required />}
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">{signState}</button>
                        <div className="Form-help">
                            <div className="remember">
                                <label>Remember me</label>
                                <input type="checkbox" />
                            </div>
                            <p>Need help?</p>
                        </div>
                    </form>
                    <div className="form-switch">
                        {signState === "Sign In" ? (
                            <p>
                                New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span>
                            </p>
                        ) : (
                            <p>
                                Already have an account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
