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
                    <li class="active"> 
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
                        <h3 class="page-title">General Settings</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item"><a href="javascript:(0)">Settings</a></li>
                            <li class="breadcrumb-item active">General Settings</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- /Page Header -->
            
            <div class="row">
                
                <div class="col-12">
                    
                    <!-- General -->
                    
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">General</h4>
                            </div>
                            <div class="card-body">
                                <form action="#">
                            
                                    <div class="form-group">
                                        <label>Website Name</label>
                                        <input type="text" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label>Website Logo</label>
                                        <input type="file" class="form-control">
                                        <small class="text-secondary">Recommended image size is <b>150px x 150px</b></small>
                                    </div>
                                    <div class="form-group mb-0">
                                        <label>Favicon</label>
                                        <input type="file" class="form-control">
                                        <small class="text-secondary">Recommended image size is <b>16px x 16px</b> or <b>32px x 32px</b></small><br>
                                        <small class="text-secondary">Accepted formats : only png and ico</small>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    
                    <!-- /General -->
                        
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