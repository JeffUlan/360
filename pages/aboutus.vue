<template>
    <div>
      <heads/>
      <aboutus/>
      <foots/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/header.vue";
    import aboutus from "~/components/aboutus.vue";
    import foots from "~/components/footer.vue";
  
   export default {
     components: {heads,aboutus,foots},
   }
   
  </script>
  <style>
  
  </style>
   