<template>
    <!-- Header -->
    <div class="header">
        
        <!-- Logo -->
        <div class="header-left">
            <nuxt-link to="/admin/" class="logo">
                <img src="~/assets/admin/img/logo.png" alt="Logo">
            </nuxt-link>
            <nuxt-link to="/admin/" class="logo logo-small">
                <img src="~/assets/admin/img/logo-small.png" alt="Logo" width="30" height="30">
            </nuxt-link>
        </div>
        <!-- /Logo -->
        
        <!-- <a href="javascript:void(0);" id="toggle_btn">
            <i class="icofont icofont-align-left"></i>
        </a> -->
        
        <div class="top-nav-search">
            <form>
                <input type="text" class="form-control" placeholder="Search here">
                <button class="btn" type="submit"><i class="icofont icofont-search-1"></i></button>
            </form>
        </div>
        
        <!-- Mobile Menu Toggle -->
        <a class="mobile_btn" id="mobile_btn">
            <i class="fa fa-bars"></i>
        </a>
        <!-- /Mobile Menu Toggle -->
        
        <!-- Header Right Menu -->
        <ul class="nav user-menu">

            <!-- Notifications -->
            <li class="nav-item dropdown noti-dropdown">
                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                    <i class="icofont icofont-bell-alt"></i> <span class="badge badge-pill">3</span>
                </a>
                <div class="dropdown-menu notifications">
                    <div class="topnav-dropdown-header">
                        <span class="notification-title">Notifications</span>
                        <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
                    </div>
                    <div class="noti-content">
                        <ul class="notification-list">
                            <li class="notification-message">
                                <a href="#">
                                    <div class="media">
                                        <span class="avatar avatar-sm">
                                            <img class="avatar-img rounded-circle" alt="User Image" src="~/assets/admin/img/doctors/doctor-thumb-01.jpg">
                                        </span>
                                        <div class="media-body">
                                            <p class="noti-details"><span class="noti-title">Dr. Ruby Perrin</span> Schedule <span class="noti-title">her appointment</span></p>
                                            <p class="noti-time"><span class="notification-time">4 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="#">
                                    <div class="media">
                                        <span class="avatar avatar-sm">
                                            <img class="avatar-img rounded-circle" alt="User Image" src="~/assets/admin/img/patients/patient1.jpg">
                                        </span>
                                        <div class="media-body">
                                            <p class="noti-details"><span class="noti-title">Charlene Reed</span> has booked her appointment to <span class="noti-title">Dr. Ruby Perrin</span></p>
                                            <p class="noti-time"><span class="notification-time">6 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="#">
                                    <div class="media">
                                        <span class="avatar avatar-sm">
                                            <img class="avatar-img rounded-circle" alt="User Image" src="~/assets/admin/img/patients/patient2.jpg">
                                        </span>
                                        <div class="media-body">
                                        <p class="noti-details"><span class="noti-title">Travis Trimble</span> sent a amount of $210 for his <span class="noti-title">appointment</span></p>
                                        <p class="noti-time"><span class="notification-time">8 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="#">
                                    <div class="media">
                                        <span class="avatar avatar-sm">
                                            <img class="avatar-img rounded-circle" alt="User Image" src="~/assets/admin/img/patients/patient3.jpg">
                                        </span>
                                        <div class="media-body">
                                            <p class="noti-details"><span class="noti-title">Carl Kelly</span> send a message <span class="noti-title"> to his doctor</span></p>
                                            <p class="noti-time"><span class="notification-time">12 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="topnav-dropdown-footer">
                        <a href="#">View all Notifications</a>
                    </div>
                </div>
            </li>
            <!-- /Notifications -->
            
            <!-- User Menu -->
            <li class="nav-item dropdown has-arrow">
                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                    <span class="user-img"><img class="rounded-circle" src="~/assets/admin/img/profiles/avatar-01.jpg" width="31" alt="Ryan Taylor"></span>
                </a>
                <div class="dropdown-menu">
                    <div class="user-header">
                        <div class="avatar avatar-sm">
                            <img src="~/assets/admin/img/profiles/avatar-01.jpg" alt="User Image" class="avatar-img rounded-circle">
                        </div>
                        <div class="user-text">
                            <h6>Ryan Taylor</h6>
                            <p class="text-muted mb-0">Administrator</p>
                        </div>
                    </div>
                    <nuxt-link class="dropdown-item" to="/">My Profile</nuxt-link>
                    <nuxt-link class="dropdown-item" to="settings">Settings</nuxt-link>
                    <nuxt-link class="dropdown-item" to="/">Logout</nuxt-link>
                </div>
            </li>
            <!-- /User Menu -->
            
        </ul>
        <!-- /Header Right Menu -->
        
    </div>
    <!-- /Header -->
</template>


<script>

export default {
    name: 'header',
    components: {
    },
    mounted() {

    }
}

    // import '~/assets/admin/js/jquery-3.2.1.min.js';
    // import '~/assets/admin/js/bootstrap.min.js';
    // //import '~/assets/admin/js/popper.min.js';
    // import '~/assets/admin/plugins/slimscroll/jquery.slimscroll.min.js';
    // import '~/assets/admin/plugins/raphael/raphael.min.js';
    // import '~/assets/admin/plugins/morris/morris.min.js';
    // import '~/assets/admin/js/chart.morris.js';
    // import '~/assets/admin/plugins/datatables/jquery.dataTables.min.js';
    // import '~/assets/admin/plugins/datatables/datatables.min.js';
    // import '~/assets/admin/js/script.js';

</script>
<style scoped>
    /* @import '~/assets/admin/css/bootstrap.min.css';
    @import '~/assets/admin/css/font-awesome.min.css';
    @import '~/assets/admin/css/feathericon.min.css'; */
    @import '~/assets/admin/plugins/morris/morris.css';
    @import '~/assets/admin/css/style.css';
    /* @import '~/assets/admin/plugins/datatables/datatables.min.css'; */
</style>
