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
                    <li class="active"> 
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
                        <h3 class="page-title">Reviews</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Reviews</li>
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
                                            <th>Patient Name</th>
                                            <th>Doctor Name</th>
                                            <th>Ratings</th>
                                            <th>Description</th>
                                            <th>Date</th>
                                            <th class="text-right">Actions</th>
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
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-01.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. Ruby Perrin</a>
                                                </h2>
                                            </td>
                                            
                                            <td>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star-o text-secondary"></i>
                                            </td>
                                            
                                            <td>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </td>
                                                <td>3 Nov 2019 <br><small>09.59 AM</small></td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient2.jpg" alt="User Image"></a>
                                                    <a href="#">Travis Trimble </a>
                                                </h2>
                                            </td>
                                            
                                        
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-02.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. Darren Elder</a>
                                                </h2>
                                            </td>
                                            
                                            <td>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star-o text-secondary"></i>
                                            </td>
                                            
                                            <td>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </td>
                                                <td>2 Nov 2019<br> <small>08.50 AM</small></td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient3.jpg" alt="User Image"></a>
                                                    <a href="#">Carl Kelly</a>
                                                </h2>
                                            </td>
                                        
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-03.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. Deborah Angel</a>
                                                </h2>
                                            </td>
                                            
                                            <td>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star-o text-secondary"></i>
                                            </td>
                                            
                                            <td>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </td>
                                                <td>1 Nov 2019<br> <small>02.59 PM</small></td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient4.jpg" alt="User Image"></a>
                                                    <a href="#"> Michelle Fairfax</a>
                                                </h2>
                                            </td>
                                            
                                        
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-04.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. Sofia Brient</a>
                                                </h2>
                                            </td>
                                            
                                            <td>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star-o text-secondary"></i>
                                            </td>
                                            
                                            <td>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </td>
                                                <td>27 Sep 2019 <br><small>03.40 PM</small></td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient5.jpg" alt="User Image"></a>
                                                    <a href="#">Gina Moore</a>
                                                </h2>
                                            </td>
                                            
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-05.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. Marvin Campbell</a>
                                                </h2>
                                            </td>
                                            
                                            <td>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star-o text-secondary"></i>
                                            </td>
                                            
                                            <td>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </td>
                                                <td>24 Sep 2019 <br><small>04.38 PM</small></td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient6.jpg" alt="User Image"></a>
                                                    <a href="#">Elsie Gilley</a>
                                                </h2>
                                            </td>
                                            
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-06.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. Katharine Berthold</a>
                                                </h2>
                                            </td>
                                            <td>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star-o text-secondary"></i>
                                            </td>
                                            
                                            <td>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </td>
                                                <td>22 Aug 2019 <br><small>01.50 PM</small></td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient7.jpg" alt="User Image"></a>
                                                    <a href="#">Joan Gardner</a>
                                                </h2>
                                            </td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-07.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. Linda Tobin</a>
                                                </h2>
                                            </td>
                                            
                                            <td>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star-o text-secondary"></i>
                                            </td>
                                            
                                            <td>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </td>
                                                <td>21 Jul 2019 <br><small>05.50 PM</small></td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient8.jpg" alt="User Image"></a>
                                                    <a href="#">Daniel Griffing</a>
                                                </h2>
                                            </td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-08.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. Paul Richard</a>
                                                </h2>
                                            </td>
                                            <td>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star-o text-secondary"></i>
                                            </td>
                                            
                                            <td>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </td>
                                                <td>16 Jun 2019 <br><small>04.50 PM</small></td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient9.jpg" alt="User Image"></a>
                                                    <a href="#">Walter Roberson</a>
                                                </h2>
                                            </td>
                                            
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-09.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. John Gibbs</a>
                                                </h2>
                                            </td>
                                            <td>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star-o text-secondary"></i>
                                            </td>
                                            
                                            <td>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </td>
                                                <td>11 Mar 2019 <br><small>05.55 PM</small></td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient10.jpg" alt="User Image"></a>
                                                    <a href="#">Harry Williams</a>
                                                </h2>
                                            </td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/doctors/doctor-thumb-10.jpg" alt="User Image"></a>
                                                    <a href="#">Dr. Olga Barlow</a>
                                                </h2>
                                            </td>
                                            
                                            <td>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star text-warning"></i>
                                                <i class="fe fe-star-o text-secondary"></i>
                                            </td>
                                            
                                            <td>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                            </td>
                                                <td>15 Feb 2019 <br><small>07.30 PM</small></td>
                                            <td class="text-right">
                                                <div class="actions">
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