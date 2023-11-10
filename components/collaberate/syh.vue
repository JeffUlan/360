<template>
    <!-- Start Appointment -->
		<section class="appointment">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title mt-50">
							<h2>Share Your Telehealth Story</h2>
							<img src="/img/section-img.png" alt="#">
                            <p>We believe in the power of shared experiences. If you've had a positive experience with our telehealth platform, whether you're a patient or a doctor, we'd love to hear your story. Share your testimonials with us to inspire and reassure others about the benefits of telehealth.</p>
                            <p>Upon submission, your testimonial may be featured on our platform to provide inspiration and insights to others considering telehealth. Thank you for sharing your telehealth story with us. Your experience can make a difference in someone else's healthcare journey.</p>
						</div>
					</div>
				</div>
				<div class="row content-center">
					<div class="col-lg-9 col-md-12 col-12 shadow">
						<form class="form" action="#">
							<div class="row">
                                <div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="text" type="email" placeholder="Name">
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="email" type="email" placeholder="Email">
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="phone" type="text" placeholder="Phone">
									</div>
								</div>
                                <div class="col-lg-3 col-md-12 col-12">
									<div class="form-group h-center">
										<p class="fr">I am a </p>
									</div>
								</div>
                                <div class="col-lg-3 col-md-6 col-12">
									<div class="form-group">
                                        <select class="form-control select">
                                            <option>Patient</option>
                                            <option>Doctor</option>
                                        </select>
									</div>
								</div>
                                <div class="col-lg-12 col-md-12 col-12">
									<div class="form-group">
										<textarea name="Service" type="text" placeholder="Your History : Please share your telehealth experience and tell us how it has benefited you. Your story can be as brief or detailed as you'd like. (500 words or less)"></textarea>
									</div>
								</div>
                                <div class="col-lg-1 col-md-1 col-12">
                                        <input type="checkbox" id="accept" class="w-a">
								</div>
                                <div class="col-lg-11 col-md-11 col-12">
                                    <div class="form-group">
										<label for="accept">By submitting your testimonial, you give us permission to share your story and, if provided, your photo on our platform for the purpose of inspiring and informing others about telehealth.</label>
									</div>
                                </div>
							</div>
							<div class="row">
								<div class="col-lg-12 col-md-12 col-12 ">
									<div class="form-group">
										<div class="button">
											<button type="submit" class="btn f-right btn-primary submit-btn">Submit</button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		<!-- End Appointment -->
</template>
<script></script>
<style scoped>
.fr{
    float:right;
}
.btn{
    padding:13px 25px;
}
.w-a{
    width:auto !important;
}
.f-right{
    float:right;
}
.form-group {
    margin-bottom: 1rem;
}
.appointment .form input {
    width: 100%;
    height: 50px;
    border: 1px solid #eee;
    text-transform: capitalize;
    padding: 0px 18px;
    color: #555;
    font-size: 14px;
    font-weight: 400;
    border-radius: 0;
    border-radius: 4px;
}
img, a, input, h1, h2, h3, h4, h5, h6 {
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
}
.appointment .form-group .nice-select {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border: 1px solid #eee;
    text-transform: capitalize;
    padding: 0px 18px;
    color: #999;
    font-size: 14px;
    font-weight: 400;
    border-radius: 4px;
    font-weight: 400;
}
.nice-select {
    -webkit-tap-highlight-color: transparent;
    background-color: #fff;
    border-radius: 5px;
    border: solid 1px #e8e8e8;
    box-sizing: border-box;
    clear: both;
    cursor: pointer;
    display: block;
    float: left;
    font-family: inherit;
    font-size: 15px;
    font-weight: normal;
    height: 42px;
    line-height: 27px;
    outline: none;
    padding-left: 18px;
    padding-right: 30px;
    position: relative;
    text-align: left !important;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: auto;
    margin-bottom: 16px;
}
.appointment .form-group .nice-select::after {
    right: 20px;
    color: #757575;
}
.nice-select:after {
    border-bottom: 2px solid #999;
    border-right: 2px solid #999;
    content: '';
    display: block;
    height: 8px;
    margin-top: -4px;
    pointer-events: none;
    position: absolute;
    right: 12px;
    top: 50%;
    -webkit-transform-origin: 66% 66%;
    -ms-transform-origin: 66% 66%;
    transform-origin: 66% 66%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 0.15s ease-in-out;
    transition: all 0.15s ease-in-out;
    width: 8px;
}
.appointment .form-group .list {
    border-radius: 4px;
}
.nice-select.wide .list {
    left: 0 !important;
    right: 0 !important;
}
.nice-select .list {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(68, 68, 68, 0.11);
    box-sizing: border-box;
    margin-top: 4px;
    opacity: 0;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 100%;
    left: 0;
    -webkit-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transform: scale(0.75) translateY(-21px);
    -ms-transform: scale(0.75) translateY(-21px);
    transform: scale(0.75) translateY(-21px);
    -webkit-transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
    transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;
    z-index: 9;
}
.appointment .form-group .list li.selected {
    color: #757575;
    font-weight: 400;
}
.appointment .form-group .list li {
    color: #757575;
    border-radius: 0;
}
.nice-select .option {
    cursor: pointer;
    font-weight: 400;
    line-height: 40px;
    list-style: none;
    min-height: 40px;
    outline: none;
    padding-left: 18px;
    padding-right: 29px;
    text-align: left;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}
.appointment .form textarea {
    width: 100%;
    height: 200px;
    padding: 18px;
    border: 1px solid #eee;
    text-transform: capitalize;
    resize: none;
    border-radius: 4px;
}
.btn:hover{
    color:white;
}
.mt-50{
    margin-top: 50px;
}
.h-center{
    text-align: center;
    margin-top: 10px;
}
.content-center{
    justify-content: center;
}
.shadow{
    box-shadow: 0px 0px 10px #00000024;
    border-radius: 5px;
    overflow: hidden;
    padding: 25px;
    margin-bottom: 50px;
    background-color:white;
}
</style>