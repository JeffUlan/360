<template>
    <div>
        <heads/>
        <addprescription/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import addprescription from "~/components/doctor/addprescription.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,addprescription,foots},
    }
    
    </script>
    <style>
    
    </style>