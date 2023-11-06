<template>
    <div>
      <heads/>
      <forgotpassword/>
      <foots/>
    </div>
    </template>
    
  <script>
    import heads from "~/components/header.vue";
    import forgotpassword from "~/components/doctor/forgotpassword.vue";
    import foots from "~/components/footer.vue";

  
    export default {
      components: {heads,forgotpassword,foots},
    }
    
    </script>
    <style>
   
  </style>