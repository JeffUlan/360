<template>
    <div>
      <heads/>
      <hc/>
      <foots/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/header.vue";
    import hc from "~/components/collaberate/hc.vue";
    import foots from "~/components/footer.vue";
  
   export default {
     components: {heads,hc,foots},
   }
   
  </script>
  <style>
  
  </style>
   