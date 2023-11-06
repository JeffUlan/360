<template>
    <div>
        <heads/>
        <addbilling/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import addbilling from "~/components/doctor/addbilling.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,addbilling,foots},
    }
    
    </script>
    <style>
    
    </style>