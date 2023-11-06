<template>
    <div>
        <heads/>
        <chatdoctor/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import chatdoctor from "~/components/doctor/chatdoctor.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,chatdoctor,foots},
    }
    
    </script>
    <style>
    
    </style>