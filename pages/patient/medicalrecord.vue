<template>
    <div>
      <heads/>
      <medicalrecord/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import medicalrecord from "~/components/patient/medicalrecord.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,medicalrecord,foots},
  }
  
  </script>
  