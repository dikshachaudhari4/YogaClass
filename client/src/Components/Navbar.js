import React from "react";
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        // <-- Nav Bar Start -->
        <div class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container-fluid">
                <a href="index.html" class="navbar-brand">Y<span>oo</span>ga</a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav ml-auto">
                        <Link to="/" class="nav-item nav-link active">Home</Link>
                        <Link to="/About" class="nav-item nav-link">About</Link>
                        <Link to="/Service" class="nav-item nav-link">Service</Link>
                        <Link to="/Price" class="nav-item nav-link">Price</Link>
                        <Link to="/Class" class="nav-item nav-link">Class</Link>
                        <Link to="/Register" class="nav-item nav-link"><i class="fa fa-user-circle fa-lg"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        // <!-- Nav Bar End -->

    );
}