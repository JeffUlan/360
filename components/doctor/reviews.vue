<template>
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><nuxt-link to="/doctor/doctordashboard">Home</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Reviews</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title">Reviews</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->
    
    <!-- Page Content -->
    <div class="content">
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                
                    <!-- Profile Sidebar -->
                    <div class="profile-sidebar">
                        <div class="widget-profile pro-widget-content">
                            <div class="profile-info-widget">
                                <a href="#" class="booking-doc-img">
                                    <img src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                </a>
                                <div class="profile-det-info">
                                    <h3>Dr. Darren Elder</h3>
                                    
                                    <div class="patient-details">
                                        <h5 class="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-widget">
                            <nav class="dashboard-menu">
                                <ul>
                                    <li>
                                        <nuxt-link to="/doctor/doctordashboard">
                                            <i class="fas fa-columns"></i>
                                            <span>Dashboard</span>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/doctor/appointments">
                                            <i class="fas fa-calendar-check"></i>
                                            <span>Appointments</span>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/doctor/mypatients">
                                            <i class="fas fa-user-injured"></i>
                                            <span>My Patients</span>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/doctor/scheduletimings">
                                            <i class="fas fa-hourglass-start"></i>
                                            <span>Schedule Timings</span>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/doctor/invoices">
                                            <i class="fas fa-file-invoice"></i>
                                            <span>Invoices</span>
                                        </nuxt-link>
                                    </li>
                                    <li class="active">
                                        <nuxt-link to="/doctor/reviews">
                                            <i class="fas fa-star"></i>
                                            <span>Reviews</span>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/doctor/chatdoctor">
                                            <i class="fas fa-comments"></i>
                                            <span>Chat</span>
                                            <small class="unread-msg">18</small>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/doctor/profilesettings">
                                            <i class="fas fa-user-cog"></i>
                                            <span>My Profile</span>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/doctor/socialmedia">
                                            <i class="fas fa-share-alt"></i>
                                            <span>Social Media</span>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/doctor/changepassword">
                                            <i class="fas fa-lock"></i>
                                            <span>Change Password</span>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/">
                                            <i class="fas fa-sign-out-alt"></i>
                                            <span>Logout</span>
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <!-- /Profile Sidebar -->
                    
                </div>
                <div class="col-md-7 col-lg-8 col-xl-9">
                    <div class="doc-review review-listing">
                    
                        <!-- Review Listing -->
                        <ul class="comments-list">
                        
                            <!-- Comment List -->
                            <li>
                                <div class="comment">
                                    <img class="avatar rounded-circle" alt="User Image" src="~/assets/img/patients/patient.jpg">
                                    <div class="comment-body">
                                        <div class="meta-data">
                                            <span class="comment-author">Takeo Fukuda</span>
                                            <span class="comment-date">Reviewed 2 Days ago</span>
                                            <div class="review-count rating">
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                        </div>
                                        <p class="recommended"><i class="far fa-thumbs-up"></i> I recommend the doctor</p>
                                        <p class="comment-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                            Curabitur non nulla sit amet nisl tempus
                                        </p>
                                        <div class="comment-reply">
                                            <a class="comment-btn" href="#">
                                                <i class="fas fa-reply"></i> Reply
                                            </a>
                                            <p class="recommend-btn">
                                            <span>Recommend?</span>
                                            <a href="#" class="like-btn">
                                                <i class="far fa-thumbs-up"></i> Yes
                                            </a>
                                            <a href="#" class="dislike-btn">
                                                <i class="far fa-thumbs-down"></i> No
                                            </a>
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Comment Reply -->
                                <ul class="comments-reply">
                                
                                    <!-- Comment Reply List -->
                                    <li>
                                        <div class="comment">
                                            <img class="avatar rounded-circle" alt="User Image" src="~/assets/img/doctors/doctor-thumb-02.jpg">
                                            <div class="comment-body">
                                                <div class="meta-data">
                                                    <span class="comment-author">Dr. Darren Elder</span>
                                                    <span class="comment-date">Reviewed 3 Days ago</span>
                                                </div>
                                                <p class="comment-content">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam.
                                                    Curabitur non nulla sit amet nisl tempus
                                                </p>
                                                <div class="comment-reply">
                                                    <a class="comment-btn" href="#">
                                                        <i class="fas fa-reply"></i> Reply
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- /Comment Reply List -->
                                    
                                </ul>
                                <!-- /Comment Reply -->
                                
                            </li>
                            <!-- /Comment List -->
                            
                            <!-- Comment List -->
                            <li>
                                <div class="comment">
                                    <img class="avatar rounded-circle" alt="User Image" src="~/assets/img/patients/patient2.jpg">
                                    <div class="comment-body">
                                        <div class="meta-data">
                                            <span class="comment-author">Travis Trimble</span>
                                            <span class="comment-date">Reviewed 4 Days ago</span>
                                            <div class="review-count rating">
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                        <p class="comment-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                            Curabitur non nulla sit amet nisl tempus
                                        </p>
                                        <div class="comment-reply">
                                            <a class="comment-btn" href="#">
                                                <i class="fas fa-reply"></i> Reply
                                            </a>
                                            <p class="recommend-btn">
                                                <span>Recommend?</span>
                                                <a href="#" class="like-btn">
                                                    <i class="far fa-thumbs-up"></i> Yes
                                                </a>
                                                <a href="#" class="dislike-btn">
                                                    <i class="far fa-thumbs-down"></i> No
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <!-- /Comment List -->
                            
                            <!-- Comment List -->
                            <li>
                                <div class="comment">
                                    <img class="avatar rounded-circle" alt="User Image" src="~/assets/img/patients/patient3.jpg">
                                    <div class="comment-body">
                                        <div class="meta-data">
                                            <span class="comment-author">Carl Kelly</span>
                                            <span class="comment-date">Reviewed 5 Days ago</span>
                                            <div class="review-count rating">
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                        <p class="comment-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                            Curabitur non nulla sit amet nisl tempus
                                        </p>
                                        <div class="comment-reply">
                                            <a class="comment-btn" href="#">
                                                <i class="fas fa-reply"></i> Reply
                                            </a>
                                            <p class="recommend-btn">
                                                <span>Recommend?</span>
                                                <a href="#" class="like-btn">
                                                    <i class="far fa-thumbs-up"></i> Yes
                                                </a>
                                                <a href="#" class="dislike-btn">
                                                    <i class="far fa-thumbs-down"></i> No
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <!-- /Comment List -->
                            
                            <!-- Comment List -->
                            <li>
                                <div class="comment">
                                    <img class="avatar rounded-circle" alt="User Image" src="~/assets/img/patients/patient4.jpg">
                                    <div class="comment-body">
                                        <div class="meta-data">
                                            <span class="comment-author">Michelle Fairfax</span>
                                            <span class="comment-date">Reviewed 6 Days ago</span>
                                            <div class="review-count rating">
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                        <p class="comment-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                            Curabitur non nulla sit amet nisl tempus
                                        </p>
                                        <div class="comment-reply">
                                            <a class="comment-btn" href="#">
                                                <i class="fas fa-reply"></i> Reply
                                            </a>
                                            <p class="recommend-btn">
                                                <span>Recommend?</span>
                                                <a href="#" class="like-btn">
                                                    <i class="far fa-thumbs-up"></i> Yes
                                                </a>
                                                <a href="#" class="dislike-btn">
                                                    <i class="far fa-thumbs-down"></i> No
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <!-- /Comment List -->
                            
                            <!-- Comment List -->
                            <li>
                                <div class="comment">
                                    <img class="avatar rounded-circle" alt="User Image" src="~/assets/img/patients/patient5.jpg">
                                    <div class="comment-body">
                                        <div class="meta-data">
                                            <span class="comment-author">Gina Moore</span>
                                            <span class="comment-date">Reviewed 1 Week ago</span>
                                            <div class="review-count rating">
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                        <p class="comment-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                            Curabitur non nulla sit amet nisl tempus
                                        </p>
                                        <div class="comment-reply">
                                            <a class="comment-btn" href="#">
                                                <i class="fas fa-reply"></i> Reply
                                            </a>
                                            <p class="recommend-btn">
                                                <span>Recommend?</span>
                                                <a href="#" class="like-btn">
                                                    <i class="far fa-thumbs-up"></i> Yes
                                                </a>
                                                <a href="#" class="dislike-btn">
                                                    <i class="far fa-thumbs-down"></i> No
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <!-- /Comment List -->
                            
                            <!-- Comment List -->
                            <li>
                                <div class="comment">
                                    <img class="avatar rounded-circle" alt="User Image" src="~/assets/img/patients/patient9.jpg">
                                    <div class="comment-body">
                                        <div class="meta-data">
                                            <span class="comment-author">Walter Roberson</span>
                                            <span class="comment-date">Reviewed 1 Week ago</span>
                                            <div class="review-count rating">
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                        <p class="comment-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                            Curabitur non nulla sit amet nisl tempus
                                        </p>
                                        <div class="comment-reply">
                                            <a class="comment-btn" href="#">
                                                <i class="fas fa-reply"></i> Reply
                                            </a>
                                            <p class="recommend-btn">
                                                <span>Recommend?</span>
                                                <a href="#" class="like-btn">
                                                    <i class="far fa-thumbs-up"></i> Yes
                                                </a>
                                                <a href="#" class="dislike-btn">
                                                    <i class="far fa-thumbs-down"></i> No
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <!-- /Comment List -->
                            
                            <!-- Comment List -->
                            <li>
                                <div class="comment">
                                    <img class="avatar rounded-circle" alt="User Image" src="~/assets/img/patients/patient8.jpg">
                                    <div class="comment-body">
                                        <div class="meta-data">
                                            <span class="comment-author">Daniel Griffing</span>
                                            <span class="comment-date">Reviewed on 1 Nov 2023</span>
                                            <div class="review-count rating">
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                                <i class="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                        <p class="comment-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation.
                                            Curabitur non nulla sit amet nisl tempus
                                        </p>
                                        <div class="comment-reply">
                                            <a class="comment-btn" href="#">
                                                <i class="fas fa-reply"></i> Reply
                                            </a>
                                            <p class="recommend-btn">
                                                <span>Recommend?</span>
                                                <a href="#" class="like-btn">
                                                    <i class="far fa-thumbs-up"></i> Yes
                                                </a>
                                                <a href="#" class="dislike-btn">
                                                    <i class="far fa-thumbs-down"></i> No
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <!-- /Comment List -->
                            
                        </ul>
                        <!-- /Comment List -->
                        
                    </div>
                </div>
            </div>
        </div>

    </div>		
    <!-- /Page Content -->
</template>
<script></script>