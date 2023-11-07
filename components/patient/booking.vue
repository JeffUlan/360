<template>
    <section class="section-all" >
    <Toast position="top-right" />
        <div class="chat-page">
            <div class="main-wrapper">
                <!-- Breadcrumb -->
                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-12 col-12">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><nuxt-link to="/patient/patientdashboard">Home</nuxt-link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Booking</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Booking</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Breadcrumb -->
                
                <!-- Page Content -->
                <div class="content">
                    <div class="container">
                    
                        <div class="row">
                            <div class="col-12">
                            
                                <div class="card">
                                    <div class="card-body">
                                        <div class="booking-doc-info">
                                            <nuxt-link to="/patient/doctorprofile" class="booking-doc-img">
                                                <img src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                            </nuxt-link>
                                            <div class="booking-info">
                                                <h4><nuxt-link to="/patient/doctorprofile">Dr. Darren Elder</nuxt-link></h4>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">35</span>
                                                </div>
                                                <p class="text-muted mb-0"><i class="fas fa-map-marker-alt"></i> Tokyo, Japan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Schedule Widget -->
                                <div class="card booking-schedule schedule-widget">
                                
                                    <!-- Schedule Header -->
                                    <div class="schedule-header">
                                        <div class="row">
                                            <div class="col-md-12">
                                            
                                                <!-- Day Slot -->
                                                <div class="day-slot">
                                                    <ul>
                                                        <li class="left-arrow">
                                                            <a href="#">
                                                                <i class="fa fa-chevron-left"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <span>Mon</span>
                                                            <span class="slot-date">11 Nov <small class="slot-year">2023</small></span>
                                                        </li>
                                                        <li>
                                                            <span>Tue</span>
                                                            <span class="slot-date">12 Nov <small class="slot-year">2023</small></span>
                                                        </li>
                                                        <li>
                                                            <span>Wed</span>
                                                            <span class="slot-date">13 Nov <small class="slot-year">2023</small></span>
                                                        </li>
                                                        <li>
                                                            <span>Thu</span>
                                                            <span class="slot-date">14 Nov <small class="slot-year">2023</small></span>
                                                        </li>
                                                        <li>
                                                            <span>Fri</span>
                                                            <span class="slot-date">15 Nov <small class="slot-year">2023</small></span>
                                                        </li>
                                                        <li>
                                                            <span>Sat</span>
                                                            <span class="slot-date">16 Nov <small class="slot-year">2023</small></span>
                                                        </li>
                                                        <li>
                                                            <span>Sun</span>
                                                            <span class="slot-date">17 Nov <small class="slot-year">2023</small></span>
                                                        </li>
                                                        <li class="right-arrow">
                                                            <a href="#">
                                                                <i class="fa fa-chevron-right"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- /Day Slot -->
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Schedule Header -->
                                    
                                    <!-- Schedule Content -->
                                    <div class="schedule-cont">
                                        <div class="row">
                                            <div class="col-md-12">
                                            
                                                <!-- Time Slot -->
                                                <div class="time-slot">
                                                    <ul class="clearfix">
                                                        <li>
                                                            <a class="timing" href="#">
                                                                <span>9:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing" href="#">
                                                                <span>10:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing" href="#">
                                                                <span>11:00</span> <span>AM</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="timing" href="#">
                                                                <span>9:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing" href="#">
                                                                <span>10:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing" href="#">
                                                                <span>11:00</span> <span>AM</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="timing" href="#">
                                                                <span>9:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing" href="#">
                                                                <span>10:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing" href="#">
                                                                <span>11:00</span> <span>AM</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="timing" href="#">
                                                                <span>9:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing" href="#">
                                                                <span>10:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing" href="#">
                                                                <span>11:00</span> <span>AM</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="timing" href="#">
                                                                <span>9:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing selected" href="#">
                                                                <span>10:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing" href="#">
                                                                <span>11:00</span> <span>AM</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="timing" href="#">
                                                                <span>9:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing" href="#">
                                                                <span>10:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing" href="#">
                                                                <span>11:00</span> <span>AM</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a class="timing" href="#">
                                                                <span>9:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing" href="#">
                                                                <span>10:00</span> <span>AM</span>
                                                            </a>
                                                            <a class="timing" href="#">
                                                                <span>11:00</span> <span>AM</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <!-- /Time Slot -->
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Schedule Content -->
                                    
                                </div>
                                <!-- /Schedule Widget -->
                                
                                <!-- Submit Section -->
                                <div class="submit-section proceed-btn text-right">
                                    <nuxt-link to="/patient/checkout" class="btn btn-primary submit-btn">Proceed to Pay</nuxt-link>
                                </div>
                                <!-- /Submit Section -->
                                
                            </div>
                        </div>
                    </div>

                </div>		
                <!-- /Page Content -->
            </div>
        </div>
    </section>
</template>
<script></script>