<template>
    <div>
        <heads/>
        <socialmedia/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import socialmedia from "~/components/doctor/socialmedia.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,socialmedia,foots},
    }
    
    </script>
    <style>
    
    </style>