<template>
    <section class="section-all" >
    <Toast position="top-right" />
            <div class="main-wrapper">
                <!-- Breadcrumb -->
                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-8 col-12">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><nuxt-link to="/patient/patientdashboard">Home</nuxt-link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Search</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Search Doctor</h2>
                            </div>
                            <div class="col-md-4 col-12 d-md-block d-none">
                                <div class="sort-by">
                                    <span class="sort-title">Sort by</span>
                                    <span class="sortby-fliter">
                                        <select class="select  form-control">
                                            <option>Select</option>
                                            <option class="sorting">Rating</option>
                                            <option class="sorting">Popular</option>
                                            <option class="sorting">Latest</option>
                                            <option class="sorting">Free</option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Breadcrumb -->
                
                <!-- Page Content -->
                <div class="content">
                    <div class="container-fluid">

                        <div class="row">
                            <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            
                                <!-- Search Filter -->
                                <div class="card search-filter">
                                    <div class="card-header">
                                        <h4 class="card-title mb-0">Search Filter</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="filter-widget">
                                            <div>
                                                <input type="search" class="form-control"  id="specialsearch" placeholder="Select Specialist">
                                            </div>			
                                        </div>
                                        <div class="filter-widget">
                                            <h4>Gender</h4>
                                            <div>
                                                <label class="custom_check">
                                                    <input type="checkbox" name="gender_type" checked>
                                                    <span class="checkmark"></span> Male Doctor
                                                </label>
                                            </div>
                                            <div>
                                                <label class="custom_check">
                                                    <input type="checkbox" name="gender_type">
                                                    <span class="checkmark"></span> Female Doctor
                                                </label>
                                            </div>
                                        </div>
                                        <div class="filter-widget">
                                            <h4>Select Position</h4>
                                            <div>
                                                <label class="custom_check">
                                                    <input type="checkbox" name="select_specialist" checked>
                                                    <span class="checkmark"></span> position1
                                                </label>
                                            </div>
                                            <div>
                                                <label class="custom_check">
                                                    <input type="checkbox" name="select_specialist" checked>
                                                    <span class="checkmark"></span> position2
                                                </label>
                                            </div>
                                            <div>
                                                <label class="custom_check">
                                                    <input type="checkbox" name="select_specialist">
                                                    <span class="checkmark"></span> position3
                                                </label>
                                            </div>
                                            <div>
                                                <label class="custom_check">
                                                    <input type="checkbox" name="select_specialist">
                                                    <span class="checkmark"></span> position4
                                                </label>
                                            </div>
                                            <div>
                                                <label class="custom_check">
                                                    <input type="checkbox" name="select_specialist">
                                                    <span class="checkmark"></span> position5
                                                </label>
                                            </div>
                                            <div>
                                                <label class="custom_check">
                                                    <input type="checkbox" name="select_specialist">
                                                    <span class="checkmark"></span> position6
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /Search Filter -->
                                
                            </div>
                            
                            <div class="col-md-7 col-lg-8 col-xl-9">
                                <div class="row row-grid">
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <nuxt-link to="/patient/doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="~/assets/img/doctors/doctor-01.jpg">
                                                </nuxt-link>
                                                <a href="javascript:void(0)" class="fav-btn">
                                                    <i class="far fa-bookmark"></i>
                                                </a>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <nuxt-link to="/patient/doctorprofile">Ruby Perrin</nuxt-link> 
                                                    <i class="fas fa-check-circle verified"></i>
                                                </h3>
                                                <p class="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                                                <h5 class="doc-department"><img src="~/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</h5>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <span class="d-inline-block average-rating">(17)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Florida, USA
                                                    </li>
                                                    <li>
                                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="far fa-money-bill-alt"></i> $300 - $1000 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                    </li>
                                                </ul>
                                                <div class="row row-sm">
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/doctorprofile" class="btn view-btn d-none">View Profile</nuxt-link>
                                                    </div>
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/booking" class="btn book-btn d-none">Book Now</nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <nuxt-link to="/patient/doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="~/assets/img/doctors/doctor-02.jpg">
                                                </nuxt-link>
                                                <a href="javascript:void(0)" class="fav-btn">
                                                    <i class="far fa-bookmark"></i>
                                                </a>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <nuxt-link to="/patient/doctorprofile">Darren Elder</nuxt-link> 
                                                    <i class="fas fa-check-circle verified"></i>
                                                </h3>
                                                <p class="speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
                                                <h5 class="doc-department"><img src="~/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</h5>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(35)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Newyork, USA
                                                    </li>
                                                    <li>
                                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="far fa-money-bill-alt"></i> $50 - $300 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                    </li>
                                                </ul>
                                                <div class="row row-sm">
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/doctorprofile" class="btn view-btn d-none">View Profile</nuxt-link>
                                                    </div>
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/booking" class="btn book-btn d-none">Book Now</nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <nuxt-link to="/patient/doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="~/assets/img/doctors/doctor-03.jpg">
                                                </nuxt-link>
                                                <a href="javascript:void(0)" class="fav-btn">
                                                    <i class="far fa-bookmark"></i>
                                                </a>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <nuxt-link to="/patient/doctorprofile">Deborah Angel</nuxt-link> 
                                                    <i class="fas fa-check-circle verified"></i>
                                                </h3>
                                                <p class="speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
                                                <h5 class="doc-department"><img src="~/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</h5>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(27)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Georgia, USA
                                                    </li>
                                                    <li>
                                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="far fa-money-bill-alt"></i> $100 - $400 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                    </li>
                                                </ul>
                                                <div class="row row-sm">
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/doctorprofile" class="btn view-btn d-none">View Profile</nuxt-link>
                                                    </div>
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/booking" class="btn book-btn d-none">Book Now</nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <nuxt-link to="/patient/doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="~/assets/img/doctors/doctor-04.jpg">
                                                </nuxt-link>
                                                <a href="javascript:void(0)" class="fav-btn">
                                                    <i class="far fa-bookmark"></i>
                                                </a>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <nuxt-link to="/patient/doctorprofile">Sofia Brient</nuxt-link>
                                                    <i class="fas fa-check-circle verified"></i>
                                                </h3>
                                                <p class="speciality">MBBS, MS - General Surgery, MCh - Urology</p>
                                                <h5 class="doc-department"><img src="~/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</h5>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(4)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Louisiana, USA
                                                    </li>
                                                    <li>
                                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="far fa-money-bill-alt"></i> $150 - $250 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                    </li>
                                                </ul>
                                                <div class="row row-sm">
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/doctorprofile" class="btn view-btn d-none">View Profile</nuxt-link>
                                                    </div>
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/booking" class="btn book-btn d-none">Book Now</nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <nuxt-link to="/patient/doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="~/assets/img/doctors/doctor-05.jpg">
                                                </nuxt-link>
                                                <a href="javascript:void(0)" class="fav-btn">
                                                    <i class="far fa-bookmark"></i>
                                                </a>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <nuxt-link to="/patient/doctorprofile">Marvin Campbell</nuxt-link> 
                                                    <i class="fas fa-check-circle verified"></i>
                                                </h3>
                                                <p class="speciality">MBBS, MD - Ophthalmology, DNB - Ophthalmology</p>
                                                <h5 class="doc-department"><img src="~/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</h5>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(66)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Michigan, USA
                                                    </li>
                                                    <li>
                                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="far fa-money-bill-alt"></i> $50 - $700 
                                                        <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                    </li>
                                                </ul>
                                                <div class="row row-sm">
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/doctorprofile" class="btn view-btn d-none">View Profile</nuxt-link>
                                                    </div>
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/booking" class="btn book-btn d-none">Book Now</nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <nuxt-link to="/patient/doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="~/assets/img/doctors/doctor-06.jpg">
                                                </nuxt-link>
                                                <a href="javascript:void(0)" class="fav-btn">
                                                    <i class="far fa-bookmark"></i>
                                                </a>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <nuxt-link to="/patient/doctorprofile">Katharine Berthold</nuxt-link> 
                                                    <i class="fas fa-check-circle verified"></i>
                                                </h3>
                                                <p class="speciality">MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
                                                <h5 class="doc-department"><img src="~/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</h5>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(52)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Texas, USA
                                                    </li>
                                                    <li>
                                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="far fa-money-bill-alt"></i> $100 - $500 
                                                        <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                    </li>
                                                </ul>
                                                <div class="row row-sm">
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/doctorprofile" class="btn view-btn d-none">View Profile</nuxt-link>
                                                    </div>
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/booking" class="btn book-btn d-none">Book Now</nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <nuxt-link to="/patient/doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="~/assets/img/doctors/doctor-07.jpg">
                                                </nuxt-link>
                                                <a href="javascript:void(0)" class="fav-btn">
                                                    <i class="far fa-bookmark"></i>
                                                </a>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <nuxt-link to="/patient/doctorprofile">Linda Tobin</nuxt-link>
                                                    <i class="fas fa-check-circle verified"></i>
                                                </h3>
                                                <p class="speciality">MBBS, MD - General Medicine, DM - Neurology</p>
                                                <h5 class="doc-department"><img src="~/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</h5>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(43)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Kansas, USA
                                                    </li>
                                                    <li>
                                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="far fa-money-bill-alt"></i> $100 - $1000 
                                                        <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                    </li>
                                                </ul>
                                                <div class="row row-sm">
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/doctorprofile" class="btn view-btn d-none">View Profile</nuxt-link>
                                                    </div>
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/booking" class="btn book-btn d-none">Book Now</nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <nuxt-link to="/patient/doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="~/assets/img/doctors/doctor-08.jpg">
                                                </nuxt-link>
                                                <a href="javascript:void(0)" class="fav-btn">
                                                    <i class="far fa-bookmark"></i>
                                                </a>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <nuxt-link to="/patient/doctorprofile">Paul Richard</nuxt-link> 
                                                    <i class="fas fa-check-circle verified"></i>
                                                </h3>
                                                <p class="speciality">MBBS, MD - Dermatology , Venereology & Lepros</p>
                                                <h5 class="doc-department"><img src="~/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</h5>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(49)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> California, USA
                                                    </li>
                                                    <li>
                                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="far fa-money-bill-alt"></i> $100 - $400 
                                                        <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                    </li>
                                                </ul>
                                                <div class="row row-sm">
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/doctorprofile" class="btn view-btn d-none">View Profile</nuxt-link>
                                                    </div>
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/booking" class="btn book-btn d-none">Book Now</nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <nuxt-link to="/patient/doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="~/assets/img/doctors/doctor-09.jpg">
                                                </nuxt-link>
                                                <a href="javascript:void(0)" class="fav-btn">
                                                    <i class="far fa-bookmark"></i>
                                                </a>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <nuxt-link to="/patient/doctorprofile">Dr. John Gibbs</nuxt-link> 
                                                    <i class="fas fa-check-circle verified"></i>
                                                </h3>
                                                <p class="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                                                <h5 class="doc-department"><img src="~/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</h5>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(112)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Oklahoma, USA
                                                    </li>
                                                    <li>
                                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="far fa-money-bill-alt"></i> $500 - $2500 
                                                        <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                    </li>
                                                </ul>
                                                <div class="row row-sm">
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/doctorprofile" class="btn view-btn d-none">View Profile</nuxt-link>
                                                    </div>
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/booking" class="btn book-btn d-none">Book Now</nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <nuxt-link to="/patient/doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="~/assets/img/doctors/doctor-10.jpg">
                                                </nuxt-link>
                                                <a href="javascript:void(0)" class="fav-btn">
                                                    <i class="far fa-bookmark"></i>
                                                </a>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <nuxt-link to="/patient/doctorprofile">Dr. Olga Barlow</nuxt-link>
                                                    <i class="fas fa-check-circle verified"></i>
                                                </h3>
                                                <p class="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                                                <h5 class="doc-department"><img src="~/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</h5>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(65)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Montana, USA
                                                    </li>
                                                    <li>
                                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="far fa-money-bill-alt"></i> $75 - $250 
                                                        <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                    </li>
                                                </ul>
                                                <div class="row row-sm">
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/doctorprofile" class="btn view-btn d-none">View Profile</nuxt-link>
                                                    </div>
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/booking" class="btn book-btn d-none">Book Now</nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <nuxt-link to="/patient/doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="~/assets/img/doctors/doctor-11.jpg">
                                                </nuxt-link>
                                                <a href="javascript:void(0)" class="fav-btn">
                                                    <i class="far fa-bookmark"></i>
                                                </a>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <nuxt-link to="/patient/doctorprofile">Dr. Julia Washington</nuxt-link>
                                                    <i class="fas fa-check-circle verified"></i>
                                                </h3>
                                                <p class="speciality">MBBS, MD - General Medicine, DM - Endocrinology</p>
                                                <h5 class="doc-department"><img src="~/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</h5>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(5)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Oklahoma, USA
                                                    </li>
                                                    <li>
                                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="far fa-money-bill-alt"></i> $275 - $450 
                                                        <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                    </li>
                                                </ul>
                                                <div class="row row-sm">
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/doctorprofile" class="btn view-btn d-none">View Profile</nuxt-link>
                                                    </div>
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/booking" class="btn book-btn d-none">Book Now</nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-6 col-lg-4 col-xl-3">
                                        <div class="profile-widget">
                                            <div class="doc-img">
                                                <nuxt-link to="/patient/doctorprofile">
                                                    <img class="img-fluid" alt="User Image" src="~/assets/img/doctors/doctor-12.jpg">
                                                </nuxt-link>
                                                <a href="javascript:void(0)" class="fav-btn">
                                                    <i class="far fa-bookmark"></i>
                                                </a>
                                            </div>
                                            <div class="pro-content">
                                                <h3 class="title">
                                                    <nuxt-link to="/patient/doctorprofile">Dr. Shaun Aponte</nuxt-link>
                                                    <i class="fas fa-check-circle verified"></i>
                                                </h3>
                                                <p class="speciality">MBBS, MS - ENT, Diploma in Otorhinolaryngology (DLO)</p>
                                                <h5 class="doc-department"><img src="~/assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality">Dentist</h5>
                                                <div class="rating">
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star filled"></i>
                                                    <i class="fas fa-star"></i>
                                                    <span class="d-inline-block average-rating">(5)</span>
                                                </div>
                                                <ul class="available-info">
                                                    <li>
                                                        <i class="fas fa-map-marker-alt"></i> Indiana, USA
                                                    </li>
                                                    <li>
                                                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                                                    </li>
                                                    <li>
                                                        <i class="far fa-money-bill-alt"></i> $150 - $350 
                                                        <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i>
                                                    </li>
                                                </ul>
                                                <div class="row row-sm">
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/doctorprofile" class="btn view-btn d-none">View Profile</nuxt-link>
                                                    </div>
                                                    <div class="col-6">
                                                        <nuxt-link to="/patient/booking" class="btn book-btn d-none">Book Now</nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                </div>		
                <!-- /Page Content -->
            </div>
        </section>
</template>
<script></script>
<style>
.d-none{
    display: block !important;
}
</style>