import React from "react";
export default function Header(props){
    return (
        // <!-- Page Header Start -->
        <div class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2>{props.title}</h2>
                    </div>
                    <div class="col-12">
                        <a href="">Home</a>
                        <a href="">{props.title}</a>
                    </div>
                </div>
            </div>
        </div>
        // <!-- Page Header End -->

    );
}