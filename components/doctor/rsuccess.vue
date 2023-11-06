<template>
    <section class="contact-us section">
        <div class="container py-5 h-100 ">
            <div class=" row d-flex justify-content-center align-items-center h-100">
                <div class="inner contact-us-form display-center col-12 col-md-8 col-lg-6 col-xl-5">
                    <img class="flex flex-col items-center p-5 d-flex justify-content-center ma"  src="">
                    <h1 class="mb-4 mt-10 text-center">Congrats!</h1>
                    <p class="mt-4 text-center">You have successfully change password.<br>Please use the new password when logging in.</p>
                    <!-- Form -->
                    <form class="form" method="post" action="#">
                        <div class="row">
                            <div class="col-lg-12 mb-3">
                                <!-- <button class="btn" type="submit">Send Email</button> -->
                                <nuxt-link to="/doctor/signin" class="btn">Signin Now</nuxt-link>
                            </div>
                        </div>
                    </form>
                    <!--/ End Form -->
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.ma{
    margin:auto !important;
}
</style>