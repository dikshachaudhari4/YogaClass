import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import swal from "sweetalert";

export default function Register(props){
    const [credentials, setCredential] = useState({ name:"",email: "", password: "",re_pass:""})
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const{name,email,password}=credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({name,email,password })
        });
        const json = await response.json()
        console.log(json)
        history("/")
        swal("Congrats!", "Your Account is created", "success");
    }
    const onChange = (e) => {
        setCredential({ ...credentials, [e.target.name]: e.target.value })
    }     
return(
  // <!-- Sign up form -->
  <section class="signup">
      <div class="container" id="signupbox">
          <div class="signup-content">
              <div class="signup-form">
                  <h2 class="form-title">Sign up</h2>
                  <form class="register-form" id="register-form" onSubmit={handleSubmit}>
                      <div class="form-group">
                          <label htmlFor="name"><i class="fa fa-user fa-xs"></i></label>
                          <input type="text" name="name" id="name" placeholder="Your Name" onChange={onChange} autoComplete="off" required minLength={2}/>
                      </div>
                      <div class="form-group">
                          <label htmlFor="email"><i class="fa fa-envelope fa-xs"></i></label>
                          <input type="email" name="email" id="email" placeholder="Your Email" onChange={onChange}  autoComplete="off" required/>
                      </div>
                      <div class="form-group">
                          <label htmlFor="pass"><i class="fa fa-lock fa-xs"></i></label>
                          <input type="password" name="password" id="password" placeholder="Password"onChange={onChange}autoComplete="off" required minLength={5}/>
                      </div>
                      <div class="form-group">
                          <label htmlFor="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                          <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"onChange={onChange}autoComplete="off" required minLength={5}/>
                      </div>
                      <div class="form-group form-button">
                          <button type="submit" name="signup" id="signup" class="form-submit" value="Register"> SignUp</button>
                          <br/>
                          <Link to="/SignIn" class="signup-image-link">Already have an account</Link>
                      </div>
                  </form>
              </div>
              <div class="signup-image">
                  <figure><img src="img/signup-image.jpg" alt="sing up "/></figure>
              </div>
          </div>
      </div>
  </section>
    );
}