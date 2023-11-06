<template>
    <div>
        <heads/>
        <recoverypassword/>
        <foots/>
    </div>
    </template>
    
    <script>
    import heads from "~/components/header.vue";
    import recoverypassword from "~/components/doctor/recoverypassword.vue";
    import foots from "~/components/footer.vue";
    
    
    export default {
        components: {heads,recoverypassword,foots},
    }
    
    </script>
    <style>
    
    </style>