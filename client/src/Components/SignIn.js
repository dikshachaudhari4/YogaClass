import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import swal from 'sweetalert';

export default function SignIn(props) {
    const [credentials, setCredential] = useState({ email: "", password: "" })
    let history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json)
        if (json.success) {
            //redirect
            history("/Payment")
        }
        else {
            swal("Opps", "Please try to login with correct credentials", "error");
        }

    }
    const onChange = (e) => {
        setCredential({ ...credentials, [e.target.name]: e.target.value })
        
    }
    return (
        <section class="signup">
            <div class="container" id="signupbox">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign In</h2>
                        <form class="register-form" id="register-form" onSubmit={handleSubmit}>
                            <div class="form-group">
                                <label for="email"><i class="fa fa-envelope fa-xs"></i></label>
                                <input type="email" name="email" id="email" value={credentials.email} onChange={onChange} placeholder="Your Email" autoComplete="off" />
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="fa fa-lock fa-xs"></i></label>
                                <input type="password" name="password" id="pass" value={credentials.password} onChange={onChange} placeholder="Password" autoComplete="off" />
                            </div>
                            <div class="form-group form-button">
                                <button type="submit" name="SignIn" id="SignIn" class="form-submit" value="SignIn">SignIn
                                </button>
                            </div>
                            <Link to="/Register" class="signup-image-link">Create an account</Link>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="img/signin-image.jpg" alt="sing up " /></figure>
                  
                    </div>
                </div>
            </div>
        </section>
    );
}