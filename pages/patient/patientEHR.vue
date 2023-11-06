<template>
    <div>
      <heads/>
      <patientEHR/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import patientEHR from "~/components/patient/patientEHR.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,patientEHR,foots},
  }
  
  </script>
  