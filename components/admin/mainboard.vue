<template>
    <!-- Sidebar -->
    <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
            <div id="sidebar-menu" class="sidebar-menu">
                <ul>
                    <li class="menu-title"> 
                        <span>Main</span>
                    </li>
                    <li class="active"> 
                        <nuxt-link to="/admin/"><i class="icofont icofont-home"></i> <span>Dashboard</span></nuxt-link>
                    </li>
                    <li> 
                        <nuxt-link to="/admin/appointment-list"><i class="icofont icofont-handshake-deal"></i> <span>Appointments</span></nuxt-link>
                    </li>
                    <li> 
                        <nuxt-link to="/admin/specialities"><i class="icofont icofont-tooth"></i> <span>Specialities</span></nuxt-link>
                    </li>
                    <li> 
                        <nuxt-link to="/admin/doctor-list"><i class="icofont icofont-doctor"></i> <span>Doctors</span></nuxt-link>
                    </li>
                    <li> 
                        <nuxt-link to="/admin/patient-list"><i class="icofont icofont-user"></i> <span>Patients</span></nuxt-link>
                    </li>
                    <li> 
                        <nuxt-link to="/admin/reviews"><i class="icofont icofont-star"></i> <span>Reviews</span></nuxt-link>
                    </li>
                    <li> 
                        <nuxt-link to="/admin/transactions-list"><i class="icofont icofont-bank-transfer-alt"></i> <span>Transactions</span></nuxt-link>
                    </li>
                    <li> 
                        <nuxt-link to="/admin/settings"><i class="icofont icofont-settings-alt"></i> <span>Settings</span></nuxt-link>
                    </li>
                    <li class="submenu">
                        <nuxt-link to="#"><i class="icofont icofont-file-document"></i> <span> Invoice Reports</span></nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /Sidebar -->
    <!-- Main Wrapper -->
    <div class="main-wrapper">
        <!-- Page Wrapper -->
        <div class="page-wrapper">
                
            <div class="content container-fluid">
                
                <!-- Page Header -->
                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3 class="page-title">Welcome Admin!</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item active">Dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- /Page Header -->

                <div class="row">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-primary border-primary">
                                        <i class="icofont icofont-doctor"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>168</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    <h6 class="text-muted">Doctors</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-primary w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-success">
                                        <i class="icofont icofont-user"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>487</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">Patients</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-success w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-danger border-danger">
                                        <i class="icofont icofont-handshake-deal"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>485</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">Appointment</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-danger w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="dash-widget-header">
                                    <span class="dash-widget-icon text-warning border-warning">
                                        <i class="icofont icofont-money"></i>
                                    </span>
                                    <div class="dash-count">
                                        <h3>$62523</h3>
                                    </div>
                                </div>
                                <div class="dash-widget-info">
                                    
                                    <h6 class="text-muted">Revenue</h6>
                                    <div class="progress progress-sm">
                                        <div class="progress-bar bg-warning w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-lg-6">
                    
                        <!-- Sales Chart -->
                        <div class="card card-chart">
                            <div class="card-header">
                                <h4 class="card-title">Revenue</h4>
                            </div>
                            <div class="card-body">
                                <div id="morrisArea"></div>
                            </div>
                        </div>
                        <!-- /Sales Chart -->
                        
                    </div>
                    <div class="col-md-12 col-lg-6">
                    
                        <!-- Invoice Chart -->
                        <div class="card card-chart">
                            <div class="card-header">
                                <h4 class="card-title">Status</h4>
                            </div>
                            <div class="card-body">
                                <div id="morrisLine"></div>
                            </div>
                        </div>
                        <!-- /Invoice Chart -->
                        
                    </div>	
                </div>
                <div class="row">
                    <div class="col-md-6 d-flex">
                    
                        <!-- Recent Orders -->
                        <div class="card card-table flex-fill">
                            <div class="card-header">
                                <h4 class="card-title">Doctors List</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Doctor Name</th>
                                                <th>Speciality</th>
                                                <th>Earned</th>
                                                <th>Reviews</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-01.jpg" alt="User Image"></a>
                                                        <a href="#">Dr. Ruby Perrin</a>
                                                    </h2>
                                                </td>
                                                <td>Dental</td>
                                                <td>$3200.00</td>
                                                <td>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="fe fe-star-o text-secondary"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-02.jpg" alt="User Image"></a>
                                                        <a href="#">Dr. Darren Elder</a>
                                                    </h2>
                                                </td>
                                                <td>Dental</td>
                                                <td>$3100.00</td>
                                                <td>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="fe fe-star-o text-secondary"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-03.jpg" alt="User Image"></a>
                                                        <a href="#">Dr. Deborah Angel</a>
                                                    </h2>
                                                </td>
                                                <td>Cardiology</td>
                                                <td>$4000.00</td>
                                                <td>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="fe fe-star-o text-secondary"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-04.jpg" alt="User Image"></a>
                                                        <a href="#">Dr. Sofia Brient</a>
                                                    </h2>
                                                </td>
                                                <td>Urology</td>
                                                <td>$3200.00</td>
                                                <td>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="fe fe-star-o text-secondary"></i>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-05.jpg" alt="User Image"></a>
                                                        <a href="#">Dr. Marvin Campbell</a>
                                                    </h2>
                                                </td>
                                                <td>Orthopaedics</td>
                                                <td>$3500.00</td>
                                                <td>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="icofont icofont-star"></i>
                                                    <i class="fe fe-star-o text-secondary"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- /Recent Orders -->
                        
                    </div>
                    <div class="col-md-6 d-flex">
                    
                        <!-- Feed Activity -->
                        <div class="card  card-table flex-fill">
                            <div class="card-header">
                                <h4 class="card-title">Patients List</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>													
                                                <th>Patient Name</th>
                                                <th>Phone</th>
                                                <th>Last Visit</th>
                                                <th>Paid</th>													
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient1.jpg" alt="User Image"></a>
                                                        <a href="#">Charlene Reed </a>
                                                    </h2>
                                                </td>
                                                <td>8286329170</td>
                                                <td>20 Oct 2023</td>
                                                <td class="text-right">$100.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient2.jpg" alt="User Image"></a>
                                                        <a href="#">Travis Trimble </a>
                                                    </h2>
                                                </td>
                                                <td>2077299974</td>
                                                <td>22 Oct 2023</td>
                                                <td class="text-right">$200.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient3.jpg" alt="User Image"></a>
                                                        <a href="#">Carl Kelly</a>
                                                    </h2>
                                                </td>
                                                <td>2607247769</td>
                                                <td>21 Oct 2023</td>
                                                <td class="text-right">$250.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient4.jpg" alt="User Image"></a>
                                                        <a href="#"> Michelle Fairfax</a>
                                                    </h2>
                                                </td>
                                                <td>5043686874</td>
                                                <td>21 Sep 2023</td>
                                                <td class="text-right">$150.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient5.jpg" alt="User Image"></a>
                                                        <a href="#">Gina Moore</a>
                                                    </h2>
                                                </td>
                                                <td>9548207887</td>
                                                <td>18 Sep 2023</td>
                                                <td class="text-right">$350.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- /Feed Activity -->
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                    
                        <!-- Recent Orders -->
                        <div class="card card-table">
                            <div class="card-header">
                                <h4 class="card-title">Appointment List</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Doctor Name</th>
                                                <th>Speciality</th>
                                                <th>Patient Name</th>
                                                <th>Apointment Time</th>
                                                <th>Status</th>
                                                <th class="text-right">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-01.jpg" alt="User Image"></a>
                                                        <a href="#">Dr. Ruby Perrin</a>
                                                    </h2>
                                                </td>
                                                <td>Dental</td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient1.jpg" alt="User Image"></a>
                                                        <a href="#">Charlene Reed </a>
                                                    </h2>
                                                </td>
                                                <td>9 Nov 2023 <span class="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                                                <td>
                                                    <div class="status-toggle">
                                                        <input type="checkbox" id="status_1" class="check" checked>
                                                        <label for="status_1" class="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td class="text-right">
                                                    $200.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-02.jpg" alt="User Image"></a>
                                                        <a href="#">Dr. Darren Elder</a>
                                                    </h2>
                                                </td>
                                                <td>Dental</td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient2.jpg" alt="User Image"></a>
                                                        <a href="#">Travis Trimble </a>
                                                    </h2>
                                                </td>
                                                
                                                <td>5 Nov 2023 <span class="text-primary d-block">11.00 AM - 11.35 AM</span></td>
                                                <td>
                                                    <div class="status-toggle">
                                                        <input type="checkbox" id="status_2" class="check" checked>
                                                        <label for="status_2" class="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td class="text-right">
                                                    $300.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-03.jpg" alt="User Image"></a>
                                                        <a href="#">Dr. Deborah Angel</a>
                                                    </h2>
                                                </td>
                                                <td>Cardiology</td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient3.jpg" alt="User Image"></a>
                                                        <a href="#">Carl Kelly</a>
                                                    </h2>
                                                </td>
                                                <td>11 Nov 2023 <span class="text-primary d-block">12.00 PM - 12.15 PM</span></td>
                                                <td>
                                                    <div class="status-toggle">
                                                        <input type="checkbox" id="status_3" class="check" checked>
                                                        <label for="status_3" class="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td class="text-right">
                                                    $150.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-04.jpg" alt="User Image"></a>
                                                        <a href="#">Dr. Sofia Brient</a>
                                                    </h2>
                                                </td>
                                                <td>Urology</td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient4.jpg" alt="User Image"></a>
                                                        <a href="#"> Michelle Fairfax</a>
                                                    </h2>
                                                </td>
                                                <td>7 Nov 2023<span class="text-primary d-block">1.00 PM - 1.20 PM</span></td>
                                                <td>
                                                    <div class="status-toggle">
                                                        <input type="checkbox" id="status_4" class="check" checked>
                                                        <label for="status_4" class="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td class="text-right">
                                                    $150.00
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-05.jpg" alt="User Image"></a>
                                                        <a href="#">Dr. Marvin Campbell</a>
                                                    </h2>
                                                </td>
                                                <td>Orthopaedics</td>
                                                <td>
                                                    <h2 class="table-avatar">
                                                        <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient5.jpg" alt="User Image"></a>
                                                        <a href="#">Gina Moore</a>
                                                    </h2>
                                                </td>
                                                
                                                <td>15 Nov 2023 <span class="text-primary d-block">1.00 PM - 1.15 PM</span></td>
                                                <td>
                                                    <div class="status-toggle">
                                                        <input type="checkbox" id="status_5" class="check" checked>
                                                        <label for="status_5" class="checktoggle">checkbox</label>
                                                    </div>
                                                </td>
                                                <td class="text-right">
                                                    $200.00
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <!-- /Recent Orders -->
                        
                    </div>
                </div>
                
            </div>			
        </div>
        <!-- /Page Wrapper -->
    </div>
</template>

<script>

</script>
<style scoped>
    /* @import '~/assets/admin/css/bootstrap.min.css';
    @import '~/assets/admin/css/font-awesome.min.css';
    @import '~/assets/admin/css/feathericon.min.css'; */
    @import '~/assets/admin/plugins/morris/morris.css';
    @import '~/assets/admin/css/style.css';
    /* @import '~/assets/admin/plugins/datatables/datatables.min.css'; */
</style>
