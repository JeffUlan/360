<template>
    <div>
        <heads/>
        <invoices/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import invoices from "~/components/doctor/invoices.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,invoices,foots},
    }
    
    </script>
    <style>
    
    </style>