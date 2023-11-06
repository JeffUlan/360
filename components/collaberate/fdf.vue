<template>
    <!-- Start Appointment -->
		<section class="appointment">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title mt-50">
							<h2>Find Doctors Financing</h2>
							<img src="/img/section-img.png" alt="#">
							<p>Your health is important to us, and we're here to help you manage the financial aspect of your healthcare effectively. Please fill out the following information to estimate and tailor your financing options for medical consultations, treatments, and procedures.</p>
                            <p>Your information will be kept confidential and used solely for the purpose of estimating and tailoring your financing options.Submit your questionnaire, and our team will assist you in estimating the cost and customizing your financing options for your medical needs.</p>
						</div>
					</div>
				</div>
				<div class="row content-center">
					<div class="col-lg-9 col-md-12 col-12 shadow">
						<form class="form" action="#">
							<div class="row ">
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="name" type="text" placeholder="Name">
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="email" type="email" placeholder="Contact Email">
									</div>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="phone" type="text" placeholder="Contact Phone">
									</div>
								</div>
                                <div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="name" type="text" placeholder="Healthcare Needs">
									</div>
								</div>
                                <div class="col-lg-12 col-md-12 col-12">
									<div class="form-group">
										<input name="name" type="text" placeholder="Estimated Cost of Procedure (if known)">
									</div>
								</div>
                                <div class="col-lg-12 col-md-12 col-12">
									<div class="form-group">
										<input name="name" type="text" placeholder="if you have Health Insurance, Insurance Provider">
									</div>
								</div>
                                <div class="col-lg-12 col-md-12 col-12">
									<div class="form-group">
										<input name="name" type="text" placeholder="Preferred Payment Schedule (Monthly/Quarterly/Other)">
									</div>
								</div>
                                <div class="col-lg-12 col-md-12 col-12">
									<div class="form-group">
										<textarea name="name" type="text" placeholder="Additional Financial Information or Special Considerations"></textarea>
									</div>
								</div>
                                <div class="col-lg-12 col-md-12 col-12">
									<div class="form-group">
										<textarea name="Service" type="text" placeholder="Is there anything specific you'd like to discuss or any questions you have about financing your healthcare?"></textarea>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-12 col-md-12 col-12 ">
									<div class="form-group">
										<div class="button">
											<button type="submit" class="btn f-right">Submit</button>
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
.f-right{
    float:right !important;
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
.content-center{
    justify-content: center !important;
}
.shadow{
    box-shadow: 0px 0px 10px #00000024;
    border-radius: 5px;
    overflow: hidden;
    padding: 25px;
    margin-bottom: 50px;
    background-color:white;
}
.btn{
    padding:13px 25px;
}
</style>