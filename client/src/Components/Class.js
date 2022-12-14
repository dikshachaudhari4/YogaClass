import React from "react";
export default function Class(){
    return(
        // <!-- Class Start -->
        <div class="class">
            <div class="container">
                <div class="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Our Classes</p>
                    <h2>Yoga Class Shedule</h2>
                </div>
                <div class="row">
                    <div class="col-12">
                        <ul id="class-filter">
                            <li data-filter="*" class="filter-active">All Classes</li>
                        </ul>
                    </div>
                </div>
                <div class="row class-container">
                    <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
                        <div class="class-wrap">
                            <div class="class-img">
                                <img src="img/class-1.jpg" alt="Image"/>
                            </div>
                            <div class="class-text">
                                <div class="class-teacher">
                                    <img src="img/teacher-1.png" alt="Image"/>
                                    <h3>Elise Moran</h3>
                                    <a href="">+</a>
                                </div>
                                <h2>Pilates Yoga</h2>
                                <div class="class-meta">
                                    <p><i class="far fa-calendar-alt"></i>Mon - Fri</p>
                                    <p><i class="far fa-clock"></i>6:00 - 7:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-2 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="class-wrap">
                            <div class="class-img">
                                <img src="img/class-2.jpg" alt="Image"/>
                            </div>
                            <div class="class-text">
                                <div class="class-teacher">
                                    <img src="img/teacher-2.png" alt="Image"/>
                                    <h3>Kate Glover</h3>
                                    <a href="">+</a>
                                </div>
                                <h2>Iyengar Yoga</h2>
                                <div class="class-meta">
                                    <p><i class="far fa-calendar-alt"></i>Mon - Fri</p>
                                    <p><i class="far fa-clock"></i>7:00 - 8:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="class-wrap">
                            <div class="class-img">
                                <img src="img/class-3.jpg" alt="Image"/>
                            </div>
                            <div class="class-text">
                                <div class="class-teacher">
                                    <img src="img/teacher-3.png" alt="Image"/>
                                    <h3>Elina Ekman</h3>
                                    <a href="">+</a>
                                </div>
                                <h2>Ashtanga yoga</h2>
                                <div class="class-meta">
                                    <p><i class="far fa-calendar-alt"></i>Mon - Fri</p>
                                    <p><i class="far fa-clock"></i>8:00 - 9:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="class-wrap">
                            <div class="class-img">
                                <img src="img/class-4.jpg" alt="Image"/>
                            </div>
                            <div class="class-text">
                                <div class="class-teacher">
                                    <img src="img/teacher-4.png" alt="Image"/>
                                    <h3>Lilly Fry</h3>
                                    <a href="">+</a>
                                </div>
                                <h2>Hatha Yoga</h2>
                                <div class="class-meta">
                                    <p><i class="far fa-calendar-alt"></i>Mon - Fri</p>
                                    <p><i class="far fa-clock"></i>5:00 - 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //  <!-- Class End --> 
    );
}