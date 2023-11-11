<template>
    <!-- Start Appointment -->
		<section class="appointment">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title mt-50">
							<h2>Hospitals and Clinics</h2>
							<img src="/img/section-img.png" alt="#">
							<p>Healthcare Partner Enrollment Questionnaire</p>
						</div>
					</div>
				</div>
				<div class="row content-center">
					<div class="col-lg-9 col-md-12 col-12 shadow">
						<form class="form" action="#">
							<div class="row">
								<div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="name" type="text" placeholder="Organization Name">
									</div>
								</div>
                                <div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<div class="nice-select form-control wide" tabindex="0"><span class="current">Hospital</span>
											<ul class="list">
												<li data-value="1" class="option selected ">Hospital</li>
												<li data-value="2" class="option">Clinic</li>
												<li data-value="3" class="option">Consultancy</li>
												<li data-value="4" class="option">Other</li>
												<li data-value="5" class="option">other</li>
											</ul>
										</div>
									</div>
								</div>
                                <div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="location" type="text" placeholder="Location (City, State/Region)">
									</div>
								</div>
                                <div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="pname" type="text" placeholder="Contact Persona's Name">
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
								
								<div class="col-lg-9 col-md-9 col-12">
									<div class="form-group">
										<input name="license" type="text" placeholder="Accreditation, Licenses, Certifications">
									</div>
								</div>
								<div class="col-lg-3 col-md-3 col-12">
									<div class="form-group">
										<button type="submit" class="btn btn-primary submit-btn">upload</button>
									</div>
								</div>
                                <div class="col-lg-12 col-md-12 col-12">
									<div class="form-group">
										<input name="Service" type="text" placeholder="Service Offered">
									</div>
								</div>
                                <div class="col-lg-12 col-md-12 col-12">
									<div class="form-group">
										<textarea name="Previous" type="text" placeholder="Previous Collaborations"></textarea>
									</div>
								</div>
                                <div class="col-lg-12 col-md-12 col-12">
									<div class="form-group">
										<textarea name="Reason" type="text" placeholder="Reason for Partnership"></textarea>
									</div>
								</div>
                                <div class="col-lg-1 col-md-1 col-12">
                                        <input type="checkbox" id="accept" class="w-a">
								</div>
                                <div class="col-lg-11 col-md-11 col-12">
                                    <div class="form-group">
										<label for="accept">I hereby certify that the information provided in this application is true and accurate to the best of my knowledge</label>
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
.section-title{
    text-align: center;
    margin-bottom: 60px;
    padding: 0 250px;
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