<template>
    <div>
        <heads/>
        <ddashboard/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import ddashboard from "~/components/doctor/doctordashboard.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,ddashboard,foots},
    }
    
    </script>
    <style>
    
    </style>