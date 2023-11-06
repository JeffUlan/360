<template>
    <div>
        <heads/>
        <scheduletimings/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import scheduletimings from "~/components/doctor/scheduletimings.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,scheduletimings,foots},
    }
    
    </script>
    <style>
    
    </style>