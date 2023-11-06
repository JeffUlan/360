<template>
    <!-- Start Appointment -->
		<section class="appointment">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<div class="section-title mt-50">
							<h2>Request your Digital Kit</h2>
							<img src="/img/section-img.png" alt="#">
                            <p>Request a Digital Kit for Enrollment</p>
                            <p>We're excited that you're interested in partnering with My Doctor IN-HOME to enhance your healthcare services through telehealth. To get started, please complete this "Request a Digital Kit" questionnaire.</p>
						</div>
					</div>
				</div>
				<div class="row content-center">
					<div class="col-lg-9 col-md-12 col-12 shadow">
						<form class="form" action="#">
							<div class="row">
                                <div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="Previous" type="text" placeholder="Hospital/Clinic Name">
									</div>
								</div>
                                <div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
                                        <select class="form-control select">
                                            <option>Hospital</option>
                                            <option>Clinic</option>
                                            <option>Other</option>
                                        </select>
									</div>
								</div>
                                <div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="text" type="email" placeholder="Contact Person's Name">
									</div>
								</div>
                                <div class="col-lg-6 col-md-6 col-12">
									<div class="form-group">
										<input name="text" type="email" placeholder="Location (City, State/Region)">
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
										<textarea name="why" type="text" placeholder="Why Telehealth"></textarea>
									</div>
								</div>
                                <div class="col-lg-1 col-md-1 col-12">
                                        <input type="checkbox" id="accept" class="w-a">
								</div>
                                <div class="col-lg-11 col-md-11 col-12">
                                    <div class="form-group">
										<label for="accept">Check this box to request a Digital Kit to guide you through the enrollment process.</label>
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
<script>
export default {
    name: 'rdk',
    components: {
    },
    mounted() {
     }
}
</script>
<style scoped>

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

.nice-select:hover {
    border-color: #3164F4;
}

.nice-select:active,
.nice-select.open,
.nice-select:focus {
    border-color: #999;
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

.nice-select.open:after {
    -webkit-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    transform: rotate(-135deg);
}

.nice-select.open .list {
    opacity: 1;
    pointer-events: auto;
    -webkit-transform: scale(1) translateY(0);
    -ms-transform: scale(1) translateY(0);
    transform: scale(1) translateY(0);
}

.nice-select.disabled {
    border-color: #ededed;
    color: #999;
    pointer-events: none;
}

.nice-select.disabled:after {
    border-color: #cccccc;
}

.nice-select.wide {
    width: 100%;
}

.nice-select.wide .list {
    left: 0 !important;
    right: 0 !important;
}

.nice-select.right {
    float: right;
}

.nice-select.right .list {
    left: auto;
    right: 0;
}

.nice-select.small {
    font-size: 12px;
    height: 36px;
    line-height: 34px;
}

.nice-select.small:after {
    height: 4px;
    width: 4px;
}

.nice-select.small .option {
    line-height: 34px;
    min-height: 34px;
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

.nice-select .list:hover .option:not(:hover) {
    background-color: transparent !important;
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

.nice-select .option:hover {
    background-color: #1A76d1;
    color: #fff;
}

.nice-select .option.selected {
    font-weight: bold;
}

.nice-select .option.disabled {
    background-color: transparent;
    color: #999;
    cursor: default;
}

.no-csspointerevents .nice-select .list {
    display: none;
}

.no-csspointerevents .nice-select.open .list {
    display: block;
}

.contact-form-wrapper .list {
    background: #2f3341 none repeat scroll 0 0;
    border-radius: 0;
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
.btn{
    padding:13px 25px;
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