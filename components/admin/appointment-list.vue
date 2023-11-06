<template>
    <!-- Sidebar -->
    <div class="sidebar" id="sidebar">
        <div class="sidebar-inner slimscroll">
            <div id="sidebar-menu" class="sidebar-menu">
                <ul>
                    <li class="menu-title"> 
                        <span>Main</span>
                    </li>
                    <li> 
                        <nuxt-link to="/admin/"><i class="icofont icofont-home"></i> <span>Dashboard</span></nuxt-link>
                    </li>
                    <li class="active"> 
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
                        <nuxt-link to="#"><i class="icofont icofont-file-document"></i> <span> Reports</span> <span class="menu-arrow"></span></nuxt-link>
                        <ul style="display: none;">
                            <li><nuxt-link to="invoice-report">Invoice Reports</nuxt-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- /Sidebar -->
    <!-- Page Wrapper -->
    <div class="page-wrapper">
        <div class="content container-fluid">
        
            <!-- Page Header -->
            <div class="page-header">
                <div class="row">
                    <div class="col-sm-12">
                        <h3 class="page-title">Appointments</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Appointments</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /Page Header -->
            <div class="row">
                <div class="col-md-12">
                
                    <!-- Recent Orders -->
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="datatable table table-hover table-center mb-0">
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
                                            <td>9 Nov 2019 <span class="text-primary d-block">11.00 AM - 11.15 AM</span></td>
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
                                            
                                            <td>5 Nov 2019 <span class="text-primary d-block">11.00 AM - 11.35 AM</span></td>
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
                                            <td>11 Nov 2019 <span class="text-primary d-block">12.00 PM - 12.15 PM</span></td>
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
                                            <td>7 Nov 2019 <span class="text-primary d-block">1.00 PM - 1.20 PM</span></td>
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
                                            
                                            <td>15 Nov 2019 <span class="text-primary d-block">1.00 PM - 1.15 PM</span></td>
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
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-06.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. Katharine Berthold</a>
                                                </h2>
                                            </td>
                                            <td>Orthopaedics</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient6.jpg" alt="User Image"></a>
                                                    <a href="#">Elsie Gilley</a>
                                                </h2>
                                            </td>
                                            
                                            <td>16 Nov 2019 <span class="text-primary d-block">1.00 PM - 1.15 PM</span></td>
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_5" class="check" checked>
                                                    <label for="status_5" class="checktoggle">checkbox</label>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                $250.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-07.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. Linda Tobin</a>
                                                </h2>
                                            </td>
                                            <td>Neurology</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient7.jpg" alt="User Image"></a>
                                                    <a href="#">Joan Gardner</a>
                                                </h2>
                                            </td>
                                            
                                            <td>18 Nov 2019 <span class="text-primary d-block">1.10 PM - 1.25 PM</span></td>
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_5" class="check" checked>
                                                    <label for="status_5" class="checktoggle">checkbox</label>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                $260.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-08.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. Paul Richard</a>
                                                </h2>
                                            </td>
                                            <td>Dermatology</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient8.jpg" alt="User Image"></a>
                                                    <a href="#"> Daniel Griffing</a>
                                                </h2>
                                            </td>
                                            
                                            <td>18 Nov 2019 <span class="text-primary d-block">11.10 AM - 11.25 AM</span></td>
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_5" class="check" checked>
                                                    <label for="status_5" class="checktoggle">checkbox</label>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                $260.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-09.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. John Gibbs</a>
                                                </h2>
                                            </td>
                                            <td>Dental</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient9.jpg" alt="User Image"></a>
                                                    <a href="#">Walter Roberson</a>
                                                </h2>
                                            </td>
                                            
                                            <td>21 Nov 2019 <span class="text-primary d-block">12.10 PM - 12.25 PM</span></td>
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_5" class="check" checked>
                                                    <label for="status_5" class="checktoggle">checkbox</label>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                $300.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-10.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. Olga Barlow</a>
                                                </h2>
                                            </td>
                                            <td>Dental</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient10.jpg" alt="User Image"></a>
                                                    <a href="#">Robert Rhodes</a>
                                                </h2>
                                            </td>
                                            
                                            <td>23 Nov 2019 <span class="text-primary d-block">12.10 PM - 12.25 PM</span></td>
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_5" class="check" checked>
                                                    <label for="status_5" class="checktoggle">checkbox</label>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                $300.00
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
</template>
<script></script>
<style scoped>
    /* @import '~/assets/admin/css/bootstrap.min.css';
    @import '~/assets/admin/css/font-awesome.min.css';
    @import '~/assets/admin/css/feathericon.min.css'; */
    @import '~/assets/admin/plugins/morris/morris.css';
    @import '~/assets/admin/css/style.css';
    /* @import '~/assets/admin/plugins/datatables/datatables.min.css'; */
</style>