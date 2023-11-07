<template>
    <div>
      <heads/>
      <prescription/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import prescription from "~/components/patient/prescription.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,prescription,foots},
  }
  
  </script>
  