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
                                    <div class="row align-items-center justify-content-center shadow">
                                        <div class="col-md-7 col-lg-6 login-left">
                                            <img src="~/assets/img/login-banner.png" class="img-fluid" alt="Doccure Register">	
                                        </div>
                                        <div class="col-md-12 col-lg-6 login-right">
                                            <div class="login-header">
                                                <h3>Patient Register  <nuxt-link to="/doctor/signin" class="forgot-link">Are you a doctor?</nuxt-link></h3>
                                            </div>
                                            
                                            <!-- Register Form -->
                                            <form action="">
                                              <div class="form-group">
                                                    <input type="text" class="form-control floating" placeholder="Full Name">
                                                </div>
                                                <div class="form-group">
                                                    <input type="email" class="form-control floating" placeholder="Email">
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control floating" placeholder="Phone Number">
                                                </div>
                                                <!-- <div class="form-group">
                                                  <vue-phone-number-input v-model="phoneNumber"  @update="onUpdate" v-bind="vuePhone.props" ></vue-phone-number-input>
                                                </div> -->
                                                <div class="form-group">
                                                    <input type="password" class="form-control floating" placeholder="Password">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control floating" placeholder="Confirm Password">
                                                </div>
                                                    <div class="text-left">
                                                        <input type="checkbox" id="terms_accept">
                                                        <label for="terms_accept">&nbsp;I am above 18 years old?</label>
                                                    </div>
                                                    <div class="text-left">
                                                        <input type="checkbox" id="policy_accept">
                                                        <label for="terms_accept">&nbsp;I agree <nuxt-link to="/patient/Privacy" class="font-blue">Privacy Policy?</nuxt-link></label>
                                                    </div>
                                                    <div class="text-right">
                                                        <nuxt-link to="/patient/signin" class="forgot-link">Already have an account?</nuxt-link>
                                                    </div>
                                                <!-- <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button> -->
                                                <nuxt-link to="/patient/signin" class="btn btn-primary btn-block btn-lg login-btn">Sigup</nuxt-link>
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

<script>
export default {
  middleware:["is_authenticated"],
  data() {
    return {
      email: '',
      password: '',
      phoneNumber:'',
      vuePhone: {
        props: {
          clearable: true,
          fetchCountry: true,
          preferredCountries: ["US", "GB"],
          noExample: false,
          borderRadius: 0,
          translations: {
            countrySelectorLabel: "Country code",
            countrySelectorError: "Error",
            phoneNumberLabel: "Enter your phone",
            example: "Example:"
          }
        }
      }
    }
  },
  created() {

  },
  methods: {
    onUpdate (payload) {
      this.results = payload
    },
    dynamicID() { return 'dynamicID-' + Math.floor(Math.random() * Date.now().toString()); },
    async onSubmit(){
      if(!this.validateInputs()){
        return;
      }
      this.$store.dispatch('authModule/register',{email:this.email,password:this.password,prefixPhoneNumber:this.results.countryCallingCode,phoneNumber:this.results.nationalNumber,type:"user"},)
        .then(res=>{
          this.$toast.add({severity:'success', summary: 'Success', detail: res, life: 3000})
          setTimeout(() => {
            this.$router.push("/patient/verification")
          }, 2000);
        }).catch(ex =>{
        this.$toast.add({severity:'error', summary: 'Error', detail: ex, life: 3000})
      })
    },
    validateInputs(){
      if(this.email.trim() =='' || this.password.trim() == ''  ){
        this.$toast.add({severity:'error', summary: 'Validation', detail: 'You need to fill all fields', life: 3000})
        setTimeout(() => {
        }, 3000);
        return false;
      }
      if(!this.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        this.$toast.add({severity:'error', summary: 'Validation', detail: 'Email is not valid', life: 3000})
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
      if(!this.results.isValid){
        this.$toast.add({severity:'error', summary: 'Validation', detail: 'Phone number is not valid.', life: 3000})
        setTimeout(() => {
        }, 3000);
        return false;
      }
      return true;
    },
  }
}
</script>

<style>
.font-blue{
    color:#1A76D1;
}
.display-center{
  justify-content: center;
  align-items: center;
}
.fb{
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