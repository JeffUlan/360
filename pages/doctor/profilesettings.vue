<template>
    <div>
        <heads/>
        <profilesettings/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import profilesettings from "~/components/doctor/profilesettings.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,profilesettings,foots},
    }
    
    </script>
    <style>
    
    </style>