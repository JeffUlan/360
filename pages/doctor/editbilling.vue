<template>
    <div>
        <heads/>
        <editbilling/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import editbilling from "~/components/doctor/editbilling.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,editbilling,foots},
    }
    
    </script>
    <style>
    
    </style>