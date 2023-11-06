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
                    <li class="active"> 
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
                    <div class="col-sm-7 col-auto">
                        <h3 class="page-title">Specialities</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Specialities</li>
                        </ul>
                    </div>
                    <div class="col-sm-5 col">
                        <a href="#Add_Specialities_details" data-toggle="modal" class="btn btn-primary float-right mt-2">Add</a>
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
                                            <th>#</th>
                                            <th>Specialities</th>
                                            <th class="text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#SP001</td>
                                            
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2">
                                                        <img class="avatar-img" src="~/assets/admin/img/specialities/specialities-01.png" alt="Speciality">
                                                    </a>
                                                    <a href="#">Urology</a>
                                                </h2>
                                            </td>
                                        
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                        <i class="fe fe-pencil"></i> Edit
                                                    </a>
                                                    <a  data-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#SP002</td>
                                            
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2">
                                                        <img class="avatar-img" src="~/assets/admin/img/specialities/specialities-02.png" alt="Speciality">
                                                    </a>
                                                    <a href="#">Neurology</a>
                                                </h2>
                                            </td>
                                        
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                        <i class="fe fe-pencil"></i> Edit
                                                    </a>
                                                    <a  data-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>	
                                        <tr>
                                            <td>#SP003</td>
                                            
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2">
                                                        <img class="avatar-img" src="~/assets/admin/img/specialities/specialities-03.png" alt="Speciality">
                                                    </a>
                                                    <a href="#">Orthopedic</a>
                                                </h2>
                                            </td>
                                        
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                        <i class="fe fe-pencil"></i> Edit
                                                    </a>
                                                    <a  data-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#SP004</td>
                                            
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2">
                                                        <img class="avatar-img" src="~/assets/admin/img/specialities/specialities-04.png" alt="Speciality">
                                                    </a>
                                                    <a href="#">Cardiologist</a>
                                                </h2>
                                            </td>
                                        
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                        <i class="fe fe-pencil"></i> Edit
                                                    </a>
                                                    <a  data-toggle="modal" href="#delete_modal" class="btn btn-sm bg-danger-light">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#SP005</td>
                                            
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2">
                                                        <img class="avatar-img" src="~/assets/admin/img/specialities/specialities-05.png" alt="Speciality">
                                                    </a>
                                                    <a href="#">Dentist</a>
                                                </h2>
                                            </td>
                                        
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                        <i class="fe fe-pencil"></i> Edit
                                                    </a>
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
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
            </div>
        </div>			
    </div>
    <!-- /Page Wrapper -->
    
    
    <!-- Add Modal -->
    <div class="modal fade" id="Add_Specialities_details" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document" >
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add Specialities</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row form-row">
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label>Specialities</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label>Image</label>
                                    <input type="file"  class="form-control">
                                </div>
                            </div>
                            
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- /ADD Modal -->
    
    <!-- Edit Details Modal -->
    <div class="modal fade" id="edit_specialities_details" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document" >
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Specialities</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row form-row">
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label>Specialities</label>
                                    <input type="text" class="form-control" value="Cardiology">
                                </div>
                            </div>
                            <div class="col-12 col-sm-6">
                                <div class="form-group">
                                    <label>Image</label>
                                    <input type="file"  class="form-control">
                                </div>
                            </div>
                            
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- /Edit Details Modal -->
    
    <!-- Delete Modal -->
    <div class="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document" >
            <div class="modal-content">
            <!--	<div class="modal-header">
                    <h5 class="modal-title">Delete</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>-->
                <div class="modal-body">
                    <div class="form-content p-2">
                        <h4 class="modal-title">Delete</h4>
                        <p class="mb-4">Are you sure want to delete?</p>
                        <button type="button" class="btn btn-primary">Save </button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Delete Modal -->
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