<template>
    <div>
      <heads/>
      <fdf/>
      <foots/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/header.vue";
    import fdf from "~/components/collaberate/fdf.vue";
    import foots from "~/components/footer.vue";
  
   export default {
     components: {heads,fdf,foots},
   }
   
  </script>
  <style>
  
  </style>
   