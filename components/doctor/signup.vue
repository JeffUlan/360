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
                                                <MazPhoneNumberInput
                                                    :translations="{
                                                      countrySelector: {
                                                        placeholder: 'Country code',
                                                        error: 'Choose country',
                                                        searchPlaceholder: 'Search a country',
                                                      },
                                                      phoneInput: {
                                                        placeholder: 'Phone number',
                                                        example: 'Example:',
                                                      },
                                                      
                                                    }"
                                                    v-model="phoneNumber"  @update="onUpdate" v-bind="vuePhone.props"
                                                  />
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" class="form-control floating" placeholder="License ID">
                                                </div>
                                                <div class="form-group">
                                                    <!-- <Password inputClass="form-control floating" style="display:flex !important;font-size: 14px !important;" placeholder="Password" inputStyle="font-size: 14px !important;padding: 6px 12px !important;" v-model="password" type="password"  :id="dynamicID()" clearable>
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
                                                    </Password> -->
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

<script>
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
import Password from 'primevue/password';

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
.m-input-wrapper.--default-border[data-v-32fa5093] {
    border: 1px solid #ced4da !important;
}
.maz-rounded {
    border-radius: 0.25rem !important;
}
.display-center{
  justify-content: center;
  align-items: center;
}
.fb{
    color:#1A76D1 !important;
}
</style>