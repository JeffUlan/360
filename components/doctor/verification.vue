<template>
  <section class="section-all" >
  <Toast position="top-right" />

  <div class="account-page">
    <div class="main-wrapper">
      <!-- Page Content -->
      <div class="content">
        <div class="container-fluid">

          <div class="row">
            <div class="col-md-8 offset-md-2">

              <!-- Account Content -->
              <div class="account-content">
                <div class="row align-items-center justify-content-center shadow">
                  <div class="col-md-7 col-lg-6 login-left">
                    <img src="~/assets/img/login-banner.png" class="img-fluid" alt="Login Banner">
                  </div>
                  <div class="col-md-12 col-lg-6 login-right">
                    <div class="login-header">
                      <h3>OTP Validation</h3>
                      <p class="small text-muted">Enter otp code</p>
                    </div>

                    <!-- Forgot Password Form -->
                    <form @submit.prevent="">
                      <div class="form-group ">
                        <input type="text" placeholder="Verification Code" class="form-control floating">
                      </div>
                      <div class="text-right mb-1">
                        Send again <a href="#" @click.prevent="" style="color: red">SMS</a> or <a href="#" @click.prevent="" style="color: red">Email</a>
                      </div>
                      <!-- <button class="btn btn-primary btn-block btn-lg login-btn"  type="submit">Verify</button> -->
                      <nuxt-link to="/doctor/doctordashboard" class="btn btn-primary btn-block btn-lg login-btn">Verify</nuxt-link>
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
      <!-- /Page Content -->
    </div>
  </div>
</section>
</template>

<style>
.mb-1{
  margin-bottom: 1rem;
}
.fb{
  color:#1A76D1 !important;
}
.display-center{
  justify-content: center;
  align-items: center;
}
.verification-text{
  width:15% !important;
  font-size: 4rem !important;
  line-height: 2rem !important;
  color:#1A76D1 !important;
}
.shadow{
        box-shadow: 0px 0px 10px #00000024;
        border-radius: 5px;
        overflow: hidden;
        background-color: white;
}
.login-right{
    border:0px;
}
</style>