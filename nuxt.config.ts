export default defineNuxtConfig({
    app: {
        head: {
          meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { charset: 'utf-8'},
            { name: 'keywords', content: 'Site keywords here' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
          ],
          script: [
            //{ src: 'https://code.jquery.com/jquery-3.4.1.min.js'},
            { src: '/js/jquery.min.js'},
            { src: 'https://code.jquery.com/jquery-migrate-3.0.0.min.js'},
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js' },
            //{ src: '/js/niceselect.js' },
            { src: '/js/popper.min.js'},
            { src: '/js/bootstrap.min.js'},
            { src: '/js/slick.js'},
            { src: '/js/select2/js/select2.min.js'},
            { src: '/js/moment.min.js'},
            { src: '/js/bootstrap-datetimepicker.min.js'},
            { src: '/js/theia-sticky-sidebar/ResizeSensor.js'},
            { src: '/js/theia-sticky-sidebar/theia-sticky-sidebar.js'},
            { src: '/js/fancybox/jquery.fancybox.min.js'},
            { src: '/js/custom.js'},
            { src: '/js/jquery-ui/jquery-ui.min.js'},
            { src: '/js/fullcalendar/fullcalendar.min.js'},
            { src: '/js/fullcalendar/jquery.fullcalendar.js'},
            { src: '/js/circle-progress.min.js'},
            { src: '/js/owl-carousel.js'},
            { src: '/js/script.js'},
            { src: '/js/jquery.counterup.min.js'},
            { src: '/js/waypoints.min.js'},
            // { src: 'http://cdnjs.cloudflare.com/ajax/libs/waypoints/2.0.3/waypoints.min.js'},
            { src: 'https://maps.google.com/maps/api/js?key=AIzaSyDGqTyqoPIvYxhn_Sa7ZrK5bENUWhpCo0w'},
            { src: '/js/gmaps.min.js'},
            { src: '/js/map-active.js'},
            { src: '/js/main.js'},
            
            
            // admin

              // { src:  '/js/admin/js/jquery-3.2.1.min.js'},
              // { src:  '/js/admin/js/bootstrap.min.js'},
              // { src:  '/js/admin/js/popper.min.js'},
              { src:  '/js/admin/plugins/slimscroll/jquery.slimscroll.min.js'},
              { src:  '/js/admin/plugins/raphael/raphael.min.js'},
              { src:  '/js/admin/plugins/morris/morris.min.js'},
              { src:  '/js/admin/js/chart.morris.js'},
              { src:  '/js/admin/plugins/datatables/jquery.dataTables.min.js'},
              { src:  '/js/admin/plugins/datatables/datatables.min.js'},
              { src:  '/js/admin/js/script.js'},

          ],
          link: [
            { rel: 'icon', href: 'favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap' }
          ],
          noscript: [
            { children: 'JavaScript is required' }
          ]
        }
    },
    css: [
        '~/assets/css/bootstrap.min.css',
        '~/assets/plugins/fontawesome/css/fontawesome.min.css',
        '~/assets/plugins/fontawesome/css/all.min.css',
        '~/assets/css/bootstrap-datetimepicker.min.css',
        '~/assets/plugins/select2/css/select2.min.css',
        '~/assets/plugins/fancybox/jquery.fancybox.min.css',
        '~/assets/plugins/fullcalendar/fullcalendar.min.css',
        '~/assets/css/style.css',
        //'~/assets/css/normalize.css',
        '~/assets/css/datepicker.css',
        '~/assets/css/owl-carousel.css',
        //'~/assets/css/nice-select.css',
        '~/assets/css/icofont.min.css',

        //admin

        // '~/assets/admin/css/bootstrap.min.css',
        // '~/assets/admin/css/font-awesome.min.css',
        // '~/assets/admin/css/feathericon.min.css',
        // '~/assets/admin/plugins/morris/morris.css',
        // '~/assets/admin/css/style.css',
        // '~/assets/admin/plugins/datatables/datatables.min.css',
    ],
    plugins: [
    ],
  }) 