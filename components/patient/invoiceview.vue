<template>
<section class="section-all" >
    <Toast position="top-right" />
        <div class="chat-page">
            <div class="main-wrapper">
                <!-- Breadcrumb -->
                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-12 col-12">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><nuxt-link to="/patient/patientdashboard">Home</nuxt-link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Invoice View</li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Invoice View</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Breadcrumb -->
                
                <!-- Page Content -->
                <div class="content">
                    <div class="container-fluid">

                        <div class="row">
                            <div class="col-lg-8 offset-lg-2">
                                <div class="invoice-content">
                                    <div class="invoice-item">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="invoice-logo">
                                                    <img src="~/assets/img/logo.png" alt="logo">
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="invoice-details">
                                                    <strong>Order:</strong> #00124 <br>
                                                    <strong>Issued:</strong> 20/07/2023
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Invoice Item -->
                                    <div class="invoice-item">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="invoice-info">
                                                    <strong class="customer-text">Invoice From</strong>
                                                    <p class="invoice-details invoice-details-two">
                                                        Dr. Darren Elder <br>
                                                        806  Twin Willow Lane, Old Forge,<br>
                                                        Tokyo, Japan <br>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="invoice-info invoice-info2">
                                                    <strong class="customer-text">Invoice To</strong>
                                                    <p class="invoice-details">
                                                        SunshineOxygen <br>
                                                        VAT Nº B05328778 <br>
                                                        carretera de Camos 95, 17834 Camos, Girona (Spain) <br>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Invoice Item -->
                                    
                                    <!-- Invoice Item -->
                                    <div class="invoice-item">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="invoice-info">
                                                    <strong class="customer-text">Payment Method</strong>
                                                    <p class="invoice-details invoice-details-two">
                                                        Debit Card <br>
                                                        XXXXXXXXXXXX-2541 <br>
                                                        HDFC Bank<br>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Invoice Item -->
                                    
                                    <!-- Invoice Item -->
                                    <div class="invoice-item invoice-table-wrap">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="table-responsive">
                                                    <table class="invoice-table table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Description</th>
                                                                <th class="text-center">Quantity</th>
                                                                <th class="text-center">VAT</th>
                                                                <th class="text-right">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>General Consultation</td>
                                                                <td class="text-center">1</td>
                                                                <td class="text-center">$0</td>
                                                                <td class="text-right">$100</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Video Call Booking</td>
                                                                <td class="text-center">1</td>
                                                                <td class="text-center">$0</td>
                                                                <td class="text-right">$250</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-xl-4 ml-auto">
                                                <div class="table-responsive">
                                                    <table class="invoice-table-two table">
                                                        <tbody>
                                                        <tr>
                                                            <th>Subtotal:</th>
                                                            <td><span>$350</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Discount:</th>
                                                            <td><span>-10%</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Total Amount:</th>
                                                            <td><span>$315</span></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- /Invoice Item -->
                                    
                                    <!-- Invoice Information -->
                                    <div class="other-info">
                                        <h4>LEGAL DISCLAIMER</h4>
                                        <p class="text-muted mb-0">This Invoice is Issued by SunshineOxygen B05328778.<br>Disclaimer:<br>This invoice is issued by SunshineOxygen B05328778 ("SunshineOxygen") to [User's Name/HealthTech Platform] ("User") for the provision of goods, services, or products. Please read this disclaimer carefully.</p>
                                        <p class="text-muted mb-0">General Information:</p>
                                        <p class="text-muted mb-0">SunshineOxygen is a provider of health-related products and services.&nbsp;User is a customer of SunshineOxygen or a user of the HealthTech Platform.</p>
                                    </div>
                                    <!-- /Invoice Information -->
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                </div>		
                <!-- /Page Content -->
            </div>
        </div>
    </section>
</template>
<script></script>