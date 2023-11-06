<template>
    <div>
      <heads/>
      <dpn/>
      <foots/>
    </div>
   </template>
   
  <script>
    import heads from "~/components/header.vue";
    import dpn from "~/components/collaberate/dpn.vue";
    import foots from "~/components/footer.vue";
  
   export default {
     components: {heads,dpn,foots},
   }
   
  </script>
  <style>
  
  </style>
   