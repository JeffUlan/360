<template>
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><nuxt-link to="/doctor/doctordashboard">Home</nuxt-link></li>
                            <li class="breadcrumb-item active" aria-current="page">Patient</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title">Prescription</h2>
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
                
                    <!-- Profile Widget -->
                    <div class="card widget-profile pat-widget-profile">
                        <div class="card-body">
                            <div class="pro-widget-content">
                                <div class="profile-info-widget">
                                    <nuxt-link to="/doctor/patientprofile" class="booking-doc-img">
                                        <img src="~/assets/img/patients/patient.jpg" alt="User Image">
                                    </nuxt-link>
                                    <div class="profile-det-info">
                                        <h3><nuxt-link to="/doctor/patientprofile">Takeo Fukuda</nuxt-link></h3>
                                        <div class="patient-details">
                                            <h5><b>Patient ID :</b> PT0016</h5>
                                            <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Tokyo, Japan</h5>
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
                    
                </div>

                <div class="col-md-7 col-lg-8 col-xl-9">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title mb-0">Prescription</h4>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="biller-info">
                                        <h4 class="d-block">Dr. Darren Elder</h4>
                                        <span class="d-block text-sm text-muted">Dentist</span>
                                        <span class="d-block text-sm text-muted">Manama, Bahrain</span>
                                    </div>
                                </div>
                                <div class="col-sm-6 text-sm-right">
                                    <div class="billing-info">
                                        <h4 class="d-block">14 November 2023</h4>
                                        <span class="d-block text-muted">Prescription1</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Prescription Item -->
                            <div class="card card-table">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-center">
                                        <thead>
                                            <tr>
                                                <th style="width: 200px">Name</th>
                                                <th style="width: 100px">Quantity</th>
                                                <th style="width: 100px">Days</th>
                                                <th style="width: 100px;">Time</th>
                                                <th style="width: 80px;"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input class="form-control" value="Amoxapine" type="text" disabled>
                                                </td>
                                                <td>
                                                    <input class="form-control" type="text" value="2" disabled>
                                                </td>
                                                <td>
                                                    <input class="form-control" value="1" type="text" disabled>
                                                </td>
                                                <td>
                                                    <div class="form-check form-check-inline">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="checkbox" checked> Morning
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="checkbox"> Afternoon
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="checkbox" checked> Evening
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="checkbox"> Night
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input class="form-control" type="text" value="Benazepril" disabled>
                                                </td>
                                                <td>
                                                    <input class="form-control" type="text" value="2" disabled>
                                                </td>
                                                <td>
                                                    <input class="form-control" value="2" type="text" disabled>
                                                </td>
                                                <td>
                                                    <div class="form-check form-check-inline">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="checkbox"> Morning
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="checkbox" checked> Afternoon
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="checkbox"> Evening
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="checkbox"> Night
                                                        </label>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- /Prescription Item -->
                            
                            <!-- Signature -->
                            <div class="row">
                                <div class="col-md-12 text-right">
                                    <div class="signature-wrap">
                                        <div class="signature">
                                            <img src="/img/prescription_sign.png" class="sign-prescription">
                                        </div>
                                        <div class="sign-name">
                                            <p class="mb-0">( Dr. Darren Elder )</p>
                                            <span class="text-muted">Signature</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Signature -->
                            
                            <!-- Submit Section -->
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="submit-section">
                                        <nuxt-link to="/patient/patientsearchdoctor" class="btn btn-primary submit-btn fw">To Pharmacist</nuxt-link>
                                        <nuxt-link to="/patient/patientprescriptioncalendar" class="btn btn-primary submit-btn fw">Calendar</nuxt-link>
                                    </div>
                                </div>
                            </div>
                            <!-- /Submit Section -->
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>		
    <!-- /Page Content -->
</template>

<style scoped>
.fw{
    color:white;
}
.sign-prescription{
    width:216px;
    height:80px;
}
</style>