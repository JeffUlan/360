<template>
    <div>
      <heads/>
      <cp/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "/components/patient/patientheader.vue";
  import cp from "~/components/patient/patientchangepassword.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,cp,foots},
  }
  
  </script>
  