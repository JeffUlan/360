<template>
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><nuxt-link to="/doctor/doctordashboard">Home</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Doctor</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title">Patient Profile</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->
    
    <!-- Page Content -->
    <div class="content">
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar dct-dashbd-lft">
                
                    <!-- Profile Widget -->
                    <div class="card widget-profile pat-widget-profile">
                        <div class="card-body">
                            <div class="pro-widget-content">
                                <div class="profile-info-widget">
                                    <a href="#" class="booking-doc-img">
                                        <img src="~/assets/img/patients/patient.jpg" alt="User Image">
                                    </a>
                                    <div class="profile-det-info">
                                        <h3>Takeo Fukuda</h3>
                                        
                                        <div class="patient-details">
                                            <h5><b>Patient ID :</b> PT0016</h5>
                                            <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Manama, Bahrain</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="patient-info">
                                <ul>
                                    <li>Phone <span>+1 952 001 8563</span></li>
                                    <li>Age <span>38 Years, Male</span></li>
                                    <li>Blood Group <span>AB+</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Profile Widget -->
                    
                    <!-- Last Booking -->
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title">Last Booking</h4>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <div class="media align-items-center">
                                    <div class="mr-3">
                                        <img alt="Image placeholder" src="~/assets/img/doctors/doctor-thumb-02.jpg" class="avatar  rounded-circle">
                                    </div>
                                    <div class="media-body">
                                        <h5 class="d-block mb-0">Dr. Darren Elder </h5>
                                        <span class="d-block text-sm text-muted">Dentist</span>
                                        <span class="d-block text-sm text-muted">14 Nov 2023 5.00 PM</span>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="media align-items-center">
                                    <div class="mr-3">
                                        <img alt="Image placeholder" src="~/assets/img/doctors/doctor-thumb-02.jpg" class="avatar  rounded-circle">
                                    </div>
                                    <div class="media-body">
                                        <h5 class="d-block mb-0">Dr. Darren Elder </h5>
                                        <span class="d-block text-sm text-muted">Dentist</span>
                                        <span class="d-block text-sm text-muted">12 Nov 2023 11.00 AM</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- /Last Booking -->
                    
                </div>

                <div class="col-md-7 col-lg-8 col-xl-9 dct-appoinment">
                    <div class="card">
                        <div class="card-body pt-0">
                            <div class="user-tabs">
                                <ul class="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#pat_appointments" data-toggle="tab">Appointments</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#pres" data-toggle="tab"><span>Prescription</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#medical" data-toggle="tab"><span class="med-records">Medical Records</span></a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#billing" data-toggle="tab"><span>Billing</span></a>
                                    </li> 
                                    <li class="nav-item">
                                        <a class="nav-link" href="#patientEHR" data-toggle="tab"><span>PatientEHR</span></a>
                                    </li> 
                                </ul>
                            </div>
                            <div class="tab-content">
                                
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
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>14 Nov 2023 <span class="d-block text-info">10.00 AM</span></td>
                                                            <td>12 Nov 2023</td>
                                                            <td>$160</td>
                                                            <td>16 Nov 2023</td>
                                                            <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                                                            <td class="text-right">
                                                                <div class="table-action">
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                        <i class="far fa-edit"></i> Edit
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>12 Nov 2023 <span class="d-block text-info">8.00 PM</span></td>
                                                            <td>12 Nov 2023</td>
                                                            <td>$250</td>
                                                            <td>14 Nov 2023</td>
                                                            <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                                                            <td class="text-right">
                                                                <div class="table-action">
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                        <i class="far fa-edit"></i> Edit
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>11 Nov 2023 <span class="d-block text-info">11.00 AM</span></td>
                                                            <td>10 Nov 2023</td>
                                                            <td>$400</td>
                                                            <td>13 Nov 2023</td>
                                                            <td><span class="badge badge-pill bg-danger-light">Cancelled</span></td>
                                                            <td class="text-right">
                                                                <div class="table-action">
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                        <i class="far fa-edit"></i> Edit
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>10 Nov 2023 <span class="d-block text-info">3.00 PM</span></td>
                                                            <td>10 Nov 2023</td>
                                                            <td>$350</td>
                                                            <td>12 Nov 2023</td>
                                                            <td><span class="badge badge-pill bg-warning-light">Pending</span></td>
                                                            <td class="text-right">
                                                                <div class="table-action">
                                                                    <nuxt-link to="/doctor/editprescription" class="btn btn-sm bg-success-light">
                                                                        <i class="far fa-edit"></i> Edit
                                                                    </nuxt-link>
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                        <i class="far fa-trash-alt"></i> Cancel
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>9 Nov 2023 <span class="d-block text-info">7.00 PM</span></td>
                                                            <td>8 Nov 2023</td>
                                                            <td>$75</td>
                                                            <td>11 Nov 2023</td>
                                                            <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                                                            <td class="text-right">
                                                                <div class="table-action">
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                        <i class="far fa-edit"></i> Edit
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>8 Nov 2023 <span class="d-block text-info">9.00 AM</span></td>
                                                            <td>6 Nov 2023</td>
                                                            <td>$175</td>
                                                            <td>10 Nov 2023</td>
                                                            <td><span class="badge badge-pill bg-danger-light">Cancelled</span></td>
                                                            <td class="text-right">
                                                                <div class="table-action">
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                        <i class="far fa-edit"></i> Edit
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>8 Nov 2023 <span class="d-block text-info">6.00 PM</span></td>
                                                            <td>6 Nov 2023</td>
                                                            <td>$450</td>
                                                            <td>10 Nov 2023</td>
                                                            <td><span class="badge badge-pill bg-success-light">Confirm</span></td>
                                                            <td class="text-right">
                                                                <div class="table-action">
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                                                                        <i class="far fa-edit"></i> Edit
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>7 Nov 2023 <span class="d-block text-info">9.00 PM</span></td>
                                                            <td>7 Nov 2023</td>
                                                            <td>$275</td>
                                                            <td>9 Nov 2023</td>
                                                            <td><span class="badge badge-pill bg-info-light">Completed</span></td>
                                                            <td class="text-right">
                                                                <div class="table-action">
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                        <i class="far fa-clock"></i> Reschedule
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>6 Nov 2023 <span class="d-block text-info">8.00 PM</span></td>
                                                            <td>4 Nov 2023</td>
                                                            <td>$600</td>
                                                            <td>8 Nov 2023</td>
                                                            <td><span class="badge badge-pill bg-info-light">Completed</span></td>
                                                            <td class="text-right">
                                                                <div class="table-action">
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                        <i class="far fa-clock"></i> Reschedule
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>5 Nov 2023 <span class="d-block text-info">5.00 PM</span></td>
                                                            <td>1 Nov 2023</td>
                                                            <td>$100</td>
                                                            <td>7 Nov 2023</td>
                                                            <td><span class="badge badge-pill bg-info-light">Completed</span></td>
                                                            <td class="text-right">
                                                                <div class="table-action">
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                        <i class="far fa-clock"></i> Reschedule
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
                                <div class="tab-pane fade" id="pres">
                                    <div class="text-right">
                                        <nuxt-link to="/doctor/addprescription" class="add-new-btn">Add Prescription</nuxt-link>
                                    </div>
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
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Ruby Perrin <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td>13 Nov 2023</td>
                                                            <td>Prescription 2</td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td class="text-right">
                                                                <div class="table-action">
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                        <i class="fas fa-print"></i> Print
                                                                    </a>
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                        <i class="far fa-eye"></i> View
                                                                    </a>
                                                                    <nuxt-link to="/doctor/editprescription" class="btn btn-sm bg-success-light">
                                                                        <i class="fas fa-edit"></i> Edit
                                                                    </nuxt-link>
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                        <i class="far fa-trash-alt"></i> Delete
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>12 Nov 2023</td>
                                                            <td>Prescription 3</td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Deborah Angel <span>Cardiology</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td>11 Nov 2023</td>
                                                            <td>Prescription 4</td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-04.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Sofia Brient <span>Urology</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td>10 Nov 2023</td>
                                                            <td>Prescription 5</td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-05.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Marvin Campbell <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td>9 Nov 2023</td>
                                                            <td>Prescription 6</td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-06.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Katharine Berthold <span>Orthopaedics</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td>8 Nov 2023</td>
                                                            <td>Prescription 7</td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-07.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Linda Tobin <span>Neurology</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td>7 Nov 2023</td>
                                                            <td>Prescription 8</td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-08.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Paul Richard <span>Dermatology</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td>6 Nov 2023</td>
                                                            <td>Prescription 9</td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-09.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. John Gibbs <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td>5 Nov 2023</td>
                                                            <td>Prescription 10</td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-10.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Olga Barlow <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                <!-- /Prescription Tab -->

                                <!-- Medical Records Tab -->
                                <div class="tab-pane fade" id="medical">
                                    <div class="text-right">		
                                        <a href="#" class="add-new-btn" data-toggle="modal" data-target="#add_medical_records">Add Medical Records</a>
                                    </div>
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
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Ruby Perrin <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td><a href="javascript:void(0);">#MR-0009</a></td>
                                                            <td>13 Nov 2023</td>
                                                            <td>Teeth Cleaning</td>
                                                            <td><a href="#">dental-test.pdf</a></td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td class="text-right">
                                                                <div class="table-action">
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                        <i class="fas fa-print"></i> Print
                                                                    </a>
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                        <i class="far fa-eye"></i> View
                                                                    </a>
                                                                    <nuxt-link to="/doctor/editprescription" class="btn btn-sm bg-success-light" data-toggle="modal" data-target="#add_medical_records">
                                                                        <i class="fas fa-edit"></i> Edit
                                                                    </nuxt-link>
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                        <i class="far fa-trash-alt"></i> Delete
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
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Deborah Angel <span>Cardiology</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td><a href="javascript:void(0);">#MR-0007</a></td>
                                                            <td>11 Nov 2023</td>
                                                            <td>General Test</td>
                                                            <td><a href="#">general-test.pdf</a></td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-04.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Sofia Brient <span>Urology</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td><a href="javascript:void(0);">#MR-0006</a></td>
                                                            <td>10 Nov 2023</td>
                                                            <td>Eye Test</td>
                                                            <td><a href="#">eye-test.pdf</a></td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-05.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Marvin Campbell <span>Ophthalmology</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td><a href="javascript:void(0);">#MR-0005</a></td>
                                                            <td>9 Nov 2023</td>
                                                            <td>Leg Pain</td>
                                                            <td><a href="#">ortho-test.pdf</a></td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-06.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Katharine Berthold <span>Orthopaedics</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td><a href="javascript:void(0);">#MR-0004</a></td>
                                                            <td>8 Nov 2023</td>
                                                            <td>Head pain</td>
                                                            <td><a href="#">neuro-test.pdf</a></td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-07.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Linda Tobin <span>Neurology</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td><a href="javascript:void(0);">#MR-0003</a></td>
                                                            <td>7 Nov 2023</td>
                                                            <td>Skin Alergy</td>
                                                            <td><a href="#">alergy-test.pdf</a></td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-08.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Paul Richard <span>Dermatology</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td><a href="javascript:void(0);">#MR-0002</a></td>
                                                            <td>6 Nov 2023</td>
                                                            <td>Dental Removing</td>
                                                            <td><a href="#">dental-test.pdf</a></td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-09.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. John Gibbs <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                                            <td><a href="javascript:void(0);">#MR-0001</a></td>
                                                            <td>5 Nov 2023</td>
                                                            <td>Dental Filling</td>
                                                            <td><a href="#">dental-test.pdf</a></td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-10.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Olga Barlow <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
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
                                <!-- /Medical Records Tab -->
                                
                                <!-- Billing Tab -->
                                <div class="tab-pane" id="billing">
                                    <div class="text-right">
                                        <nuxt-link class="add-new-btn" to="/doctor/addbilling">Add Billing</nuxt-link>
                                    </div>
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
                                                                <a href="#">#INV-0010</a>
                                                            </td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Ruby Perrin <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>$450</td>
                                                            <td>14 Nov 2023</td>
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
                                                                <a href="#">#INV-0009</a>
                                                            </td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Darren Elder <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>$300</td>
                                                            <td>13 Nov 2023</td>
                                                            <td class="text-right">
                                                                <div class="table-action">
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
                                                                        <i class="fas fa-print"></i> Print
                                                                    </a>
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-info-light">
                                                                        <i class="far fa-eye"></i> View
                                                                    </a>
                                                                    <nuxt-link to="/doctor/editbilling" class="btn btn-sm bg-success-light">
                                                                        <i class="fas fa-edit"></i> Edit
                                                                    </nuxt-link>
                                                                    <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                        <i class="far fa-trash-alt"></i> Delete
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <a href="#">#INV-0008</a>
                                                            </td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-03.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Deborah Angel <span>Cardiology</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>$150</td>
                                                            <td>12 Nov 2023</td>
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
                                                                <a href="#">#INV-0007</a>
                                                            </td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-04.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Sofia Brient <span>Urology</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>$50</td>
                                                            <td>11 Nov 2023</td>
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
                                                                <a href="#">#INV-0006</a>
                                                            </td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-05.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Marvin Campbell <span>Ophthalmology</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>$600</td>
                                                            <td>10 Nov 2023</td>
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
                                                                <a href="#">#INV-0005</a>
                                                            </td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-06.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Katharine Berthold <span>Orthopaedics</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>$200</td>
                                                            <td>9 Nov 2023</td>
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
                                                                <a href="#">#INV-0004</a>
                                                            </td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-07.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Linda Tobin <span>Neurology</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>$100</td>
                                                            <td>8 Nov 2023</td>
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
                                                                <a href="#">#INV-0003</a>
                                                            </td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-08.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Paul Richard <span>Dermatology</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>$250</td>
                                                            <td>7 Nov 2023</td>
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
                                                                <a href="#">#INV-0002</a>
                                                            </td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-09.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. John Gibbs <span>Dental</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>$175</td>
                                                            <td>6 Nov 2023</td>
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
                                                                <a href="#">#INV-0001</a>
                                                            </td>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <nuxt-link to="/doctor/doctorprofile" class="avatar avatar-sm mr-2">
                                                                        <img class="avatar-img rounded-circle" src="~/assets/img/doctors/doctor-thumb-10.jpg" alt="User Image">
                                                                    </nuxt-link>
                                                                    <nuxt-link to="/doctor/doctorprofile">Dr. Olga Barlow <span>#0010</span></nuxt-link>
                                                                </h2>
                                                            </td>
                                                            <td>$550</td>
                                                            <td>5 Nov 2023</td>
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
                                <!-- Billing Tab -->

                                <!-- Patient History -->
                                <div class="tab-pane" id="patientEHR">
                                    <!-- Page Content -->
                                        <div class="card card-table mb-0 border-0">
                                            <div class="card-body">
                                                <!-- My Profiles Form -->
                                                <form>
                                                    <div class="row form-row">
                                                        <div class="col-6 col-md-6">
                                                            <div class="form-group">
                                                                <label>Medical history (past illnesses, surgeries)</label>
                                                                <textarea type="text" class="form-control h-150" value=""></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-6 col-md-6">
                                                            <div class="form-group">
                                                                <label>Family medical history</label>
                                                                <textarea type="text" class="form-control h-150" value=""></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-6 col-md-6">
                                                            <div class="form-group">
                                                                <label>Social history (lifestyle habits, occupation)</label>
                                                                <textarea type="text" class="form-control h-150" value=""></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-6 col-md-6">
                                                            <div class="form-group">
                                                                <label>Immunization history</label>
                                                                <textarea type="text" class="form-control h-150" value=""></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Allergies and adverse reactions</label>
                                                                <textarea type="text" class="form-control h-150" value=""></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 dropzone-b mb-30">
                                                            <div class="form-group dropzone-b">
                                                                <label>Medications</label>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Current medications</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Previous medications</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Dosages, frequencies, and routes</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Medication allergies</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 dropzone-b mb-30">
                                                            <div class="form-group dropzone-b">
                                                                <label>Vital Signs</label>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-4 col-md-4">
                                                                    <div class="form-group">
                                                                        <label>Blood pressure</label>
                                                                        <input type="text" class="form-control" value="">
                                                                    </div>
                                                                </div>
                                                                <div class="col-4 col-md-4">
                                                                    <div class="form-group">
                                                                        <label>Heart rate</label>
                                                                        <input type="text" class="form-control" value="">
                                                                    </div>
                                                                </div>
                                                                <div class="col-4 col-md-4">
                                                                    <div class="form-group">
                                                                        <label>Respiratory rate</label>
                                                                        <input type="text" class="form-control" value="">
                                                                    </div>
                                                                </div>
                                                                <div class="col-4 col-md-4">
                                                                    <div class="form-group">
                                                                        <label>Temperature</label>
                                                                        <input type="text" class="form-control" value="">
                                                                    </div>
                                                                </div>
                                                                <div class="col-4 col-md-4">
                                                                    <div class="form-group">
                                                                        <label>Height and weight</label>
                                                                        <input type="text" class="form-control" value="">
                                                                    </div>
                                                                </div>
                                                                <div class="col-4 col-md-4">
                                                                    <div class="form-group">
                                                                        <label>Body mass index (BMI)</label>
                                                                        <input type="text" class="form-control" value="">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 dropzone-b mb-30">
                                                            <div class="form-group dropzone-b">
                                                                <label>Clinical Notes</label>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Progress notes (physician, nurse, or therapist notes)</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Consultation notes</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Procedure notes</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>History and physical examination (H&P) notes</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 dropzone-b mb-30">
                                                            <div class="form-group dropzone-b">
                                                                <label>Laboratory and Diagnostic Tests</label>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Test orders and results</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Imaging reports (X-rays, MRIs, CT scans)</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Pathology reports</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>ECG (Electrocardiogram) results</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Problem List</label>
                                                                <textarea type="text" class="form-control h-150" value="" placeholder="A list of the patient's current and past medical problems or diagnoses"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 dropzone-b mb-30">
                                                            <div class="form-group dropzone-b">
                                                                <label>Treatment Plans</label>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Current and past treatment plans</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Medication orders</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Surgical procedures</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Therapies (e.g., physical therapy, occupational therapy)</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Allergies and Adverse Reactions</label>
                                                                <textarea type="text" class="form-control h-150" value="" placeholder="Documentation of known allergies and adverse reactions to medications or substances"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Immunizations</label>
                                                                <textarea type="text" class="form-control h-150" value="" placeholder="Records of administered vaccines and immunizations"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 dropzone-b mb-30">
                                                            <div class="form-group dropzone-b">
                                                                <label>Radiology and Imaging</label>
                                                            </div>
                                                            <div class="upload-wrap">
                                                                <div class="upload-images">
                                                                    <img src="~/assets/img/medical/medical-01.jpg" alt="Upload Image">
                                                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm"><i class="far fa-trash-alt fw"></i></a>
                                                                </div>
                                                                <div class="upload-images">
                                                                    <img src="~/assets/img/medical/medical-02.jpg" alt="Upload Image">
                                                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm"><i class="far fa-trash-alt fw"></i></a>
                                                                </div>
                                                                <div class="upload-images">
                                                                    <img src="~/assets/img/medical/medical-03.jpg" alt="Upload Image">
                                                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm"><i class="far fa-trash-alt fw"></i></a>
                                                                </div>
                                                                <div class="signature-wrap upload-images">
                                                                    <div class="signature"><i class="icofont icofont-plus-circle add-image"></i></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-md-12">
                                                                <div class="form-group">
                                                                    <label>Related reports</label>
                                                                    <textarea type="text" class="form-control h-150" value="" placeholder="Documentation of known allergies and adverse reactions to medications or substances"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-12 dropzone-b mb-30">
                                                            <div class="form-group dropzone-b">
                                                                <label>Insurance and Billing Information</label>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Insurance provider details</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6 col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Billing information for healthcare services</label>
                                                                        <textarea type="text" class="form-control h-150" value=""></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Patient Consent and Authorizations</label>
                                                                <textarea type="text" class="form-control h-150" value="" placeholder="Records of patient consents, authorizations, and releases of information"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Advance Directives</label>
                                                                <textarea type="text" class="form-control h-150" value="" placeholder="Documentation of living wills, healthcare proxies, and do-not-resuscitate (DNR) orders"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Patient Education Materials</label>
                                                                <textarea type="text" class="form-control h-150" value="" placeholder="Educational resources provided to the patient"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Referrals and Consultations</label>
                                                                <textarea type="text" class="form-control h-150" value="" placeholder="Information on referred specialists and consultations"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Secure Messaging and Communications</label>
                                                                <textarea type="text" class="form-control h-150" value="" placeholder="Secure communication records between patients and healthcare providers"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Healthcare Provider Notes</label>
                                                                <textarea type="text" class="form-control h-150" value="" placeholder="Notes entered by various healthcare providers involved in the patient's care"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Patient Goals and Care Plans</label>
                                                                <textarea type="text" class="form-control h-150" value="" placeholder="Patient-specific goals and care plans for managing chronic conditions or health improvement"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-12">
                                                            <div class="form-group">
                                                                <label>Audit Trail</label>
                                                                <textarea type="text" class="form-control h-150" value="" placeholder="A log of who accessed and made changes to the EHR"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-lg-12 col-md-12 col-12">
                                                        <div class="form-group">
                                                            <input type="checkbox" id="accept" class="w-a">
                                                            <label for="accept">&nbsp;Are you agree to export uploaded Images?</label><br>
                                                        </div>
                                                    </div>

                                                    <button type="submit" class="btn btn-primary submit-btn mr-10">Save Changes</button>
                                                    <a class="btn btn-primary submit-btn fw mr-10">Export to PDF</a>
                                                    <a class="btn btn-primary submit-btn fw">Delete EHR</a>
                                                    
                                                    
                                                </form>
                                                <!-- /My Profiles Form -->
                                                
                                            </div>
                                        </div>
                                    <!-- /Page Content -->
                                </div>
                                <!-- Patient History -->
                                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>		
    <!-- /Page Content -->
    <!-- Add Medical Records Modal -->
    <div class="modal fade custom-modal" id="add_medical_records">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">Medical Records</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <form>					
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Date</label>
                            <input type="text" class="form-control datetimepicker datepicker" id="datepicker" value="31-10-2023">
                        </div>
                        <div class="form-group">
                            <label>Description ( Optional )</label>
                            <textarea class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Upload File</label> 
                            <input type="file" class="form-control">
                        </div>	
                        <div class="submit-section text-center">
                            <button type="submit" class="btn btn-primary submit-btn">Submit</button>
                            <button type="button" class="btn btn-secondary submit-btn" data-dismiss="modal">Cancel</button>							
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- /Add Medical Records Modal -->
</template>
<script>
export default {
    name: 'patientprofile',
    components: {     
    },
    mounted() {
        
        var Datepicker = function(element, options){
            this.element = $(element);
            this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||'mm/dd/yyyy');
            this.picker = $(DPGlobal.template)
                                .appendTo('body')
                                .on({
                                    click: $.proxy(this.click, this)//,
                                    //mousedown: $.proxy(this.mousedown, this)
                                });
            this.isInput = this.element.is('input');
            this.component = this.element.is('.date') ? this.element.find('.add-on') : false;
            
            if (this.isInput) {
                this.element.on({
                    focus: $.proxy(this.show, this),
                    //blur: $.proxy(this.hide, this),
                    keyup: $.proxy(this.update, this)
                });
            } else {
                if (this.component){
                    this.component.on('click', $.proxy(this.show, this));
                } else {
                    this.element.on('click', $.proxy(this.show, this));
                }
            }
        
            this.minViewMode = options.minViewMode||this.element.data('date-minviewmode')||0;
            if (typeof this.minViewMode === 'string') {
                switch (this.minViewMode) {
                    case 'months':
                        this.minViewMode = 1;
                        break;
                    case 'years':
                        this.minViewMode = 2;
                        break;
                    default:
                        this.minViewMode = 0;
                        break;
                }
            }
            this.viewMode = options.viewMode||this.element.data('date-viewmode')||0;
            if (typeof this.viewMode === 'string') {
                switch (this.viewMode) {
                    case 'months':
                        this.viewMode = 1;
                        break;
                    case 'years':
                        this.viewMode = 2;
                        break;
                    default:
                        this.viewMode = 0;
                        break;
                }
            }
            this.startViewMode = this.viewMode;
            this.weekStart = options.weekStart||this.element.data('date-weekstart')||0;
            this.weekEnd = this.weekStart === 0 ? 6 : this.weekStart - 1;
            this.onRender = options.onRender;
            this.fillDow();
            this.fillMonths();
            this.update();
            this.showMode();
        };

        
        
        Datepicker.prototype = {
            constructor: Datepicker,
            
            show: function(e) {
                this.picker.show();
                this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
                this.place();
                $(window).on('resize', $.proxy(this.place, this));
                if (e ) {
                    e.stopPropagation();
                    e.preventDefault();
                }
                if (!this.isInput) {
                }
                var that = this;
                $(document).on('mousedown', function(ev){
                    if ($(ev.target).closest('.datepicker').length == 0) {
                        that.hide();
                    }
                });
                this.element.trigger({
                    type: 'show',
                    date: this.date
                });
            },
            
            hide: function(){
                this.picker.hide();
                $(window).off('resize', this.place);
                this.viewMode = this.startViewMode;
                this.showMode();
                if (!this.isInput) {
                    $(document).off('mousedown', this.hide);
                }
                //this.set();
                this.element.trigger({
                    type: 'hide',
                    date: this.date
                });
            },
            
            set: function() {
                var formated = DPGlobal.formatDate(this.date, this.format);
                if (!this.isInput) {
                    if (this.component){
                        this.element.find('input').prop('value', formated);
                    }
                    this.element.data('date', formated);
                } else {
                    this.element.prop('value', formated);
                }
            },
            
            setValue: function(newDate) {
                if (typeof newDate === 'string') {
                    this.date = DPGlobal.parseDate(newDate, this.format);
                } else {
                    this.date = new Date(newDate);
                }
                this.set();
                this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
                this.fill();
            },
            
            place: function(){
                var offset = this.component ? this.component.offset() : this.element.offset();
                this.picker.css({
                    top: offset.top + this.height,
                    left: offset.left
                });
            },
            
            update: function(newDate){
                this.date = DPGlobal.parseDate(
                    typeof newDate === 'string' ? newDate : (this.isInput ? this.element.prop('value') : this.element.data('date')),
                    this.format
                );
                this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0);
                this.fill();
            },
            
            fillDow: function(){
                var dowCnt = this.weekStart;
                var html = '<tr>';
                while (dowCnt < this.weekStart + 7) {
                    html += '<th class="dow">'+DPGlobal.dates.daysMin[(dowCnt++)%7]+'</th>';
                }
                html += '</tr>';
                this.picker.find('.datepicker-days thead').append(html);
            },
            
            fillMonths: function(){
                var html = '';
                var i = 0
                while (i < 12) {
                    html += '<span class="month">'+DPGlobal.dates.monthsShort[i++]+'</span>';
                }
                this.picker.find('.datepicker-months td').append(html);
            },
            
            fill: function() {
                var d = new Date(this.viewDate),
                    year = d.getFullYear(),
                    month = d.getMonth(),
                    currentDate = this.date.valueOf();
                this.picker.find('.datepicker-days th:eq(1)')
                            .text(DPGlobal.dates.months[month]+' '+year);
                var prevMonth = new Date(year, month-1, 28,0,0,0,0),
                    day = DPGlobal.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
                prevMonth.setDate(day);
                prevMonth.setDate(day - (prevMonth.getDay() - this.weekStart + 7)%7);
                var nextMonth = new Date(prevMonth);
                nextMonth.setDate(nextMonth.getDate() + 42);
                nextMonth = nextMonth.valueOf();
                var html = [];
                var clsName,
                    prevY,
                    prevM;
                while(prevMonth.valueOf() < nextMonth) {
                    if (prevMonth.getDay() === this.weekStart) {
                        html.push('<tr>');
                    }
                    clsName = this.onRender(prevMonth);
                    prevY = prevMonth.getFullYear();
                    prevM = prevMonth.getMonth();
                    if ((prevM < month &&  prevY === year) ||  prevY < year) {
                        clsName += ' old';
                    } else if ((prevM > month && prevY === year) || prevY > year) {
                        clsName += ' new';
                    }
                    if (prevMonth.valueOf() === currentDate) {
                        clsName += ' active';
                    }
                    html.push('<td class="day '+clsName+'">'+prevMonth.getDate() + '</td>');
                    if (prevMonth.getDay() === this.weekEnd) {
                        html.push('</tr>');
                    }
                    prevMonth.setDate(prevMonth.getDate()+1);
                }
                this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
                var currentYear = this.date.getFullYear();
                
                var months = this.picker.find('.datepicker-months')
                            .find('th:eq(1)')
                                .text(year)
                                .end()
                            .find('span').removeClass('active');
                if (currentYear === year) {
                    months.eq(this.date.getMonth()).addClass('active');
                }
                
                html = '';
                year = parseInt(year/10, 10) * 10;
                var yearCont = this.picker.find('.datepicker-years')
                                    .find('th:eq(1)')
                                        .text(year + '-' + (year + 9))
                                        .end()
                                    .find('td');
                year -= 1;
                for (var i = -1; i < 11; i++) {
                    html += '<span class="year'+(i === -1 || i === 10 ? ' old' : '')+(currentYear === year ? ' active' : '')+'">'+year+'</span>';
                    year += 1;
                }
                yearCont.html(html);
            },
            
            click: function(e) {
                e.stopPropagation();
                e.preventDefault();
                var target = $(e.target).closest('span, td, th');
                if (target.length === 1) {
                    switch(target[0].nodeName.toLowerCase()) {
                        case 'th':
                            switch(target[0].className) {
                                case 'switch':
                                    this.showMode(1);
                                    break;
                                case 'prev':
                                case 'next':
                                    this.viewDate['set'+DPGlobal.modes[this.viewMode].navFnc].call(
                                        this.viewDate,
                                        this.viewDate['get'+DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate) + 
                                        DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1)
                                    );
                                    this.fill();
                                    this.set();
                                    break;
                            }
                            break;
                        case 'span':
                            if (target.is('.month')) {
                                var month = target.parent().find('span').index(target);
                                this.viewDate.setMonth(month);
                            } else {
                                var year = parseInt(target.text(), 10)||0;
                                this.viewDate.setFullYear(year);
                            }
                            if (this.viewMode !== 0) {
                                this.date = new Date(this.viewDate);
                                this.element.trigger({
                                    type: 'changeDate',
                                    date: this.date,
                                    viewMode: DPGlobal.modes[this.viewMode].clsName
                                });
                            }
                            this.showMode(-1);
                            this.fill();
                            this.set();
                            break;
                        case 'td':
                            if (target.is('.day') && !target.is('.disabled')){
                                var day = parseInt(target.text(), 10)||1;
                                var month = this.viewDate.getMonth();
                                if (target.is('.old')) {
                                    month -= 1;
                                } else if (target.is('.new')) {
                                    month += 1;
                                }
                                var year = this.viewDate.getFullYear();
                                this.date = new Date(year, month, day,0,0,0,0);
                                this.viewDate = new Date(year, month, Math.min(28, day),0,0,0,0);
                                this.fill();
                                this.set();
                                this.element.trigger({
                                    type: 'changeDate',
                                    date: this.date,
                                    viewMode: DPGlobal.modes[this.viewMode].clsName
                                });
                            }
                            break;
                    }
                    
                }
            },
            
            mousedown: function(e){
                e.stopPropagation();
                e.preventDefault();
            },
            
            showMode: function(dir) {
                if (dir) {
                    this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + dir));
                }
                this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
            }
        };
        
        $.fn.datepicker = function ( option, val ) {
            return this.each(function () {
                var $this = $(this),
                    data = $this.data('datepicker'),
                    options = typeof option === 'object' && option;
                if (!data) {
                    $this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
                }
                if (typeof option === 'string') data[option](val);
            });
        };

        $.fn.datepicker.defaults = {
            onRender: function(date) {
                return '';
            }
        };
        $.fn.datepicker.Constructor = Datepicker;
        
        var DPGlobal = {
            modes: [
                {
                    clsName: 'days',
                    navFnc: 'Month',
                    navStep: 1
                },
                {
                    clsName: 'months',
                    navFnc: 'FullYear',
                    navStep: 1
                },
                {
                    clsName: 'years',
                    navFnc: 'FullYear',
                    navStep: 10
            }],
            dates:{
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            isLeapYear: function (year) {
                return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
            },
            getDaysInMonth: function (year, month) {
                return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
            },
            parseFormat: function(format){
                var separator = format.match(/[.\/\-\s].*?/),
                    parts = format.split(/\W+/);
                if (!separator || !parts || parts.length === 0){
                    throw new Error("Invalid date format.");
                }
                return {separator: separator, parts: parts};
            },
            parseDate: function(date, format) {
                var parts = date.split(format.separator),
                    date = new Date(),
                    val;
                date.setHours(0);
                date.setMinutes(0);
                date.setSeconds(0);
                date.setMilliseconds(0);
                if (parts.length === format.parts.length) {
                    var year = date.getFullYear(), day = date.getDate(), month = date.getMonth();
                    for (var i=0, cnt = format.parts.length; i < cnt; i++) {
                        val = parseInt(parts[i], 10)||1;
                        switch(format.parts[i]) {
                            case 'dd':
                            case 'd':
                                day = val;
                                date.setDate(val);
                                break;
                            case 'mm':
                            case 'm':
                                month = val - 1;
                                date.setMonth(val - 1);
                                break;
                            case 'yy':
                                year = 2000 + val;
                                date.setFullYear(2000 + val);
                                break;
                            case 'yyyy':
                                year = val;
                                date.setFullYear(val);
                                break;
                        }
                    }
                    date = new Date(year, month, day, 0 ,0 ,0);
                }
                return date;
            },
            formatDate: function(date, format){
                var val = {
                    d: date.getDate(),
                    m: date.getMonth() + 1,
                    yy: date.getFullYear().toString().substring(2),
                    yyyy: date.getFullYear()
                };
                val.dd = (val.d < 10 ? '0' : '') + val.d;
                val.mm = (val.m < 10 ? '0' : '') + val.m;
                var date = [];
                for (var i=0, cnt = format.parts.length; i < cnt; i++) {
                    date.push(val[format.parts[i]]);
                }
                return date.join(format.separator);
            },
            headTemplate: '<thead>'+
                                '<tr>'+
                                    '<th class="prev">&lsaquo;</th>'+
                                    '<th colspan="5" class="switch"></th>'+
                                    '<th class="next">&rsaquo;</th>'+
                                '</tr>'+
                            '</thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
        };
        DPGlobal.template = '<div class="datepicker dropdown-menu">'+
                                '<div class="datepicker-days">'+
                                    '<table class=" table-condensed">'+
                                        DPGlobal.headTemplate+
                                        '<tbody></tbody>'+
                                    '</table>'+
                                '</div>'+
                                '<div class="datepicker-months">'+
                                    '<table class="table-condensed">'+
                                        DPGlobal.headTemplate+
                                        DPGlobal.contTemplate+
                                    '</table>'+
                                '</div>'+
                                '<div class="datepicker-years">'+
                                    '<table class="table-condensed">'+
                                        DPGlobal.headTemplate+
                                        DPGlobal.contTemplate+
                                    '</table>'+
                                '</div>'+
                            '</div>';
        $("#datepicker").datepicker();                    
    }
}
</script>
<style>

 .datepicker {
  top: 0;
  left: 0;
  padding: 4px;
  margin-top: 1px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 0;
  /*.dow {
    border-top: 1px solid #ddd !important;
  }*/

}
.datepicker:before {
  content: '';
  display: inline-block;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #ccc;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: -7px;
  left: 6px;
}
.datepicker:after {
  content: '';
  display: inline-block;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #ffffff;
  position: absolute;
  top: -6px;
  left: 7px;
}
.datepicker > div {
  display: none;
}
.datepicker table {
  width: 100%;
  margin: 0;
}
.datepicker td, .datepicker th {
	text-align: center;
	padding: 5px 9px;
	font-size: 13px;
	font-weight: 400;
}
.datepicker td.day:hover {
  background: #1A76D1;
  cursor: pointer;
  color:#fff;
}
.datepicker td.day.disabled {
  color: #eeeeee;
}
.datepicker td.old,
.datepicker td.new {
  color: #999999;
}
.datepicker td.active,
.datepicker td.active:hover {
  color: #ffffff;
  background-color: #1A76D1;
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.datepicker td.active:hover,
.datepicker td.active:hover:hover,
.datepicker td.active:focus,
.datepicker td.active:hover:focus,
.datepicker td.active:active,
.datepicker td.active:hover:active,
.datepicker td.active.active,
.datepicker td.active:hover.active,
.datepicker td.active.disabled,
.datepicker td.active:hover.disabled,
.datepicker td.active[disabled],
.datepicker td.active:hover[disabled] {
  color: #ffffff;
  background-color: #1A76D1;
}
.datepicker td.active:active,
.datepicker td.active:hover:active,
.datepicker td.active.active,
.datepicker td.active:hover.active {
  background-color: #003399 \9;
}
.datepicker td span {
  display: block;
  width: 47px;
  height: 54px;
  line-height: 54px;
  float: left;
  margin: 2px;
  cursor: pointer;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.datepicker td span:hover {
  background: #1A76D1;
}
.datepicker td span.active {
  color: #ffffff;
  background-color: #1A76D1;
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.datepicker td span.active:hover,
.datepicker td span.active:focus,
.datepicker td span.active:active,
.datepicker td span.active.active,
.datepicker td span.active.disabled,
.datepicker td span.active[disabled] {
  color: #ffffff;
  background-color: #0044cc;
}
.datepicker td span.active:active,
.datepicker td span.active.active {
  background-color: #003399 \9;
}
.datepicker td span.old {
  color: #999999;
}
.datepicker th.switch {
  width: 145px;
}
.datepicker th.next,
.datepicker th.prev {
  font-size: 21px;
}
.datepicker thead tr:first-child th {
  cursor: pointer;
}
.datepicker thead tr:first-child th:hover {
  background: #1A76D1;
  color:#fff;
}
.input-append.date .add-on i,
.input-prepend.date .add-on i {
  display: block;
  cursor: pointer;
  width: 16px;
  height: 16px;
}
</style>