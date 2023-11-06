<template>
    <div>
        <heads/>
        <mypatients/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import mypatients from "~/components/doctor/mypatients.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,mypatients,foots},
    }
    
    </script>
    <style>
    
    </style>