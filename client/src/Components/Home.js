import React from "react";
import {Link} from "react-router-dom";
export default  function Home(){
    return (
        // <!-- Hero Start -->
        <div class="hero">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-sm-12 col-md-6">
                        <div class="hero-text">
                            <h1>Yoga Practice For Good Health</h1>
                            <p>
                            “True yoga is not about the shape of your body, but the shape of your life. 
                            Yoga is not to be performed; yoga is to be lived. Yoga doesn’t care about what you have been; 
                            yoga cares about the person you are becoming. Yoga is designed for a vast and profound purpose, 
                            and for it to be truly called yoga, its essence must be embodied.” — Aadil Palkhivala
                            </p>
                            <div class="hero-btn">
                                <Link to="/Register"class="btn" href="">Join Now</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="hero-image">
                            <img src="img/hero.png" alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    //    <!-- Hero End -->

    );
}