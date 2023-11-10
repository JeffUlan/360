<template>
    <!-- Page Content -->
    <section class="section-all" >
    <Toast position="top-right" />
        <div class="account-page">
            <div class="main-wrapper">
                <div class="content">
                    <div class="container-fluid">
                        
                        <div class="row">
                            <div class="col-md-8 offset-md-2">
                                    
                                <!-- Register Content -->
                                <div class="account-content">
                                    <div class="row align-items-center justify-content-center">
                                        <div class="col-md-7 col-lg-6 login-left">
                                            <img src="~/assets/img/login-banner.png" class="img-fluid" alt="Doccure Register">	
                                        </div>
                                        <div class="col-md-12 col-lg-6 login-right">
                                            <div class="login-header">
                                                <h3>Doctor Register  <nuxt-link to="/patient/signin" class="forgot-link">Are you a patient?</nuxt-link></h3>
                                            </div>
                                            
                                            <!-- Register Form -->
                                            <form action="#">
                                                <div class="form-group">
                                                    <input type="text" class="form-control floating" placeholder="Full Name">
                                                </div>
                                                <div class="form-group">
                                                    <input type="email" class="form-control floating" placeholder="Email">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control floating" placeholder="Phone Number">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control floating" placeholder="License ID">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control floating" placeholder="Password">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control floating" placeholder="Confirm Password">
                                                </div>
                                                <div class="text-right">
                                                    <nuxt-link to="/doctor/signin" class="forgot-link">Already have an account?</nuxt-link>
                                                </div>
                                                <!-- <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button> -->
                                                <nuxt-link to="/doctor/signin" class="btn btn-primary btn-block btn-lg login-btn">Sigup</nuxt-link>
                                                <div class="login-or">
                                                    <span class="or-line"></span>
                                                    <span class="span-or">or</span>
                                                </div>
                                                <div class="row form-row social-login">
                                                    <div class="col-6">
                                                        <a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a>
                                                    </div>
                                                    <div class="col-6">
                                                        <a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
                                                    </div>
                                                </div>
                                            </form>
                                            <!-- /Register Form -->
                                            
                                        </div>
                                    </div>
                                </div>
                                <!-- /Register Content -->
                                    
                            </div>
                        </div>

                    </div>

                </div>	
            </div>
        </div>
    </section>	
    <!-- /Page Content -->
</template>

<style>
.display-center{
  justify-content: center;
  align-items: center;
}
.fb{
    color:#1A76D1 !important;
}
</style>