<template>
    <!-- Preloader -->
    <div class="preloader">
        <div class="loader">
            <div class="loader-outter"></div>
            <div class="loader-inner"></div>

            <div class="indicator"> 
                <svg width="16px" height="12px">
                    <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                    <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                </svg>
            </div>
        </div>
    </div>
    <!-- End Preloader -->
    
    <div class="content-wrap">
        <div class="cta-box">
            <h1>We Will Be Back <span class="highlight">Soon!</span></h1>
            <p>We are using this time to give our website a revamp!<br>
                Please leave us your email and we will let you know when we are back up.
            </p>
        </div>
        <form action="" class="newsletter-coming-soon" name="newsletter-coming-soon" method="post">
            <input type="email" class="form-field" name="email" placeholder="Your Email">
            <button type="submit" class="btn-main">Notify me!</button>
        </form>
        <div class="social-icons">
            <a href="#">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Facebook icon</title>
                    <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>
                </svg>
            </a>
            <a href="#">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Instagram icon</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
            </a>
            <a href="#">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Twitter icon</title>
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                </svg>
            </a>
            <a href="#">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>LinkedIn icon</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
            </a>
            <a href="#">
                <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>YouTube icon</title>
                    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
            </a>
        </div>
        <div class="countdown">
            <p class="timer-cta">We will relaunch our website in </p>
            <ul class="timer">
                <li>
                    <div class="time-box"><span class="time" id="days"></span> <span class="time-txt">Days</span></div>
                </li>
                <li>
                    <div class="time-box"><span class="time" id="hours"></span> <span class="time-txt">Hours</span></div>
                </li>
                <li>
                    <div class="time-box"><span class="time" id="minutes"></span> <span class="time-txt">Minutes</span></div>
                </li>
                <li>
                    <div class="time-box"><span class="time" id="seconds"></span> <span class="time-txt">Seconds</span></div>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
    /*================================================
    Preloader Area CSS
    =================================================*/
    .preloader {
    position: fixed;
    left: 0;
    width: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    z-index: 9999999;
    -webkit-transition: .9s;
    transition: .9s;
    }

    .preloader .loader {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: inline-block;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 45%;
    -webkit-transform: translateY(-45%);
            transform: translateY(-45%);
    -webkit-transition: 0.5s;
    transition: 0.5s;
    }

    .preloader .loader .loader-outter {
    position: absolute;
    border: 4px solid #ffffff;
    border-left-color: transparent;
    border-bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    -webkit-animation: loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
            animation: loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
    }

    .preloader .loader .loader-inner {
    position: absolute;
    border: 4px solid #ffffff;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    left: calc(40% - 21px);
    top: calc(40% - 21px);
    border-right: 0;
    border-top-color: transparent;
    -webkit-animation: loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
            animation: loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
    }

    .preloader .loader .indicator {
    position: absolute;
    right: 0;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%) scale(1.5);
            transform: translateY(-50%) scale(1.5);
    }

    .preloader .loader .indicator svg polyline {
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    }

    .preloader .loader .indicator svg polyline#back {
    stroke: #ffffff;
    }

    .preloader .loader .indicator svg polyline#front {
    stroke: #1A76D1;
    stroke-dasharray: 12, 36;
    stroke-dashoffset: 48;
    -webkit-animation: dash 1s linear infinite;
            animation: dash 1s linear infinite;
    }

    .preloader::before, .preloader::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 60%;
    z-index: -1;
    background: #1A76D1;
    -webkit-transition: .9s;
    transition: .9s;
    }

    .preloader::after {
    left: auto;
    right: 0;
    }

    .preloader.preloader-deactivate {
    visibility: hidden;
    }

    .preloader.preloader-deactivate::after, .preloader.preloader-deactivate::before {
    width: 0;
    }

    .preloader.preloader-deactivate .loader {
    opacity: 0;
    visibility: hidden;
    }

    @-webkit-keyframes loader-outter {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    }

    @keyframes loader-outter {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }
    }

    @-webkit-keyframes loader-inner {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(-360deg);
                transform: rotate(-360deg);
    }
    }

    @keyframes loader-inner {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(-360deg);
                transform: rotate(-360deg);
    }
    }

    @-webkit-keyframes dash {
    62.5% {
        opacity: 0;
    }
    to {
        stroke-dashoffset: 0;
    }
    }

    @keyframes dash {
    62.5% {
        opacity: 0;
    }
    to {
        stroke-dashoffset: 0;
    }
    }
    /* End Preloader */

    
    textarea,
    input[type="text"],
    input[type="button"],
    input[type="submit"]{
    -webkit-appearance: none;
    opacity:1;
    }
    ::-webkit-input-placeholder {
        color: #dcdcdc;
    }

    ::-moz-placeholder {
        color: #dcdcdc;
    }

    :-ms-input-placeholder {
        color: #dcdcdc;
    }

    :-moz-placeholder {
        color: #dcdcdc;
    }

    .highlight {
        color: #1A76D1;
    }
    .content-wrap {
        margin: 20px auto 40px auto;
        max-width: 700px;
        padding: 0 15px;
        text-align: center;
    }

    .logo-box img {
        max-width: 110px;
    }

    .cta-box {}

    .cta-box h1 {
        color: #fff;
        font-size: 58px;
        font-weight: 800;
        text-shadow: 0 5px 10px rgba(0, 0, 0, 0.7);
    }

    .cta-box p {
        color: #fff;
        font-size: 20px;
        margin-top: 20px;
    }

    .newsletter-coming-soon {
        margin: 40px auto 0 auto;
        max-width: 450px;
        position: relative;
    }

    .newsletter-coming-soon .form-field {
        background: rgba(99, 99, 99, 0.5) !important;
        border: 1px solid rgba(0, 0, 0, 0.17);
        /* border-radius: 30px; */
        box-shadow: 0 0 0px 4px rgba(132, 115, 115, 0.28) !important;
        color: #fff;
        font-size: 16px;
        height: 52px;
        padding: 0 20px 0 20px;
        width: 100%;
    }

    .newsletter-coming-soon .form-field:focus {
        border: 1px solid rgba(0, 0, 0, 0.17);
        box-shadow: 0 0 0px 4px rgba(132, 115, 115, 0.28);
        outline: none
    }

    .btn-main {
        background: linear-gradient(45deg, #1A76D1, #1A76D1);
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 14px;
        font-weight: 400;
        border-radius: 0.25rem;
        height: 52px;
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 20px;
        text-transform: uppercase;
        z-index: 11;
    }

    .btn-main:hover {
        background: linear-gradient(45deg, #1A76D1, #1A76D1);
        color: #fff;
    }

    .btn-main:focus {
        outline: none
    }

    .social-icons {
        margin-top: 20px
    }

    .social-icons a {
        padding: 0 10px;
        text-decoration: none;
    }

    .social-icons a:hover,
    .social-icons a:active,
    .social-icons a:visited {
        color: #fff;
    }

    .social-icons svg {
        fill: #fff;
        transition: all.2s ease-in-out;
        width: 20px;
    }

    .social-icons a:hover svg {
        transform: scale(1.1);
    }

    .countdown {
        color: #fff;
        margin-top: 40px;
    }

    .timer-cta {
        font-size: 18px;
        color: #fff;
    }

    .countdown ul {
        margin-top: 20px;
        padding-left: 0;
    }

    .countdown ul li {
        background: rgba(230, 230, 230, 0.12);
        border-radius: 100%;
        display: inline-block;
        height: 100px;
        list-style: none;
        position: relative;
        text-align: center;
        margin-right: 15px;
        width: 100px;
    }

    .time-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .time {
        font-size: 32px;
        font-weight: 800;
    }

    .time-txt {
        display: block;
        font-size: 12px;
    }

    @media screen and (min-width:1200px) {
        .content-wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 700px;
        }
    }

    @media screen and (max-width:767px) {
        .content-wrap {
            margin-top: 80px;
            width: 100%;
        }
        .cta-box h1 {
            font-size: 28px;
        }
        .cta-box p {
            font-size: 17px;
        }
        .time {
            font-size: 22px;
        }
        .newsletter-coming-soon .form-field,
        .btn-main {
            height: 46px;
        }
        .countdown ul li {
            height: 75px;
            width: 75px;
        }
    }

</style>

<script>

export default {
    name: 'comingsoon',
    components: {
    },
    mounted() {
        $('.preloader').addClass('preloader-deactivate');

        function countdown(dateEnd) {
            var timer, days, hours, minutes, seconds;

            dateEnd = new Date(dateEnd);
            dateEnd = dateEnd.getTime();

            if ( isNaN(dateEnd) ) {
                return;
            }

            timer = setInterval(calculate, 1000);

            function calculate() {
                var dateStart = new Date();
                var dateStart = new Date(dateStart.getUTCFullYear(),
                                        dateStart.getUTCMonth(),
                                        dateStart.getUTCDate(),
                                        dateStart.getUTCHours(),
                                        dateStart.getUTCMinutes(),
                                        dateStart.getUTCSeconds());
                var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

                if ( timeRemaining >= 0 ) {
                    days    = parseInt(timeRemaining / 86400);
                    timeRemaining   = (timeRemaining % 86400);
                    hours   = parseInt(timeRemaining / 3600);
                    timeRemaining   = (timeRemaining % 3600);
                    minutes = parseInt(timeRemaining / 60);
                    timeRemaining   = (timeRemaining % 60);
                    seconds = parseInt(timeRemaining);

                    document.getElementById("days").innerHTML    = parseInt(days, 10);
                    document.getElementById("hours").innerHTML   = ("0" + hours).slice(-2);
                    document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
                    document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
                } else {
                    return;
                }
            }

            function display(days, hours, minutes, seconds) {}
            }

            var body = document.getElementsByTagName("body")[0];
            // body.style.backgroundImage = "rgb(248, 249, 250)";
            body.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))";
            //body.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(/img/bg.jpg)";
            // body.style.backgroundAttachment = 'fixed';
            // body.style.backgroundPosition = 'center';
            // body.style.backgroundRepeat = 'no-repeat';
            // body.style.backgroundSize = 'cover';
            // body.style.margin = '0';
            // body.style.position = 'relative';
        countdown('01/01/2025 00:00:00 AM');

    }
}
</script>