<template>
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><nuxt-link to="/doctor/doctordashboard">Home</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Social Media</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title">Social Media</h2>
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
                                    <li>
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
                                    <li class="active">
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
                    <div class="card">
                        <div class="card-body">
                        
                            <!-- Social Form -->
                            <form>                                                                                           
                                <div class="row">
                                    <div class="col-md-12 col-lg-8">
                                        <div class="form-group">
                                            <label>Facebook URL</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 col-lg-8">
                                        <div class="form-group">
                                            <label>Twitter URL</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 col-lg-8">
                                        <div class="form-group">
                                            <label>Instagram URL</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 col-lg-8">
                                        <div class="form-group">
                                            <label>Pinterest URL</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 col-lg-8">
                                        <div class="form-group">
                                            <label>Linkedin URL</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 col-lg-8">
                                        <div class="form-group">
                                            <label>Youtube URL</label>
                                            <input type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="submit-section">
                                    <button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
                                </div>
                            </form>
                            <!-- /Social Form -->
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>		
    <!-- /Page Content -->
</template>
<script></script>