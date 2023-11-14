<template>
    <section class="section-all" >
    <Toast position="top-right" />
            <div class="main-wrapper">
                <!-- Breadcrumb -->
                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-12 col-12">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><nuxt-link to="/patient/patientdashboard">Home</nuxt-link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Dashboard</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Breadcrumb -->
                
                <!-- Page Content -->
                <div class="content">
                    <div class="container-fluid">

                        <div class="row">
                            
                            <!-- Profile Sidebar -->
                            <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
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
                                                    <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Tokyo, Japan</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dashboard-widget">
                                        <nav class="dashboard-menu">
                                            <ul>
                                                <li class="active">
                                                    <nuxt-link to="/patient/patientdashboard">
                                                        <i class="fas fa-columns"></i>
                                                        <span>Dashboard</span>
                                                    </nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/patient/patientsearchdoctor">
                                                        <i class="fas fa-search"></i>
                                                        <span>Find your Doctor</span>
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
                                                        <span>Chat</span>
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
                                                        <span>My Profile</span>
                                                    </nuxt-link>
                                                </li>
                                                <li>
                                                    <nuxt-link to="/patient/patientEHR">
                                                        <i class="icofont icofont-medical-sign"></i>
                                                        <span>My Clinical History</span>
                                                    </nuxt-link>
                                                </li>
                                                <li>
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
                            </div>
                            <!-- / Profile Sidebar -->
                            
                            <div class="col-md-7 col-lg-8 col-xl-9">
                                <div class="card">
                                    <div class="card-body pt-0">
                                    
                                        <!-- Tab Menu -->
                                        <nav class="user-tabs mb-4">
                                            <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                                                <li class="nav-item">
                                                    <a class="nav-link active" href="#pat_appointments" data-toggle="tab">Appointments</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#pat_prescriptions" data-toggle="tab">Prescriptions</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#pat_medical_records" data-toggle="tab"><span class="med-records">Medical Records</span></a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#pat_billing" data-toggle="tab">Billing</a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <!-- /Tab Menu -->
                                        
                                        <!-- Tab Content -->
                                        <div class="tab-content pt-0">
                                            
                                            <!-- Appointment Tab -->
                                            <div id="pat_appointments" class="tab-pane fade show active">
                                                <div class="card card-table mb-0">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Doctor</th>
                                                                        <th>Appt Date</th>
                                                                        <th>Booking Date</th>
                                                                        <th>Amount</th>
                                                                        <th>Follow Up</th>
                                                                        <th>Status</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Ruby Perrin <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>14 Nov 2023 <span class="d-block text-info">10.00 AM</span></td>
                                                                        <td>12 Nov 2023</td>
                                                                        <td>$160</td>
                                                                        <td>16 Nov 2023</td>
                                                                        <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>12 Nov 2023 <span class="d-block text-info">8.00 PM</span></td>
                                                                        <td>12 Nov 2023</td>
                                                                        <td>$250</td>
                                                                        <td>14 Nov 2023</td>
                                                                        <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Deborah Angel <span>Cardiology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>11 Nov 2023 <span class="d-block text-info">11.00 AM</span></td>
                                                                        <td>10 Nov 2023</td>
                                                                        <td>$400</td>
                                                                        <td>13 Nov 2023</td>
                                                                        <td><span class="badge badge-pill bg-danger-light">Cancelled</span></td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-04.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Sofia Brient <span>Urology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>10 Nov 2023 <span class="d-block text-info">3.00 PM</span></td>
                                                                        <td>10 Nov 2023</td>
                                                                        <td>$350</td>
                                                                        <td>12 Nov 2023</td>
                                                                        <td><span class="badge badge-pill bg-warning-light">Pending</span></td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-05.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Marvin Campbell <span>Ophthalmology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>9 Nov 2023 <span class="d-block text-info">7.00 PM</span></td>
                                                                        <td>8 Nov 2023</td>
                                                                        <td>$75</td>
                                                                        <td>11 Nov 2023</td>
                                                                        <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-06.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Katharine Berthold <span>Orthopaedics</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>8 Nov 2023 <span class="d-block text-info">9.00 AM</span></td>
                                                                        <td>6 Nov 2023</td>
                                                                        <td>$175</td>
                                                                        <td>10 Nov 2023</td>
                                                                        <td><span class="badge badge-pill bg-danger-light">Cancelled</span></td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-07.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Linda Tobin <span>Neurology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>8 Nov 2023 <span class="d-block text-info">6.00 PM</span></td>
                                                                        <td>6 Nov 2023</td>
                                                                        <td>$450</td>
                                                                        <td>10 Nov 2023</td>
                                                                        <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-08.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Paul Richard <span>Dermatology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>7 Nov 2023 <span class="d-block text-info">9.00 PM</span></td>
                                                                        <td>7 Nov 2023</td>
                                                                        <td>$275</td>
                                                                        <td>9 Nov 2023</td>
                                                                        <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-09.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. John Gibbs <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>6 Nov 2023 <span class="d-block text-info">8.00 PM</span></td>
                                                                        <td>4 Nov 2023</td>
                                                                        <td>$600</td>
                                                                        <td>8 Nov 2023</td>
                                                                        <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-10.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Olga Barlow <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>5 Nov 2023 <span class="d-block text-info">5.00 PM</span></td>
                                                                        <td>1 Nov 2023</td>
                                                                        <td>$100</td>
                                                                        <td>7 Nov 2023</td>
                                                                        <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- /Appointment Tab -->
                                            
                                            <!-- Prescription Tab -->
                                            <div class="tab-pane fade" id="pat_prescriptions">
                                                <div class="card card-table mb-0">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Date </th>
                                                                        <th>Name</th>									
                                                                        <th>Created by </th>
                                                                        <th></th>
                                                                    </tr>     
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>14 Nov 2023</td>
                                                                        <td>Prescription 1</td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Ruby Perrin <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <nuxt-link to="/patient/prescription" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>13 Nov 2023</td>
                                                                        <td>Prescription 2</td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <nuxt-link to="/patient/prescription" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>12 Nov 2023</td>
                                                                        <td>Prescription 3</td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Deborah Angel <span>Cardiology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <nuxt-link to="/patient/prescription" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>11 Nov 2023</td>
                                                                        <td>Prescription 4</td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-04.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Sofia Brient <span>Urology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <nuxt-link to="/patient/prescription" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>10 Nov 2023</td>
                                                                        <td>Prescription 5</td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-05.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Marvin Campbell <span>Ophthalmology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <nuxt-link to="/patient/prescription" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>9 Nov 2023</td>
                                                                        <td>Prescription 6</td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-06.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Marvin Campbell <span>Ophthalmology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <nuxt-link to="/patient/prescription" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>8 Nov 2023</td>
                                                                        <td>Prescription 7</td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-07.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Linda Tobin <span>Neurology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <nuxt-link to="/patient/prescription" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>7 Nov 2023</td>
                                                                        <td>Prescription 8</td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-08.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Paul Richard <span>Dermatology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <nuxt-link to="/patient/prescription" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>6 Nov 2023</td>
                                                                        <td>Prescription 9</td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-09.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. John Gibbs <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <nuxt-link to="/patient/prescription" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>5 Nov 2023</td>
                                                                        <td>Prescription 10</td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-10.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Olga Barlow <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                                <nuxt-link to="/patient/prescription" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>	
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- /Prescription Tab -->
                                                
                                            <!-- Medical Records Tab -->
                                            <div id="pat_medical_records" class="tab-pane fade">
                                                <div class="card card-table mb-0">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>ID</th>
                                                                        <th>Date </th>
                                                                        <th>Description</th>
                                                                        <th>Attachment</th>
                                                                        <th>Created</th>
                                                                        <th></th>
                                                                    </tr>     
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td><a href="javascript:void(0);">#MR-0010</a></td>
                                                                        <td>14 Nov 2023</td>
                                                                        <td>Dental Filling</td>
                                                                        <td><a href="#">dental-test.pdf</a></td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Ruby Perrin <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/medicalrecord" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><a href="javascript:void(0);">#MR-0009</a></td>
                                                                        <td>13 Nov 2023</td>
                                                                        <td>Teeth Cleaning</td>
                                                                        <td><a href="#">dental-test.pdf</a></td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/medicalrecord" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><a href="javascript:void(0);">#MR-0008</a></td>
                                                                        <td>12 Nov 2023</td>
                                                                        <td>General Checkup</td>
                                                                        <td><a href="#">cardio-test.pdf</a></td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Deborah Angel <span>Cardiology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/medicalrecord" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><a href="javascript:void(0);">#MR-0007</a></td>
                                                                        <td>11 Nov 2023</td>
                                                                        <td>General Test</td>
                                                                        <td><a href="#">general-test.pdf</a></td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-04.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Sofia Brient <span>Urology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/medicalrecord" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><a href="javascript:void(0);">#MR-0006</a></td>
                                                                        <td>10 Nov 2023</td>
                                                                        <td>Eye Test</td>
                                                                        <td><a href="#">eye-test.pdf</a></td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-04.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Sofia Brient <span>Urology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/medicalrecord" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><a href="javascript:void(0);">#MR-0005</a></td>
                                                                        <td>9 Nov 2023</td>
                                                                        <td>Leg Pain</td>
                                                                        <td><a href="#">ortho-test.pdf</a></td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-05.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Marvin Campbell <span>Ophthalmology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/medicalrecord" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><a href="javascript:void(0);">#MR-0004</a></td>
                                                                        <td>8 Nov 2023</td>
                                                                        <td>Head pain</td>
                                                                        <td><a href="#">neuro-test.pdf</a></td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-07.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Linda Tobin <span>Neurology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/medicalrecord" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><a href="javascript:void(0);">#MR-0003</a></td>
                                                                        <td>7 Nov 2023</td>
                                                                        <td>Skin Alergy</td>
                                                                        <td><a href="#">alergy-test.pdf</a></td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-08.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Paul Richard <span>Dermatology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/medicalrecord" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><a href="javascript:void(0);">#MR-0002</a></td>
                                                                        <td>6 Nov 2023</td>
                                                                        <td>Dental Removing</td>
                                                                        <td><a href="#">dental-test.pdf</a></td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-09.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. John Gibbs <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/medicalrecord" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td><a href="javascript:void(0);">#MR-0001</a></td>
                                                                        <td>5 Nov 2023</td>
                                                                        <td>Dental Filling</td>
                                                                        <td><a href="#">dental-test.pdf</a></td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-10.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Olga Barlow <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/medicalrecord" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>  	
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- /Medical Records Tab -->
                                            
                                            <!-- Billing Tab -->
                                            <div id="pat_billing" class="tab-pane fade">
                                                <div class="card card-table mb-0">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Invoice No</th>
                                                                        <th>Doctor</th>
                                                                        <th>Amount</th>
                                                                        <th>Paid On</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <nuxt-link to="/patient/invoiceview">#INV-0010</nuxt-link>
                                                                        </td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Ruby Perrin <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>$450</td>
                                                                        <td>14 Nov 2023</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/invoiceview" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <nuxt-link to="/patient/invoiceview">#INV-0009</nuxt-link>
                                                                        </td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>$300</td>
                                                                        <td>13 Nov 2023</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/invoiceview" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <nuxt-link to="/patient/invoiceview">#INV-0008</nuxt-link>
                                                                        </td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Deborah Angel <span>Cardiology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>$150</td>
                                                                        <td>12 Nov 2023</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/invoiceview" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <nuxt-link to="/patient/invoiceview">#INV-0007</nuxt-link>
                                                                        </td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-04.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Sofia Brient <span>Urology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>$50</td>
                                                                        <td>11 Nov 2023</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/invoiceview" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <nuxt-link to="/patient/invoiceview">#INV-0006</nuxt-link>
                                                                        </td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-05.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Marvin Campbell <span>Ophthalmology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>$600</td>
                                                                        <td>10 Nov 2023</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/invoiceview" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <nuxt-link to="/patient/invoiceview">#INV-0005</nuxt-link>
                                                                        </td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-06.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Katharine Berthold <span>Orthopaedics</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>$200</td>
                                                                        <td>9 Nov 2023</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/invoiceview" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <nuxt-link to="/patient/invoiceview">#INV-0004</nuxt-link>
                                                                        </td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-07.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Linda Tobin <span>Neurology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>$100</td>
                                                                        <td>8 Nov 2023</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/invoiceview" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <nuxt-link to="/patient/invoiceview">#INV-0003</nuxt-link>
                                                                        </td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-08.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Paul Richard <span>Dermatology</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>$250</td>
                                                                        <td>7 Nov 2023</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/invoiceview" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <nuxt-link to="/patient/invoiceview">#INV-0002</nuxt-link>
                                                                        </td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-09.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. John Gibbs <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>$175</td>
                                                                        <td>6 Nov 2023</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/invoiceview" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <nuxt-link to="/patient/invoiceview">#INV-0001</nuxt-link>
                                                                        </td>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <nuxt-link to="/patient/doctorprofile" class="avatar avatar-sm mr-2">
                                                                                    <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-10.jpg" alt="User Image">
                                                                                </nuxt-link>
                                                                                <nuxt-link to="/patient/doctorprofile">Dr. Olga Barlow <span>Dental</span></nuxt-link>
                                                                            </h2>
                                                                        </td>
                                                                        <td>$550</td>
                                                                        <td>5 Nov 2023</td>
                                                                        <td class="text-right">
                                                                            <div class="table-action">
                                                                                <nuxt-link to="/patient/invoiceview" class="btn btn-sm bg-info-light">
                                                                                    <i class="far fa-eye"></i> View
                                                                                </nuxt-link>
                                                                                <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                                    <i class="fas fa-print"></i> Print
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- /Billing Tab -->
                                            
                                        </div>
                                        <!-- Tab Content -->
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>		
                <!-- /Page Content -->
            </div>
    </section>
        
</template>

<style>

</style>
<script></script>