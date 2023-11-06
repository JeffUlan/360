<template>
    <div>
        <heads/>
        <changepassword/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/doctor/doctorheader.vue";
    import changepassword from "~/components/doctor/changepassword.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,changepassword,foots},
    }
    
    </script>
    <style>
    
    </style>