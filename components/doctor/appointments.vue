<template>
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><nuxt-link to="/doctor/doctordashboard">Home</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Appointments</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title">Appointments</h2>
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
                                    <li class="active">
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
                    <div class="appointments">
                    
                        <!-- Appointment List -->
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <nuxt-link to="/doctor/patientprofile" class="booking-doc-img">
                                    <img src="~/assets/img/patients/patient.jpg" alt="User Image">
                                </nuxt-link>
                                <div class="profile-det-info">
                                    <h3><nuxt-link to="/doctor/patientprofile">Takeo Fukuda</nuxt-link></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 14 Nov 2023, 10.00 AM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Manama, Bahrain</h5>
                                        <h5><i class="fas fa-envelope"></i> richard@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 923 782 4575</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <!-- /Appointment List -->
                    
                        <!-- Appointment List -->
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <nuxt-link to="/doctor/patientprofile" class="booking-doc-img">
                                    <img src="~/assets/img/patients/patient1.jpg" alt="User Image">
                                </nuxt-link>
                                <div class="profile-det-info">
                                    <h3><nuxt-link to="/doctor/patientprofile">Charlene Reed </nuxt-link></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 12 Nov 2023, 5.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> North Carolina, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> charlenereed@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 828 632 9170</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <!-- /Appointment List -->
                        
                        <!-- Appointment List -->
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <nuxt-link to="/doctor/patientprofile" class="booking-doc-img">
                                    <img src="~/assets/img/patients/patient2.jpg" alt="User Image">
                                </nuxt-link>
                                <div class="profile-det-info">
                                    <h3><nuxt-link to="/doctor/patientprofile">Travis Trimble</nuxt-link></h3>
                                    
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 11 Nov 2023, 8.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Maine, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> travistrimble@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 207 729 9974</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <!-- /Appointment List -->
                        
                        <!-- Appointment List -->
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <nuxt-link to="/doctor/patientprofile" class="booking-doc-img">
                                    <img src="~/assets/img/patients/patient3.jpg" alt="User Image">
                                </nuxt-link>
                                <div class="profile-det-info">
                                    <h3><nuxt-link to="/doctor/patientprofile">Carl Kelly</nuxt-link></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 9 Nov 2023, 9.00 AM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Manama, Bahrain</h5>
                                        <h5><i class="fas fa-envelope"></i> carlkelly@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 260 724 7769</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <!-- /Appointment List -->
                        
                        <!-- Appointment List -->
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <nuxt-link to="/doctor/patientprofile" class="booking-doc-img">
                                    <img src="~/assets/img/patients/patient4.jpg" alt="User Image">
                                </nuxt-link>
                                <div class="profile-det-info">
                                    <h3><nuxt-link to="/doctor/patientprofile">Michelle Fairfax</nuxt-link></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 9 Nov 2023, 1.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Indiana, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> michellefairfax@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 504 368 6874</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <!-- /Appointment List -->
                        
                        <!-- Appointment List -->
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <nuxt-link to="/doctor/patientprofile" class="booking-doc-img">
                                    <img src="~/assets/img/patients/patient5.jpg" alt="User Image">
                                </nuxt-link>
                                <div class="profile-det-info">
                                    <h3><nuxt-link to="/doctor/patientprofile">Gina Moore</nuxt-link></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 8 Nov 2023, 3.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Florida, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> ginamoore@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 954 820 7887</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <!-- /Appointment List -->
                        
                        <!-- Appointment List -->
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <nuxt-link to="/doctor/patientprofile" class="booking-doc-img">
                                    <img src="~/assets/img/patients/patient6.jpg" alt="User Image">
                                </nuxt-link>
                                <div class="profile-det-info">
                                    <h3><nuxt-link to="/doctor/patientprofile">Elsie Gilley</nuxt-link></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 6 Nov 2023, 9.00 AM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Kentucky, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> elsiegilley@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 315 384 4562</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <!-- /Appointment List -->
                        
                        <!-- Appointment List -->
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <nuxt-link to="/doctor/patientprofile" class="booking-doc-img">
                                    <img src="~/assets/img/patients/patient7.jpg" alt="User Image">
                                </nuxt-link>
                                <div class="profile-det-info">
                                    <h3><nuxt-link to="/doctor/patientprofile">Joan Gardner</nuxt-link></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 5 Nov 2023, 12.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> California, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> joangardner@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 707 2202 603</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <!-- /Appointment List -->
                        
                        <!-- Appointment List -->
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <nuxt-link to="/doctor/patientprofile" class="booking-doc-img">
                                    <img src="~/assets/img/patients/patient8.jpg" alt="User Image">
                                </nuxt-link>
                                <div class="profile-det-info">
                                    <h3><nuxt-link to="/doctor/patientprofile">Daniel Griffing</nuxt-link></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 5 Nov 2023, 7.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> New Jersey, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> danielgriffing@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 973 773 9497</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <!-- /Appointment List -->
                        
                        <!-- Appointment List -->
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <nuxt-link to="/doctor/patientprofile" class="booking-doc-img">
                                    <img src="~/assets/img/patients/patient9.jpg" alt="User Image">
                                </nuxt-link>
                                <div class="profile-det-info">
                                    <h3><nuxt-link to="/doctor/patientprofile">Walter Roberson</nuxt-link></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 4 Nov 2023, 10.00 AM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Florida, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> walterroberson@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 850 358 4445</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <!-- /Appointment List -->
                        
                        <!-- Appointment List -->
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <nuxt-link to="/doctor/patientprofile" class="booking-doc-img">
                                    <img src="~/assets/img/patients/patient10.jpg" alt="User Image">
                                </nuxt-link>
                                <div class="profile-det-info">
                                    <h3><nuxt-link to="/doctor/patientprofile">Robert Rhodes</nuxt-link></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 4 Nov 2023, 11.00 AM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> California, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> robertrhodes@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 858 259 5285</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <!-- /Appointment List -->
                        
                        <!-- Appointment List -->
                        <div class="appointment-list">
                            <div class="profile-info-widget">
                                <nuxt-link to="/doctor/patientprofile" class="booking-doc-img">
                                    <img src="~/assets/img/patients/patient11.jpg" alt="User Image">
                                </nuxt-link>
                                <div class="profile-det-info">
                                    <h3><nuxt-link to="/doctor/patientprofile">Harry Williams</nuxt-link></h3>
                                    <div class="patient-details">
                                        <h5><i class="far fa-clock"></i> 3 Nov 2023, 6.00 PM</h5>
                                        <h5><i class="fas fa-map-marker-alt"></i> Colorado, United States</h5>
                                        <h5><i class="fas fa-envelope"></i> harrywilliams@example.com</h5>
                                        <h5 class="mb-0"><i class="fas fa-phone"></i> +1 303 607 7075</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="appointment-action">
                                <a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
                                    <i class="far fa-eye"></i> View
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                    <i class="fas fa-check"></i> Accept
                                </a>
                                <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                    <i class="fas fa-times"></i> Cancel
                                </a>
                            </div>
                        </div>
                        <!-- /Appointment List -->
                        
                    </div>
                </div>
            </div>

        </div>

    </div>		
    <!-- /Page Content -->
    <!-- Appointment Details Modal -->
    <div class="modal fade custom-modal" id="appt_details">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Appointment Details</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="info-details">
                        <li>
                            <div class="details-header">
                                <div class="row">
                                    <div class="col-md-6">
                                        <span class="title">#APT0001</span>
                                        <span class="text">21 Oct 2023 10:00 AM</span>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="text-right">
                                            <button type="button" class="btn bg-success-light btn-sm" id="topup_status">Completed</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span class="title">Status:</span>
                            <span class="text">Completed</span>
                        </li>
                        <li>
                            <span class="title">Confirm Date:</span>
                            <span class="text">29 Jun 2023</span>
                        </li>
                        <li>
                            <span class="title">Paid Amount</span>
                            <span class="text">$450</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- /Appointment Details Modal -->
</template>
<script></script>