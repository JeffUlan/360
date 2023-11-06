<template>
    <div>
      <heads/>
      <nominateDoctor/>
      <foots/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/header.vue";
    import nominateDoctor from "~/components/collaberate/nominateDoctor.vue";
    import foots from "~/components/footer.vue";
  
   export default {
     components: {heads,nominateDoctor,foots},
   }
   
  </script>
  <style>
  
  </style>
   