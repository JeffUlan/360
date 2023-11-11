<template>
    <!-- Breadcrumbs -->
    <div class="breadcrumbs overlay">
        <div class="container">
            <div class="bread-inner">
                <div class="row">
                    <div class="col-12">
                        <h2>About Us</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Breadcrumbs -->

    <!-- Start Portfolio Details Area -->
    <section class="pf-details section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="inner-content">
                        <div class="image-slider">
                            <div class="pf-details-slider">
                                <img src="/img/aboutus.jpg" alt="#" style="max-width:100%;">
                            </div>
                        </div>
                        <!-- <div class="date">
                            <ul>
                                <li><span>Category :</span> Heart Surgery</li>
                                <li><span>Date :</span> April 20, 2023</li>
                                <li><span>Client :</span> Suke Agency</li>
                                <li><span>Ags :</span> Typo</li>
                            </ul>
                        </div> -->
                        <div class="body-text">
                            <p>At the heart of our mission lies a commitment to reinvent healthcare through cutting-edge telehealth solutions. <br>Designed to serve the real needs of patients and to cover every corner of Bahrain, our platform integrates a seamless chain of care, setting a new standard for accessible and personalized healthcare. <br>We're not just a healthcare service; we're your partner in building a healthier, brighter future, one consultation at a time. Welcome to the telehealth revolution – welcome to the future of well-being.</p>
                        </div>
                        <div class="body-text" style="margin-bottom: 30px;">
                            <h3>Awards</h3>
                        </div>
						<div class="image-slider">
                            <div class="pf-details-slider">
                                <img src="/img/awards.png" alt="#" style="max-width:100%;">
                            </div>
                        </div>
                        <div class="body-text">
                            <h3>Testimonials</h3>
                            <p><h5>Testimonial 1 :</h5></p>
                            <p>Patient: Karim H.</p>

							<p>Before My Doctor IN-HOME:</p>
							<p>"Before using My Doctor IN-HOME, managing my chronic condition at the hospital was a daily struggle. I had to travel long distances to see my specialist, which often left me exhausted and stressed. My family was concerned about the impact on my well-being."</p>

							<p>After My Doctor IN-HOME:</p>
							<p>"Discovering Telehealth has been a game-changer. Now, I can have regular check-ups and consultations with my doctor from the comfort of my home. My family is relieved to see me less stressed, and I'm grateful for the convenience that My Doctor IN-HOME offers. It has truly improved our quality of life."</p>

							<p>Family Member Perspective (Amina H. - Wife):</p>
							<p>"We've seen a remarkable transformation in Karim's well-being since he started using My Doctor IN-HOME. It's not just convenient; it's made his life better. We no longer worry about the toll of frequent travel. My Doctor IN-HOME has brought peace of mind to our family."</p>


							<p><h5>Testimonial 2 :</h5></p>
                            <p>Patient: Nadia A.</p>

							<p>Before My Doctor IN-HOME:</p>
							<p>"Managing my mental health was a struggle, especially in the midst of a busy schedule. My family often felt helpless, not knowing how to support me during my tough times."</p>

							<p>After My Doctor IN-HOME:</p>
							<p>"My Doctor IN-HOME has changed everything. I can access therapy and support whenever I need it, and my family can participate in my sessions, offering valuable insights into my well-being. It's been a lifeline for me and a relief for my loved ones."</p>

							<p>Family Member Perspective (Karim A. - Brother):</p>
							<p>"We can't thank My Doctor IN-HOME enough for bringing our sister back to us. Being part of her therapy sessions IN-home has given us a better understanding of her challenges and how to support her. It's transformed our family dynamic."</p>


							<p><h5>Testimonial 3 :</h5></p>
                            <p>Patient: Leila K.</p>

							<p>Before My Doctor IN-HOME:</p>
							<p>"As a senior, I struggled with multiple health issues, and visiting doctors meant long waits and exhausting trips. My family was concerned about my health and safety."</p>

							<p>After My Doctor IN-HOME:</p>
							<p>"My Doctor IN-HOME has made healthcare accessible and convenient for me. I can consult with specialists from home, and family members can participate in my appointments. It's improved my well-being, and my family feels reassured."</p>

							<p>Family Member Perspective (Youssef K. - Son):</p>
							<p>"Telehealth has been a blessing for our family. We no longer worry about Dad's health deteriorating during lengthy clinic visits. We're actively involved in his care, IN-home, and he's healthier and happier because of it."</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Portfolio Details Area -->
</template>
<style>
img {
    height: auto;
    max-width: 100%;
}

.font-blue{
    color:#1a76d1;
}
.mt-50{
    margin-top:50px;
}
.breadcrumbs {
    background-image: url(/img/bread-bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    padding: 60px 0px;
}
.overlay {
    position: relative;
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
.breadcrumbs .bread-inner {
    z-index: 22;
    text-align: center;
}
.breadcrumbs .bread-list {
    display: inline-block;
    margin-top: 20px;
}
.breadcrumbs .bread-inner {
    z-index: 22;
    text-align: center;
}
.section {
    padding: 100px 0;
}
.pf-details .image-slider {
    border-radius: 8px 8px 0 0;
}
.no-js .owl-carousel {
    display: block;
}
.pf-details .date {
    background: #1a76d1;
    display: block;
    padding: 20px;
    text-align: center;
    border-radius: 0;
    border: none;
    margin: 0;
    margin-top: -1px;
}
.pf-details .date ul li {
    font-size: 16px;
    color: #fff;
    display: inline-block;
    margin-right: 60px;
}
.pf-details .body-text p {
    margin-top: 20px;
}

.pf-details .body-text .share {
    margin-top: 40px;
}
.pf-details .body-text .share ul {
    display: inline-block;
    margin-left: 12px;
}
.pf-details .body-text h3 {
    font-size: 30px;
    font-weight: 600;
    color: #333;
    margin-top: 40px;
}
.pf-details .body-text .share ul li {
    display: inline-block;
    margin-right: 10px;
}
.pf-details .body-text .share ul li a {
    height: 35px;
    width: 35px;
    line-height: 35px;
    text-align: center;
    border: 1px solid #C8C8C8;
    color: #757575;
    display: block;
    border-radius: 50%;
}
.breadcrumbs h2 {
    color: #fff;
    text-transform: capitalize;
    font-size: 38px;
    font-weight: 700;
    margin: 0;
    padding: 0;
}
</style>
<script></script>