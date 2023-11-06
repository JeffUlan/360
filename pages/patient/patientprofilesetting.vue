<template>
    <div>
      <heads/>
      <profile/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import profile from "~/components/patient/patientprofilesetting.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,profile,foots},
  }
  
  </script>
  