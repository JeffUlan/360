<template>
    <!-- Breadcrumbs -->
    <div class="breadcrumbs overlay">
        <div class="container">
            <div class="bread-inner">
                <div class="row">
                    <div class="col-12">
                        <h2>Contact Us</h2>
                        <ul class="bread-list">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Breadcrumbs -->
            
    <!-- Start Contact Us -->
    <section class="contact-us section">
        <div class="container">
            <div class="inner">
                <div class="row"> 
                    <div class="col-lg-6">
                        <div class="contact-us-left">
                            <!--Start Google-map -->
                            <div id="myMap">
                                <img src="/img/gmap.png">
                            </div>
                            <!--/End Google-map -->
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-us-form">
                            <h2>Contact Us</h2>
                            <p>If you have any questions please feel free to contact us.</p>
                            <!-- Form -->
                            <form class="form" method="post" action="mail/mail.php">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" name="name" placeholder="Name" required="">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="email" name="email" placeholder="Email" required="">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" name="phone" placeholder="Phone" required="">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" name="subject" placeholder="Subject" required="">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <textarea name="message" placeholder="Your Message" required=""></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group login-btn">
                                            <button class="btn" type="submit">Send</button>
                                        </div>
                                        <div class="checkbox">
                                            <label class="checkbox-inline" for="2"><input name="news" id="2" type="checkbox">&nbsp;Do you want to subscribe our Newsletter ?</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <!--/ End Form -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-info">
                <div class="row">
                    <!-- single-info -->
                    <div class="col-lg-4 col-12 ">
                        <div class="single-info">
                            <i class="icofont icofont-ui-call"></i>
                            <div class="content mt-0">
                                <h3><a href="tel:+34 679 926 957" class="color-white">+34 679 926 957</a></h3>
                                <p><a href="mailto:hello@sunshineoxygen.com" class="color-white">hello@sunshineoxygen.com</a></p>
                            </div>
                        </div>
                    </div>
                    <!--/End single-info -->
                    <!-- single-info -->
                    <div class="col-lg-4 col-12 ">
                        <div class="single-info">
                            <i class="icofont-google-map"></i>
                            <div class="content mt-0">
                                <h3>CARRETERA DE CAMOS 95</h3>
                                <p>17834 GIRONA (SPAIN)</p>
                            </div>
                        </div>
                    </div>
                    <!--/End single-info -->
                    <!-- single-info -->
                    <div class="col-lg-4 col-12 ">
                        <div class="single-info">
                            <i class="icofont icofont-wall-clock"></i>
                            <div class="content mt-0">
                                <h3>Mon - Sat: <br>8am - 5pm</h3>
                                <p>Sunday Closed</p>
                            </div>
                        </div>
                    </div>
                    <!--/End single-info -->
                </div>
            </div>
        </div>
    </section>
    <!--/ End Contact Us -->
</template>
<script>
export default {
    name: 'BannerBody',
    mounted() {
        
    }
    
}
</script>

<style scoped>
.breadcrumbs {
    background-image: url(/img/bread-bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    padding: 120px 0px;
}
.breadcrumbs .bread-inner {
    z-index: 22;
    text-align: center;
}

.breadcrumbs h2 {
    color: #fff;
    text-transform: capitalize;
    font-size: 38px;
    font-weight: 700;
    margin: 0;
    padding: 0;
}
.breadcrumbs .bread-list {
    display: inline-block;
    margin-top: 20px;
}
.contact-us .contact-us-left {
    width: 100%;
    height: 100%;
}
.contact-us .contact-us-form {
    padding: 50px 40px;
}
.contact-us .contact-us-form h2 {
    position: relative;
    font-size: 32px;
    color: #333;
    font-weight: 600;
    line-height: 27px;
    text-transform: capitalize;
    margin-bottom: 12px;
    padding-bottom: 20px;
    text-align: left;
}
.contact-us .contact-us-form p {
    font-size: 14px;
    color: #333;
    font-weight: 400;
    text-align: left;
    margin-bottom: 50px;
}
.contact-us .form {
    margin-top: 30px;
}
.contact-us .form .form-group {
    margin-bottom: 22px;
}
.contact-us .form .form-group input {
    width: 100%;
    height: 50px;
    border: 1px solid #eee;
    text-transform: capitalize;
    padding: 0px 18px;
    color: #555;
    font-size: 14px;
    font-weight: 400;
    border-radius: 4px;
}
.contact-us .form .form-group textarea {
    width: 100%;
    height: 100px;
    border: 1px solid #eee;
    text-transform: capitalize;
    padding: 18px;
    color: #555;
    font-size: 14px;
    font-weight: 400;
    border-radius: 4px;
}
.contact-us .form .form-group.login-btn {
    margin: 0;
}
.contact-us .form .btn {
    display: inline-block;
    margin-right: 10px;
    color: #fff;
    line-height: 20px;
    width: 100%;
}
.contact-us .form button {
    border: none;
}
.btn {
    color: #fff;
    padding: 13px 25px;
    font-size: 14px;
    text-transform: capitalize;
    font-weight: 500;
    background: #1A76D1;
    position: relative;
    box-shadow: none;
    display: inline-block;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    border: none;
    border-radius: 0;
    border-radius: 4px;
}
.contact-us .contact-us-form .checkbox {
    text-align: left;
    margin: 0;
    margin-top: 20px;
    display: inline-block;
}
.contact-us .contact-us-form .checkbox label {
    font-size: 14px;
    font-weight: 400;
    color: #333;
    position: relative;
    /* padding-left: 20px; Takeo*/
}

.contact-us .contact-us-form .checkbox label input {
    /* display: none; */
}
input[type="checkbox"], input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
}
label {
    display: inline-block;
    margin-bottom: 0.5rem;
}
/* .contact-us .contact-us-form .checkbox label::before {
    position: absolute;
    content: "";
    left: 0;
    top: 5px;
    width: 15px;
    height: 15px;
    border: 1px solid #1A76D1;
    border-radius: 100%;
} */
.contact-us .contact-us-form .checkbox label::after {
    position: relative;
    content: "";
    width: 7px;
    height: 7px;
    left: -16px;
    top: -15px;
    opacity: 0;
    visibility: hidden;
    transform: scale(0);
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
    display: block;
    font-size: 9px;
    background: #1A76D1;
    border-radius: 100%;
}
body, button, input, select, optgroup, textarea {
    color: #424646;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
}
.contact-us .inner {
    box-shadow: 0px 0px 10px #00000024;
    border-radius: 5px;
   overflow: hidden;
   background-color: white;
}
.contact-us .contact-info {
    margin-top: 50px;
}
.contact-us .single-info {
    background: #1a76d1;
    padding: 40px 60px;
    height: 150px;
    border-radius: 10px;
    position: relative;
    -webkit-transition: all .3s ease-out 0s;
    -moz-transition: all .3s ease-out 0s;
    -ms-transition: all .3s ease-out 0s;
    -o-transition: all .3s ease-out 0s;
    transition: all .3s ease-out 0s;
}
.contact-us .single-info i {
    font-size: 42px;
    color: #fff;
    position: absolute;
    left: 40px;
}
.contact-us .single-info .content {
    margin-left: 45px;
}
.contact-us .single-info .content h3 {
    color: #fff;
    font-size: 18px;
    font-weight: 600;
}
.contact-us .single-info .content p {
    color: #fff;
    margin-top: 5px;
}
.mt-0{
    padding-top:0px !important;
}
.color-white{
    color:white;
}
.section {
    padding: 100px 0;
}
.overlay:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #1a76d1;
    opacity: 0.8;
}
</style>