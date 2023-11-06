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
                                
                                <!-- Account Content -->
                                <div class="account-content">
                                    <div class="row align-items-center justify-content-center">
                                        <div class="col-md-7 col-lg-6 login-left">
                                            <img src="~/assets/img/login-banner.png" class="img-fluid" alt="Login Banner">	
                                        </div>
                                        <div class="col-md-12 col-lg-6 login-right">
                                            <div class="login-header">
                                                <h3>Forgot Password?</h3>
                                                <p class="small text-muted">Enter your email to get a password reset link</p>
                                            </div>
                                            
                                            <!-- Forgot Password Form -->
                                            <form action="#">
                                                <div class="form-group form-focus">
                                                    <input type="email" class="form-control floating">
                                                    <label class="focus-label">Email</label>
                                                </div>
                                                <div class="text-right">
                                                    <nuxt-link to="/patient/signin" class="forgot-link">Remember your password?</nuxt-link>
                                                </div>
                                                <!-- <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Reset Password</button> -->
                                                <nuxt-link to="/patient/recoverypassword" class="btn btn-primary btn-block btn-lg login-btn">Reset Password</nuxt-link>
                                            </form>
                                            <!-- /Forgot Password Form -->
                                            
                                        </div>
                                    </div>
                                </div>
                                <!-- /Account Content -->
                                
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
</style>