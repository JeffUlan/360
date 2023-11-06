<template>
    <div>
      <heads/>
      <fav/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import fav from "~/components/patient/patientfamilymember.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,fav,foots},
  }
  
  </script>
  