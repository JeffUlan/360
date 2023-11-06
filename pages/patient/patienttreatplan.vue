<template>
    <div>
      <heads/>
      <tplan/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "~/components/patient/patientheader.vue";
  import tplan from "~/components/patient/patienttreatplan.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,tplan,foots},
  }
  
  </script>
  