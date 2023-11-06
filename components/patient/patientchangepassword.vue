<template>
    <section class="section-all" >
    <Toast position="top-right" />
        <div class="account-page">
            <div class="main-wrapper">
                <!-- Breadcrumb -->
                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-12 col-12">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><nuxt-link to="/patient/patientdashboard">Home</nuxt-link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Change Password</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Change Password</h2>
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
                                                <img src="~/assets/img/patients/patient.jpg" alt="User Image">
                                            </a>
                                            <div class="profile-det-info">
                                                <h3>Takeo Fukuda</h3>
                                                <div class="patient-details">
                                                    <h5><i class="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Newyork, USA</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dashboard-widget">
                                        <nav class="dashboard-menu">
                                            <ul>
                                                <li>
                                                    <nuxt-link to="/patient/patientdashboard">
                                                        <i class="fas fa-columns"></i>
                                                        <span>Dashboard</span>
                                                    </nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/patient/patientsearchdoctor">
                                                        <i class="fas fa-search"></i>
                                                        <span>Search Doctor</span>
                                                    </nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/patient/patientfamilymember">
                                                        <i class="fas fa-person-booth"></i>
                                                        <span>Family Member</span>
                                                    </nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/patient/patientchat">
                                                        <i class="fas fa-comments"></i>
                                                        <span>Message</span>
                                                        <small class="unread-msg">23</small>
                                                    </nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/patient/patienttreatplan">
                                                        <i class="icofont icofont-calendar"></i>
                                                        <span>Calendar</span>
                                                    </nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/patient/patientprofilesetting">
                                                        <i class="fas fa-user-cog"></i>
                                                        <span>Profile Settings</span>
                                                    </nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/patient/patientEHR">
                                                        <i class="icofont icofont-medical-sign"></i>
                                                        <span>Electronic Health Records</span>
                                                    </nuxt-link>
                                                </li>
                                                <li class="active">
                                                    <nuxt-link to="/patient/patientchangepassword">
                                                        <i class="fas fa-lock"></i>
                                                        <span>Change Password</span>
                                                    </nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/patient/patientdashboard">
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
                                        <div class="row">
                                            <div class="col-md-12 col-lg-6">
                                            
                                                <!-- Change Password Form -->
                                                <form>
                                                    <div class="form-group">
                                                        <label>Old Password</label>
                                                        <input type="password" class="form-control">
                                                    </div>
                                                    <div class="form-group">
                                                        <label>New Password</label>
                                                        <input type="password" class="form-control">
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Confirm Password</label>
                                                        <input type="password" class="form-control">
                                                    </div>
                                                    <div class="submit-section">
                                                        <button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
                                                    </div>
                                                </form>
                                                <!-- /Change Password Form -->
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
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