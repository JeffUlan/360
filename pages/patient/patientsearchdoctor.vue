<template>
    <div>
      <heads/>
      <searchdoctor/>
      <foots/>
    </div>
  </template>
    
  <script>
  
  import heads from "/components/patient/patientheader.vue";
  import searchdoctor from "~/components/patient/patientsearchdoctor.vue";
  import foots from "~/components/footer.vue";
  
  export default {
      components: {heads,searchdoctor,foots},
  }
  
  </script>
  