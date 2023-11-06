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
                    <li class="active"> 
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
                        <h3 class="page-title">Transactions</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active">Transactions</li>
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
                                            <th>Invoice Number</th>
                                            <th>Patient ID</th>
                                            <th>Patient Name</th>
                                            <th>Total Amount</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#">#IN0001</a></td>
                                            <td>#PT001</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient1.jpg" alt="User Image"></a>
                                                    <a href="#">Charlene Reed </a>
                                                </h2>
                                            </td>
                                            <td>$100.00</td>
                                            <td class="text-center">
                                                <span class="badge badge-pill bg-success inv-badge">Paid</span>
                                            </td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">#IN0002</a></td>
                                            <td>#PT002</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient2.jpg" alt="User Image"></a>
                                                    <a href="#">Travis Trimble </a>
                                                </h2>
                                            </td>
                                            <td>$200.00</td>
                                            <td class="text-center">
                                                <span class="badge badge-pill bg-success inv-badge">Paid</span>
                                            </td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">#IN0003</a></td>
                                            <td>#PT003</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient3.jpg" alt="User Image"></a>
                                                    <a href="#">Carl Kelly</a>
                                                </h2>
                                            </td>
                                            <td>$250.00</td>
                                            <td class="text-center">
                                                <span class="badge badge-pill bg-success inv-badge">Paid</span>
                                            </td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">#IN0004</a></td>
                                            <td>#PT004</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient4.jpg" alt="User Image"></a>
                                                    <a href="#"> Michelle Fairfax</a>
                                                </h2>
                                            </td>
                                            <td>$150.00</td>
                                            <td class="text-center">
                                                <span class="badge badge-pill bg-success inv-badge">Paid</span>
                                            </td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">#IN0005</a></td>
                                            <td>#PT005</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient5.jpg" alt="User Image"></a>
                                                    <a href="#">Gina Moore</a>
                                                </h2>
                                            </td>
                                            <td>$350.00</td>
                                            <td class="text-center">
                                                <span class="badge badge-pill bg-success inv-badge">Paid</span>
                                            </td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">#IN0006</a></td>
                                            <td>#PT006</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient6.jpg" alt="User Image"></a>
                                                    <a href="#">Elsie Gilley</a>
                                                </h2>
                                            </td>
                                            <td>$300.00</td>
                                            <td class="text-center">
                                                <span class="badge badge-pill bg-success inv-badge">Paid</span>
                                            </td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">#IN0007</a></td>
                                            <td>#PT007</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient7.jpg" alt="User Image"></a>
                                                    <a href="#"> Joan Gardner</a>
                                                </h2>
                                            </td>
                                            <td>$250.00</td>
                                            <td class="text-center">
                                                <span class="badge badge-pill bg-success inv-badge">Paid</span>
                                            </td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">#IN0008</a></td>
                                            <td>#PT008</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient8.jpg" alt="User Image"></a>
                                                    <a href="#"> Daniel Griffing</a>
                                                </h2>
                                            </td>
                                            <td>$150.00</td>
                                            <td class="text-center">
                                                <span class="badge badge-pill bg-success inv-badge">Paid</span>
                                            </td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">#IN0009</a></td>
                                            <td>#PT009</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient9.jpg" alt="User Image"></a>
                                                    <a href="#">Walter Roberson</a>
                                                </h2>
                                            </td>
                                            <td>$100.00</td>
                                            <td class="text-center">
                                                <span class="badge badge-pill bg-success inv-badge">Paid</span>
                                            </td>
                                            <td class="text-right">
                                                <div class="actions">
                                                    <a class="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
                                                        <i class="fe fe-trash"></i> Delete
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">#IN0010</a></td>
                                            <td>#PT010</td>
                                            <td>
                                                <h2 class="table-avatar">
                                                    <a href="#" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" src="~/assets/admin/img/patients/patient10.jpg" alt="User Image"></a>
                                                    <a href="#">Robert Rhodes </a>
                                                </h2>
                                            </td>
                                            <td>$120.00</td>
                                            <td class="text-center">
                                                <span class="badge badge-pill bg-success inv-badge">Paid</span>
                                            </td>
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
    @import '~/assets/admin/css/feathericon.min.css'; --> */
    @import '~/assets/admin/plugins/morris/morris.css';
    @import '~/assets/admin/css/style.css';
    /* @import '~/assets/admin/plugins/datatables/datatables.min.css'; */
</style>