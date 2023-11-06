<template>
    <section class="section-all">
      <Toast position="top-right" />
      <div class="main-wrapper">
        <!-- Page Content -->
        <div class="content bg-white">
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
                        <h3>Recovery Password </h3>
                      </div>
  
                      <!-- Register Form -->
                      <form @submit.prevent="onSubmit">
                        <div class="form-group">
                          <!-- <input  v-model="token" disabled type="text" class="form-control floating" placeholder="Reset Code"> -->
                          <input  v-model="token"  type="text" class="form-control floating" placeholder="Reset Code">
                        </div>
                        <!-- <div class="form-group ">
                          <Password inputClass="form-control floating" style="display:flex !important;font-size: 14px !important;" placeholder="Password" inputStyle="font-size: 14px !important;padding: 6px 12px !important;" v-model="password" type="password"  :id="dynamicID()" clearable>
                            <template #header>
                              <h6>Password</h6>
                            </template>
                            <template #footer>
                              <Divider />
                              <p class="mt-2">Suggestions</p>
                              <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                                <li>At least one lowercase</li>
                                <li>At least one uppercase</li>
                                <li>At least one numeric</li>
                                <li>Minimum 8 characters</li>
                                <li>Maximum 14 characters</li>
                              </ul>
                            </template>
                          </Password>
                        </div> -->
                        <div class="form-group">
                          <input  v-model="repassword"  type="password" class="form-control floating" placeholder="New Password">
                        </div>
                        <div class="form-group">
                          <input  v-model="repassword"  type="password" class="form-control floating" placeholder="Confirm New Password">
                        </div>
                        <!-- <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Change Password</button> -->
                        <nuxt-link to="/doctor/signin" class="btn btn-primary btn-block btn-lg login-btn">Change Password</nuxt-link>
                        <!-- <div class="login-or">
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
                         </div>-->
                      </form>
                      <!-- /Register Form -->
  
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
    </section>
  </template>
  
  <script>
  export default {
    middleware:["is_authenticated"],
    data() {
      return {
        token:'',
        password:'',
        repassword:''
      }
    },
    created() {
      this.token= this.$route.query.token;
    },
    methods: {
      dynamicID() { return 'dynamicID-' + Math.floor(Math.random() * Date.now().toString()); },
  
      async onSubmit() {
        if(!this.validateInputs()){
          return;
        }
  
        this.$store.dispatch('authModule/updatePassword', {token:this.token,password:this.password})
          .then(res => {
            this.$toast.add({severity: 'success', summary: 'Success', detail: "Changed password successfully.", life: 3000})
            setTimeout(() => {
              this.$router.push("/")
            }, 2000);
          }).catch(ex => {
          this.$toast.add({severity: 'error', summary: 'Error', detail: ex, life: 3000})
        })
      },
      validateInputs(){
        if(this.password.trim() == ''  ){
          this.$toast.add({severity:'error', summary: 'Validation', detail: 'You need to fill all fields', life: 3000})
          setTimeout(() => {
          }, 3000);
          return false;
        }
        if(this.password.length < 6 || this.password.length> 14){
          this.$toast.add({severity:'error', summary: 'Validation', detail: 'Password must be minimum 6 characters, maximum 14 characters', life: 3000})
          setTimeout(() => {
          }, 3000);
          return false;
        }
        if(this.password != this.repassword){
          this.$toast.add({severity: 'error', summary: 'Error', detail: "You need to enter same password!", life: 3000})
          return
        }
        return true;
      },
    }
  }
  </script>
  