<template>
    <div>
        <heads/>
        <appoints/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import appoints from "~/components/doctor/appointments.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,appoints,foots},
    }
    
    </script>
    <style>
    
    </style>