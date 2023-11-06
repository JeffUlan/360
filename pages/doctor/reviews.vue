<template>
    <div>
        <heads/>
        <reviews/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import reviews from "~/components/doctor/reviews.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,reviews,foots},
    }
    
    </script>
    <style>
    
    </style>