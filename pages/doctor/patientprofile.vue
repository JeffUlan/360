<template>
    <div>
        <heads/>
        <patientprofile/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import patientprofile from "~/components/doctor/patientprofile.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,patientprofile,foots},
    }
    
    </script>
    <style>
    
    </style>