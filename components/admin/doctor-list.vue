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
                    <li> 
                        <nuxt-link to="/admin/appointment-list"><i class="icofont icofont-handshake-deal"></i> <span>Appointments</span></nuxt-link>
                    </li>
                    <li> 
                        <nuxt-link to="/admin/specialities"><i class="icofont icofont-tooth"></i> <span>Specialities</span></nuxt-link>
                    </li>
                    <li class="active"> 
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
                        <h3 class="page-title">List of Doctors</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item"><a href="javascript:(0);">Users</a></li>
                            <li class="breadcrumb-item active">Doctor</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /Page Header -->
            
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="datatable table table-hover table-center mb-0">
                                    <thead>
                                        <tr>
                                            <th>Doctor Name</th>
                                            <th>Speciality</th>
                                            <th>Member Since</th>
                                            <th>Earned</th>
                                            <th>Account Status</th>
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
                                            
                                            <td>14 Jan 2023 <br><small>02.59 AM</small></td>
                                            
                                            <td>$3100.00</td>
                                            
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_1" class="check" checked>
                                                    <label for="status_1" class="checktoggle">checkbox</label>
                                                </div>
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
                                            
                                            <td>11 Jun 2023 <br><small>4.50 AM</small></td>
                                            
                                            <td>$5000.00</td>
                                            
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_1" class="check" checked>
                                                    <label for="status_1" class="checktoggle">checkbox</label>
                                                </div>
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
                                            
                                            <td>4 Jan 2018 <br><small>9.40 AM</small></td>
                                            
                                            <td>$3300.00</td>
                                            
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_1" class="check" checked>
                                                    <label for="status_1" class="checktoggle">checkbox</label>
                                                </div>
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
                                            
                                            <td>5 Jul 2023 <br><small>12.59 AM</small></td>
                                            
                                            <td>$3500.00</td>
                                            
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_1" class="check" checked>
                                                    <label for="status_1" class="checktoggle">checkbox</label>
                                                </div>
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
                                            
                                            <td>24 Jan 2023 <br><small>02.59 AM</small></td>
                                            
                                            <td>$3700.00</td>
                                            
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_1" class="check" checked>
                                                    <label for="status_1" class="checktoggle">checkbox</label>
                                                </div>
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
                                            
                                            <td>23 Mar 2023 <br><small>02.50 PM</small></td>
                                            
                                            <td>$4000.00</td>
                                            
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_1" class="check" checked>
                                                    <label for="status_1" class="checktoggle">checkbox</label>
                                                </div>
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
                                            
                                            <td>14 Dec 2018 <br><small>01.59 AM</small></td>
                                            
                                            <td>$2000.00</td>
                                            
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_1" class="check" checked>
                                                    <label for="status_1" class="checktoggle">checkbox</label>
                                                </div>
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
                                            
                                            <td>11 Jan 2023 <br><small>02.59 AM</small></td>
                                            
                                            <td>$3000.00</td>
                                            
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_1" class="check" checked>
                                                    <label for="status_1" class="checktoggle">checkbox</label>
                                                </div>
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
                                            
                                            <td>21 Apr 2018 <br><small>02.59 PM</small></td>
                                            
                                            <td>$4100.00</td>
                                            
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_1" class="check" checked>
                                                    <label for="status_1" class="checktoggle">checkbox</label>
                                                </div>
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
                                            
                                            <td>15 Feb 2018 <br><small>03.59 AM</small></td>
                                            
                                            <td>$3500.00</td>
                                            
                                            <td>
                                                <div class="status-toggle">
                                                    <input type="checkbox" id="status_1" class="check" checked>
                                                    <label for="status_1" class="checktoggle">checkbox</label>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>			
            </div>
            
        </div>			
    </div>
    <!-- /Page Wrapper -->
</template>
<style scoped>
    /* @import '~/assets/admin/css/bootstrap.min.css';
    @import '~/assets/admin/css/font-awesome.min.css';
    @import '~/assets/admin/css/feathericon.min.css'; */
    @import '~/assets/admin/plugins/morris/morris.css';
    @import '~/assets/admin/css/style.css';
    /* @import '~/assets/admin/plugins/datatables/datatables.min.css'; */
</style>