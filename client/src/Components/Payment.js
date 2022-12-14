import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
export default function Payment() {
  const [credentials, setCredential] = useState({ fname:"",lname: "",email:"",age:"",gender:"",
  batch:"",paymentmode:"",cardnumber:"",amount:"",cvc:"",carddate:"",cardyear:""})
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const{fname,lname,email,age,gender,batch,paymentmode,cardnumber,amount,cvc,carddate,cardyear}=credentials;
        const response = await fetch("http://localhost:5000/api/auth/Payment", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({fname,lname,email,age,gender,batch,paymentmode,cardnumber,amount,cvc,carddate,cardyear})
        });
        const json = await response.json()
        console.log(json)
        swal("Thank You!", "Payment Successfull", "success");
        history("/")
    }
    const onChange = (e) => {
      setCredential({ ...credentials, [e.target.name]: e.target.value })
  } 
  return (
    <div class="wrapper">
      <h2>Payment Form</h2>
      <form  onSubmit={handleSubmit}>
        <h4>Account</h4>
        <div class="input-group2">
          <div class="input-box">
            <input type="text" placeholder="First Name" required class="name" id="input" name="fname"  onChange={onChange}
            minLength="3"/>
            <i class="fa fa-user icon"></i>
          </div>
          <div class="input-box">
            <input type="text" placeholder="Last Name" required class="name" id="input" name="lname"  onChange={onChange}
            minLength="3"/>
            <i class="fa fa-user icon"></i>
          </div>
        </div>
        <div class="input-group2">
          <div class="input-box">
            <input type="email" placeholder="Email Adress" required class="name" id="input" name="email"  onChange={onChange}/>
            <i class="fa fa-envelope icon"></i>
          </div>
        </div>

        <div class="input-group2">
          <div class="input-box">
            <input type="number" placeholder="Age" required class="name"id="input" name="age"  onChange={onChange}
            min="18" max="65"/>
            <i class="fa fa-child icon"></i>
          </div>
          <div class="input-box">
            <select name="gender"class="form-select" required aria-label="Disabled select example" onChange={onChange} >
            <option selected disabled>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div class="input-group2">
          <div class="input-box">
            <select name="batch" class="form-select" aria-label="Disabled select example"  onChange={onChange} >
            <option selected disabled>Select Batch</option>
              <option value="batch 1">6-7 AM</option>
              <option value="batch 2">7-8 AM</option>
              <option value="batch 3">8-9 AM</option>
              <option value="batch 4">5-6 PM</option>
            </select>
            <select name="paymentmode"class="form-select" aria-label="Disabled select example"  onChange={onChange}>
            <option selected disabled>Select Payment</option>
              <option value="creditcard">Credit card</option>
              <option value="paypal">paypal</option>
            </select>
          </div>
        </div>
        <div class="input-group2">
          <div class="input-box">
            <input type="text" placeholder="Card Number" required class="name" id="input" name="cardnumber" 
             onChange={onChange} minLength="16" maxLength="16"/>
            <i class="fa fa-credit-card icon"></i>
          </div>
          <div class="input-box">
            <input type="number" placeholder="Enter Amount" required class="name" id="input" name="amount" 
             onChange={onChange} value="500" min="500" max="500"/>
            <i class="fa fa-rupee-sign icon"></i>
          </div>
        </div>
        <div class="input-group2">
          <div class="input-box">
            <input type="number" placeholder="Card CVC" required class="name"id="input" name="cvc"  
             onChange={onChange} min="100" max="999"/>
            <i class="fa fa-user icon"></i>
          </div>
          <div class="input-box">
            <select name="carddate"  onChange={onChange}>
              <option value="01 jan">01 jun</option>
              <option value="02 jan">02 jun</option>
              <option value="03 jan">03 jun</option>
            </select>
            <select name="cardyear"  onChange={onChange}>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>
        <div class="input-group2">
          <div class="input-box">
            <button type="submit">PAY NOW</button>
          </div>
        </div>
      </form>
    </div>
  );
}
