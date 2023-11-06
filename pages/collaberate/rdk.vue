<template>
    <div>
      <heads/>
      <rdk/>
      <foots/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/header.vue";
    import rdk from "~/components/collaberate/rdk.vue";
    import foots from "~/components/footer.vue";
  
   export default {
     components: {heads,rdk,foots},
   }
   
  </script>
  <style>
  
  </style>
   