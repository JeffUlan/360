<template>
    <div>
      <heads/>
      <privacy/>
      <foots/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/header.vue";
    import privacy from "~/components/patient/privacy.vue";
    import foots from "~/components/footer.vue";
  
   export default {
     components: {heads,privacy,foots},
   }
   
  </script>
  <style>
  
  </style>
   