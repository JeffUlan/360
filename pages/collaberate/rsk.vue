<template>
    <div>
      <heads/>
      <rsk/>
      <foots/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/header.vue";
    import rsk from "~/components/collaberate/rsk.vue";
    import foots from "~/components/footer.vue";
  
   export default {
     components: {heads,rsk,foots},
   }
   
  </script>
  <style>
  
  </style>
   